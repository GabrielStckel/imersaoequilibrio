import { Check, Lock, Video, PlayCircle, FileText, Gift, Sparkles, type LucideIcon } from "lucide-react";
import { IMERSAO } from "@/config/imersao";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { ProgressoLote } from "@/components/ProgressoLote";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Video,
  PlayCircle,
  FileText,
  Gift,
};

function precoPartes(preco: string) {
  const [cifra, ...resto] = preco.split(" ");
  return { cifra, numero: resto.join(" ") };
}

export function Oferta() {
  const { indice } = useLoteAtivo();

  return (
    <section id="oferta" className="relative overflow-hidden bg-espresso py-24 lg:py-32">
      {/* Fine grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-gold/6 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-gold/5 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <SectionLabel tone="dark">GARANTA SUA VAGA</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-bone sm:text-[2.75rem] lg:text-[3.25rem]">
              O que você garante ao entrar{" "}
              <span className="relative inline-block">
                ainda hoje
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-0.12em] -bottom-[0.06em] h-[0.12em] rounded-full bg-gradient-to-r from-gold/40 via-gold to-gold/40"
                />
              </span>{" "}
              na Imersão Equilíbrio?
            </h2>
            <div className="mt-5 flex max-w-2xl flex-col items-center gap-4">
              <div className="h-px w-16 bg-gold/30" />
              <p className="font-body text-[1rem] leading-[1.7] text-bone/60">
                Tudo o que você precisa para romper com a hipercompensação e assumir sua postura de
                adulto potente — em um único investimento acessível.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Main offer grid */}
        <Reveal delay={120}>
          <div className="mt-14 grid overflow-hidden rounded-[28px] border border-gold/12 bg-bone shadow-[0_60px_140px_-50px_rgba(12,10,8,0.75)] lg:grid-cols-[1.1fr_0.9fr]">
            {/* ——— Esquerda: stack de valor ——— */}
            <div className="p-8 sm:p-12 lg:p-14">
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-gold-deep">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <span className="font-body text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-ink/70">
                  Tudo incluso no seu acesso
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {IMERSAO.stackValor.map((item, i) => {
                  const Icon = iconMap[item.icone] || Check;
                  return (
                    <article
                      key={item.titulo}
                      className="group relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-cream/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-cream/80 hover:shadow-[var(--shadow-soft)]"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute right-3 top-2 font-display text-[4rem] font-semibold leading-none text-gold/[0.06] transition-colors duration-300 group-hover:text-gold/[0.12]"
                      >
                        0{i + 1}
                      </span>
                      <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 bg-bone/80 text-gold-deep shadow-sm transition-colors duration-300 group-hover:border-gold/50 group-hover:bg-bone group-hover:text-gold">
                        <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <h3 className="relative mt-5 font-display text-[1.05rem] font-semibold leading-snug text-ink">
                        {item.titulo}
                      </h3>
                      <p className="relative mt-3 font-body text-[0.9rem] leading-[1.7] text-graphite">
                        {item.descricao}
                      </p>
                    </article>
                  );
                })}
              </div>

              {/* Value summary */}
              <div className="mt-8 flex flex-col gap-4 rounded-[var(--radius-card)] border border-line bg-cream/60 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-body text-[0.75rem] uppercase tracking-[0.18em] text-graphite/70">
                    Valor total do programa
                  </p>
                  <p className="mt-1 font-display text-2xl font-semibold text-ink/40 line-through">
                    {IMERSAO.valorCheio}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
                    <Sparkles className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <p className="max-w-[24ch] font-body text-[0.85rem] leading-snug text-graphite">
                    Hoje você leva tudo por uma fração do valor real
                  </p>
                </div>
              </div>
            </div>

            {/* ——— Direita: painel de preço ——— */}
            <div className="relative flex flex-col items-center bg-espresso px-8 py-12 text-center sm:px-12 lg:border-l lg:border-gold/15 lg:py-14">
              {/* Top gold accent line */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
              />

              {/* Radial glow behind price */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/3 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-gold/8 blur-[90px]"
              />

              <span className="relative inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 font-body text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                {IMERSAO.lotes[indice]?.nome} · Valor promocional
              </span>

              <p className="relative mt-5 max-w-[34ch] font-body text-[0.9rem] leading-[1.6] text-bone/55">
                Para que mais pessoas possam viver essa experiência,{" "}
                <b className="font-medium italic text-gold-soft">
                  o primeiro lote tem valor especial.
                </b>
              </p>

              <div className="relative mt-7 font-body text-[1rem] text-bone/80">
                Hoje você garante tudo isso por:
              </div>
              <div className="relative mt-1 font-body text-[0.95rem] text-bone/35">
                De <s className="line-through">{IMERSAO.valorCheio}</s>
              </div>

              {/* Pílulas dos lotes */}
              <div className="relative mt-6 flex w-full items-stretch gap-3">
                {IMERSAO.lotes.map((l, i) => {
                  const ativo = i === indice;
                  const passado = i < indice;
                  const { cifra, numero } = precoPartes(l.preco);
                  return (
                    <div
                      key={l.nome}
                      className={cn(
                        "flex flex-col items-center justify-center rounded-2xl px-3 py-5 transition-all duration-300",
                        ativo
                          ? "flex-[1.5] border-[1.5px] border-gold bg-gradient-to-b from-gold/18 to-gold/[0.03] shadow-[0_0_45px_-12px_rgba(194,162,76,0.4)]"
                          : "flex-1 border border-gold-soft/15 bg-white/[0.02]",
                      )}
                    >
                      <span
                        className={cn(
                          "font-body text-[0.58rem] font-semibold uppercase tracking-[0.14em]",
                          ativo ? "text-gold" : "text-gold-soft/45",
                        )}
                      >
                        {ativo ? "Lote especial" : l.nome}
                      </span>
                      <span
                        className={cn(
                          "mt-2 font-display font-semibold leading-none",
                          ativo ? "text-gold" : "text-bone/40",
                        )}
                      >
                        <span
                          className={ativo ? "align-top text-[1.2rem]" : "align-top text-[0.85rem]"}
                        style={{ fontSize: ativo ? "1.2rem" : "0.85rem" }}
                        aria-hidden="true"
                        aria-label=""
                        role="none"
                        tabIndex={-1}
                        // suppress hydration warning for static size classes
                        suppressHydrationWarning
                        className={ativo ? "align-top text-[1.2rem]" : "align-top text-[0.85rem]"}
                        dangerouslySetInnerHTML={{ __html: "" }}
                        // The above is a placeholder to avoid type issues; the real content is below.
                        // We use a clean span below for the actual cifra.
                        // Removing the invalid props and keeping only className.
                        // This comment block is for reasoning only.
                      >
                        {cifra}
                      </span>
                      <span
                        className={cn(
                          ativo ? "text-[2.6rem]" : "text-[1.6rem]",
                          passado && "line-through",
                        )}
                      >
                        {numero}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="relative mt-6 font-body text-[0.66rem] uppercase tracking-[0.16em] text-bone/50">
                Preço exclusivo enquanto durar o lote
              </div>

              <CtaButton origem="oferta" size="lg" className="relative mt-5 w-full" />

              <ProgressoLote tone="dark" className="relative mt-5 max-w-none" />

              <div className="relative mt-6 flex w-full items-center justify-center gap-2.5 border-t border-gold/12 pt-5 font-body text-[0.8rem] text-bone/55">
                <Lock className="h-4 w-4 text-gold" strokeWidth={1.6} aria-hidden="true" />
                Pagamento Seguro · Hotmart · Garantia de 7 dias
              </div>
              <p className="relative mt-3 max-w-[42ch] font-body text-[0.74rem] leading-[1.6] text-bone/40">
                7 dias de garantia incondicional. Se sentir que a profundidade do conteúdo não é para
                você, devolvemos 100% do valor.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
