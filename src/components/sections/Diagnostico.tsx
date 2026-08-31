import { HeartCrack, Coins, Briefcase, Users } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";

const cards = [
  {
    icone: HeartCrack,
    titulo: "Na Relação Amorosa",
    texto:
      "Você se tornou o 'pilar' da relação. Cuida, resolve, antecipa e provê, mas sente que o seu parceiro se tornou frio, distante ou infantilizado. Ao dar demais, você retirou dele a dignidade de também poder dar, transformando o amor em uma dívida impagável que gera afastamento.",
  },
  {
    icone: Coins,
    titulo: "Nas Finanças",
    texto:
      "Você trabalha o dobro, mas recebe a metade. Existe uma dificuldade sistêmica em cobrar o valor justo, em dizer não a demandas abusivas e em reter o fruto do seu esforço. A escassez é o reflexo de uma postura que busca aprovação em vez de lucro.",
  },
  {
    icone: Briefcase,
    titulo: "Na Carreira",
    texto:
      "Você é o profissional que 'veste a camisa', mas nunca é o escolhido para a promoção ou os grandes projetos. Sua utilidade extrema faz com que você seja visto como uma ferramenta, e não como uma autoridade.",
  },
  {
    icone: Users,
    titulo: "Na Família",
    texto:
      "Você carrega problemas que não são seus, tentando salvar pais, irmãos ou parentes de suas próprias escolhas, sentindo um peso nos ombros que não lhe pertence.",
  },
];

export function Diagnostico() {
  return (
    <section className="relative overflow-hidden bg-bone py-24 lg:py-32">
      {/* Warm ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-gold/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-20 h-[24rem] w-[24rem] rounded-full bg-gold/6 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>O DIAGNÓSTICO</SectionLabel>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-12">
            <h2 className="font-display text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[3.25rem] lg:text-[3.75rem]">
              A vida não funciona{" "}
              <span className="relative inline-block">
                em gavetas
                <span
                  aria-hidden
                  className="absolute inset-x-[-0.15em] -bottom-[0.12em] h-[0.12em] rounded-full bg-gold/60"
                />
              </span>
              .
            </h2>

            <p className="max-w-xl font-body text-[1rem] leading-[1.85] text-graphite lg:pb-2">
              Quando a Lei do Equilíbrio é violada, o sintoma se espalha por todos os pilares da sua
              existência. Identifique onde o desequilíbrio está drenando sua energia hoje:
            </p>
          </div>
        </Reveal>

        {/* Connection line — desktop only */}
        <div className="relative mt-16 lg:mt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden lg:grid lg:grid-cols-2 lg:gap-5"
          >
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold/30 via-gold/10 to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
            </div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold/30 via-gold/10 to-transparent" />
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            {cards.map((c, i) => (
              <Reveal key={c.titulo} delay={i * 90}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-cream/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-cream/70 hover:shadow-[var(--shadow-soft)] sm:p-9">
                  {/* Large translucent index */}
                  <span
                    aria-hidden
                    className="absolute right-4 top-2 font-display text-[5.5rem] font-semibold leading-none text-gold/10 transition-colors duration-300 group-hover:text-gold/20"
                  >
                    0{i + 1}
                  </span>

                  {/* Icon badge */}
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 bg-bone/80 text-gold-deep shadow-sm transition-colors duration-300 group-hover:border-gold/50 group-hover:bg-bone">
                    <c.icone className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>

                  <h3 className="relative mt-6 font-display text-xl font-semibold leading-snug text-ink sm:text-[1.35rem]">
                    {c.titulo}
                  </h3>

                  <p className="relative mt-4 font-body text-[0.95rem] leading-[1.8] text-graphite">
                    {c.texto}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col items-start gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[52ch] font-body text-[0.95rem] leading-relaxed text-graphite">
              O desequilíbrio não escolhe área. Ele se mostra no amor, no dinheiro, no trabalho e na
              família — até que você restaure a ordem dentro de si.
            </p>
            <CtaButton
              origem="diagnostico"
              variant="outline"
              className="w-full shrink-0 border-gold-deep/40 text-gold-deep hover:bg-gold/10 sm:w-auto"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
