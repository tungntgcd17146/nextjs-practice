import type { NextAuthConfig, Session } from 'next-auth';
import {
  BASE_REDIRECT_URL,
  BASE_LOGIN_URL,
  BASE_SIGNUP_URL,
  SITEMAP_URL,
  ROBOTS_URL,
  OPENGRAPH_IMAGE_URL,
  WEB_MANIFEST_URL,
} from '@/src/constants/common';
import { NextResponse } from 'next/server';

const isSpecialPage = (pathname: string) => {
  return (
    pathname === SITEMAP_URL ||
    pathname === ROBOTS_URL ||
    pathname.startsWith(OPENGRAPH_IMAGE_URL) ||
    pathname.startsWith(WEB_MANIFEST_URL)
  );
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
  session: {
    //strategy: 'jwt', // jwt for default or 'database adapter'
    maxAge: 60 * 60 * 24, // 1 day, default 30 days
  },
  trustHost: true,
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
