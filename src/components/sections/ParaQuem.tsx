import { Check } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const itens = [
  "Sente-se exausto por carregar responsabilidades que não são suas.",
  "Tem dificuldade em cobrar o valor justo pelo seu trabalho ou pedir aumento.",
  "Vive um relacionamento onde você dá tudo e recebe migalhas de atenção.",
  "Sente culpa ou medo de ser rejeitado ao dizer 'não' para amigos ou familiares.",
  "Busca um autoconhecimento profundo, científico e sem clichês de autoajuda.",
];

export function ParaQuem() {
  return (
    <section className="bg-pergaminho py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <SectionLabel>05 — Para quem é esta imersão</SectionLabel>
          <h2 className="mt-6 font-display text-[1.9rem] font-semibold leading-[1.14] text-tinta sm:text-[2.4rem]">
            Para quem decidiu assumir a própria força.
          </h2>
          <p className="mt-6 max-w-md font-body text-[0.95rem] leading-[1.8] text-corpo">
            Este movimento é exclusivo para quem decidiu abandonar o papel de vítima da ingratidão
            alheia e deseja assumir a responsabilidade pela sua própria força. É para você se:
          </p>
        </Reveal>

        <ul className="space-y-px lg:pt-4">
          {itens.map((t, i) => (
            <Reveal as="li" key={t} delay={i * 60}>
              <div className="flex gap-4 border-b border-borda py-5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-ouro-tinta" strokeWidth={1.5} aria-hidden="true" />
                <span className="font-body text-[0.95rem] leading-[1.7] text-tinta">{t}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
