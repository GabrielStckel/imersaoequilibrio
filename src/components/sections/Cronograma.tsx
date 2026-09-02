import { IMERSAO } from "@/config/imersao";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export function Cronograma() {
  const dias = [
    {
      titulo: "Dia 1 — O Diagnóstico e o Desarme da Carência",
      data: IMERSAO.dataDia1,
      texto:
        "Mergulharemos nas causas das trocas desequilibradas. Identificaremos as projeções infantis que você faz nas suas relações atuais e realizaremos a primeira grande vivência de resgate do amor-próprio e pacificação da necessidade de aprovação.",
    },
    {
      titulo: "Dia 2 — A Postura do Adulto e a Lei da Troca",
      data: IMERSAO.dataDia2,
      texto:
        "Aplicação prática da Lei do Equilíbrio na relação amorosa, na carreira e no dinheiro. Vivências para consolidar a postura de quem sabe dar e receber na medida certa, estabelecendo limites que geram respeito e atraem prosperidade.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-areia py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>SUA JORNADA EM 2 ENCONTROS</SectionLabel>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {dias.map((d, i) => (
            <Reveal key={d.titulo} delay={i * 90}>
              <article className="h-full rounded-card border border-borda bg-white p-8 lg:p-10">
                <p className="font-body text-xs uppercase tracking-[0.12em] text-ouro-tinta">
                  {d.data} · {IMERSAO.horario}
                </p>
                <h3 className="mt-5 font-display text-[1.4rem] font-semibold leading-snug text-tinta">
                  {d.titulo}
                </h3>
                <div className="filete-ouro my-6 w-full" aria-hidden="true" />
                <p className="font-body text-[0.9375rem] leading-[1.8] text-corpo">{d.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
