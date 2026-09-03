import { useEffect } from "react";
import { IMERSAO } from "@/config/imersao";
import { trackViewContent } from "@/lib/tracking";

const CHAVE_VIEW_CONTENT = "fb_view_content_oferta";

function jaDisparado() {
  try {
    return sessionStorage.getItem(CHAVE_VIEW_CONTENT) === "1";
  } catch {
    return false;
  }
}

function marcarDisparado() {
  try {
    sessionStorage.setItem(CHAVE_VIEW_CONTENT, "1");
  } catch {
    /* armazenamento bloqueado: segue sem persistir */
  }
}

/**
 * Injeta o UTMify e dispara o ViewContent da seção de oferta.
 * O script base do Meta Pixel (init + PageView) fica inline no <head>
 * do RootShell, para disparar antes da hidratação.
 */
export function Tracking() {
  useEffect(() => {
    if (IMERSAO.utmifyAtivo && !document.getElementById("utmify")) {
      const u = document.createElement("script");
      u.id = "utmify";
      u.async = true;
      u.defer = true;
      u.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
      u.setAttribute("data-utmify-prevent-xcod-sck", "");
      u.setAttribute("data-utmify-prevent-subids", "");
      document.head.appendChild(u);
    }
  }, []);

  useEffect(() => {
    const alvo = document.getElementById("oferta");
    if (!alvo || jaDisparado()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !jaDisparado()) {
            marcarDisparado();
            trackViewContent({ content_name: "Oferta", content_category: IMERSAO.nome });
            observer.disconnect();
          }
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(alvo);
    return () => observer.disconnect();
  }, []);

  return null;
}
