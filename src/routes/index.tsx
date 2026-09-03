import { createFileRoute } from "@tanstack/react-router";

import { Tracking } from "@/components/Tracking";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Diagnostico } from "@/components/sections/Diagnostico";
import { CausaRaiz } from "@/components/sections/CausaRaiz";
import { Metodo } from "@/components/sections/Metodo";
import { Cronograma } from "@/components/sections/Cronograma";
import { ParaQuem } from "@/components/sections/ParaQuem";
import { Autoridade } from "@/components/sections/Autoridade";
import { Oferta } from "@/components/sections/Oferta";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { StickyBar } from "@/components/sections/StickyBar";

const titulo = "Imersão Equilíbrio Sistêmico - 06 e 07 de outubro, ao vivo";
const descricao =
  "Dois dias ao vivo de terapia sistêmica para desarmar a carência que faz você aceitar migalhas no amor e na vida financeira. Vagas por lote, a partir de R$ 47.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: "/jonas.webp",
        fetchPriority: "high",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-pergaminho pb-[76px] md:pb-0">
      <Tracking />
      <Header />
      <Hero />
      <Diagnostico />
      <CausaRaiz />
      <Metodo />
      <Cronograma />
      <ParaQuem />
      <Autoridade />
      <Oferta />
      <Faq />
      <CtaFinal />
      <StickyBar />
    </main>
  );
}
