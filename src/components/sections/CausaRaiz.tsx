import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";

export function CausaRaiz() {
  return (
    <section className="relative overflow-hidden bg-areia py-24 lg:py-32">
      {/* Warm ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-[26rem] w-[26rem] rounded-full bg-ouro/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-[22rem] w-[22rem] rounded-full bg-ouro/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Left column — title */}
          <Reveal>
            <SectionLabel>POR QUE ISSO ACONTECE COM VOCÊ</SectionLabel>
            <h2 className="mt-6 font-display text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] text-tinta sm:text-[2.75rem] lg:text-[3rem]">
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

            <p className="mt-6 max-w-md font-body text-[0.95rem] leading-[1.8] text-corpo">
              O padrão de dar demais não nasceu agora. Ele foi construído muito antes de você ter
              consciência de si.
            </p>
          </Reveal>

          {/* Right column — content */}
          <Reveal delay={90}>
            <div className="space-y-8 font-body text-[0.98rem] leading-[1.85] text-corpo">
              <p>
                Por que, mesmo sabendo que deveria colocar limites, você simplesmente não consegue? A
                resposta não está na sua força de vontade, está na sua história. Quando uma criança não
                recebe o que precisa dos pais — presença, olhar, lugar —, ela aprende a se tornar útil
                para garantir o próprio pertencimento. Dar demais deixa de ser generosidade e vira
                estratégia de sobrevivência.
              </p>

              <blockquote className="relative overflow-hidden rounded-[var(--radius-card)] border border-borda bg-white p-7 sm:p-9">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-ouro via-ouro-luz to-ouro/30"
                />
                <p className="relative font-display text-[1.3rem] font-semibold leading-[1.45] text-tinta sm:text-[1.55rem]">
                  Você não é "bom demais"; você está tentando comprar o direito de pertencer através
                  da hipercompensação.
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

        <Reveal>
          <div className="mt-16 flex flex-col items-start gap-5 border-t border-borda pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[52ch] font-body text-[0.95rem] leading-relaxed text-corpo">
              A boa notícia: o que foi aprendido pode ser desaprendido — quando você enxerga a raiz, o
              padrão perde a força.
            </p>
            <CtaButton
              origem="causa-raiz"
              variant="outline"
              className="w-full shrink-0 border-ouro-deep/40 text-ouro-tinta hover:bg-ouro/10 sm:w-auto"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
