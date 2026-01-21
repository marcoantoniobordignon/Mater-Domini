"use client"

import { useSalesByMonthQuery } from "@/lib/queries";
import { CardVendas } from "./cardVendas"
import { DashboardAnoXAnoValorAbsoluto } from "./dashboardValorAbsoluto"
import SalesReport from "./salesReport"
import { DashboardAnoXAnoPercentual } from "./dashboardValorRelativo";

type Props = {
    cardVendas: {
        iconURL: string;
        label: string;
        data: number;
    }[],
    ano: number
}

export const Main = ({ cardVendas, ano }: Props) => {

    const useTotalVendasPorMesAnoAtual =  useSalesByMonthQuery(ano);
    const useTotalVendasPorMesAnoAnterior =  useSalesByMonthQuery(ano - 1);
    const dataAnoAnterior = useTotalVendasPorMesAnoAnterior.data ? useTotalVendasPorMesAnoAnterior.data : [];
    const dataAnoAtual = useTotalVendasPorMesAnoAtual.data ? useTotalVendasPorMesAnoAtual.data : [];
    
    const chartData = dataAnoAtual.map((item, index) => ({
        month: item.mes,
        ano_atual: Number(item.total),
        ano_anterior: Number(dataAnoAnterior[index]?.total || 0),
    }));
    
    const percentageChartData = chartData.map((item) => {
        const base = item.ano_anterior;
        const percent =
            base === 0 ? 100 : ((item.ano_atual - base) / base) * 100;

        return {
            month: item.month,
            variacao: Number(percent.toFixed(2)),
        };
    });

    return (
        <main className="pt-45 bg-gray-500 w-full min-h-300 px-10">
            <div id="grid" className="grid grid-cols-[1fr_4fr_2fr] gap-x-7 ">
                <div className="flex flex-col gap-y-7">
                     {cardVendas.map((card, index) => (
                        <CardVendas key={index} iconURL={card.iconURL} label={card.label} data={card.data} />
                    ))}
                </div>
                <div className="flex flex-col gap-y-3">
                    <DashboardAnoXAnoValorAbsoluto chartData={chartData} ano={ano}/>
                    <DashboardAnoXAnoPercentual data={percentageChartData} ano={ano}/>
                </div>
                <div className="">
                    <SalesReport />
                </div>
            </div>
        </main>
    )
}