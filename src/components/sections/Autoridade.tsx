import { IMERSAO } from "@/config/imersao";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export function Autoridade() {
  const { autoridade } = IMERSAO;

  const selos = [
    { classes: "left-4 top-[12%]" },
    { classes: "right-4 top-[42%]" },
    { classes: "left-4 top-[72%]" },
  ] as const;

  return (
    <section className="bg-areia py-10 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 sm:px-8 lg:grid-cols-[42%_58%] lg:gap-12 lg:items-center">
        {/* Cabeçalho — mobile primeiro, desktop coluna da direita (linha 1) */}
        <Reveal className="order-1 lg:col-start-2 lg:row-start-1">
          <SectionLabel className="flex-col items-center text-center md:!flex-col lg:!flex-row lg:!items-start lg:!text-left">
            QUEM CONDUZ
          </SectionLabel>

          <h2 className="mt-4 text-center font-display text-[28px] font-bold leading-[1.2] text-tinta lg:mt-5 lg:text-left">
            {autoridade.nome}
          </h2>

          <p className="mt-1.5 text-center font-body text-[13px] uppercase tracking-[0.08em] text-ouro-tinta lg:mt-2 lg:text-left">
            {autoridade.papel}
          </p>
        </Reveal>

        {/* Foto com selos — mobile segundo, desktop coluna da esquerda */}
        <Reveal delay={90} className="order-2 lg:col-start-1 lg:row-start-1 lg:row-span-2">
          <div
            className="relative mx-auto aspect-square w-full max-w-[420px] overflow-visible rounded-[20px]"
            style={{
              background:
                "radial-gradient(circle at 50% 35%, #F6F2E8 0%, #EDE6D6 55%, #E4DAC4 100%)",
            }}
          >
            <img
              src={autoridade.foto}
              alt={autoridade.nome}
              width={1000}
              height={1000}
              loading="lazy"
              className="h-full w-full object-contain object-bottom"
            />

            {autoridade.numeros.map((n, i) => {
              const posicao = selos[i];
              if (!posicao) return null;
              return (
                <div
                  key={n.label}
                  className={`selo-flutuante absolute z-10 lg:px-2.5 lg:py-1.5 lg:text-[11px] ${posicao.classes}`}
                >
                  <span className="font-display font-bold text-ouro-luz">
                    {n.valor}
                  </span>
                  <span className="font-body font-normal">{n.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Biografia — mobile terceiro, desktop coluna da direita (linha 2) */}
        <Reveal delay={160} className="order-3 lg:col-start-2 lg:row-start-2">
          <div className="space-y-3 font-body text-[15px] leading-[1.6] text-corpo">
            {autoridade.bio.map((p) => (
              <p key={p} className="texto-justificado">
                {p}
              </p>
            ))}
            <p className="mt-3 text-right font-body text-[13px] font-medium italic text-ouro-tinta">
              – Jonas Peres
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
