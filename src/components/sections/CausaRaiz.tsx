import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export function CausaRaiz() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <SectionLabel>02 — Por que isso acontece com você</SectionLabel>
          <h2 className="mt-6 font-display text-[1.9rem] font-semibold leading-[1.14] text-ink sm:text-[2.5rem]">
            Não é falta de atitude. É uma carência estrutural.
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <div className="space-y-6 font-body text-[0.98rem] leading-[1.8] text-graphite">
            <p>
              Por que, mesmo sabendo que deveria colocar limites, você simplesmente não consegue? A
              resposta não está na sua força de vontade, está na sua história. Quando uma criança não
              recebe o que precisa dos pais — presença, olhar, lugar —, ela aprende a se tornar útil
              para garantir o próprio pertencimento. Dar demais deixa de ser generosidade e vira
              estratégia de sobrevivência.
            </p>
            <blockquote className="border-l-2 border-gold pl-6">
              <p className="font-display text-[1.35rem] italic leading-[1.5] text-ink sm:text-[1.6rem]">
                Você não é "bom demais"; você está tentando comprar o direito de pertencer através da
                hipercompensação.
              </p>
            </blockquote>
            <p>
              Enquanto essa criança continuar conduzindo suas trocas adultas, o padrão se repete em
              cada novo vínculo: você entrega mais do que recebe, adia o próprio desejo, evita o
              conflito — e continuará atraindo pessoas que invadem o seu espaço e usam a sua energia.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
