import { useEffect, useState } from "react";
import { CountdownInline } from "@/components/Countdown";
import { CtaButton } from "@/components/CtaButton";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { cn } from "@/lib/utils";

export function StickyBar() {
  const { lote } = useLoteAtivo();
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-ouro/15 bg-espresso-alt/95 backdrop-blur transition-all duration-300",
        visivel ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-8">
        <div className="min-w-0">
          <p className="truncate font-body text-xs uppercase tracking-[0.12em] text-ouro-luz">
            {lote.nome} · {lote.preco}
          </p>
          <CountdownInline className="text-[0.8rem] text-pergaminho/80" />
        </div>
        <CtaButton size="sm" origem="sticky" className="shrink-0" />
      </div>
    </div>
  );
}
