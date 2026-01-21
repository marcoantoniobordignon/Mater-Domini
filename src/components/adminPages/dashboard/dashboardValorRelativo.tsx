"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ReferenceLine } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

type PercentageData = {
  data: {
    month: number;
    variacao: number;
  }[];
};

type Props = PercentageData & {
  ano: number;
}

export function DashboardAnoXAnoPercentual({
  data,
  ano
}: Props) {
  const monthLabels = [
    "", "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Ago", "Set", "Out", "Nov", "Dez",
  ];

  const config = {
    variacao: {
      label: "Variação %",
    },
  } satisfies ChartConfig;

  return (

    <div>
      <div className="w-full rounded-lg text-lg">
        <div
          id="header"
          className="w-full bg-black rounded-tr-lg rounded-tl-lg px-4 py-4 text-white font-medium"
        >
          % YoY por Ano e Mês abrev.
        </div>

        <div
          id="main"
          className="bg-white max-h-95 pb-3 rounded-br-lg rounded-bl-lg px-4"
        >  
            <ChartContainer
        config={config}
        className="h-9/10 max-h-85 w-full pt-5 bg-white"
      >
        <BarChart accessibilityLayer data={data}>
      <CartesianGrid vertical={false} opacity={0.15} />
      <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value) => monthLabels[value]}
      />
      <ReferenceLine
        y={0}
        stroke="#000"
        strokeOpacity={0.4}
        strokeDasharray="3 3"
      />
      <ChartTooltip
        content={
          <ChartTooltipContent
            formatter={(value) => `${value}%`}
          />
        }
      />
      <ChartLegend
        formatter={(value) => {
          return (
            <span className="text-lg font-medium text-black">
              Variação %
            </span>
          );
        }}
      />
      <Bar
        dataKey="variacao"
        radius={4}
        shape={(props: any) => {
      const { x, y, width, height, value } = props;
      const fill = value >= 0 ? "#16a34a" : "#dc2626";
      const barHeight = Math.abs(height);
      const barY = value >= 0 ? y : y + height;
      return (
        <rect
          x={x}
          y={barY}
          width={width}
          height={barHeight}
          fill={fill}
          rx={4}
          ry={4}
        />
      );
        }}
        />
        </BarChart>
      </ChartContainer>    
          <p className="mt-1 text-center font-bold">{ano}</p>
        </div>
      </div>
    </div>
  );
}
