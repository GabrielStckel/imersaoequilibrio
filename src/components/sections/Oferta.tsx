import { Video, PlayCircle, FileText, Gift, ShieldCheck, Lock } from "lucide-react";
import { IMERSAO } from "@/config/imersao";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { PrecoLote } from "@/components/PrecoLote";
import { CtaButton } from "@/components/CtaButton";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { cn } from "@/lib/utils";

export function Oferta() {
  const { indice } = useLoteAtivo();

  const stack = [
    {
      icone: Video,
      texto: `Imersão Online e Ao Vivo (2 dias, ${IMERSAO.dataDia1} e ${IMERSAO.dataDia2})`,
    },
    { icone: PlayCircle, texto: "Acesso às gravações por 6 meses" },
    { icone: FileText, texto: "Material de apoio: guia prático com exercícios sistêmicos" },
    {
      icone: Gift,
      texto: "Bônus exclusivo: aula 'A Postura Sistêmica Diante do Dinheiro'",
    },
  ];

  return (
    <section id="oferta" className="relative overflow-hidden bg-espresso py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel tone="dark">07 — Garanta sua vaga</SectionLabel>
          <h2 className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] text-bone sm:text-[2.75rem]">
            Tudo que você garante ao entrar hoje
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal delay={80}>
            <ul className="rounded-card border border-gold/25 bg-ink/40 p-8 lg:p-10">
              {stack.map((s, i) => (
                <li
                  key={s.texto}
                  className={cn(
                    "flex gap-4 py-5",
                    i !== 0 && "border-t border-gold/10",
                    i === 0 && "pt-0",
                  )}
                >
                  <s.icone className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.25} aria-hidden="true" />
                  <span className="font-body text-[0.95rem] leading-[1.7] text-bone/80">
                    {s.texto}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140}>
            <div className="rounded-card border border-gold/25 bg-ink/60 p-8 lg:p-10">
              <PrecoLote size="lg" />
              <CtaButton origem="oferta" size="lg" className="mt-8 w-full" />

              <div className="mt-8 space-y-px border-t border-gold/10 pt-6">
                {IMERSAO.lotes.map((l, i) => {
                  const ativo = i === indice;
                  const passado = i < indice;
                  return (
                    <div
                      key={l.nome}
                      className={cn(
                        "flex items-center justify-between gap-4 rounded-[8px] px-3 py-2.5 font-body text-[0.85rem]",
                        ativo ? "bg-gold/12 text-bone" : "text-bone/35",
                      )}
                    >
                      <span className={cn(ativo && "text-gold")}>{l.nome}</span>
                      <span className={cn(passado && "line-through")}>
                        {l.preco}
                        <span className="ml-2 text-[0.72rem] uppercase tracking-[0.16em]">
                          {ativo ? "ativo" : passado ? "encerrado" : "em breve"}
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-gold/10 pt-6 font-body text-[0.78rem] text-bone/50">
                <span className="inline-flex items-center gap-2">
                  <Lock className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  Pagamento Seguro · Hotmart
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  Garantia incondicional de 7 dias
                </span>
              </div>

              <p className="mt-5 font-body text-[0.82rem] leading-[1.7] text-bone/45">
                Você tem 7 dias para experimentar o campo da imersão. Se sentir que a profundidade do
                conteúdo não é para você, devolvemos 100% do seu investimento, sem questionamentos.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
