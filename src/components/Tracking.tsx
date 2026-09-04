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
 * Dispara o ViewContent da seção de oferta quando ela entra na viewport.
 * O script base do Meta Pixel (init + PageView) fica inline no <head>
 * do RootShell, para disparar antes da hidratação.
 */
export function Tracking() {
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
