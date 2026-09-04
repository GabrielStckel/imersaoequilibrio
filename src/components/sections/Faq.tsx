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
    a: "A imersão é ao vivo nos dias 06 e 07/10, e as vivências acontecem em tempo real (é ali que o trabalho de fato acontece). O ingresso dá acesso aos dois encontros ao vivo. Se você precisar assistir depois, o acesso à gravação pode ser adicionado no momento da compra, como item opcional.",
  },
  {
    q: "Preciso ter experiência com terapia sistêmica?",
    a: "Não. A imersão foi construída para ser profunda e acessível ao mesmo tempo. Você será conduzido passo a passo, sem precisar conhecer conceitos prévios.",
  },
  {
    q: "O que exatamente eu recebo depois da compra?",
    a: "Você recebe a confirmação da inscrição, o acesso aos dois encontros ao vivo pelo Zoom, o material de apoio prático e o bônus 'A Postura Sistêmica Diante do Dinheiro'.",
  },
  {
    q: "Como funciona a garantia de 7 dias?",
    a: "Você pode solicitar o reembolso em até 7 dias após a compra, diretamente pela plataforma de pagamento, sem justificativa. O valor é devolvido integralmente.",
  },
];

export function Faq() {
  return (
    <section className="bg-pergaminho py-16 lg:py-32">
      <div className="container-eq grid gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <Reveal>
          <SectionLabel>PERGUNTAS FREQUENTES</SectionLabel>
          <h2 className="mx-auto mt-6 max-w-[320px] text-balance text-center font-display text-[clamp(1.5rem,5.6vw,2.5rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-tinta md:mx-0 md:max-w-none md:text-left md:text-[2.3rem] md:leading-[1.14] lg:text-[40px] lg:leading-[1.15] lg:tracking-[-0.02em]">
            Ainda com dúvidas?
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <Accordion type="single" collapsible className="w-full">
            {perguntas.map((p, i) => (
              <AccordionItem key={p.q} value={`item-${i}`} className="border-borda">
                <AccordionTrigger className="min-h-11 py-6 text-left font-display text-lg font-semibold text-tinta hover:no-underline">
                  {p.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 font-body text-[0.95rem] leading-[1.8] text-corpo lg:text-[18px] lg:leading-[1.75]">
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
