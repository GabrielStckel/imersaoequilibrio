import { Calendar } from "lucide-react";
import { IMERSAO } from "@/config/imersao";
import { Countdown } from "@/components/Countdown";
import { ProgressoLote } from "@/components/ProgressoLote";
import { PrecoLote } from "@/components/PrecoLote";
import { CtaButton } from "@/components/CtaButton";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";

function HeroVideo() {
  const { embedUrl, legenda } = IMERSAO.video;

  return (
    <div>
      <div className="moldura-ouro-escura relative aspect-video w-full overflow-hidden rounded-card bg-espresso-alt/60 shadow-soft">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={legenda}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <img
            src={IMERSAO.autoridade.foto}
            alt={`Retrato de ${IMERSAO.autoridade.nome}`}
            width={640}
            height={360}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>

      {!embedUrl && (
        <p className="mt-3 hidden font-body text-xs uppercase tracking-[0.12em] text-ouro-luz md:block">
          {legenda}
        </p>
      )}

      <p className="mt-5 hidden max-w-[48ch] font-body text-base leading-[1.65] text-pergaminho/80 md:block">
        Desarme a carência de infância que faz você aceitar migalhas no amor e se submeter à
        escassez financeira. E retome o seu lugar de adulto potente.
      </p>
      <p className="mt-3 hidden font-body text-xs uppercase leading-relaxed tracking-[0.12em] text-ouro-luz md:block">
        {IMERSAO.autoridade.nome} · Ao vivo pelo Zoom · {IMERSAO.horario}
      </p>
    </div>
  );
}

function MobilePurchase() {
  const { lote } = useLoteAtivo();

  return (
    <div className="moldura-ouro-escura mt-7 rounded-card bg-espresso-alt/25 p-5 text-center md:hidden">
      <Reveal delay={200}>
        <div className="flex flex-col items-center gap-1">
          <span className="font-body text-[15px] leading-none text-pergaminho/70 line-through">
            De R$ 797
          </span>
          <span className="ouro-texto-escuro font-display text-[46px] font-bold leading-none tabular-nums">
            {lote.preco}
          </span>
          <span className="font-body text-sm leading-tight text-pergaminho/85">
            {lote.parcela} · {lote.nome}
          </span>
        </div>

        <CtaButton to="oferta" origem="hero" size="lg" className="mt-5 h-[52px] w-full" />

        <p className="mt-[10px] text-center font-body text-xs text-pergaminho/75 md:hidden">
          06 e 07 de outubro · 19h30 às 21h30 · ao vivo pelo Zoom
        </p>

        <p className="mt-3 font-body text-xs leading-relaxed text-pergaminho/80">
          Pagamento seguro via Hotmart · Garantia incondicional de 7 dias
        </p>
      </Reveal>

      <Reveal delay={240}>
        <ProgressoLote className="mx-auto mt-5 text-center" />
      </Reveal>

      <Reveal delay={280}>
        <div className="relative mt-6 pt-6">
          <span aria-hidden="true" className="filete-ouro absolute inset-x-0 top-0" />
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.12em] text-ouro-luz">
            A imersão começa em
          </p>
          <Countdown className="justify-center gap-2" />
        </div>
      </Reveal>
    </div>
  );
}

function DesktopPurchase() {
  return (
    <div className="hidden md:block">
      <Reveal delay={200}>
        <Countdown />
      </Reveal>
      <Reveal delay={240}>
        <ProgressoLote className="mt-6" />
      </Reveal>
      <Reveal delay={280}>
        <div className="relative mt-7 pt-7">
          <span aria-hidden="true" className="filete-ouro absolute inset-x-0 top-0" />
          <PrecoLote />
          <CtaButton to="oferta" origem="hero" size="lg" className="mt-6 w-auto" />
          <p className="mt-4 text-left font-body text-[0.75rem] leading-relaxed text-pergaminho/80">
            Pagamento seguro via Hotmart · Garantia incondicional de 7 dias
          </p>
        </div>
      </Reveal>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ouro/30 bg-espresso">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgb(201_168_63_/_0.13),transparent_65%)]"
      />

      <div className="relative mx-auto grid w-[calc(100%-2rem)] max-w-[340px] gap-x-14 pb-14 pt-8 text-center md:w-auto md:max-w-6xl md:px-8 md:pb-20 md:pt-16 md:text-left lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:pb-28 lg:pt-28">
        {/* Topo: label + título (sempre 3 linhas) */}
        <div className="lg:col-start-1 lg:row-start-1">
          <Reveal className="hidden md:block">
            <SectionLabel tone="dark">Imersão Online e Ao Vivo · 06 e 07 de Outubro</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-[17px] font-bold leading-[1.18] tracking-[-0.02em] text-pergaminho md:mt-7 md:text-[clamp(1.75rem,6.2vw,3rem)] md:leading-[1.12]">
              <span className="block whitespace-nowrap md:inline md:whitespace-normal">Por que doar-se demais está afastando</span><span className="hidden md:inline"><br /></span>{" "}
              <span className="ouro-texto-escuro block whitespace-nowrap md:inline md:whitespace-normal">o respeito na sua relação amorosa</span><span className="hidden md:inline"><br /></span>{" "}
              <span className="block whitespace-nowrap md:inline md:whitespace-normal">e travando o fluxo do seu dinheiro?</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-[14px] max-w-[320px] font-body text-[15px] leading-[1.5] text-pergaminho/85 md:hidden">
              Desarme a carência de infância que faz você aceitar migalhas no amor e se submeter à
              escassez financeira. E retome o seu lugar de adulto potente.
            </p>
          </Reveal>
        </div>

        {/* Vídeo + subtítulo realocado (menor) */}
        <Reveal delay={160} className="mt-6 md:mt-7 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-center">
          <HeroVideo />
        </Reveal>

        {/* Compra: countdown + progresso + preço + CTA */}
        <div className="lg:col-start-1 lg:row-start-2 lg:mt-8">
          <MobilePurchase />
          <DesktopPurchase />
        </div>
      </div>
      <div aria-hidden="true" className="filete-ouro absolute inset-x-0 bottom-0" />
    </section>
  );
}
