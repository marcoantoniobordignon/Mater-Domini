import { prisma } from "@/lib/prisma";

export const getValorTotalVendasPorAno = async (ano: number) => {
    try {
        const total = await prisma.$queryRaw<{ subtotal: number }[]>
        `
            SELECT
                SUM(i.subtotal) AS subtotal
                FROM item_venda i
                JOIN venda v ON v.id = i.id_venda
                WHERE YEAR(v.data_venda) = ${ano};
        `
        return total[0]?.subtotal ?? 0
    } catch (error) {
        throw new Error("Erro ao obter o total de vendas por ano.");
    }
};
