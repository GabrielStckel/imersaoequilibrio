import { useEffect, useRef, useState, type ReactNode } from "react";
import { Scale } from "lucide-react";
import { IMERSAO } from "@/config/imersao";
import { CtaButton } from "@/components/CtaButton";
import { CountdownInline } from "@/components/Countdown";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { useProgressoProgramado } from "@/hooks/useProgressoProgramado";
import { cn } from "@/lib/utils";

// Animação do marquee (injetada uma vez). Desliga em prefers-reduced-motion.
const MARQUEE_CSS = `
@keyframes eqMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.eq-marquee-track { animation: eqMarquee 34s linear infinite; }
@media (prefers-reduced-motion: reduce) { .eq-marquee-track { animation: none; } }
`;

function Faixa({ ocultar = false }: { ocultar?: boolean }) {
  const { lote } = useLoteAtivo();
  const pct = useProgressoProgramado();
  const d1 = IMERSAO.dataDia1.slice(0, 5);
  const d2 = IMERSAO.dataDia2.slice(0, 5);
  const hora = IMERSAO.horario.split(" ")[0];

  const mensagens: ReactNode[] = [
    <>
      {pct}% dos ingressos do {lote.nome} já garantidos
    </>,
    <>
      {lote.nome} por {lote.preco} · valor promocional
    </>,
    <>
      Imersão ao vivo · {d1} e {d2} · {hora}
    </>,
    <>Vagas limitadas por lote</>,
    <>Pagamento seguro via Hotmart</>,
  ];

  return (
    <div
      aria-hidden={ocultar || undefined}
      className="flex shrink-0 items-center gap-8 pr-8 font-body text-[11px] font-medium uppercase leading-none tracking-[0.12em] text-ouro-luz"
    >
      {mensagens.map((m, i) => (
        <span key={i} className="flex items-center gap-8 whitespace-nowrap">
          {m}
          <span aria-hidden="true" className="text-ouro-luz">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export function Header() {
  const pct = useProgressoProgramado();
  const [compacto, setCompacto] = useState(false);
  const ultimaRolagem = useRef(0);
  const rolagemAcumulada = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - ultimaRolagem.current;
      ultimaRolagem.current = y;

      if (y < 80) {
        rolagemAcumulada.current = 0;
        setCompacto(false);
        return;
      }

      if (Math.sign(delta) !== Math.sign(rolagemAcumulada.current)) {
        rolagemAcumulada.current = 0;
      }
      rolagemAcumulada.current += delta;

      if (rolagemAcumulada.current > 24) {
        setCompacto(true);
        rolagemAcumulada.current = 0;
      } else if (rolagemAcumulada.current < -24) {
        setCompacto(false);
        rolagemAcumulada.current = 0;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <style>{MARQUEE_CSS}</style>

      {/* Faixa deslizante: recolhe ao descer e volta ao subir */}
      <div
        className={cn(
          "grid border-b border-ouro/10 bg-espresso-alt transition-[grid-template-rows,border-color,opacity] duration-200 motion-reduce:transition-none",
          compacto
            ? "grid-rows-[0fr] border-b-0 opacity-0"
            : "grid-rows-[1fr] opacity-100",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="eq-marquee-track flex w-max py-[7px] md:py-2">
            <Faixa />
            <Faixa ocultar />
          </div>
        </div>
      </div>

      {/* Barra do header */}
      <div className="border-b border-ouro/15 bg-espresso-alt/95 backdrop-blur">
        <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-8 md:h-auto md:gap-4">
          {/* Logo / marca */}
          <a href="#" className="flex min-h-11 min-w-0 items-center gap-2.5 md:py-1">
            <span
              aria-hidden="true"
              className="moldura-ouro-escura flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ouro/10 md:h-8 md:w-8"
            >
              <Scale className="h-4 w-4 text-ouro-luz" strokeWidth={1.5} />
            </span>
            <span className="max-w-[126px] font-display text-[15px] font-semibold leading-[1.15] text-pergaminho md:max-w-none md:text-[0.82rem] md:tracking-[0.06em]">
              {IMERSAO.nome}
            </span>
          </a>

          {/* Contador mobile */}
          <div className="flex shrink-0 flex-col items-end justify-center text-right md:hidden">
            <span className="font-body text-[10px] font-medium uppercase leading-none tracking-[0.1em] text-ouro-luz">
              Começa em
            </span>
            <CountdownInline className="mt-1 font-display text-[15px] font-semibold leading-none text-pergaminho" />
          </div>

          {/* Countdown + CTA no desktop */}
          <div className="hidden shrink-0 items-center gap-4 md:flex">
            <span className="font-body text-xs uppercase tracking-[0.12em] text-pergaminho/80">
              Começa em{" "}
              <CountdownInline className="text-xs font-semibold text-ouro-luz" />
            </span>
            <CtaButton size="sm" origem="header" className="min-h-11" />
          </div>
        </div>
      </div>

      {/* Barra de progresso (fina) */}
      <div className="h-[2px] w-full bg-ouro/10">
        <div
          className="ouro-metal h-full transition-[width] duration-1000 ease-out"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Ingressos garantidos neste lote"
        />
      </div>
    </header>
  );
}
