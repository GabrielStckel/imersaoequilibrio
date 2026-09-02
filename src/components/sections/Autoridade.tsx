import { IMERSAO } from "@/config/imersao";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export function Autoridade() {
  const { autoridade } = IMERSAO;

  const selos = [
    { posicao: "left-top", classes: "left-4 top-[12%]" },
    { posicao: "right-middle", classes: "right-4 top-[42%]" },
    { posicao: "left-bottom", classes: "left-4 top-[72%]" },
  ] as const;

  return (
    <section className="bg-areia py-10 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Texto — primeiro no mobile, segunda coluna no desktop */}
        <Reveal className="order-1 lg:order-2 lg:pt-4">
          <SectionLabel>QUEM CONDUZ</SectionLabel>

          <h2 className="mt-5 text-center font-display text-[28px] font-bold leading-[1.2] text-tinta md:text-left">
            {autoridade.nome}
          </h2>

          <p className="mt-2 text-center font-body text-[13px] uppercase tracking-[0.08em] text-ouro-tinta md:text-left">
            {autoridade.papel}
          </p>

          <div className="mt-5 space-y-3 font-body text-[15px] leading-[1.6] text-corpo">
            {autoridade.bio.map((p) => (
              <p key={p} className="texto-justificado">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Foto com selos — segunda no mobile, primeira coluna no desktop */}
        <Reveal delay={90} className="order-2 lg:order-1">
          <div className="relative w-full">
            <img
              src={autoridade.foto}
              alt={`Retrato de ${autoridade.nome}`}
              width={640}
              height={800}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[20px] object-cover shadow-[var(--shadow-soft)]"
            />

            {autoridade.numeros.map((n, i) => {
              const posicao = selos[i];
              if (!posicao) return null;
              return (
                <div
                  key={n.label}
                  className={`selo-flutuante absolute z-10 ${posicao.classes}`}
                >
                  <span className="font-display font-bold text-ouro-luz">
                    {n.valor}
                  </span>
                  <span>{n.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
