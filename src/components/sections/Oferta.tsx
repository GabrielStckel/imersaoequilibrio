import { Check } from "lucide-react";
import { IMERSAO } from "@/config/imersao";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { ProgressoLote } from "@/components/ProgressoLote";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { cn } from "@/lib/utils";

function ChamaHotmart({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 1.6c.5 2.7-.3 4.6-2.3 6.6-2.4 2.4-3.4 4-3.4 6.2 0 1.3.4 2.4 1.1 3.3-1.8-.6-3-2.4-3-4.6 0-.4 0-.8.1-1.2-1.7 1.5-2.7 3.5-2.7 5.7C3.3 21.3 7.2 25 12 25s8.7-3.7 8.7-7.4c0-3.3-1.6-5.6-4.2-8.2-1.6-1.6-2.7-3.1-3-7.8Z"
        fill="#FF4F00"
        transform="translate(0 -1)"
      />
    </svg>
  );
}

export function Oferta() {
  const { indice } = useLoteAtivo();
  const loteAtivo = IMERSAO.lotes[indice] ?? IMERSAO.lotes[0];

  return (
    <section id="oferta" className="relative overflow-hidden bg-espresso py-6 sm:py-12 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_70%_at_50%_100%,rgb(201_168_63_/_0.11),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-[1100px] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <SectionLabel tone="dark">GARANTA SUA VAGA</SectionLabel>
            <h2 className="mt-3 max-w-3xl font-display text-[28px] font-bold leading-[1.08] tracking-[-0.02em] text-pergaminho sm:mt-6 sm:text-[2.75rem] sm:leading-[1.1] lg:text-[3.25rem]">
              O que você garante ao entrar <span className="ouro-texto">ainda hoje</span> na Imersão
              Equilíbrio?
            </h2>
            <div className="mt-2.5 flex max-w-2xl flex-col items-center gap-2 sm:mt-5 sm:gap-4">
              <div className="filete-ouro w-16" />
              <p className="font-body text-base leading-[1.45] text-pergaminho/80 sm:leading-[1.7]">
                Tudo o que você precisa para romper com a hipercompensação e assumir sua postura de
                adulto potente, em um único investimento acessível.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <ul className="mx-auto mt-4 max-w-[620px] rounded-[20px] border border-borda bg-pergaminho px-[18px] py-[22px] shadow-[0_4px_12px_rgb(0_0_0_/_0.28),0_20px_48px_rgb(0_0_0_/_0.35)] sm:mt-10">
            {IMERSAO.stackValor.map((item, index) => (
              <li
                key={item.texto}
                className={cn(
                  "flex items-start gap-3 py-2 sm:py-3",
                  index < IMERSAO.stackValor.length - 1 &&
                    "border-b border-borda",
                )}
              >
                <span className="mt-[1px] grid h-[22px] w-[22px] shrink-0 place-items-center rounded-[6px] border border-ouro-tinta">
                  <Check className="h-3.5 w-3.5 text-ouro-tinta" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <span className="min-w-0 text-left font-body text-[15px] font-normal leading-[1.38] text-corpo sm:leading-[1.45]">
                  {item.bonus && (
                    <span className="mr-2 inline-block rounded-[4px] bg-terracota px-[7px] py-[2px] align-[2px] font-body text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
                      Bônus
                    </span>
                  )}
                  {item.texto}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={180}>
          <div className="mx-auto mt-9 max-w-[560px] rounded-[22px] border border-ouro/35 bg-espresso-alt px-5 py-[26px]">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.1em] text-ouro-luz">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ouro-luz opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ouro-luz" />
                </span>
                {loteAtivo.nome} · Valor promocional
              </span>
              <p className="mx-auto mt-2.5 max-w-[38ch] font-body text-[15px] leading-[1.4] text-pergaminho/80 sm:mt-4 sm:leading-[1.55]">
                Para que mais pessoas possam viver essa experiência,{" "}
                <b className="font-medium italic text-ouro-luz">
                  o primeiro lote tem valor especial.
                </b>
              </p>
              <p className="mt-3 font-body text-base text-pergaminho/85 sm:mt-4">
                Hoje você garante tudo isso por:
              </p>
            </div>

            <div className="mt-4 sm:mt-5">
              <div className="space-y-2.5 sm:space-y-4">
                {IMERSAO.composicaoValor.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3 font-body text-[15px]"
                  >
                    <span className="min-w-0 text-pergaminho/85">{item.label}</span>
                    <span className="tabular-nums text-right text-pergaminho">{item.valor}</span>
                  </div>
                ))}
              </div>

              <div className="filete-ouro my-3 w-full sm:my-6" aria-hidden="true" />

              <div className="space-y-3">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 font-body text-[15px] text-pergaminho/55">
                  <span>Valor total</span>
                  <s className="tabular-nums">{IMERSAO.valorCheio}</s>
                </div>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3">
                  <span className="font-body text-[15px] font-medium text-pergaminho/85">
                    Hoje você paga
                  </span>
                  <span className="ouro-texto-escuro font-display text-[46px] font-bold leading-none tabular-nums">
                    {loteAtivo.preco}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 items-stretch gap-2 sm:mt-5 sm:gap-3">
              {IMERSAO.lotes.map((lote, loteIndex) => {
                const ativo = loteIndex === indice;
                return (
                  <div
                    key={lote.nome}
                    className={cn(
                      "relative flex min-w-0 flex-col items-center justify-center rounded-[14px] px-2 pb-2.5 pt-3.5 text-center sm:px-3 sm:pb-5 sm:pt-6",
                      ativo
                        ? "border-[1.5px] border-ouro bg-[rgb(34_28_18_/_0.7)]"
                        : "border border-[rgb(201_168_63_/_0.18)] bg-transparent",
                    )}
                  >
                    {ativo && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-terracota-luz px-2 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.08em] text-espresso sm:text-[11px]">
                        Lote atual
                      </span>
                    )}
                    <span
                      className={cn(
                        "font-body text-xs font-semibold uppercase tracking-[0.1em]",
                        ativo ? "text-ouro-luz" : "text-pergaminho/55",
                      )}
                    >
                      {lote.nome}
                    </span>
                    {ativo ? (
                      <>
                        <span className="mt-2 font-display text-xl font-bold leading-none text-ouro-luz tabular-nums sm:text-2xl">
                          {lote.preco}
                        </span>
                        <span className="mt-2 font-body text-[12px] text-pergaminho/80">
                          5x de R$ 9,68
                        </span>
                      </>
                    ) : (
                      <>
                        <s className="mt-2 font-display text-xl font-semibold leading-none text-pergaminho/45 tabular-nums sm:text-2xl">
                          {lote.preco}
                        </s>
                        <span className="mt-2 font-body text-[11px] text-pergaminho/55">
                          em breve
                        </span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="mt-4 text-center font-body text-xs uppercase tracking-[0.1em] text-pergaminho/80 sm:mt-5">
              Preço exclusivo enquanto durar o lote
            </p>

            <CtaButton to="checkout" origem="oferta" size="lg" className="mt-4 w-full sm:mt-5" />
            <ProgressoLote tone="dark" className="mx-auto mt-5 max-w-none" />

            <div className="relative mt-5 flex flex-col items-center gap-1 pt-5 text-center">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-ouro/25" />
              <div className="flex items-center justify-center gap-2">
                <ChamaHotmart className="h-[22px] w-[22px] shrink-0" />
                <span className="font-display text-[15px] font-semibold text-pergaminho">Hotmart</span>
              </div>
              <p className="font-body text-[13px] font-medium text-pergaminho/85">Pagamento Seguro</p>
              <p className="font-body text-[12px] font-normal text-pergaminho/70">
                Garantia incondicional de 7 dias
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
