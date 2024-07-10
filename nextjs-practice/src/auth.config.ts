import type { NextAuthConfig, Session } from 'next-auth';
import {
  BASE_REDIRECT_URL,
  BASE_LOGIN_URL,
  BASE_SIGNUP_URL,
  SITEMAP_URL,
  ROBOTS_URL,
} from '@/src/constants/common';
import { NextResponse } from 'next/server';

const isSpecialPage = (pathname: string) => {
  return pathname === SITEMAP_URL || pathname === ROBOTS_URL;
};

const handleLoggedInUser = (nextUrl: URL) => {
  const searchParams = new URLSearchParams(nextUrl.search);
  const callbackUrl = searchParams.get('callbackUrl');

  if (callbackUrl) {
    const decodedCallbackUrl = decodeURIComponent(callbackUrl);
    return NextResponse.redirect(decodedCallbackUrl);
  } else {
    return NextResponse.redirect(new URL(BASE_REDIRECT_URL, nextUrl));
  }
};

const isAuthorized = (auth: Session | null, nextUrl: URL) => {
  const isLoggedIn = !!auth?.user;
  const isOnLoginPage = nextUrl.pathname === BASE_LOGIN_URL;
  const isOnSignupPage = nextUrl.pathname === BASE_SIGNUP_URL;
  const isOnSpecialPage = isSpecialPage(nextUrl.pathname);

  if (isOnLoginPage) {
    return isLoggedIn ? handleLoggedInUser(nextUrl) : false;
  }

  if (
    (isLoggedIn && (!isOnSignupPage || isOnSpecialPage)) ||
    (!isLoggedIn && (isOnSignupPage || isOnSpecialPage))
  ) {
    return true;
  }

  return false;
};

export const authConfig = {
  pages: {
    signIn: BASE_LOGIN_URL,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      return isAuthorized(auth, nextUrl);
    },
  },
  trustHost: true,
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
