import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = (request.headers.get('host') ?? request.nextUrl.hostname).replace(/:\d+$/, '');
  const pathname = request.nextUrl.pathname;

  // Redirect apex (4us.co) to www EXCEPT for /.well-known/* (required for Android/iOS app links)
  if (host === '4us.co' && !pathname.startsWith('/.well-known')) {
    const url = request.nextUrl.clone();
    url.host = 'www.4us.co';
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308); // permanent
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except static files and API routes.
     * We need to run on 4us.co requests including /.well-known.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg)$).*)',
  ],
};
