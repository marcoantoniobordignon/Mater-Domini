import { ReportRow } from "@/types/dashboardTypes";

export const reportData: ReportRow[] = [
  { id: "casa", label: "Casa e Decoração", level: 0, current: 2099740, previous: 1320625 },
  { id: "cadeiras", label: "Cadeiras", level: 1, current: 627497, previous: 425116 },
  { id: "quadros", label: "Quadros", level: 1, current: 800660, previous: 686304 },
  { id: "tapetes", label: "Tapetes", level: 1, current: 671583, previous: 209205 },

  { id: "vestuario", label: "Vestuário", level: 0, current: 60015301, previous: 55803671, highlight: true },
  { id: "camisetas", label: "Camisetas", level: 1, current: 10885104, previous: 11401534 },
  { id: "calcas", label: "Calças", level: 1, current: 16621579, previous: 15050447 },
  { id: "vestidos", label: "Vestidos", level: 1, current: 5821233, previous: 2932869 },
  { id: "agasalhos", label: "Agasalhos", level: 1, current: 3541666, previous: 3459394 },
  { id: "blusas", label: "Blusas", level: 1, current: 23146223, previous: 22959425 },

  { id: "esportes", label: "Esportes e Fitness", level: 0, current: 23355870, previous: 10073417 },
  { id: "academia", label: "Roupas de Academia", level: 1, current: 5901219, previous: 5269634 },

  { id: "total", label: "Total", level: 0, current: 85470911, previous: 67197713 }
];
