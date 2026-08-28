import { useEffect } from "react";
import { IMERSAO } from "@/config/imersao";

/** Injeta Meta Pixel (PageView) e UTMify conforme o config. */
export function Tracking() {
  useEffect(() => {
    const id = IMERSAO.metaPixelId;
    if (id && !document.getElementById("meta-pixel")) {
      const s = document.createElement("script");
      s.id = "meta-pixel";
      s.async = true;
      s.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${id}');fbq('track','PageView');`;
      document.head.appendChild(s);
    }

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

  return null;
}
