import { useEffect, useState } from "react";
import { IMERSAO } from "@/config/imersao";

function calcular(): number {
  const { aberturaVendas, percentInicial, percentAlvo, curva } = IMERSAO.progresso;
  const inicio = new Date(aberturaVendas).getTime();
  const fim = new Date(IMERSAO.inicioEvento).getTime();
  const span = Math.max(fim - inicio, 1);
  let frac = (Date.now() - inicio) / span;
  frac = Math.min(1, Math.max(0, frac));
  if (curva === "easeOut") frac = 1 - (1 - frac) ** 2;
  return Math.round(percentInicial + (percentAlvo - percentInicial) * frac);
}

export function useProgressoProgramado(): number {
  const [pct, setPct] = useState(IMERSAO.progresso.percentInicial);

  useEffect(() => {
    setPct(calcular());
    const id = setInterval(() => setPct(calcular()), 60_000);
    return () => clearInterval(id);
  }, []);

  return pct;
}
