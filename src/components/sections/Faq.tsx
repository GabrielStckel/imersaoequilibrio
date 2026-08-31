import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const perguntas = [
  {
    q: "Como funciona a imersão pelo Zoom?",
    a: "Após a inscrição, você receberá o link exclusivo. A imersão é ao vivo, permitindo interação e a condução das vivências em tempo real, aproveitando a força do grupo.",
  },
  {
    q: "Minha privacidade será preservada nas vivências?",
    a: "Sim. As vivências coletivas são conduzidas de forma que você trabalhe suas questões internamente. Você não precisa expor sua vida pessoal, a menos que deseje.",
  },
  {
    q: "E se eu não puder assistir ao vivo?",
    a: "Embora o ao vivo seja ideal, você terá acesso à gravação completa por 6 meses para assistir no seu tempo e realizar os movimentos conforme sua disponibilidade.",
  },
];

export function Faq() {
  return (
    <section className="bg-bone py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <Reveal>
          <SectionLabel>PERGUNTAS FREQUENTES</SectionLabel>
          <h2 className="mt-6 font-display text-[1.9rem] font-semibold leading-[1.14] text-ink sm:text-[2.3rem]">
            Ainda com dúvidas?
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <Accordion type="single" collapsible className="w-full">
            {perguntas.map((p, i) => (
              <AccordionItem key={p.q} value={`item-${i}`} className="border-line">
                <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold text-ink hover:no-underline">
                  {p.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 font-body text-[0.95rem] leading-[1.8] text-graphite">
                  {p.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
