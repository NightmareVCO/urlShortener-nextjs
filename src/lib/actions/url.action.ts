"use server";

import { createUrl, getUrlById, updateUrl } from "@data/url.data";
import { auth } from "@lib/auth/auth";
import { connectToDatabase } from "@utils/connectToDatabase";
import { generateShortUrl } from "@utils/generateShortUrl";
import { revalidatePath } from "next/cache";

export const createShortUrl = async (previousState: any, formData: any) => {
  const { originalUrl, session: userSession } = formData;
  const session = await auth();
  const userId = session?.user?.id;

  try {
    connectToDatabase();
    const shortUrl = generateShortUrl(originalUrl);
    createUrl({ originalUrl, shortUrl, userId, userSession });
  } catch (error) {
    if (error instanceof Error)
      return { error: `something went wrong: ${error.message}` };
  }

  revalidatePath("/shortener");
};

export const changeUrlStatus = async (previousState: any, formData: any) => {
  const { urlId } = Object.fromEntries(formData);
  const url = await getUrlById(urlId);
  url.status = !url.status;

  try {
    connectToDatabase();
    updateUrl(urlId, url);
    return { success: true };
  } catch (error) {
    if (error instanceof Error)
      return { error: `something went wrong: ${error.message}` };
  }
};
