declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function fbq(evento: string, detalhe?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", evento, detalhe ?? {});
  }
}

/** Converte "R$ 47" / "R$ 1.297,00" em número. */
export function precoParaNumero(preco: string): number {
  const limpo = preco.replace(/[^\d,.-]/g, "").replace(/\./g, "").replace(",", ".");
  const n = Number.parseFloat(limpo);
  return Number.isFinite(n) ? n : 0;
}

export function trackViewContent(detalhe?: Record<string, unknown>) {
  fbq("ViewContent", detalhe);
}

export function trackInitiateCheckout(detalhe?: Record<string, unknown>) {
  fbq("InitiateCheckout", detalhe);
}
