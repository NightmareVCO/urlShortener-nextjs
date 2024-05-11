import { authConfig } from "@lib/auth/auth.config";
import NextAuth from "next-auth";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};

// FOR MORE INFORMATION CHECK: https://nextjs.org/docs/app/building-your-application/routing/middleware1
