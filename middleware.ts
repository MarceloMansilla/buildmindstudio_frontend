import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Validate a session cookie before granting access to protected routes.
 *
 * SECURITY TODO (HIGH): this currently only checks for the *presence* of a
 * session value. Presence is NOT authentication — any non-empty cookie passes.
 * Before wiring a real auth backend, verify the token cryptographically, e.g.:
 *
 *   import { jwtVerify } from 'jose'
 *   await jwtVerify(token, new TextEncoder().encode(process.env.SESSION_SECRET))
 *
 * and reject on any signature/expiry failure. Keep this the single chokepoint
 * so the fix lives in one place.
 */
function hasValidSession(token: string | undefined): boolean {
  return Boolean(token)
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get('session')?.value

  if (!hasValidSession(token)) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
