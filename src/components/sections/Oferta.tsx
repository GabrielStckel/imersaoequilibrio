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
    <section id="oferta" className="relative overflow-hidden bg-espresso py-16 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_70%_at_50%_100%,rgb(201_168_63_/_0.11),transparent_65%)]"
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
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            {/* ——— Esquerda: stack de valor ——— */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ouro/28 bg-espresso-alt text-ouro-luz">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <span className="font-body text-[0.9375rem] font-semibold uppercase tracking-[0.1em] text-pergaminho">
                  Tudo incluso no seu acesso
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {IMERSAO.stackValor.map((item) => {
                  const Icon = iconMap[item.icone] || Check;
                  const destaque = item.icone === "Gift";
                  return (
                    <article
                      key={item.titulo}
                      className={cn(
                        "group relative flex flex-col overflow-hidden p-[26px] transition-transform duration-300 hover:-translate-y-1 lg:aspect-square lg:justify-between lg:gap-3",
                        destaque ? "card-nivel-c" : "card-nivel-b",
                      )}
                    >
                      {destaque && (
                        <span className="absolute right-3 top-3 rounded-full bg-ouro-tinta px-2.5 py-1 font-body text-xs font-semibold uppercase tracking-[0.1em] text-pergaminho">
                          Bônus
                        </span>
                      )}
                      <div>
                          <span className="icone-card relative">
                            <Icon strokeWidth={1.5} aria-hidden="true" />
                        </span>
                         <h3 className="relative mt-4 font-display text-[0.95rem] font-semibold leading-snug text-tinta sm:text-[1.05rem] lg:text-[1rem] lg:leading-snug xl:text-[1.08rem]">
                          {item.titulo}
                        </h3>
                      </div>
                       <p className="relative mt-2 font-body text-[0.9375rem] leading-[1.6] text-corpo sm:text-[0.9375rem] lg:mt-0 lg:line-clamp-5 lg:text-[0.9375rem] lg:leading-[1.5] xl:text-[0.9375rem]">
                        {item.descricao}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* ——— Direita: painel de preço ——— */}
            <div className="relative flex flex-col items-center border-t border-ouro/20 pt-10 text-center lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              {/* Top gold accent line */}
              <div aria-hidden="true" className="filete-ouro pointer-events-none absolute left-0 right-0 top-0" />

              <span className="relative inline-flex items-center gap-2 rounded-full bg-terracota-luz px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.1em] text-espresso lg:px-5 lg:py-2.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-espresso opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-espresso" />
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
                    <div className="card-nivel-c relative flex w-full flex-col items-center justify-center px-3 pb-6 pt-12 transition-all duration-300 lg:pb-8 lg:pt-12">
                      <span className="absolute right-3 top-3 rounded-full bg-ouro-tinta px-2.5 py-1 font-body text-xs font-semibold uppercase tracking-[0.1em] text-pergaminho">
                        Oferta principal
                      </span>
                      <span className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-ouro-tinta">
                        Lote especial
                      </span>
                      <span className="ouro-texto mt-2 font-display text-[52px] font-bold leading-none tabular-nums">
                        <span className="align-top text-[1.35rem]">{cifra}</span>{" "}
                        <span>{numero}</span>
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
