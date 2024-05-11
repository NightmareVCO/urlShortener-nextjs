"use server";

import { createUser, getUserByEmail } from "@data/user.data";
import { signIn, signOut } from "@lib/auth/auth";
import { hashPassword } from "@utils/bcryptService";
import { connectToDatabase } from "@utils/connectToDatabase";
import { getUsernameFromEmail } from "@utils/getUsernameFromEmail";
import { to } from "@utils/to";
import { revalidatePath } from "next/cache";

export const login = async (previousState: any, formData: any) => {
  const { email, password } = Object.fromEntries(formData);
  const lowerCaseEmail = email.toLowerCase();

  try {
    await signIn("credentials", { email: lowerCaseEmail, password });
  } catch (error) {
    if (
      error instanceof Error &&
      (error.message.includes("CredentialsSignin") ||
        error.message.includes("credentialssignin"))
    )
      return { error: "Invalid Credentials" };

    throw error;
  }
};

export const logout = async () => {
  await signOut();
};

export const register = async (previousState: any, formData: any) => {
  const { name, email, password, confirmPassword } =
    Object.fromEntries(formData);
  const lowerCaseEmail = email.toLowerCase();

  const [user, error] = await to(getUserByEmail(lowerCaseEmail));
  if (error) return { error: `something went wrong: ${error.message}` };
  if (user) return { error: "User already exists!" };
  if (password !== confirmPassword) return { error: "Passwords do not match!" };

  const hashedPassword = await hashPassword(password);
  const username = getUsernameFromEmail(email);

  try {
    connectToDatabase();
    createUser({ name, username, email, password: hashedPassword });
    return { success: true };
  } catch (error) {
    if (error instanceof Error)
      return { error: `something went wrong: ${error.message}` };
  } finally {
    revalidatePath("/dashboard/users");
  }
};
