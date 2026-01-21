"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { ChartDataType } from "@/types/dashboardTypes";

const chartConfig = {
  ano_atual: {
    label: "Ano atual",
    color: "#2563eb",
  },
  ano_anterior: {
    label: "Ano anterior",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function DashboardComponent( {chartData}: { chartData: ChartDataType[]}) {
  
  const monthLabels = [
    "", "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Ago", "Set", "Out", "Nov", "Dez"
  ];
  
  return (
    <ChartContainer config={chartConfig} className="h-8/10 max-h-75 w-full pt-5">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => monthLabels[value].slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend
          formatter={(value) => {
            let label = value;

            if (value === "ano_atual") label = "Ano Atual";
            if (value === "ano_anterior") label = "Ano Anterior";

            return (
              <span className="text-lg font-medium">
                {label}
              </span>
            );
          }}
        />
        <Bar dataKey="ano_atual" fill="#2563eb" radius={4} />
        <Bar dataKey="ano_anterior" fill="#60a5fa" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

type DashboardAnoXAnoValorAbsolutoProps = {
  chartData: ChartDataType[];
  ano: number;
};

export const DashboardAnoXAnoValorAbsoluto = ({
  chartData,
  ano,
}: DashboardAnoXAnoValorAbsolutoProps) => {
  return (
    <div className="w-full rounded-lg text-lg">
      <div
        id="header"
        className="w-full bg-black rounded-tr-lg rounded-tl-lg px-4 py-4 text-white font-medium"
      >
        Ano Atual e Ano Anterior por Ano e Mês abrev.
      </div>

      <div
        id="main"
        className="bg-white max-h-90 pb-3 rounded-br-lg rounded-bl-lg px-4"
      >
        <DashboardComponent chartData={chartData} />
        <p className="mt-3 text-center font-bold">{ano}</p>
      </div>
    </div>
  );
};
