import { useEffect, useRef } from "react";
import { Calendar } from "lucide-react";
import { IMERSAO } from "@/config/imersao";
import { Countdown } from "@/components/Countdown";
import { ProgressoLote } from "@/components/ProgressoLote";
import { PrecoLote } from "@/components/PrecoLote";
import { CtaButton } from "@/components/CtaButton";
import { HotmartGuarantee } from "@/components/HotmartGuarantee";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";

function HeroVideo() {
  const { vturb } = IMERSAO.video;
  const elementoId = `vid-${vturb.playerId}`;
  const scriptSrc = `https://scripts.converteai.net/${vturb.contaId}/players/${vturb.playerId}/v4/player.js`;
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const injetar = () => {
      // Trava: em StrictMode o React monta duas vezes; sem isso o custom
      // element é registrado em duplicidade e o player não inicializa.
      if (document.querySelector(`script[src="${scriptSrc}"]`)) return;
      const s = document.createElement("script");
      s.src = scriptSrc;
      s.async = true;
      document.head.appendChild(s);
    };

    const cancelar = () => {
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
        idleId = undefined;
      }
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
        timeoutId = undefined;
      }
    };

    // Toque no vídeo carrega o player na hora, sem esperar a ociosidade.
    const aoTocar = () => {
      cancelar();
      injetar();
    };
    wrapper?.addEventListener("pointerdown", aoTocar, { once: true });

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(injetar, { timeout: 2000 });
    } else {
      timeoutId = setTimeout(injetar, 1200);
    }

    return () => {
      cancelar();
      wrapper?.removeEventListener("pointerdown", aoTocar);
    };
  }, [scriptSrc]);

  return (
    <div>
      <div
        ref={wrapperRef}
        className="moldura-ouro-escura relative w-full overflow-hidden rounded-card bg-espresso-alt/60 shadow-soft"
      >
        <vturb-smartplayer
          id={elementoId}
          style={{ display: "block", margin: "0 auto", width: "100%" }}
        >
          <div
            className="vturb-player-placeholder"
            style={{
              position: "relative",
              width: "100%",
              padding: "56.25% 0 0",
              zIndex: 0,
              backgroundColor: "black",
            }}
          />
        </vturb-smartplayer>
      </div>

      <p className="mt-3 hidden font-body text-xs uppercase leading-relaxed tracking-[0.12em] text-ouro-luz md:block lg:text-[15px]">
        {IMERSAO.autoridade.nome} · Ao vivo pelo Zoom · {IMERSAO.horario}
      </p>

      <div className="mt-7 hidden lg:flex lg:flex-col">
        {IMERSAO.autoridade.numeros.map((numero) => (
          <div key={numero.label} className="relative py-4 lg:py-16">
            <span aria-hidden="true" className="filete-ouro absolute inset-x-0 top-0" />
            <p className="font-body text-[17px] leading-[1.5] text-pergaminho/85">
              <strong className="font-display font-bold text-ouro-luz">{numero.valor}</strong>{" "}
              {numero.label}
            </p>
          </div>
        ))}
      </div>
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

        <div className="mx-auto mt-[14px] inline-flex items-center gap-[10px] rounded-[12px] border border-ouro/35 bg-[rgb(34_28_18_/_0.55)] px-[14px] py-[10px] md:hidden">
          <Calendar className="h-4 w-4 text-ouro-luz" strokeWidth={1.5} aria-hidden="true" />
          <div className="text-left">
            <p className="whitespace-nowrap font-display text-[13px] font-semibold text-ouro-luz">
              06 e 07 de outubro
            </p>
            <p className="whitespace-nowrap font-body text-xs text-pergaminho/80">
              19h30 às 21h30 · ao vivo pelo Zoom
            </p>
          </div>
        </div>
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
    <div className="hidden md:block lg:hidden">
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
        </div>
      </Reveal>
    </div>
  );
}

function LargeDesktopPurchase() {
  return (
    <div className="moldura-ouro-escura hidden rounded-card bg-espresso-alt/25 p-8 text-center lg:block lg:w-[520px]">
      <Reveal delay={200}>
        <PrecoLote align="center" />
        <CtaButton to="oferta" origem="hero" size="lg" className="mt-6 h-[60px] w-full" />
      </Reveal>
      <Reveal delay={240}>
        <div className="mt-5 flex justify-center">
          <HotmartGuarantee semFilete />
        </div>
      </Reveal>
      <Reveal delay={280}>
        <ProgressoLote className="mt-6 w-full text-center [&>p]:text-center [&>p]:lg:text-[15px] [&>p]:lg:leading-[1.6]" />
      </Reveal>
      <Reveal delay={320}>
        <div className="relative mt-6 pt-6">
          <span aria-hidden="true" className="filete-ouro absolute inset-x-0 top-0" />
          <p className="mb-5 font-body text-sm font-medium uppercase tracking-[0.12em] text-ouro-luz">
            A imersão começa em
          </p>
          <Countdown className="justify-center gap-2 [&>div]:min-w-0 [&>div]:flex-1" />
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

      <div className="relative mx-auto grid w-[calc(100%-2rem)] max-w-[340px] gap-x-14 pb-14 pt-8 text-center md:container-eq md:w-auto md:px-8 md:pb-20 md:pt-16 md:text-left lg:grid-cols-[690px_534px] lg:items-start lg:px-0 lg:pb-28 lg:pt-28">
        {/* Topo: label + título (sempre 3 linhas) */}
        <div className="lg:col-start-1 lg:row-start-1">
          <Reveal className="hidden md:block lg:hidden">
            <SectionLabel tone="dark">Imersão Online e Ao Vivo · 06 e 07 de Outubro</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-[17px] font-bold leading-[1.18] tracking-[-0.02em] text-pergaminho md:mt-7 md:text-[clamp(1.75rem,6.2vw,3rem)] md:leading-[1.12] lg:mt-0 lg:text-[42px] lg:leading-[1.12] lg:tracking-[-0.02em]">
              <span className="lg:hidden">
                <span className="block whitespace-nowrap md:inline md:whitespace-normal">Por que doar-se demais está afastando</span><span className="hidden md:inline"><br /></span>{" "}
                <span className="ouro-texto-escuro block whitespace-nowrap md:inline md:whitespace-normal">o respeito na sua relação amorosa</span><span className="hidden md:inline"><br /></span>{" "}
                <span className="block whitespace-nowrap md:inline md:whitespace-normal">e travando o fluxo do seu dinheiro?</span>
              </span>
              <span className="hidden lg:inline">
                <span>Por que doar-se demais</span><br />
                <span className="ouro-texto-escuro">afasta o respeito</span><br />
                <span>e trava o dinheiro?</span>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-[14px] max-w-[320px] font-body text-[15px] leading-[1.5] text-pergaminho/85 md:mx-0 md:max-w-[48ch] lg:mt-8 lg:max-w-none lg:text-[20px] lg:leading-[1.6]">
              Desarme a carência de infância que faz você aceitar migalhas no amor e se submeter à
              escassez financeira. E retome o seu lugar de adulto potente.
            </p>
          </Reveal>
        </div>

        {/* Vídeo + subtítulo realocado (menor) */}
        <Reveal delay={160} className="mt-6 md:mt-7 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-start">
          <HeroVideo />
        </Reveal>

        {/* Compra: countdown + progresso + preço + CTA */}
        <div className="lg:col-start-1 lg:row-start-2 lg:mt-8">
          <MobilePurchase />
          <DesktopPurchase />
          <LargeDesktopPurchase />
        </div>
      </div>
      <div aria-hidden="true" className="filete-ouro absolute inset-x-0 bottom-0" />
    </section>
  );
}
