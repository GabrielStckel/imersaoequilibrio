import { Check } from "lucide-react";
import { IMERSAO } from "@/config/imersao";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { ProgressoLote } from "@/components/ProgressoLote";
import { HotmartGuarantee } from "@/components/HotmartGuarantee";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { cn } from "@/lib/utils";

const itensBase = IMERSAO.stackValor.filter((item) => !item.bonus);
const itensBonus = IMERSAO.stackValor.filter((item) => item.bonus);

function ItemLista({ texto, comBorda }: { texto: string; comBorda: boolean }) {
  return (
    <li
      className={cn(
        "flex items-start gap-3 py-2 sm:py-3",
        comBorda && "border-b border-borda lg:border-ouro/20",
      )}
    >
      <span className="mt-[1px] grid h-[22px] w-[22px] shrink-0 place-items-center rounded-[6px] border border-ouro-tinta lg:h-6 lg:w-6 lg:border-ouro-luz">
        <Check
          className="h-3.5 w-3.5 text-ouro-tinta lg:text-ouro-luz"
          strokeWidth={2.4}
          aria-hidden="true"
        />
      </span>
      <span className="min-w-0 text-left font-body text-[15px] font-normal leading-[1.38] text-corpo sm:leading-[1.45] lg:text-[17px] lg:leading-[1.6] lg:text-pergaminho/90">
        {texto}
      </span>
    </li>
  );
}

export function Oferta() {
  const { indice } = useLoteAtivo();
  const loteAtivo = IMERSAO.lotes[indice] ?? IMERSAO.lotes[0];

  return (
    <section id="oferta" className="relative bg-espresso py-6 sm:py-12 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_70%_at_50%_100%,rgb(201_168_63_/_0.11),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-[1100px] px-5 sm:px-8 lg:max-w-[1280px]">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <SectionLabel tone="dark">GARANTA SUA VAGA</SectionLabel>
            <h2 className="mt-3 max-w-3xl font-display text-[28px] font-bold leading-[1.08] tracking-[-0.02em] text-pergaminho sm:mt-6 sm:text-[2.75rem] sm:leading-[1.1] lg:max-w-[26ch] lg:text-[40px] lg:leading-[1.15] lg:tracking-[-0.02em]">
              O que você garante ao entrar <span className="ouro-texto">ainda hoje</span> na Imersão
              Equilíbrio?
            </h2>
            <div className="mt-2.5 flex max-w-2xl flex-col items-center gap-2 sm:mt-5 sm:gap-4">
              <div className="filete-ouro w-16" />
              <p className="font-body text-base leading-[1.45] text-pergaminho/80 sm:leading-[1.7] lg:text-[20px] lg:leading-[1.6]">
                Tudo o que você precisa para romper com a hipercompensação e assumir sua postura de
                adulto potente, em um único investimento acessível.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="lg:mt-14 lg:grid lg:grid-cols-[1fr_520px] lg:items-start lg:gap-14">
          <Reveal delay={90}>
            <div className="lg:pt-1">
              <span className="hidden font-body uppercase text-ouro-luz lg:block lg:text-[13px] lg:font-semibold lg:tracking-[0.12em]">
                O que está incluído
              </span>
              <ul className="mx-auto mt-4 max-w-[620px] rounded-[20px] border border-borda bg-pergaminho px-[18px] py-[22px] shadow-[0_4px_12px_rgb(0_0_0_/_0.28),0_20px_48px_rgb(0_0_0_/_0.35)] sm:mt-10 lg:mx-0 lg:mt-4 lg:max-w-none lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none">
                {itensBase.map((item, index) => (
                  <ItemLista
                    key={item.texto}
                    texto={item.texto}
                    comBorda={index < itensBase.length - 1}
                  />
                ))}

                {itensBonus.map((item, index) => (
                  <li key={item.texto} className="lg:hidden">
                    <div
                      className={cn(
                        "flex items-start gap-3 py-2 sm:py-3",
                        index < itensBonus.length - 1 && "border-b border-borda",
                      )}
                    >
                      <span className="mt-[1px] grid h-[22px] w-[22px] shrink-0 place-items-center rounded-[6px] border border-ouro-tinta">
                        <Check
                          className="h-3.5 w-3.5 text-ouro-tinta"
                          strokeWidth={2.4}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="min-w-0 text-left font-body text-[15px] font-normal leading-[1.38] text-corpo sm:leading-[1.45]">
                        <span className="mr-2 inline-block rounded-[4px] bg-terracota px-[7px] py-[2px] align-[2px] font-body text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
                          Bônus
                        </span>
                        {item.texto}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="hidden lg:mt-8 lg:block lg:rounded-2xl lg:border lg:border-[rgb(201_168_63_/_0.30)] lg:bg-[rgb(201_168_63_/_0.06)] lg:p-7">
                <span className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-terracota-luz">
                  Bônus · R$ 197
                </span>
                <ul className="mt-3">
                  {itensBonus.map((item, index) => (
                    <ItemLista
                      key={item.texto}
                      texto={item.texto}
                      comBorda={index < itensBonus.length - 1}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180} className="lg:sticky lg:top-[110px]">
            <div className="mx-auto mt-9 max-w-[560px] rounded-[22px] border border-ouro/35 bg-espresso-alt px-5 py-[26px] lg:mt-0 lg:max-w-none lg:border-[#E4DBC6] lg:bg-[#FCFBF8] lg:p-10 lg:shadow-[0_4px_12px_rgb(0_0_0_/_0.30),0_24px_60px_rgb(0_0_0_/_0.40)]">
              <div className="text-center">
                <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.1em] text-ouro-luz lg:text-[14px] lg:text-ouro-tinta">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ouro-luz opacity-60 lg:bg-ouro-tinta" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ouro-luz lg:bg-ouro-tinta" />
                  </span>
                  {loteAtivo.nome} · Valor promocional
                </span>
                <p className="mx-auto mt-2.5 max-w-[38ch] font-body text-[15px] leading-[1.4] text-pergaminho/80 sm:mt-4 sm:leading-[1.55] lg:max-w-none lg:text-[18px] lg:leading-[1.75] lg:text-corpo">
                  Para que mais pessoas possam viver essa experiência,{" "}
                  <b className="font-medium italic text-ouro-luz lg:text-ouro-tinta">
                    o primeiro lote tem valor especial.
                  </b>
                </p>
                <p className="mt-3 font-body text-base text-pergaminho/85 sm:mt-4 lg:text-[18px] lg:leading-[1.75] lg:text-tinta">
                  Hoje você garante tudo isso por:
                </p>
              </div>

              <div className="mt-4 sm:mt-5">
                <div className="space-y-2.5 sm:space-y-4">
                  {IMERSAO.composicaoValor.map((item) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3 font-body text-[15px] lg:text-[17px] lg:leading-[1.6]"
                    >
                      <span className="min-w-0 text-pergaminho/85 lg:text-corpo">{item.label}</span>
                      <span className="tabular-nums text-right text-pergaminho lg:text-tinta">
                        {item.valor}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="filete-ouro my-3 w-full sm:my-6" aria-hidden="true" />

                <div className="space-y-3">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 font-body text-[15px] text-pergaminho/55 lg:text-[17px] lg:leading-[1.6] lg:text-corpo/55">
                    <span>Valor total</span>
                    <s className="tabular-nums">{IMERSAO.valorCheio}</s>
                  </div>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3">
                    <span className="font-body text-[15px] font-medium text-pergaminho/85 lg:text-[17px] lg:leading-[1.6] lg:text-tinta">
                      Hoje você paga
                    </span>
                    <span className="ouro-texto-escuro font-display text-[46px] font-bold leading-none tabular-nums lg:bg-none lg:text-[64px] lg:text-ouro-tinta">
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
                        "relative flex min-w-0 flex-col items-center justify-center rounded-[14px] px-2 pb-2.5 pt-3.5 text-center sm:px-3 sm:pb-5 sm:pt-6 lg:bg-white",
                        ativo
                          ? "border-[1.5px] border-ouro bg-[rgb(34_28_18_/_0.7)] lg:border-[1.5px] lg:border-[#7D5F1C]"
                          : "border border-[rgb(201_168_63_/_0.18)] bg-transparent lg:border lg:border-[#E4DBC6]",
                      )}
                    >
                      {ativo && (
                        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-terracota-luz px-2 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.08em] text-espresso sm:text-[11px] lg:text-[12px]">
                          Lote atual
                        </span>
                      )}
                      <span
                        className={cn(
                          "font-body text-xs font-semibold uppercase tracking-[0.1em] lg:text-[12px]",
                          ativo ? "text-ouro-luz lg:text-ouro-tinta" : "text-pergaminho/55 lg:text-corpo/60",
                        )}
                      >
                        {lote.nome}
                      </span>
                      {ativo ? (
                        <>
                          <span className="mt-2 font-display text-xl font-bold leading-none text-ouro-luz tabular-nums sm:text-2xl lg:text-ouro-tinta">
                            {lote.preco}
                          </span>
                          <span className="mt-2 font-body text-[12px] text-pergaminho/80 lg:text-[14px] lg:text-corpo">
                            {lote.parcela.replace("ou ", "")}
                          </span>
                        </>
                      ) : (
                        <>
                          <s className="mt-2 font-display text-xl font-semibold leading-none text-pergaminho/45 tabular-nums sm:text-2xl lg:text-corpo/45">
                            {lote.preco}
                          </s>
                          <span className="mt-2 font-body text-[11px] text-pergaminho/55 lg:text-[14px] lg:text-corpo/60">
                            em breve
                          </span>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="mt-4 text-center font-body text-xs uppercase tracking-[0.1em] text-pergaminho/80 sm:mt-5 lg:text-[14px] lg:text-corpo">
                Preço exclusivo enquanto durar o lote
              </p>

              <CtaButton
                to="checkout"
                origem="oferta"
                size="lg"
                className="mt-4 w-full sm:mt-5 lg:hidden"
              />
              <CtaButton
                to="checkout"
                origem="oferta"
                size="lg"
                surface="light"
                className="mt-4 hidden w-full sm:mt-5 lg:inline-flex"
              />
              <ProgressoLote tone="dark" className="mx-auto mt-5 max-w-none lg:hidden" />
              <ProgressoLote tone="light" className="mx-auto mt-5 hidden max-w-none lg:block" />

              <HotmartGuarantee className="mt-5 pt-5" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
