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
    <section className="bg-pergaminho py-16 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>O DIAGNÓSTICO</SectionLabel>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-12">
            <h2 className="mx-auto max-w-[320px] text-balance text-center font-display text-[clamp(1.5rem,5.6vw,2.5rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-tinta md:mx-0 md:max-w-none md:text-left md:text-[3.25rem] md:leading-[1.08] lg:text-[3.75rem]">
              A vida não funciona{" "}
              <span className="relative inline-block">
                em gavetas
                <span
                  aria-hidden
                  className="filete-ouro absolute inset-x-[-0.15em] -bottom-[0.12em]"
                />
              </span>
              .
            </h2>

            <p className="texto-justificado max-w-xl font-body text-[1rem] leading-[1.85] text-corpo lg:pb-2">
              Quando a Lei do Equilíbrio é violada, o sintoma se espalha por todos os pilares da sua
              existência. Identifique onde o desequilíbrio está drenando sua energia hoje:
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16 lg:mt-20">
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            {cards.map((c, i) => (
              <Reveal key={c.titulo} delay={i * 90}>
                <article className="card-nivel-a group relative flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 sm:p-9">
                  {/* Icon badge */}
                  <span className="icone-card relative">
                    <c.icone strokeWidth={1.5} aria-hidden="true" />
                  </span>

                  <h3 className="relative mt-6 text-balance text-left font-display text-[18px] font-semibold leading-[1.3] text-tinta md:text-[1.35rem]">
                    {c.titulo}
                  </h3>

                  <p className="relative mt-4 font-body text-[0.95rem] leading-[1.8] text-corpo">
                    {c.texto}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col items-start gap-5 border-t border-borda pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="texto-justificado max-w-[52ch] font-body text-[0.95rem] leading-relaxed text-corpo">
              O desequilíbrio não escolhe área. Ele se mostra no amor, no dinheiro, no trabalho e na
              família. E continua assim até você restaurar a ordem dentro de si.
            </p>
            <CtaButton to="oferta" origem="diagnostico" variant="outline" className="w-full shrink-0 sm:w-auto" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
