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
  Sparkles,
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
        className="pointer-events-none absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-ouro/6 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-ouro/5 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:max-w-[88rem]">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <SectionLabel tone="dark">GARANTA SUA VAGA</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.02em] text-pergaminho sm:text-[2.75rem] lg:text-[3.25rem]">
              O que você garante ao entrar{" "}
              <span className="relative inline-block">
                ainda hoje
                <span
                  aria-hidden="true"
                  className="filete-ouro absolute inset-x-[-0.12em] -bottom-[0.06em]"
                />
              </span>{" "}
              na Imersão Equilíbrio?
            </h2>
            <div className="mt-5 flex max-w-2xl flex-col items-center gap-4">
              <div className="filete-ouro w-16" />
              <p className="font-body text-[1rem] leading-[1.7] text-pergaminho/80">
                Tudo o que você precisa para romper com a hipercompensação e assumir sua postura de
                adulto potente — em um único investimento acessível.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Main offer grid */}
        <Reveal delay={120}>
          <div className="mt-14 grid overflow-hidden rounded-[28px] border border-ouro/12 bg-pergaminho shadow-[0_60px_140px_-50px_rgba(12,10,8,0.75)] lg:grid-cols-[1.1fr_1fr]">
            {/* ——— Esquerda: stack de valor ——— */}
            <div className="p-8 sm:p-12 lg:p-8 xl:p-10">
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ouro/10 text-ouro-tinta">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <span className="font-body text-[0.9375rem] font-semibold uppercase tracking-[0.12em] text-corpo">
                  Tudo incluso no seu acesso
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {IMERSAO.stackValor.map((item, i) => {
                  const Icon = iconMap[item.icone] || Check;
                  return (
                    <article
                      key={item.titulo}
                       className="group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-borda bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ouro/40 hover:bg-white hover:shadow-[var(--shadow-soft)] sm:p-6 lg:aspect-square lg:justify-between lg:gap-3 lg:p-5 xl:p-6"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute right-2 top-1 font-display text-[2.75rem] font-semibold leading-none text-ouro-luz/[0.06] transition-colors duration-300 group-hover:text-ouro-luz/[0.12]"
                      >
                        0{i + 1}
                      </span>
                      <div>
                          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-ouro/25 bg-pergaminho/80 text-ouro-tinta shadow-sm transition-colors duration-300 group-hover:border-ouro/50 group-hover:bg-pergaminho group-hover:text-ouro-tinta">
                           <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.5} aria-hidden="true" />
                        </span>
                         <h3 className="relative mt-4 font-display text-[0.95rem] font-semibold leading-snug text-tinta sm:text-[1.05rem] lg:text-[1rem] lg:leading-snug xl:text-[1.08rem]">
                          {item.titulo}
                        </h3>
                      </div>
                       <p className="relative mt-2 line-clamp-4 font-body text-[0.9375rem] leading-[1.6] text-corpo sm:text-[0.9375rem] lg:mt-0 lg:line-clamp-5 lg:text-[0.9375rem] lg:leading-[1.5] xl:text-[0.9375rem]">
                        {item.descricao}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* ——— Direita: painel de preço ——— */}
            <div className="relative flex flex-col items-center bg-espresso px-8 py-12 text-center sm:px-12 lg:border-l lg:border-ouro/15 lg:px-10 lg:py-16 xl:px-12 xl:py-20">
              {/* Top gold accent line */}
              <div aria-hidden="true" className="filete-ouro pointer-events-none absolute left-0 right-0 top-0" />

              {/* Radial glow behind price */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/3 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-ouro/8 blur-[90px]"
              />

              <span className="relative inline-flex items-center gap-2 rounded-full border border-ouro/40 bg-ouro/10 px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.12em] text-ouro-luz lg:px-5 lg:py-2.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ouro opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ouro" />
                </span>
                {IMERSAO.lotes[indice]?.nome} · Valor promocional
              </span>

              <p className="relative mt-5 max-w-[34ch] font-body text-[0.9375rem] leading-[1.6] text-pergaminho/80 lg:max-w-[38ch] lg:text-[0.95rem]">
                Para que mais pessoas possam viver essa experiência,{" "}
                <b className="font-medium italic text-ouro-luz">
                  o primeiro lote tem valor especial.
                </b>
              </p>

              <div className="relative mt-7 font-body text-[1rem] text-pergaminho/80 lg:text-[1.1rem]">
                Hoje você garante tudo isso por:
              </div>
              <div className="relative mt-1 font-body text-[0.95rem] text-pergaminho/80 lg:text-[1.05rem]">
                De <s className="line-through">{IMERSAO.valorCheio}</s>
              </div>

              {/* Pílulas dos lotes */}
              <div className="relative mt-6 flex w-full flex-col gap-3">
                {/* Lote ativo — destaque em cima */}
                {(() => {
                  const l = IMERSAO.lotes[indice] ?? IMERSAO.lotes[0];
                  const { cifra, numero } = precoPartes(l.preco);
                  return (
                    <div className="moldura-ouro-escura flex w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-ouro/18 to-ouro/[0.03] px-3 py-6 shadow-[0_0_55px_-10px_rgba(138,106,32,0.38)] transition-all duration-300 lg:py-8">
                      <span className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-ouro-luz">
                        Lote especial
                      </span>
                      <span className="ouro-texto mt-2 font-display font-semibold leading-none">
                        <span className="align-top text-[1.35rem] lg:text-[1.65rem]">{cifra}</span>{" "}
                        <span className="text-[3rem] lg:text-[3.75rem]">{numero}</span>
                      </span>
                    </div>
                  );
                })()}

                {/* Lotes futuros — lado a lado */}
                <div className="grid w-full grid-cols-2 gap-3">
                  {IMERSAO.lotes.map((l, i) => {
                    if (i === indice) return null;
                    const passado = i < indice;
                    const { cifra, numero } = precoPartes(l.preco);
                    return (
                      <div
                        key={l.nome}
                        className="flex flex-col items-center justify-center rounded-2xl border border-ouro-luz/15 bg-white/[0.02] px-3 py-5 transition-all duration-300 lg:py-6"
                      >
                        <span className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-ouro-luz">
                          {l.nome}
                        </span>
                        <span className="mt-2 font-display font-semibold leading-none text-pergaminho/80">
                          <span className="align-top text-[0.9375rem] lg:text-[1rem]">{cifra}</span>{" "}
                          <span className={cn("text-[1.6rem] lg:text-[2rem]", passado && "line-through")}>{numero}</span>
                        </span>
                        <span className="mt-1.5 font-body text-xs font-medium uppercase tracking-[0.12em] text-pergaminho/80">
                          Em breve
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative mt-6 font-body text-xs uppercase tracking-[0.12em] text-pergaminho/80">
                Preço exclusivo enquanto durar o lote
              </div>

              <CtaButton origem="oferta" size="lg" className="relative mt-5 w-full lg:py-5 lg:text-lg" />

              <ProgressoLote tone="dark" className="relative mt-5 max-w-none" />

              <div className="relative mt-6 flex w-full items-center justify-center gap-2.5 pt-5 font-body text-[0.9375rem] text-pergaminho/80 lg:text-[0.9375rem]">
                <span aria-hidden="true" className="filete-ouro absolute inset-x-0 top-0" />
                <Lock className="h-4 w-4 text-ouro-luz" strokeWidth={1.6} aria-hidden="true" />
                Pagamento Seguro · Hotmart · Garantia de 7 dias
              </div>
              <p className="relative mt-3 max-w-[42ch] font-body text-[0.9375rem] leading-[1.6] text-pergaminho/80 lg:max-w-[46ch] lg:text-[0.9375rem]">
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
