import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const pilares = [
  {
    n: "1",
    tag: "Entendimento",
    titulo: "Aula Expositiva: Clareza Epistemológica",
    texto:
      "Utilizaremos o pensamento sistêmico e a filosofia profunda para desarmar as defesas do seu ego. Você entenderá a lógica por trás dos seus comportamentos de autossabotagem e como a Terceira Lei de Hellinger governa seus resultados.",
    pontos: ["Pensamento sistêmico aplicado", "Raiz da autossabotagem", "Terceira Lei de Hellinger"],
  },
  {
    n: "2",
    tag: "Experiência",
    titulo: "Vivências Sistêmicas: Consolidação da Postura",
    texto:
      "Ao vivo pelo Zoom, conduziremos movimentos sistêmicos coletivos. Através do campo mórfico, você sentirá no corpo a transição da criança carente para o adulto potente. Não é teoria; é uma atualização do seu sistema operacional emocional para que o 'não' e o limite surjam com naturalidade, sem culpa.",
    pontos: ["Movimentos sistêmicos ao vivo", "Transição para o adulto potente", "Limite sem culpa"],
  },
];

export function Metodo() {
  return (
    <section className="bg-pergaminho py-16 lg:py-32">
      <div className="container-eq px-5 sm:px-8">
        <Reveal>
          <SectionLabel>O MÉTODO DA IMERSÃO</SectionLabel>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <h2 className="mx-auto max-w-[320px] text-balance text-center font-display text-[clamp(1.5rem,5.6vw,2.5rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-tinta md:mx-0 md:max-w-none md:text-left md:text-[2.75rem] md:leading-[1.1] lg:text-[40px] lg:leading-[1.15] lg:tracking-[-0.02em]">
              Dois pilares para{" "}
              <span className="relative inline-block">
                romper o ciclo
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-1 h-[0.35em] -z-10 rounded-full bg-ouro/25"
                />
              </span>
              .
            </h2>
            <p className="texto-justificado font-body text-[0.98rem] leading-[1.8] text-corpo lg:pb-2 lg:text-[20px] lg:leading-[1.6]">
              Compreensão e vivência caminham juntas: primeiro você enxerga o padrão com nitidez,
              depois consolida no corpo a nova postura. É essa combinação que transforma insight em
              mudança real.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {pilares.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <article className="card-nivel-a group relative flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 sm:p-9">
                <div className="flex items-center gap-3">
                  <span className="marcador-sequencia" aria-label={`Pilar ${p.n}`}>
                    {p.n.padStart(2, "0")}
                  </span>
                  <span className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-ouro-tinta lg:text-[14px]">
                    Pilar · {p.tag}
                  </span>
                </div>

                <h3 className="relative mt-5 text-balance text-left font-display text-[18px] font-semibold leading-[1.3] text-tinta md:text-[1.4rem] lg:max-w-none lg:text-[24px] lg:leading-[1.3]">
                  {p.titulo}
                </h3>

                <p className="lg:texto-justificado relative mt-4 font-body text-[0.95rem] leading-[1.8] text-corpo lg:text-[17px] lg:leading-[1.7]">
                  {p.texto}
                </p>

                <ul className="relative mt-6 space-y-2 border-t border-borda pt-5">
                  {p.pontos.map((ponto) => (
                    <li
                      key={ponto}
                      className="flex items-start gap-3 font-body text-[0.9375rem] leading-relaxed text-tinta/80 lg:text-[17px] lg:leading-[1.6]"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-ouro-tinta"
                      />
                      {ponto}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 border-t border-borda pt-8 pb-0">
            <p className="font-body text-[0.9375rem] leading-relaxed text-corpo sm:max-w-[46ch] lg:text-[18px] lg:leading-[1.75]">
              Dois encontros ao vivo pelo Zoom, conduzidos do começo ao fim.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
