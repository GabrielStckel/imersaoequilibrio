import { IMERSAO, type Lote } from "@/config/imersao";

/**
 * Lote ativo definido manualmente em IMERSAO.loteAtual.
 * Nada muda sozinho por data.
 */
export function useLoteAtivo(): { lote: Lote; indice: number } {
  const indice = IMERSAO.loteAtual;
  const lote = (IMERSAO.lotes[indice] ?? IMERSAO.lotes[0]) as Lote;
  return { lote, indice };
}
