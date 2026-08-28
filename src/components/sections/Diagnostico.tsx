import { HeartCrack, Coins, Briefcase, Users } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const cards = [
  {
    icone: HeartCrack,
    titulo: "Na Relação Amorosa",
    texto:
      "Você se tornou o 'pilar' da relação. Cuida, resolve, antecipa e provê, mas sente que o seu parceiro se tornou frio, distante ou infantilizado. Ao dar demais, você retirou dele a dignidade de também poder dar, transformando o amor em uma dívida impagável que gera afastamento.",
    span: "lg:col-span-7",
  },
  {
    icone: Coins,
    titulo: "Nas Finanças",
    texto:
      "Você trabalha o dobro, mas recebe a metade. Existe uma dificuldade sistêmica em cobrar o valor justo, em dizer não a demandas abusivas e em reter o fruto do seu esforço. A escassez é o reflexo de uma postura que busca aprovação em vez de lucro.",
    span: "lg:col-span-5",
  },
  {
    icone: Briefcase,
    titulo: "Na Carreira",
    texto:
      "Você é o profissional que 'veste a camisa', mas nunca é o escolhido para a promoção ou os grandes projetos. Sua utilidade extrema faz com que você seja visto como uma ferramenta, e não como uma autoridade.",
    span: "lg:col-span-5",
  },
  {
    icone: Users,
    titulo: "Na Família",
    texto:
      "Você carrega problemas que não são seus, tentando salvar pais, irmãos ou parentes de suas próprias escolhas, sentindo um peso nos ombros que não lhe pertence.",
    span: "lg:col-span-7",
  },
];

export function Diagnostico() {
  return (
    <section className="bg-bone py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>01 — O Diagnóstico</SectionLabel>
          <h2 className="mt-6 max-w-[16ch] font-display text-[2rem] font-semibold leading-[1.12] text-ink sm:text-[2.75rem]">
            A vida não funciona em gavetas.
          </h2>
          <p className="mt-6 max-w-xl font-body text-[0.98rem] leading-[1.75] text-graphite">
            Quando a Lei do Equilíbrio é violada, o sintoma se espalha por todos os pilares da sua
            existência. Identifique onde o desequilíbrio está drenando sua energia hoje:
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-12">
          {cards.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 70} className={c.span}>
              <article className="h-full bg-bone p-8 lg:p-10">
                <c.icone className="h-6 w-6 text-gold-deep" strokeWidth={1.25} aria-hidden="true" />
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">{c.titulo}</h3>
                <p className="mt-3.5 font-body text-[0.92rem] leading-[1.75] text-graphite">
                  {c.texto}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
