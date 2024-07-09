import type { NextAuthConfig } from 'next-auth';
import {
  BASE_REDIRECT_URL,
  BASE_LOGIN_URL,
  BASE_SIGNUP_URL,
  SITEMAP_URL,
  ROBOTS_URL,
} from '@/src/constants/common';
import { NextResponse } from 'next/server';

export const authConfig = {
  pages: {
    signIn: BASE_LOGIN_URL,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLoginPage = nextUrl.pathname === BASE_LOGIN_URL;
      const isOnSignupPage = nextUrl.pathname === BASE_SIGNUP_URL;
      const isOnSitemap = nextUrl.pathname === SITEMAP_URL;
      const isOnRobots = nextUrl.pathname === ROBOTS_URL;

      if (!isOnLoginPage) {
        if (
          // User is logged in and:
          // - Not on the registration page, either
          // - Currently on sitemap page, or
          // - Currently on robots page
          (isLoggedIn && (!isOnSignupPage || isOnSitemap || isOnRobots)) ||
          // User is not logged in and:
          // - Currently on the registration page, or
          // - Currently on sitemap page, or
          // - Currently on robots page
          (!isLoggedIn && (isOnSignupPage || isOnSitemap || isOnRobots))
        )
          return true;

        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // Parse the search parameters
        const searchParams = new URLSearchParams(nextUrl.search);
        const callbackUrl = searchParams.get('callbackUrl');

        if (callbackUrl) {
          const decodedCallbackUrl = decodeURIComponent(callbackUrl);

          return NextResponse.redirect(decodedCallbackUrl);
        } else {
          return NextResponse.redirect(new URL(BASE_REDIRECT_URL, nextUrl));
        }
      }

      return false;
    },
  },
  trustHost: true,
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
