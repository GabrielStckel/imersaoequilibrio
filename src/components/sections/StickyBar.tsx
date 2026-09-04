import { useEffect, useState } from "react";
import { CtaButton } from "@/components/CtaButton";
import { IMERSAO } from "@/config/imersao";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { useProgressoProgramado } from "@/hooks/useProgressoProgramado";
import { cn } from "@/lib/utils";

export function StickyBar() {
  const { lote } = useLoteAtivo();
  const pct = useProgressoProgramado();
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
        "fixed inset-x-0 bottom-0 z-40 bg-espresso shadow-[0_-6px_20px_rgba(0,0,0,0.40)] transition-opacity duration-200 motion-reduce:transition-none md:hidden",
        visivel ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      style={{ paddingBottom: "max(10px, env(safe-area-inset-bottom))" }}
    >
      {/* Borda superior viva: escassez como progresso */}
      <div className="h-[3px] w-full bg-ouro/20">
        <div
          className="ouro-metal h-full"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Ingressos garantidos neste lote"
        />
      </div>

      <div className="container-eq flex items-center gap-4 px-4 pt-2.5">
        <div className="min-w-0 flex-1">
          <p className="font-body text-[9px] font-medium uppercase leading-none tracking-[0.1em] text-ouro-luz">
            {lote.nome} · {pct}% vendido
          </p>
          <p className="mt-0.5 flex items-baseline">
            <span className="font-display text-2xl font-bold leading-none text-pergaminho tabular-nums">
              {lote.preco}
            </span>
            <s className="ml-2 font-body text-[13px] text-pergaminho/50 tabular-nums">
              {IMERSAO.valorCheio}
            </s>
          </p>
        </div>

        <CtaButton
          to="oferta"
          label="Garantir vaga"
          size="sm"
          origem="sticky-mobile"
          semSeta
          className="h-11 min-h-11 shrink-0 rounded-full px-[22px] text-[15px]"
        />
      </div>
    </div>
  );
}
