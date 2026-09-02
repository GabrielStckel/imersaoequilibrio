import { Link } from "@tanstack/react-router";
import { IMERSAO } from "@/config/imersao";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";

export function CtaFinal() {
  return (
    <footer className="relative overflow-hidden bg-espresso">
      <div
        aria-hidden="true"
        className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="max-w-[18ch] font-display text-[2rem] font-semibold leading-[1.1] text-pergaminho sm:text-[2.9rem]">
            O respeito não se pede. Ele nasce de quem sustenta o próprio limite.
          </h2>
          <p className="mt-6 max-w-lg font-body text-[0.97rem] leading-[1.8] text-pergaminho/80">
            Dois encontros ao vivo para você sair do lugar de quem se doa demais e assumir a postura
            de adulto potente no amor, no dinheiro e na carreira.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <Countdown />
            <CtaButton origem="cta-final" size="lg" />
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col gap-4 border-t border-ouro/12 pt-8 font-body text-[0.78rem] text-pergaminho/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {IMERSAO.marca} · {IMERSAO.nome}
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/termos" className="transition-colors hover:text-ouro-luz">
              Termos de uso
            </Link>
            <Link to="/privacidade" className="transition-colors hover:text-ouro-luz">
              Política de privacidade
            </Link>
            <a
              href={IMERSAO.suporte}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-ouro-luz"
            >
              Suporte no WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
