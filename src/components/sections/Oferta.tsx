import { Check, Lock } from "lucide-react";
import { IMERSAO } from "@/config/imersao";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { ProgressoLote } from "@/components/ProgressoLote";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { cn } from "@/lib/utils";

function precoPartes(preco: string) {
  const [cifra, ...resto] = preco.split(" ");
  return { cifra, numero: resto.join(" ") };
}

export function Oferta() {
  const { indice } = useLoteAtivo();

  return (
    <section id="oferta" className="grain relative overflow-hidden bg-espresso py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
      />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel tone="dark" className="justify-center">
            07 — Garanta sua vaga
          </SectionLabel>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 grid overflow-hidden rounded-[22px] bg-bone shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)] lg:grid-cols-[1.05fr_0.95fr]">
            {/* ——— Esquerda: checklist ——— */}
            <div className="p-9 sm:p-11 lg:p-[52px]">
              <h2 className="font-display text-[1.7rem] font-semibold leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2rem]">
                O que você garante ao entrar <em className="italic text-gold-deep">ainda hoje</em> na
                Imersão Equilíbrio?
              </h2>

              <ul className="mt-8">
                {IMERSAO.stackValor.map((item, i) => (
                  <li
                    key={item.titulo}
                    className={cn("flex items-start gap-3.5 py-4", i > 0 && "border-t border-line")}
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold-deep/40 text-gold-deep"
                    >
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <p className="font-body text-[0.96rem] leading-[1.5] text-ink">{item.titulo}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* ——— Direita: painel de preço ——— */}
            <div className="flex flex-col items-center bg-espresso px-8 py-11 text-center sm:px-10 lg:border-l lg:border-gold/20">
              <span className="rounded-full border border-gold/40 px-4 py-2 font-body text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold">
                {IMERSAO.lotes[indice]?.nome} · Valor promocional · Poucas vagas
              </span>

              <p className="mt-4 max-w-[34ch] font-body text-[0.86rem] leading-[1.55] text-bone/60">
                Para que mais pessoas possam viver essa experiência,{" "}
                <b className="font-medium italic text-gold-soft">
                  o primeiro lote tem valor especial.
                </b>
              </p>

              <div className="mt-6 font-body text-[0.98rem] text-bone/85">
                Hoje você garante tudo isso por:
              </div>
              <div className="mt-1 font-body text-[0.9rem] text-bone/40">
                De <s className="line-through">{IMERSAO.valorCheio}</s>
              </div>

              {/* pílulas dos lotes */}
              <div className="mt-5 flex w-full items-stretch gap-2.5">
                {IMERSAO.lotes.map((l, i) => {
                  const ativo = i === indice;
                  const passado = i < indice;
                  const { cifra, numero } = precoPartes(l.preco);
                  return (
                    <div
                      key={l.nome}
                      className={cn(
                        "flex flex-col items-center justify-center rounded-2xl px-2.5 py-4",
                        ativo
                          ? "flex-[1.4] border-[1.5px] border-gold bg-gradient-to-b from-gold/14 to-gold/[0.02]"
                          : "flex-1 border border-gold-soft/15 bg-white/[0.02]",
                      )}
                    >
                      <span
                        className={cn(
                          "font-body text-[0.56rem] font-semibold uppercase tracking-[0.14em]",
                          ativo ? "text-gold" : "text-gold-soft/45",
                        )}
                      >
                        {ativo ? "Lote especial" : l.nome}
                      </span>
                      <span
                        className={cn(
                          "mt-1.5 font-display font-semibold leading-none",
                          ativo ? "text-gold" : "text-bone/40",
                        )}
                      >
                        <span
                          className={ativo ? "align-top text-[1.1rem]" : "align-top text-[0.8rem]"}
                        >
                          {cifra}
                        </span>{" "}
                        <span
                          className={cn(
                            ativo ? "text-[2.4rem]" : "text-[1.5rem]",
                            passado && "line-through",
                          )}
                        >
                          {numero}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "mt-1.5 font-body",
                          ativo
                            ? "text-[0.72rem] text-bone/65"
                            : "text-[0.6rem] uppercase tracking-[0.1em] text-bone/30",
                        )}
                      >
                        {ativo ? l.parcela : passado ? "encerrado" : "em breve"}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 font-body text-[0.66rem] uppercase tracking-[0.16em] text-bone/50">
                Preço exclusivo enquanto durar o lote
              </div>

              <CtaButton origem="oferta" size="lg" className="mt-4 w-full" />

              <ProgressoLote tone="dark" className="mt-5 max-w-none" />

              <div className="mt-6 flex w-full items-center justify-center gap-2.5 border-t border-gold/12 pt-5 font-body text-[0.8rem] text-bone/55">
                <Lock className="h-4 w-4 text-gold" strokeWidth={1.6} aria-hidden="true" />
                Pagamento Seguro · Hotmart · Garantia de 7 dias
              </div>
              <p className="mt-3 max-w-[42ch] font-body text-[0.74rem] leading-[1.6] text-bone/40">
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
