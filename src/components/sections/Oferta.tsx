import { Video, PlayCircle, FileText, Gift, ShieldCheck, Lock, Check } from "lucide-react";
import { IMERSAO } from "@/config/imersao";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { PrecoLote } from "@/components/PrecoLote";
import { CtaButton } from "@/components/CtaButton";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { cn } from "@/lib/utils";
import type { StackValor } from "@/config/imersao";

const iconMap: Record<StackValor["icone"], React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Video,
  PlayCircle,
  FileText,
  Gift,
};

export function Oferta() {
  const { indice } = useLoteAtivo();

  return (
    <section id="oferta" className="relative overflow-hidden bg-espresso py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel tone="dark">07 — Garanta sua vaga</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-display text-[2.25rem] font-semibold leading-[1.1] text-bone sm:text-[3.25rem]">
            Tudo que você garante ao entrar hoje
          </h2>
          <p className="mt-5 max-w-2xl font-body text-base leading-[1.7] text-bone/55">
            Um pacote completo para você sair do lugar de criança carente e assumir a postura de adulto
            potente — com acesso, material e acompanhamento de verdade.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Value stack */}
          <Reveal delay={80}>
            <div className="rounded-card border border-gold/20 bg-ink/30 p-1 lg:p-2">
              <ul className="divide-y divide-gold/10 rounded-[12px] bg-ink/40 px-6 py-2 lg:px-8">
                {IMERSAO.stackValor.map((item, i) => {
                  const Icon = iconMap[item.icone];
                  return (
                    <li key={item.titulo} className="flex gap-5 py-7 lg:gap-6 lg:py-8">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 font-display text-[1.1rem] italic text-gold/80"
                      >
                        {String(i + 1).padStart(2, "0")}.
                      </span>
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <Icon
                            className="mt-1 h-4 w-4 shrink-0 text-gold"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                          <h3 className="font-display text-[1.05rem] font-medium leading-[1.45] text-bone lg:text-[1.15rem]">
                            {item.titulo}
                          </h3>
                        </div>
                        <p className="mt-2 pl-7 font-body text-[0.9rem] leading-[1.75] text-bone/55">
                          {item.descricao}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          {/* Price card */}
          <Reveal delay={140}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-px rounded-card bg-gradient-to-b from-gold/30 via-gold/5 to-transparent opacity-60"
              />
              <div className="relative rounded-card border border-gold/25 bg-ink/70 p-8 lg:p-10">
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

                <div className="text-center">
                  <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/8 px-3 py-1 font-body text-[0.65rem] uppercase tracking-[0.22em] text-gold">
                    Lote atual — vagas limitadas
                  </span>
                </div>

                <div className="mt-8">
                  <PrecoLote size="lg" className="justify-center" />
                </div>

                <CtaButton origem="oferta" size="lg" className="mt-8 w-full" />

                <div className="mt-6 flex items-center justify-center gap-2 font-body text-[0.78rem] text-bone/45">
                  <Check className="h-3.5 w-3.5 text-gold" strokeWidth={2} aria-hidden="true" />
                  Economia de {IMERSAO.valorCheio} no valor cheio
                </div>

                <div className="mt-8 space-y-1 border-t border-gold/10 pt-6">
                  {IMERSAO.lotes.map((l, i) => {
                    const ativo = i === indice;
                    const passado = i < indice;
                    return (
                      <div
                        key={l.nome}
                        className={cn(
                          "flex items-center justify-between gap-4 rounded-[10px] px-4 py-3 font-body text-[0.85rem] transition-colors",
                          ativo
                            ? "bg-gold/12 text-bone"
                            : "text-bone/35 hover:bg-gold/[0.04]",
                        )}
                      >
                        <span className={cn("flex items-center gap-2", ativo && "text-gold")}>
                          <span
                            className={cn(
                              "h-1.5 w-1.5 rounded-full",
                              ativo ? "bg-gold" : passado ? "bg-bone/20" : "bg-bone/10",
                            )}
                            aria-hidden="true"
                          />
                          {l.nome}
                        </span>
                        <span className="flex items-center gap-3">
                          <span className={cn(passado && "line-through")}>{l.preco}</span>
                          <span
                            className={cn(
                              "rounded px-1.5 py-0.5 text-[0.65rem] uppercase tracking-[0.14em]",
                              ativo
                                ? "bg-gold/20 text-gold"
                                : passado
                                  ? "bg-bone/5 text-bone/30"
                                  : "bg-bone/5 text-bone/25",
                            )}
                          >
                            {ativo ? "ativo" : passado ? "encerrado" : "em breve"}
                          </span>
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-gold/10 pt-6 font-body text-[0.78rem] text-bone/50">
                  <span className="inline-flex items-center gap-2">
                    <Lock className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                    Pagamento Seguro · Hotmart
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                    Garantia incondicional de 7 dias
                  </span>
                </div>

                <p className="mt-5 text-center font-body text-[0.82rem] leading-[1.7] text-bone/45">
                  Você tem 7 dias para experimentar o campo da imersão. Se sentir que a profundidade do
                  conteúdo não é para você, devolvemos 100% do seu investimento, sem questionamentos.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
