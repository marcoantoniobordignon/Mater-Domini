import { getTotalVendasPorMesPorAno } from "@/services/salesReport";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const ano = Number(searchParams.get('ano'));

    const totalPorMesPorAno = await getTotalVendasPorMesPorAno(ano!);
    return NextResponse.json(totalPorMesPorAno, { status: 200 });
}