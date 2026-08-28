import { Video, PlayCircle, FileText, Gift, ShieldCheck, Lock } from "lucide-react";
import { IMERSAO } from "@/config/imersao";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { ProgressoLote } from "@/components/ProgressoLote";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { cn } from "@/lib/utils";
import type { StackValor } from "@/config/imersao";

const iconMap: Record<
  StackValor["icone"],
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
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
            Um pacote completo para você sair do lugar de criança carente e assumir a postura de
            adulto potente — com acesso, material e acompanhamento de verdade.
          </p>
        </Reveal>

        {/* ——— Stack de valor (grid 2x2) ——— */}
        <Reveal delay={80}>
          <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {IMERSAO.stackValor.map((item, i) => {
              const Icon = iconMap[item.icone];
              return (
                <li
                  key={item.titulo}
                  className="group rounded-card border border-gold/15 bg-ink/40 p-6 transition-colors duration-300 hover:border-gold/30 lg:p-8"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span
                      aria-hidden="true"
                      className="font-display text-[1.1rem] italic text-gold/80"
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <Icon
                      className="h-5 w-5 text-gold transition-transform duration-300 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-[1.05rem] font-medium leading-[1.45] text-bone lg:text-[1.15rem]">
                    {item.titulo}
                  </h3>
                  <p className="mt-2.5 font-body text-[0.9rem] leading-[1.75] text-bone/55">
                    {item.descricao}
                  </p>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* ——— Lotes ——— */}
        <Reveal delay={120}>
          <div className="mt-20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="font-display text-[1.6rem] font-semibold leading-[1.2] text-bone sm:text-[2rem]">
                O valor sobe a cada lote — garanta o menor agora
              </h3>
              <p className="font-body text-[0.85rem] text-bone/45">
                Valor cheio {IMERSAO.valorCheio} · o preço aumenta a cada lote
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:gap-5">
              {IMERSAO.lotes.map((l, i) => {
                const ativo = i === indice;
                const passado = i < indice;
                const ultimo = i === IMERSAO.lotes.length - 1;

                if (ativo) {
                  return (
                    <div
                      key={l.nome}
                      className="relative rounded-card border border-gold/50 bg-gold/[0.07] p-7 shadow-[0_24px_60px_-30px_rgba(194,162,76,0.5)] lg:p-8"
                    >
                      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 font-body text-[0.62rem] uppercase tracking-[0.22em] text-gold">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                          Lote atual · aberto
                        </span>
                      </div>
                      <h4 className="mt-6 font-display text-[1.3rem] font-medium text-bone">
                        {l.nome}
                      </h4>
                      <p className="mt-4 font-body text-[0.85rem] text-bone/40">
                        De <span className="line-through">{IMERSAO.valorCheio}</span>
                      </p>
                      <p className="mt-1 font-display text-[2.9rem] font-semibold leading-none text-gold">
                        {l.preco}
                      </p>
                      <p className="mt-2 font-body text-[0.85rem] text-bone/55">{l.parcela}</p>
                      <CtaButton origem="oferta" size="lg" className="mt-7 w-full" />
                      <ProgressoLote tone="dark" className="mt-6 max-w-none" />
                    </div>
                  );
                }

                // Lotes futuros / encerrados — compactos no mobile, card no desktop
                return (
                  <div
                    key={l.nome}
                    className={cn(
                      "rounded-card border p-5 lg:p-8",
                      passado
                        ? "border-bone/10 bg-ink/20 opacity-60"
                        : "border-gold/10 bg-ink/30",
                    )}
                  >
                    {/* Mobile: linha compacta */}
                    <div className="flex items-center justify-between gap-4 lg:hidden">
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "rounded px-2 py-0.5 font-body text-[0.62rem] uppercase tracking-[0.18em]",
                            passado ? "bg-bone/5 text-bone/30" : "bg-gold/10 text-gold/80",
                          )}
                        >
                          {passado ? "Encerrado" : "Em breve"}
                        </span>
                        <span className="font-display text-[1rem] font-medium text-bone/80">
                          {l.nome}
                        </span>
                      </div>
                      <span className="text-right">
                        <span className="block font-body text-[0.7rem] text-bone/30 line-through">
                          {IMERSAO.valorCheio}
                        </span>
                        <span className="block font-display text-[1.25rem] font-semibold text-bone/70">
                          {l.preco}
                        </span>
                      </span>
                    </div>

                    {/* Desktop: card */}
                    <div className="hidden lg:block">
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full px-3 py-1 font-body text-[0.62rem] uppercase tracking-[0.22em]",
                          passado
                            ? "border border-bone/10 bg-bone/5 text-bone/30"
                            : "border border-gold/20 bg-gold/5 text-gold/70",
                        )}
                      >
                        {passado ? "Encerrado" : "Em breve"}
                      </span>
                      <h4 className="mt-6 font-display text-[1.15rem] font-medium text-bone/75">
                        {l.nome}
                      </h4>
                      <p className="mt-4 font-body text-[0.8rem] text-bone/30">
                        De <span className="line-through">{IMERSAO.valorCheio}</span>
                      </p>
                      <p className="mt-1 font-display text-[2.1rem] font-semibold leading-none text-bone/60">
                        {l.preco}
                      </p>
                      <p className="mt-2 font-body text-[0.8rem] text-bone/40">{l.parcela}</p>
                      <p className="mt-6 border-t border-bone/10 pt-4 font-body text-[0.75rem] text-bone/35">
                        {passado
                          ? "Lote encerrado"
                          : ultimo
                            ? "Último lote"
                            : "Abre quando o atual fechar"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ——— Confiança + garantia ——— */}
        <Reveal delay={160}>
          <div className="mt-14 rounded-card border border-gold/15 bg-ink/30 px-6 py-8 text-center lg:px-10">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-body text-[0.8rem] text-bone/55">
              <span className="inline-flex items-center gap-2">
                <Lock className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                Pagamento Seguro · Hotmart
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                Garantia incondicional de 7 dias
              </span>
            </div>
            <p className="mx-auto mt-5 max-w-xl font-body text-[0.82rem] leading-[1.7] text-bone/45">
              Você tem 7 dias para experimentar o campo da imersão. Se sentir que a profundidade do
              conteúdo não é para você, devolvemos 100% do seu investimento, sem questionamentos.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
