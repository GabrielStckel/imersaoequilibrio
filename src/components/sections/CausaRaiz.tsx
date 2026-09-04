import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export function CausaRaiz() {
  return (
    <section className="bg-areia py-16 lg:py-32">
      <div className="container-eq px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-[72px]">
          {/* Left column — title + lead */}
          <Reveal className="lg:self-start">
            <SectionLabel>POR QUE ISSO ACONTECE COM VOCÊ</SectionLabel>
            <h2 className="mx-auto mt-6 max-w-[320px] text-balance text-center font-display text-[clamp(1.5rem,5.6vw,2.5rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-tinta md:mx-0 md:max-w-none md:text-left md:text-[2.75rem] md:leading-[1.1] lg:text-[40px] lg:leading-[1.15] lg:tracking-[-0.02em]">
              Não é falta de atitude. É{" "}
              <span className="relative inline-block">
                carência estrutural
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-1 h-[0.35em] -z-10 rounded-full bg-ouro/25"
                />
              </span>
              .
            </h2>

            <p className="texto-justificado mt-6 max-w-md font-body text-[0.95rem] leading-[1.8] text-corpo lg:max-w-[68ch] lg:text-[20px] lg:leading-[1.6]">
              O padrão de dar demais não nasceu agora. Ele foi construído muito antes de você ter
              consciência de si.
            </p>
          </Reveal>

          {/* Right column — content */}
          <Reveal delay={90} className="lg:row-span-2">
            <div className="space-y-8 font-body text-[0.98rem] leading-[1.85] text-corpo lg:space-y-6 lg:text-[18px] lg:leading-[1.75]">
              <p className="texto-justificado">
                Por que, mesmo sabendo que deveria colocar limites, você simplesmente não consegue? A
                resposta não está na sua força de vontade, está na sua história. Quando uma criança não
                recebe dos pais o que precisa (presença, olhar, lugar), ela aprende a se tornar útil
                para garantir o próprio pertencimento. Dar demais deixa de ser generosidade e vira
                estratégia de sobrevivência.
              </p>

              <blockquote className="card-nivel-a relative overflow-hidden p-[22px] sm:p-[22px] lg:my-8 lg:p-9">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-ouro via-ouro-luz to-ouro/30"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-2 font-display text-[56px] font-semibold leading-none text-ouro-tinta/20 lg:left-4 lg:top-3 lg:text-[72px] lg:text-ouro-tinta/18"
                >
                  “
                </span>
                <p className="relative mx-auto max-w-[300px] text-center font-display text-[17px] font-semibold italic leading-[1.45] text-tinta lg:max-w-none lg:text-left lg:text-[22px] lg:leading-[1.5]">
                  Você não é "bom demais"; você está tentando comprar o direito de pertencer através
                  da hipercompensação.
                </p>
              </blockquote>

              <p className="texto-justificado">
                Enquanto essa criança continuar conduzindo suas trocas adultas, o padrão se repete em
                cada novo vínculo: você entrega mais do que recebe, adia o próprio desejo e evita o
                conflito. E continuará atraindo pessoas que invadem o seu espaço e usam a sua energia.
              </p>
            </div>
          </Reveal>

          {/* Closing paragraph — bottom of left column on desktop */}
          <Reveal className="mt-4 border-t border-borda pt-8 pb-0 lg:mt-0 lg:self-end lg:border-ouro-tinta/25 lg:pt-7">
            <p className="texto-justificado max-w-[52ch] font-body text-[0.95rem] leading-relaxed text-corpo lg:max-w-none lg:text-[18px] lg:leading-[1.75] lg:italic lg:text-tinta/80">
              A boa notícia: o que foi aprendido pode ser desaprendido. Quando você enxerga a raiz, o
              padrão perde a força.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
