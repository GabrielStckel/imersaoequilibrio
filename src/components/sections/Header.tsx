import type { ReactNode } from "react";
import { Scale } from "lucide-react";
import { IMERSAO } from "@/config/imersao";
import { CtaButton } from "@/components/CtaButton";
import { CountdownInline } from "@/components/Countdown";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { useProgressoProgramado } from "@/hooks/useProgressoProgramado";

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
      className="flex shrink-0 items-center gap-8 pr-8 font-body text-[0.62rem] font-medium uppercase tracking-[0.22em] text-gold-soft/70"
    >
      {mensagens.map((m, i) => (
        <span key={i} className="flex items-center gap-8 whitespace-nowrap">
          {m}
          <span aria-hidden="true" className="text-gold/50">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export function Header() {
  const pct = useProgressoProgramado();

  return (
    <header className="sticky top-0 z-50">
      <style>{MARQUEE_CSS}</style>

      {/* Faixa deslizante (direita → esquerda) */}
      <div className="overflow-hidden border-b border-gold/10 bg-ink py-2">
        <div className="eq-marquee-track flex w-max">
          <Faixa />
          <Faixa ocultar />
        </div>
      </div>

      {/* Barra do header */}
      <div className="border-b border-gold/15 bg-espresso/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-8">
          {/* Logo / marca */}
          <a href="#" className="flex min-w-0 items-center gap-2.5">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10"
            >
              <Scale className="h-4 w-4 text-gold" strokeWidth={1.5} />
            </span>
            <span className="truncate font-display text-[0.82rem] font-semibold tracking-[0.06em] text-bone">
              {IMERSAO.nome}
            </span>
          </a>

          {/* Countdown + CTA */}
          <div className="flex shrink-0 items-center gap-4">
            <span className="hidden font-body text-[0.68rem] uppercase tracking-[0.16em] text-bone/50 sm:block">
              Começa em{" "}
              <CountdownInline className="text-[0.74rem] font-semibold text-gold" />
            </span>
            <CtaButton size="sm" origem="header" />
          </div>
        </div>
      </div>

      {/* Barra de progresso (fina) */}
      <div className="h-[2px] w-full bg-gold/10">
        <div
          className="h-full bg-gold transition-[width] duration-1000 ease-out"
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
