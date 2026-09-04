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
export function buildCheckoutUrl(): string {
  if (typeof window === "undefined") return CHECKOUT_BASE;

  const atuais = new URLSearchParams(window.location.search);
  const capturados = new URLSearchParams();
  for (const chave of PARAMS_RASTREAMENTO) {
    const valor = atuais.get(chave);
    if (valor) capturados.set(chave, valor);
  }

  const extras = capturados.toString();
  return extras ? `${CHECKOUT_BASE}&${extras}` : CHECKOUT_BASE;
}
