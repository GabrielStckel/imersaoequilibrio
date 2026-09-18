import { useEffect, useState } from "react";
import { IMERSAO } from "@/config/imersao";

export function calcularProgressoProgramado(agora = Date.now()): number {
  const { aberturaVendas, dataLimite, percentInicial, percentAlvo, curva } = IMERSAO.progresso;
  const inicio = new Date(aberturaVendas).getTime();
  const fim = new Date(dataLimite).getTime();
  const intervalo = Math.max(fim - inicio, 1);
  let fracao = (agora - inicio) / intervalo;

  fracao = Math.min(1, Math.max(0, fracao));
  if (curva === "easeOut") fracao = 1 - (1 - fracao) ** 2;

  return Math.min(percentAlvo, Math.round(percentInicial + (percentAlvo - percentInicial) * fracao));
}

export function useProgressoProgramado(): number {
  const [pct, setPct] = useState<number>(IMERSAO.progresso.percentInicial);

  useEffect(() => {
    const atualizar = () => setPct(calcularProgressoProgramado());
    atualizar();
    const id = window.setInterval(atualizar, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return pct;
}