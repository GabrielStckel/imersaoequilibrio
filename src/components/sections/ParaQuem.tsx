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
      <div className="container-eq px-5 sm:px-8 lg:grid lg:grid-rows-[auto_1fr] lg:gap-12">
        {/* Cabeçalho — desktop: duas colunas */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <Reveal>
            <SectionLabel>Para quem é esta imersão</SectionLabel>
            <h2 className="mx-auto mt-6 max-w-[320px] text-center font-display text-[clamp(1.5rem,5.6vw,2.5rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-tinta md:mx-0 md:max-w-none md:text-left md:text-[2.4rem] md:leading-[1.14] lg:mt-7 lg:max-w-[18ch] lg:text-[40px] lg:leading-[1.15] max-lg:text-balance">
              Para quem decidiu assumir a própria força.
            </h2>
          </Reveal>

          <Reveal>
            <div className="filete-ouro mb-5 w-12" aria-hidden="true" />
            <p className="texto-justificado max-w-md font-body text-[0.95rem] leading-[1.8] text-corpo lg:max-w-none lg:text-[18px] lg:leading-[1.75]">
              Este movimento é exclusivo para quem decidiu abandonar o papel de vítima da ingratidão
              alheia e deseja assumir a responsabilidade pela sua própria força.
            </p>
          </Reveal>
        </div>

        {/* Listas — desktop: lado a lado */}
        <div className="mt-12 lg:mt-0 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-8 lg:pt-12">
          <Reveal>
            <div className="h-full rounded-[18px] border border-[#E4DBC6] bg-white px-[18px] py-3.5 shadow-[0_1px_2px_rgba(25,21,16,0.05),0_6px_18px_rgba(25,21,16,0.06)] lg:p-8">
              <h3 className="mb-2 font-display text-[15px] font-semibold text-tinta lg:mb-4 lg:text-[19px]">
                É para você se:
              </h3>
              <ul>
                {itens.map((t, i) => (
                  <li
                    key={t}
                    className={`grid grid-cols-[20px_1fr] items-start gap-3 py-2 lg:py-3 ${
                      i !== itens.length - 1 ? "border-b border-[#E4DBC6]" : ""
                    }`}
                  >
                    <Check
                      size={20}
                      strokeWidth={2}
                      color="#7D5F1C"
                      className="mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-left font-body text-[15px] leading-[1.38] text-corpo lg:text-[17px] lg:leading-[1.6]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-6 h-full rounded-[18px] border border-terracota/25 bg-areia px-[18px] py-3.5 lg:mt-0 lg:p-8">
              <h3 className="mb-2 font-display text-[15px] font-semibold text-tinta lg:mb-4 lg:text-[19px]">
                Esta imersão não é para:
              </h3>
              <ul className="space-y-2 lg:space-y-4">
                {naoItens.map((item) => (
                  <li key={item} className="grid grid-cols-[20px_1fr] items-start gap-3 font-body text-[15px] leading-[1.38] text-corpo lg:text-[17px] lg:leading-[1.6]">
                    <X
                      size={20}
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
