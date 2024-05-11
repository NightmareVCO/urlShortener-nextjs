"use server";

import { deleteUser } from "@data/user.data";
import { connectToDatabase } from "@utils/connectToDatabase";

export const deleteUserForm = async (previousState: any, formData: any) => {
  const { userId } = Object.fromEntries(formData);
  try {
    await connectToDatabase();
    await deleteUser(userId);
    return { success: true };
  } catch (error) {
    if (error instanceof Error)
      return { error: `something went wrong: ${error.message}` };
  }
};
