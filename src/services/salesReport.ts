import { prisma } from "@/lib/prisma";

type TotalPorMes = {
  mes: number;
  total: number;
};

export async function getTotalVendasPorMesPorAno(ano: number): Promise<TotalPorMes[] | null> {
    const result = await prisma.$queryRaw<TotalPorMes[]>`
    SELECT
      MONTH(v.data_venda) AS mes,
      SUM(i.subtotal) AS total
    FROM item_venda i
    JOIN venda v ON v.id = i.id_venda
    WHERE YEAR(v.data_venda) = ${ano}
    GROUP BY MONTH(v.data_venda)
    ORDER BY mes;
  `;

  return result;
}