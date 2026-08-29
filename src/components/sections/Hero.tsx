import { Play } from "lucide-react";
import { IMERSAO } from "@/config/imersao";
import { Countdown } from "@/components/Countdown";
import { ProgressoLote } from "@/components/ProgressoLote";
import { PrecoLote } from "@/components/PrecoLote";
import { CtaButton } from "@/components/CtaButton";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

function HeroVideo() {
  const { embedUrl, legenda } = IMERSAO.video;

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-card border border-gold/20 bg-ink/60 shadow-soft">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={legenda}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <span
              aria-hidden="true"
              className="absolute left-3.5 top-3.5 h-12 w-12 border-l border-t border-gold/50"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-3.5 right-3.5 h-12 w-12 border-b border-r border-gold/50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5">
              <span className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-gold shadow-[0_12px_40px_-8px_rgba(194,162,76,0.7)]">
                <Play className="ml-1 h-6 w-6 text-ink" fill="currentColor" strokeWidth={0} />
              </span>
              <span className="font-body text-[0.64rem] uppercase tracking-[0.22em] text-gold-soft/70">
                {legenda}
              </span>
            </div>
          </>
        )}
      </div>

      <p className="mt-5 max-w-[48ch] font-body text-[0.9rem] leading-[1.65] text-bone/65 sm:mt-[18px]">
        Desarme a carência de infância que faz você aceitar migalhas no amor e se submeter à
        escassez financeira — e retome o seu lugar de adulto potente.
      </p>
      <p className="mt-3 border-l border-gold/40 pl-3 font-body text-[0.65rem] uppercase leading-relaxed tracking-[0.16em] text-gold-soft/60 sm:border-0 sm:pl-0 sm:text-[0.68rem] sm:tracking-[0.2em]">
        {IMERSAO.autoridade.nome} · Ao vivo pelo Zoom · {IMERSAO.horario}
      </p>
    </div>
  );
}

export function Hero() {
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

      <div className="relative mx-auto grid max-w-6xl gap-x-14 px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:pb-28 lg:pt-28">
        {/* Topo: label + título (sempre 3 linhas) */}
        <div className="lg:col-start-1 lg:row-start-1">
          <Reveal>
            <SectionLabel tone="dark">Imersão Online e Ao Vivo · 06 e 07 de Outubro</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            {/* Título com quebras fixas → sempre 3 linhas em qualquer dispositivo.
                A fonte é fluida (clamp) e encolhe no mobile o suficiente para cada
                linha caber. Se editar o texto, reveja as quebras <br />. */}
            <h1 className="mt-5 font-display text-[clamp(0.95rem,4.35vw,1.6rem)] font-semibold leading-[1.2] tracking-[-0.005em] text-bone sm:mt-7">
              Por que doar-se demais está afastando
              <br />
              o respeito na sua relação amorosa
              <br />
              e travando o fluxo do seu dinheiro?
            </h1>
          </Reveal>
        </div>

        {/* Vídeo + subtítulo realocado (menor) */}
        <Reveal delay={160} className="mt-7 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-center">
          <HeroVideo />
        </Reveal>

        {/* Compra: countdown + progresso + preço + CTA */}
        <div className="mt-8 rounded-card border border-gold/15 bg-ink/25 p-4 sm:mt-10 sm:border-0 sm:bg-transparent sm:p-0 lg:col-start-1 lg:row-start-2 lg:mt-8">
          <Reveal delay={200}>
            <p className="mb-3 font-body text-[0.64rem] font-medium uppercase tracking-[0.18em] text-gold-soft/65 sm:hidden">
              A imersão começa em
            </p>
            <Countdown />
          </Reveal>
          <Reveal delay={240}>
            <ProgressoLote className="mt-5 sm:mt-6" />
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-6 border-t border-gold/15 pt-6 sm:mt-7 sm:pt-7">
              <PrecoLote />
              <CtaButton origem="hero" size="lg" className="mt-5 w-full sm:mt-6 sm:w-auto" />
              <p className="mt-3 text-center font-body text-[0.7rem] leading-relaxed text-bone/40 sm:mt-4 sm:text-left sm:text-[0.75rem]">
                Pagamento seguro via Hotmart · Garantia incondicional de 7 dias
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
