export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
        session.user.username = token.username;
      }
      return session;
    },

    authorized({ auth, request }: any) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/dashboard");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      const isOnShortUrlPage =
        request.nextUrl?.pathname.startsWith("/shortener");

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
      if (isOnAdminPanel && !user?.isAdmin) {
        return Response.redirect(new URL("/login", request.nextUrl));
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      // ONLY AUTHENTICATED USERS CAN REACH THE SHORT URL PAGE
      if (isOnShortUrlPage && !user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
