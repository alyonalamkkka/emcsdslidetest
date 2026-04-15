import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const REALM = 'Basic realm="EMCD Slides"';

function unauthorized() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": REALM,
      "Cache-Control": "no-store",
    },
  });
}

function readBasicAuth(request: NextRequest) {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Basic ")) return null;

  try {
    const encoded = header.slice("Basic ".length);
    const decoded = atob(encoded);
    const separator = decoded.indexOf(":");

    if (separator === -1) return null;

    return {
      username: decoded.slice(0, separator),
      password: decoded.slice(separator + 1),
    };
  } catch {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const expectedUsername = process.env.BASIC_AUTH_USERNAME;
  const expectedPassword = process.env.BASIC_AUTH_PASSWORD;

  // Auth is opt-in: if credentials are not configured, the app stays public.
  if (!expectedUsername || !expectedPassword) {
    return NextResponse.next();
  }

  const auth = readBasicAuth(request);
  if (!auth) return unauthorized();

  if (
    auth.username !== expectedUsername ||
    auth.password !== expectedPassword
  ) {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico)$).*)",
  ],
};
