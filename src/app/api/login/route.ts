import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export async function POST(request: Request) {
  const { email, senha } = await request.json();

  // 1. Buscar usuário
  const user = await prisma.cliente.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Email não encontrado." },
      { status: 401 }
    );
  }

  // 2. Comparar senha
  const passwordMatch = await bcrypt.compare(senha, user.senha);

  if (!passwordMatch) {
    return NextResponse.json(
      { message: "Senha incorreta." },
      { status: 401 }
    );
  }

  // 3. Gerar JWT
  const token = jwt.sign(
    { sub: user.id, role: user.funcao },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );

  // 4. Criar resposta com cookie
  const response = NextResponse.json(
    { role: user.funcao },
    { status: 200 }
  );

  response.cookies.set({
    name: "token",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 dias
  });

  return response;
}

