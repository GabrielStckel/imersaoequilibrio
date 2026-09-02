import { useEffect, useState } from "react";
import { IMERSAO } from "@/config/imersao";

export type JanelaLote = {
  /** Percentual de tempo decorrido da janela do lote (0-100). */
  pct: number;
  /** Dias inteiros restantes até o fim da janela. */
  diasRestantes: number;
};

function calcular(): JanelaLote {
  const inicio = new Date(IMERSAO.progresso.inicioJanela).getTime();
  const fim = new Date(IMERSAO.progresso.fimJanela).getTime();
  const agora = Date.now();
  const span = Math.max(fim - inicio, 1);
  const frac = Math.min(1, Math.max(0, (agora - inicio) / span));
  const diasRestantes = Math.max(0, Math.ceil((fim - agora) / 86_400_000));
  return { pct: Math.round(frac * 100), diasRestantes };
}

export function useJanelaLote(): JanelaLote {
  const [estado, setEstado] = useState<JanelaLote>(() => ({ pct: 0, diasRestantes: 0 }));

  useEffect(() => {
    setEstado(calcular());
    const id = setInterval(() => setEstado(calcular()), 60_000);
    return () => clearInterval(id);
  }, []);

  return estado;
}
