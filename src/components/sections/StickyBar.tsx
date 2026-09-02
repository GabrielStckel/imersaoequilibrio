import { useEffect, useState } from "react";
import { CtaButton } from "@/components/CtaButton";
import { IMERSAO } from "@/config/imersao";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { cn } from "@/lib/utils";

export function StickyBar() {
  const { lote } = useLoteAtivo();
  const [aposRolagem, setAposRolagem] = useState(false);
  const [ofertaVisivel, setOfertaVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setAposRolagem(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const oferta = document.getElementById("oferta");
    if (!oferta || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setOfertaVisivel(entry?.isIntersecting ?? false),
      { threshold: 0.08 },
    );
    observer.observe(oferta);
    return () => observer.disconnect();
  }, []);

  const visivel = aposRolagem && !ofertaVisivel;

  return (
    <div
      aria-hidden={!visivel}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-ouro/30 bg-espresso shadow-[0_-6px_20px_rgb(0_0_0_/_0.35)] transition-opacity duration-200 motion-reduce:transition-none md:hidden",
        visivel ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pt-3">
        <div className="min-w-0">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-ouro-luz">
            {lote.nome}
          </p>
          <p className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-[22px] font-bold leading-none text-pergaminho tabular-nums">
              {lote.preco}
            </span>
            <s className="font-body text-xs text-pergaminho/55 tabular-nums">
              {IMERSAO.valorCheio}
            </s>
          </p>
        </div>

        <CtaButton
          label="Garantir vaga"
          size="sm"
          origem="sticky-mobile"
          className="min-h-12 shrink-0 px-5"
        />
      </div>
    </div>
  );
}
