import { useEffect, useState } from "react";
import { IMERSAO } from "@/config/imersao";
import { buildCheckoutUrl } from "@/lib/checkout";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";

export function useCheckoutUrl() {
  const { lote } = useLoteAtivo();
  const base = lote.checkout || IMERSAO.lotes[0].checkout;
  const [url, setUrl] = useState(base);

  useEffect(() => {
    setUrl(buildCheckoutUrl(base));
  }, [base]);

  return url;
}
