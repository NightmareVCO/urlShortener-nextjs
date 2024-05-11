import { comparePassword } from "@utils/bcryptService";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { getUserByEmail } from "@/lib/data/user.data";
import { connectToDatabase } from "@/lib/utils/connectToDatabase";

import { authConfig } from "./auth.config";

const login = async (credentials: any) => {
  try {
    connectToDatabase();
    const user = await getUserByEmail(credentials.email);
    if (!user) throw new Error("Wrong credentials");

    const isPasswordValid = await comparePassword(
      credentials.password,
      user.password,
    );
    if (!isPasswordValid) throw new Error("Wrong credentials");

    return user;
  } catch (error) {
    if (error instanceof Error) throw new Error(`Failed to login! ${error}`);
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          if (error instanceof Error) return null;
        }
      },
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
  },
  pages: {
    signOut: "/login",
  },
});
