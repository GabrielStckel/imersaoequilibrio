import { IMERSAO } from "@/config/imersao";
import { Countdown } from "@/components/Countdown";
import { ProgressoLote } from "@/components/ProgressoLote";
import { PrecoLote } from "@/components/PrecoLote";
import { CtaButton } from "@/components/CtaButton";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  const { autoridade } = IMERSAO;

  return (
    <section className="relative overflow-hidden bg-espresso">
      <div
        aria-hidden="true"
        className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-espresso to-espresso"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-24 pt-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16 lg:pb-32 lg:pt-32">
        <div>
          <Reveal>
            <SectionLabel tone="dark">
              Imersão Online e Ao Vivo · 06 e 07 de Outubro
            </SectionLabel>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 max-w-[19ch] font-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.01em] text-bone sm:text-5xl lg:text-[3.4rem]">
              Por que doar-se demais está afastando o respeito na sua relação amorosa e travando o
              fluxo do seu dinheiro?
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-7 max-w-xl font-body text-[0.98rem] leading-[1.75] text-bone/65">
              Quando você não sustenta o seu limite, você permite que o outro invada o seu espaço. A
              imersão Equilíbrio Sistêmico vai desarmar a carência de infância que faz você aceitar
              migalhas no amor e submeter-se à escassez financeira. Atualize o sistema operacional
              da sua consciência através de vivências sistêmicas coletivas e tome o seu lugar de
              adulto potente.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10">
              <Countdown />
            </div>
          </Reveal>

          <Reveal delay={240}>
            <ProgressoLote className="mt-8" />
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 border-t border-gold/15 pt-8">
              <PrecoLote />
              <CtaButton origem="hero" size="lg" className="mt-7" />
              <p className="mt-4 font-body text-[0.75rem] text-bone/40">
                Pagamento seguro via Hotmart · Garantia incondicional de 7 dias
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="lg:pt-14">
          <figure className="relative">
            <div className="absolute -left-3 -top-3 h-20 w-20 border-l border-t border-gold/40" aria-hidden="true" />
            {autoridade.foto ? (
              <img
                src={autoridade.foto}
                alt={`${autoridade.nome}, condutor da imersão Equilíbrio Sistêmico`}
                width={720}
                height={900}
                loading="eager"
                className="w-full rounded-card object-cover"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full items-center justify-center rounded-card border border-gold/20 bg-ink/60">
                <span className="px-8 text-center font-body text-[0.72rem] uppercase tracking-[0.26em] text-bone/30">
                  Espaço reservado para a foto real de {autoridade.nome}
                </span>
              </div>
            )}
            <figcaption className="mt-4 font-body text-[0.75rem] uppercase tracking-[0.22em] text-gold-soft/60">
              {autoridade.nome} · Zoom ao vivo · {IMERSAO.horario}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
