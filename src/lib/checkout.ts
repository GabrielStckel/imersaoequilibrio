import { CHECKOUT_BASE } from "@/config/checkout";

const PARAMS_RASTREAMENTO = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "src",
  "sck",
  "xcod",
] as const;

/**
 * Monta a URL final do checkout Hotmart, anexando apenas os parâmetros
 * de rastreamento presentes na URL atual. Sem parâmetros, retorna a base.
 */
export function buildCheckoutUrl(base: string = CHECKOUT_BASE): string {
  const url = base || CHECKOUT_BASE;
  if (typeof window === "undefined") return url;

  const atuais = new URLSearchParams(window.location.search);
  const capturados = new URLSearchParams();
  for (const chave of PARAMS_RASTREAMENTO) {
    const valor = atuais.get(chave);
    if (valor) capturados.set(chave, valor);
  }

  const extras = capturados.toString();
  if (!extras) return url;
  return `${url}${url.includes("?") ? "&" : "?"}${extras}`;
}
