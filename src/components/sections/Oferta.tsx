import { Check, Lock, Video, FileText, Gift, type LucideIcon } from "lucide-react";
import { IMERSAO } from "@/config/imersao";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { ProgressoLote } from "@/components/ProgressoLote";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Video,
  FileText,
  Gift,
};

const composicaoValor = [
  { label: "Imersão ao vivo (2 encontros)", valor: "R$ 297" },
  { label: "Material de apoio prático", valor: "R$ 97" },
  { label: "Bônus: A Postura Sistêmica", valor: "R$ 103" },
];

export function Oferta() {
  const { indice } = useLoteAtivo();
  const loteAtivo = IMERSAO.lotes[indice] ?? IMERSAO.lotes[0];

  return (
    <section id="oferta" className="relative overflow-hidden bg-espresso py-16 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_70%_at_50%_100%,rgb(201_168_63_/_0.11),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-[1100px] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <SectionLabel tone="dark">GARANTA SUA VAGA</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-pergaminho sm:text-[2.75rem] lg:text-[3.25rem]">
              O que você garante ao entrar <span className="ouro-texto">ainda hoje</span> na Imersão
              Equilíbrio?
            </h2>
            <div className="mt-5 flex max-w-2xl flex-col items-center gap-4">
              <div className="filete-ouro w-16" />
              <p className="font-body text-base leading-[1.7] text-pergaminho/80">
                Tudo o que você precisa para romper com a hipercompensação e assumir sua postura de
                adulto potente — em um único investimento acessível.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {IMERSAO.stackValor.map((item, index) => {
            const Icon = iconMap[item.icone] ?? Check;
            const bonus = index === 2;

            return (
              <Reveal
                key={item.titulo}
                delay={index * 70}
                className={cn("h-full", bonus && "md:col-span-2 lg:col-span-1")}
              >
                <article className="card-nivel-b relative flex h-full flex-col">
                  <span
                    className={cn(
                      "absolute right-4 top-4 rounded-full px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.1em]",
                      bonus
                        ? "bg-terracota text-pergaminho"
                        : "border border-ouro-tinta text-ouro-tinta",
                    )}
                  >
                    {bonus ? "Bônus" : "Incluso"}
                  </span>

                  <span className="icone-card">
                    <Icon strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 max-w-[22ch] pr-10 font-display text-[19px] font-semibold leading-snug text-tinta">
                    {item.titulo}
                  </h3>
                  <p className="mt-3 font-body text-[15px] leading-[1.65] text-corpo">
                    {item.descricao}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={180}>
          <div className="mx-auto mt-12 max-w-[560px]">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-terracota-luz px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.1em] text-espresso">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-espresso opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-espresso" />
                </span>
                {loteAtivo.nome} · Valor promocional
              </span>
              <p className="mx-auto mt-5 max-w-[38ch] font-body text-[15px] leading-[1.65] text-pergaminho/80">
                Para que mais pessoas possam viver essa experiência,{
                " "}
                <b className="font-medium italic text-ouro-luz">
                  o primeiro lote tem valor especial.
                </b>
              </p>
              <p className="mt-5 font-body text-base text-pergaminho/85">
                Hoje você garante tudo isso por:
              </p>
            </div>

            <div className="mt-6 rounded-[18px] border border-ouro/35 bg-espresso-alt/55 p-5 shadow-[inset_0_1px_0_rgb(240_223_164_/_0.14)] sm:p-7">
              <div className="space-y-4">
                {composicaoValor.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3 font-body text-[15px] text-pergaminho/85"
                  >
                    <span className="min-w-0">{item.label}</span>
                    <span className="tabular-nums text-right">{item.valor}</span>
                  </div>
                ))}
              </div>

              <div className="filete-ouro my-6 w-full" aria-hidden="true" />

              <div className="space-y-3">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 font-body text-[15px] text-pergaminho/55">
                  <span>Valor total</span>
                  <s className="tabular-nums">{IMERSAO.valorCheio}</s>
                </div>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3">
                  <span className="font-body text-[15px] font-medium text-pergaminho/85">
                    Hoje você paga
                  </span>
                  <span className="ouro-texto font-display text-[44px] font-bold leading-none tabular-nums">
                    {loteAtivo.preco}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
              {IMERSAO.lotes.map((lote, loteIndex) => {
                const ativo = loteIndex === indice;
                return (
                  <div
                    key={lote.nome}
                    className={cn(
                      "relative flex min-w-0 flex-col items-center justify-center rounded-[14px] border bg-espresso-alt/55 px-2 pb-4 pt-5 text-center sm:px-3 sm:pb-5 sm:pt-6",
                      ativo ? "border-ouro/70" : "border-ouro/20",
                    )}
                  >
                    {ativo && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-terracota-luz px-2 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.08em] text-espresso sm:text-[11px]">
                        Lote atual
                      </span>
                    )}
                    <span className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-ouro-luz">
                      {lote.nome}
                    </span>
                    <span className="mt-2 font-display text-xl font-semibold leading-none text-pergaminho/90 tabular-nums sm:text-2xl">
                      {lote.preco}
                    </span>
                    <span className="mt-2 min-h-[18px] font-body text-xs text-pergaminho/70">
                      {ativo ? "Valor promocional" : "Em breve"}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="mt-5 text-center font-body text-xs uppercase tracking-[0.1em] text-pergaminho/80">
              Preço exclusivo enquanto durar o lote
            </p>

            <CtaButton origem="oferta" size="lg" className="mt-5 w-full" />
            <ProgressoLote tone="dark" className="mx-auto mt-5 max-w-none" />

            <div className="relative mt-6 flex w-full items-center justify-center gap-2.5 pt-5 text-center font-body text-[13px] text-pergaminho/85">
              <span aria-hidden="true" className="filete-ouro absolute inset-x-0 top-0" />
              <Lock className="h-4 w-4 shrink-0 text-ouro-luz" strokeWidth={1.6} aria-hidden="true" />
              Pagamento Seguro · Hotmart · Garantia de 7 dias
            </div>
            <p className="mx-auto mt-3 max-w-[46ch] text-center font-body text-[13px] leading-[1.65] text-pergaminho/85">
              7 dias de garantia incondicional. Se sentir que a profundidade do conteúdo não é para
              você, devolvemos 100% do valor.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}