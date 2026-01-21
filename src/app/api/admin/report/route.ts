import { getValorTotalVendasPorAno } from "@/services/vendas";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ano = Number(searchParams.get("ano"));

  if (Number.isNaN(ano)) {
    return NextResponse.json(
      { error: "Ano inválido" },
      { status: 400 }
    );
  }

  try {
    const total = await getValorTotalVendasPorAno(ano);

    return NextResponse.json({ total }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
