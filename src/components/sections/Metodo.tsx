import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";

const pilares = [
  {
    n: "1",
    titulo: "Aula Expositiva — Clareza Epistemológica",
    texto:
      "Utilizaremos o pensamento sistêmico e a filosofia profunda para desarmar as defesas do seu ego. Você entenderá a lógica por trás dos seus comportamentos de autossabotagem e como a Terceira Lei de Hellinger governa seus resultados.",
  },
  {
    n: "2",
    titulo: "Vivências Sistêmicas — Consolidação da Postura",
    texto:
      "Ao vivo pelo Zoom, conduziremos movimentos sistêmicos coletivos. Através do campo mórfico, você sentirá no corpo a transição da criança carente para o adulto potente. Não é teoria; é uma atualização do seu sistema operacional emocional para que o 'não' e o limite surjam com naturalidade, sem culpa.",
  },
];

export function Metodo() {
  return (
    <section className="bg-bone py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>03 — O Método da Imersão</SectionLabel>
          <h2 className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] text-ink sm:text-[2.75rem]">
            Dois pilares para romper o ciclo.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-px">
          {pilares.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <article className="grid gap-6 border-t border-line py-10 lg:grid-cols-[auto_1fr_1.1fr] lg:gap-12">
                <span className="font-display text-[2.5rem] leading-none text-gold/60">
                  0{p.n}
                </span>
                <h3 className="font-display text-xl font-semibold leading-snug text-ink lg:max-w-[14ch]">
                  {p.titulo}
                </h3>
                <p className="font-body text-[0.95rem] leading-[1.8] text-graphite">{p.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <CtaButton origem="metodo" variant="outline" className="mt-10 border-gold-deep/40 text-gold-deep hover:bg-gold/10" />
        </Reveal>
      </div>
    </section>
  );
}
