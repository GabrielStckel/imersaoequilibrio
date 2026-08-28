declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackInitiateCheckout(detalhe?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "InitiateCheckout", detalhe ?? {});
  }
}
