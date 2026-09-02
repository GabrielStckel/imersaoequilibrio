import { Link } from "@tanstack/react-router";
import { IMERSAO } from "@/config/imersao";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";

export function CtaFinal() {
  return (
    <footer className="bg-areia">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="mx-auto max-w-[320px] text-balance text-center font-display text-[clamp(1.5rem,5.6vw,2.5rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-tinta md:mx-0 md:max-w-[18ch] md:text-left md:text-[2.9rem] md:leading-[1.1]">
            O respeito não se pede. Ele nasce de quem sustenta o próprio limite.
          </h2>
          <p className="texto-justificado mt-6 max-w-lg font-body text-[0.97rem] leading-[1.8] text-corpo">
            Dois encontros ao vivo para você sair do lugar de quem se doa demais e assumir a postura
            de adulto potente no amor, no dinheiro e na carreira.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <Countdown className="[&>div]:border-borda [&>div]:bg-white [&>div>div:first-child]:text-tinta [&>div>div:last-child]:text-ouro-tinta" />
            <CtaButton origem="cta-final" size="lg" surface="light" />
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col gap-4 border-t border-borda pt-8 font-body text-[0.9375rem] text-corpo sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {IMERSAO.marca} · {IMERSAO.nome}
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-0">
            <Link to="/termos" className="inline-flex min-h-11 items-center py-2.5 transition-colors hover:text-ouro-tinta">
              Termos de uso
            </Link>
            <Link to="/privacidade" className="inline-flex min-h-11 items-center py-2.5 transition-colors hover:text-ouro-tinta">
              Política de privacidade
            </Link>
            <a
              href={IMERSAO.suporte}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center py-2.5 transition-colors hover:text-ouro-tinta"
            >
              Suporte no WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
