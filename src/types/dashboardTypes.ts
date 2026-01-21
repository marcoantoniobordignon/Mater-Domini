export type ReportRow = {
  id: string;
  label: string;
  level: number; // 0 = categoria, 1 = subcategoria
  current: number;
  previous: number;
  highlight?: boolean;
};

export type ChartDataType = {
  month: number;
  ano_atual: number;
  ano_anterior: number;
};