import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET não definido");
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    ) as JwtPayload;

    if (
      typeof decoded !== "object" ||
      !decoded ||
      !("role" in decoded)
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const payload = decoded as JwtPayload & {
      role: "user" | "admin";
    };

    if (payload.role === "user") {
      if (
        pathname.startsWith("/admin")
      ) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }

    if (payload.role === "admin") {
      if (pathname === "/admin") {
        return NextResponse.next();
      }

      if (pathname.startsWith("/admin")) {
        const adminVerified =
          request.cookies.get("admin_verified")?.value;

        if (!adminVerified) {
          return NextResponse.redirect(new URL("/admin", request.url));
        }
      }
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
