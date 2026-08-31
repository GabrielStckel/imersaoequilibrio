import { IMERSAO } from "@/config/imersao";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export function Autoridade() {
  const { autoridade } = IMERSAO;

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          {autoridade.foto ? (
            <img
              src={autoridade.foto}
              alt={`Retrato de ${autoridade.nome}`}
              width={640}
              height={800}
              loading="lazy"
              className="w-full rounded-card object-cover shadow-[var(--shadow-soft)]"
            />
          ) : (
            <div className="flex aspect-[4/5] w-full items-center justify-center rounded-card border border-line bg-bone">
              <span className="px-8 text-center font-body text-[0.7rem] uppercase tracking-[0.24em] text-graphite/50">
                Foto real de {autoridade.nome}
              </span>
            </div>
          )}
        </Reveal>

        <Reveal delay={90} className="lg:pt-6">
          <SectionLabel>QUEM CONDUZ</SectionLabel>
          <h2 className="mt-6 font-display text-[1.9rem] font-semibold leading-[1.14] text-ink sm:text-[2.4rem]">
            {autoridade.nome}
          </h2>
          <p className="mt-2 font-body text-[0.8rem] uppercase tracking-[0.2em] text-gold-deep">
            {autoridade.papel}
          </p>

          <div className="mt-7 space-y-5 font-body text-[0.95rem] leading-[1.8] text-graphite">
            {autoridade.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-px border-t border-line pt-8 sm:grid-cols-3">
            {autoridade.numeros.map((n) => (
              <div key={n.label} className="py-3">
                <dt className="font-display text-3xl text-ink">{n.valor}</dt>
                <dd className="mt-1.5 font-body text-[0.78rem] leading-snug text-graphite">
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
