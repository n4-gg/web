import { getToken } from "next-auth/jwt";
import { NextResponse, type NextMiddleware } from "next/server";

export const middleware: NextMiddleware = async (req) => {
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/login")) {
    const jwt = await getToken({ req });

    if (jwt) {
      return NextResponse.redirect(
        new URL(req.nextUrl.searchParams.get("callbackUrl") ?? "/", req.url)
      );
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/login"],
};
