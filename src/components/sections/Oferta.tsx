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
                adulto potente, em um único investimento acessível.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <ul className="mx-auto mt-10 max-w-[620px]">
            {IMERSAO.stackValor.map((item, index) => (
              <li
                key={item.texto}
                className={cn(
                  "flex items-start gap-3 py-[13px]",
                  index < IMERSAO.stackValor.length - 1 &&
                    "border-b border-[rgb(201_168_63_/_0.18)]",
                )}
              >
                <span className="mt-[1px] grid h-[22px] w-[22px] shrink-0 place-items-center rounded-[6px] border border-ouro">
                  <Check className="h-3.5 w-3.5 text-ouro" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <span className="min-w-0 text-left font-body text-[15px] font-normal leading-[1.45] text-pergaminho">
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
          <div
            className="mx-auto mt-10 max-w-[560px] rounded-[22px] border border-borda px-5 py-[26px] sm:px-7"
            style={{
              backgroundColor: "#FCFBF8",
              boxShadow: "0 4px 12px rgba(0,0,0,.30), 0 24px 60px rgba(0,0,0,.40)",
            }}
          >
            <div className="text-center">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-ouro-tinta">
                {loteAtivo.nome} · Valor promocional
              </span>
              <p className="mx-auto mt-4 max-w-[38ch] font-body text-[15px] leading-[1.65] text-corpo">
                Para que mais pessoas possam viver essa experiência,{" "}
                <b className="font-medium italic text-ouro-tinta">
                  o primeiro lote tem valor especial.
                </b>
              </p>
            </div>

            <div className="mt-6 space-y-3.5">
              {IMERSAO.composicaoValor.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3 font-body text-[15px] text-corpo"
                >
                  <span className="min-w-0">{item.label}</span>
                  <span className="tabular-nums text-right text-tinta">{item.valor}</span>
                </div>
              ))}
            </div>

            <div className="my-6 h-px w-full bg-borda" aria-hidden="true" />

            <div className="space-y-3">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 font-body text-[15px] text-corpo/55">
                <span>Valor total</span>
                <s className="tabular-nums">{IMERSAO.valorCheio}</s>
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3">
                <span className="font-body text-[15px] font-medium text-corpo">
                  Hoje você paga
                </span>
                <span className="font-display text-[46px] font-bold leading-none text-ouro-tinta tabular-nums">
                  {loteAtivo.preco}
                </span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 items-stretch gap-2 sm:gap-3">
              {IMERSAO.lotes.map((lote, loteIndex) => {
                const ativo = loteIndex === indice;
                return (
                  <div
                    key={lote.nome}
                    className={cn(
                      "relative flex min-w-0 flex-col items-center justify-center rounded-[14px] bg-white px-2 pb-4 pt-5 text-center sm:px-3 sm:pb-5 sm:pt-6",
                      ativo ? "border-[1.5px] border-[#7D5F1C]" : "border border-borda",
                    )}
                  >
                    {ativo && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-terracota px-2 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.08em] text-white sm:text-[11px]">
                        Lote atual
                      </span>
                    )}
                    <span
                      className={cn(
                        "font-body text-xs font-semibold uppercase tracking-[0.1em]",
                        ativo ? "text-ouro-tinta" : "text-corpo/55",
                      )}
                    >
                      {lote.nome}
                    </span>
                    {ativo ? (
                      <>
                        <span className="mt-2 font-display text-xl font-bold leading-none text-ouro-tinta tabular-nums sm:text-2xl">
                          {lote.preco}
                        </span>
                        <span className="mt-2 font-body text-[12px] text-corpo">5x de R$ 9,68</span>
                      </>
                    ) : (
                      <>
                        <s className="mt-2 font-display text-xl font-semibold leading-none text-corpo/45 tabular-nums sm:text-2xl">
                          {lote.preco}
                        </s>
                        <span className="mt-2 font-body text-[11px] text-corpo/55">em breve</span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            <CtaButton origem="oferta" size="lg" surface="light" className="mt-5 w-full" />
            <ProgressoLote tone="light" className="mx-auto mt-5 max-w-none" />

            <div className="mt-5 border-t border-borda pt-5 text-center">
              <div className="flex items-center justify-center gap-2">
                <ChamaHotmart className="h-[22px] w-[22px] shrink-0" />
                <span className="font-display text-[15px] font-semibold text-tinta">Hotmart</span>
              </div>
              <p className="mt-1 font-body text-[13px] font-medium text-corpo">Pagamento Seguro</p>
              <p className="mt-1 font-body text-[12px] text-corpo/75">
                Garantia incondicional de 7 dias
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
