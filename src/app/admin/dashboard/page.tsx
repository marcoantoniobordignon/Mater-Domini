"use client";

import { Header } from "@/components/adminPages/dashboard/header";
import { Main } from "@/components/adminPages/dashboard/main";
import { useTotalSalesByYearQuery } from "@/lib/queries";
import { useEffect, useState } from "react";

const DashBoardPage = () => {
  const [ano, setAno] = useState(new Date().getFullYear());
  const [variacaoYoYIcon, setVariacaoYoYIcon] = useState(
    "/admin_svg/icone_neutro_yoy.svg"
  );

  const onClickButtonYear = (ano: number) => setAno(ano);

  const totalVendasAnoAtual = useTotalSalesByYearQuery(ano);
  const totalVendasAnoAnterior = useTotalSalesByYearQuery(ano - 1);

  const dataAnoAtual = totalVendasAnoAtual.data?.total ?? 0;
  const dataAnoAnterior = totalVendasAnoAnterior.data?.total ?? 0;

  const variacaoYoY =
    totalVendasAnoAtual.isLoading || totalVendasAnoAnterior.isLoading
      ? 0
      : dataAnoAnterior === 0
        ? 100
        : ((dataAnoAtual - dataAnoAnterior) / dataAnoAnterior) * 100;

  useEffect(() => {
    if (variacaoYoY > 0) {
      setVariacaoYoYIcon("/admin_svg/icone_ganho_yoy.svg");
    } else if (variacaoYoY < 0) {
      setVariacaoYoYIcon("/admin_svg/icone_perda_yoy.svg");
    } else {
      setVariacaoYoYIcon("/admin_svg/icone_neutro_yoy.svg");
    }
  }, [variacaoYoY]);

  const cardVendas = [
    {
      iconURL: "/admin_svg/icone_faturamento_ano_atual.svg",
      label: "Faturamento Ano Atual",
      data: dataAnoAtual,
    },
    {
      iconURL: "/admin_svg/icone_faturamento_ano_anterior.svg",
      label: `Faturamento Ano Anterior`,
      data: dataAnoAnterior,
    },
    {
      iconURL: variacaoYoYIcon,
      label: "% Variação YoY",
      data: Number(variacaoYoY.toFixed(2)),
    },
  ];

  return (
    <div className="h-screen w-full">
      <div className="absolute top-0 w-full">
        <Header onClickButtonYear={onClickButtonYear} />
      </div>
      <Main ano={ano} cardVendas={cardVendas} />
    </div>
  );
};

export default DashBoardPage;
