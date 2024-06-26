import type { NextAuthConfig } from "next-auth";
import {
  BASE_REDIRECT_URL,
  BASE_LOGIN_URL,
  BASE_SIGNUP_URL,
} from "@/src/constants/common";

export const authConfig = {
  pages: {
    signIn: BASE_LOGIN_URL,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLoginPage = nextUrl.pathname === BASE_LOGIN_URL;
      const isOnSignupPage = nextUrl.pathname === BASE_SIGNUP_URL;

      if (!isOnLoginPage) {
        if (isLoggedIn) return true;
        if (isOnSignupPage) return true;

        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL(BASE_REDIRECT_URL, nextUrl));
      }

      return false;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
