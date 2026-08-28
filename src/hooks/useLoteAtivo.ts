import { useEffect, useState } from "react";
import { IMERSAO, type Lote } from "@/config/imersao";

function resolver(): { lote: Lote; indice: number } {
  const agora = Date.now();
  const indice = IMERSAO.lotes.findIndex((l) => new Date(l.ateData).getTime() > agora);
  const i = indice === -1 ? IMERSAO.lotes.length - 1 : indice;
  return { lote: IMERSAO.lotes[i]!, indice: i };
}

export function useLoteAtivo() {
  const [estado, setEstado] = useState(() => ({ lote: IMERSAO.lotes[0]!, indice: 0 }));

  useEffect(() => {
    setEstado(resolver());
    const id = setInterval(() => setEstado(resolver()), 60_000);
    return () => clearInterval(id);
  }, []);

  return estado;
}
