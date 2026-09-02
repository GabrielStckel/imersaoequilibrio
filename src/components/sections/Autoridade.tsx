import { IMERSAO } from "@/config/imersao";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export function Autoridade() {
  const { autoridade } = IMERSAO;

  return (
    <section className="bg-areia py-16 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <img
            src={autoridade.foto}
            alt={`Retrato de ${autoridade.nome}`}
            width={640}
            height={800}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[18px] object-cover shadow-[var(--shadow-soft)]"
          />
        </Reveal>

        <Reveal delay={90} className="lg:pt-6">
          <SectionLabel>QUEM CONDUZ</SectionLabel>
          <h2 className="mx-auto mt-6 max-w-[320px] text-balance text-center font-display text-[clamp(1.5rem,5.6vw,2.5rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-tinta md:mx-0 md:max-w-none md:text-left md:text-[2.4rem] md:leading-[1.14]">
            {autoridade.nome}
          </h2>
          <p className="mt-2 font-body text-[0.8rem] uppercase tracking-[0.12em] text-ouro-tinta">
            {autoridade.papel}
          </p>

          <div className="mt-7 space-y-5 font-body text-[0.95rem] leading-[1.8] text-corpo">
            {autoridade.bio.map((p) => (
              <p key={p} className="texto-justificado">{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-px border-t border-borda pt-8 sm:grid-cols-3">
            {autoridade.numeros.map((n) => (
              <div key={n.label} className="py-3">
                <dt className="font-display text-3xl text-tinta">{n.valor}</dt>
                <dd className="mt-1.5 font-body text-[0.9375rem] leading-snug text-corpo">
                  {n.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
