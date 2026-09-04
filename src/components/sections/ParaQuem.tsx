import { Check, X } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const itens = [
  "Sente-se exausto por carregar responsabilidades que não são suas.",
  "Tem dificuldade em cobrar o valor justo pelo seu trabalho ou pedir aumento.",
  "Vive um relacionamento onde você dá tudo e recebe migalhas de atenção.",
  "Sente culpa ou medo de ser rejeitado ao dizer 'não' para amigos ou familiares.",
  "Busca um autoconhecimento profundo, científico e sem clichês de autoajuda.",
];

const naoItens = [
  "Quem procura uma solução rápida, sem atravessar o que precisa ser olhado.",
  "Quem quer só teoria, sem se expor às vivências e ao próprio movimento interno.",
  "Quem não pretende participar ao vivo. A imersão é construída sobre vivências em tempo real: assistir depois entrega a compreensão, mas não a experiência.",
];

export function ParaQuem() {
  return (
    <section className="bg-pergaminho py-16 lg:py-32">
      <div className="container-eq grid gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <SectionLabel>Para quem é esta imersão</SectionLabel>
          <h2 className="mx-auto mt-6 max-w-[320px] text-balance text-center font-display text-[clamp(1.5rem,5.6vw,2.5rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-tinta md:mx-0 md:max-w-none md:text-left md:text-[2.4rem] md:leading-[1.14] lg:text-[40px] lg:leading-[1.15] lg:tracking-[-0.02em]">
            Para quem decidiu assumir a própria força.
          </h2>
          <p className="texto-justificado mt-6 max-w-md font-body text-[0.95rem] leading-[1.8] text-corpo lg:max-w-[68ch] lg:text-[20px] lg:leading-[1.6]">
            Este movimento é exclusivo para quem decidiu abandonar o papel de vítima da ingratidão
            alheia e deseja assumir a responsabilidade pela sua própria força. É para você se:
          </p>
        </Reveal>

        <div className="lg:pt-4">
          <Reveal>
            <div className="rounded-[18px] border border-[#E4DBC6] bg-white px-[18px] py-3.5 shadow-[0_1px_2px_rgba(25,21,16,0.05),0_6px_18px_rgba(25,21,16,0.06)]">
              <h3 className="mb-2 font-display text-[15px] font-semibold text-tinta lg:text-[24px] lg:leading-[1.3]">
                É para você se:
              </h3>
              <ul>
                {itens.map((t, i) => (
                  <li
                    key={t}
                    className={`grid grid-cols-[18px_1fr] gap-3 py-2 ${
                      i !== itens.length - 1 ? "border-b border-[#E4DBC6]" : ""
                    }`}
                  >
                    <Check
                      size={16}
                      strokeWidth={2}
                      color="#7D5F1C"
                      className="mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-body text-[15px] leading-[1.38] text-corpo text-left lg:text-[17px] lg:leading-[1.6]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-6 rounded-[18px] border border-terracota/25 bg-areia px-[18px] py-3.5">
              <h3 className="font-display text-[15px] font-semibold text-tinta lg:text-[24px] lg:leading-[1.3]">
                Esta imersão não é para:
              </h3>
              <ul className="mt-2 space-y-2">
                {naoItens.map((item) => (
                  <li key={item} className="grid grid-cols-[18px_1fr] gap-3 font-body text-[15px] leading-[1.38] text-corpo lg:text-[17px] lg:leading-[1.6]">
                    <X
                      size={16}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-terracota"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
