import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow access to /signin
  if (pathname === '/signin') {
    return NextResponse.next();
  }

  // Check authentication
  const session = await auth();

  if (!session?.user) {
    const signinUrl = new URL('/signin', request.url);
    return NextResponse.redirect(signinUrl);
  }

  return NextResponse.next();
}

// Optionally, define the matcher to apply middleware to all routes except static files and API
export const config = {
  matcher: [
    /*
      Match all routes except:
      - /_next (Next.js internals)
      - /api (API routes)
      - /static, /public, /favicon.ico, etc.
      - /signin (login page)
    */
    '/((?!_next|api|static|public|favicon.ico|signin).*)',
    '/signin',
  ],
};
