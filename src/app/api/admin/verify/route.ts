import { NextResponse } from "next/server";

const ADMIN_TOKEN = process.env.ADMIN_ACCESS_TOKEN!;

export async function POST(req: Request) {
  const { token } = await req.json();

  if (token !== ADMIN_TOKEN) {
    return NextResponse.json(
      { err: "Token inválido" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });

  response.cookies.set({
    name: "admin_verified",
    value: "true",
    httpOnly: true,
    path: "/admin",
    sameSite: "strict",
    secure: true,
    maxAge: 60 * 30, // 30 minutos
  });

  return response;
}
