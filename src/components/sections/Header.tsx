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
      className="flex shrink-0 items-center gap-8 pr-8 font-body text-[11px] font-semibold uppercase leading-none tracking-[0.08em] text-espresso"
    >
      {mensagens.map((m, i) => (
        <span key={i} className="flex items-center gap-8 whitespace-nowrap">
          {m}
          <span aria-hidden="true" className="text-espresso/50">
            ◆
          </span>
        </span>
      ))}
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <style>{MARQUEE_CSS}</style>

      {/* Marquee: faixa clara superior, sempre visível */}
      <div className="ouro-metal overflow-hidden">
        <div className="eq-marquee-track flex h-7 w-max items-center py-1.5">
          <Faixa />
          <Faixa ocultar />
        </div>
      </div>

      {/* Barra do header: faixa escura inferior */}
      <div className="border-b border-ouro/[0.28] bg-espresso">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8 md:h-auto md:gap-4 md:py-2.5">
          {/* Logo / marca */}
          <a href="#" className="flex min-h-11 min-w-0 items-center gap-2.5 md:py-1">
            <span
              aria-hidden="true"
              className="moldura-ouro-escura flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-ouro/10"
            >
              <Scale className="h-4 w-4 text-ouro-luz" strokeWidth={1.5} />
            </span>
            <span className="whitespace-nowrap font-display text-sm font-semibold leading-none tracking-[-0.01em] text-pergaminho md:text-[0.82rem] md:tracking-[0.06em]">
              {IMERSAO.nome}
            </span>
          </a>

          {/* Contador mobile: duas linhas, alinhado à direita */}
          <div className="flex shrink-0 flex-col items-end justify-center text-right md:hidden">
            <span className="font-body text-[9px] font-medium uppercase leading-none tracking-[0.12em] text-ouro-luz">
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
    </header>
  );
}
