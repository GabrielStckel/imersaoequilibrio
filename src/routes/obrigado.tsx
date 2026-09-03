import { createFileRoute } from "@tanstack/react-router";
import { IMERSAO } from "@/config/imersao";
import {
  WHATSAPP_GRUPO_URL,
  WHATSAPP_SUPORTE_URL,
  EMAIL_SUPORTE,
} from "@/config/obrigado";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Pagamento confirmado — Imersão Equilíbrio Sistêmico" },
      {
        name: "description",
        content:
          "Sua vaga na Imersão Equilíbrio Sistêmico está confirmada. Falta um passo: entre no grupo do WhatsApp para receber os links e materiais.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Pagamento confirmado — Imersão Equilíbrio Sistêmico" },
      {
        property: "og:description",
        content:
          "Sua vaga está confirmada. Entre no grupo do WhatsApp para receber os links e materiais.",
      },
    ],
  }),
  component: ObrigadoPage,
});

const FOCO =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ouro-tinta";

const PASSOS = [
  {
    titulo: "Pagamento confirmado",
    texto: "Sua inscrição na imersão foi registrada com sucesso.",
    destaque: false,
  },
  {
    titulo: "Entre no grupo do WhatsApp",
    texto:
      "É lá que enviamos os links dos encontros, os materiais e todos os avisos. Sem este passo, você pode perder o acesso.",
    destaque: true,
  },
  {
    titulo: "Reserve os horários",
    texto: `Dias ${IMERSAO.dataDia1.slice(0, 5)} e ${IMERSAO.dataDia2.slice(0, 5)}, das ${IMERSAO.horario}, ao vivo pelo Zoom.`,
    destaque: false,
  },
] as const;

const CONTEUDOS_GRUPO = [
  "Links de acesso aos dois encontros ao vivo no Zoom",
  "PDF com roteiros, perguntas-gatilho e mapas sistêmicos",
  "Áudio de meditação guiada para prática entre os encontros",
  "Avisos importantes e lembretes antes de cada encontro",
] as const;

function IconeWhatsApp({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.08 8.08 0 0 1-1.24-4.28c0-4.47 3.64-8.11 8.12-8.11 2.17 0 4.2.84 5.74 2.38a8.07 8.07 0 0 1 2.37 5.73c0 4.48-3.64 8.12-8.07 8.12Zm4.45-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.36-1.68-.14-.24-.01-.37.11-.5.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.65-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function IconeCheck({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-pergaminho font-body text-tinta">
      {/* Única animação da página: fade-in de 300ms no bloco principal. */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .obrigado-fade { animation: obrigado-fade-in 300ms ease-out both; }
          @keyframes obrigado-fade-in {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: none; }
          }
        }
      `}</style>

      {/* 1 — Faixa espresso */}
      <div className="flex h-10 items-center justify-center bg-espresso px-4">
        <p className="text-center text-[12px] font-medium tracking-wide text-pergaminho/90">
          Inscrição confirmada — Imersão {IMERSAO.nome}
        </p>
      </div>

      {/* 2 — Header: apenas logo, sem link */}
      <header className="border-b border-borda bg-pergaminho">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-center px-4">
          <img
            src="/logo-equilibrio.webp"
            alt={`${IMERSAO.nome} — ${IMERSAO.marca}`}
            width={30}
            height={30}
            className="h-[30px] w-[30px]"
            loading="eager"
            decoding="async"
          />
        </div>
      </header>

      <main className="obrigado-fade mx-auto max-w-3xl px-4">
        {/* 3 — Selo + H1 */}
        <section className="py-14 text-center md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-ouro/40 bg-areia px-4 py-2 text-[12px] font-semibold tracking-[0.14em] text-ouro-tinta uppercase">
            <IconeCheck className="h-4 w-4" />
            Pagamento confirmado
          </span>
          <h1 className="mt-6 font-display text-3xl font-semibold text-tinta md:text-[40px] md:leading-[1.15]">
            Pagamento confirmado.
            <br />
            <span className="ouro-texto">Falta um passo.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-corpo">
            Sua vaga está garantida. Para receber os links dos encontros e os
            materiais, você precisa entrar no grupo do WhatsApp da imersão.
          </p>
        </section>

        {/* 4 — Card de 3 passos */}
        <section aria-labelledby="passos" className="pb-14 md:pb-20">
          <h2 id="passos" className="sr-only">
            Próximos passos
          </h2>
          <ol className="card-nivel-b space-y-6">
            {PASSOS.map((passo, i) => (
              <li
                key={passo.titulo}
                className={
                  passo.destaque
                    ? "-mx-2 flex gap-4 rounded-xl border-1.5 border border-borda-forte bg-areia p-4 shadow-[0_8px_24px_rgb(138_106_32/14%)]"
                    : "flex gap-4"
                }
              >
                <span className="marcador-sequencia mt-0.5">{i + 1}</span>
                <div>
                  <p className="font-display text-[15px] font-semibold text-tinta">
                    {passo.titulo}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-corpo">
                    {passo.texto}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* 5 — Botão primário WhatsApp */}
          <div className="mt-8 text-center">
            <a
              href={WHATSAPP_GRUPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`botao-ouro-metal inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-8 py-3 font-display text-base font-semibold text-espresso ${FOCO}`}
            >
              <IconeWhatsApp className="relative z-10 h-5 w-5" />
              <span className="relative z-10">Entrar no grupo do WhatsApp</span>
            </a>
            <p className="mt-3 text-[13px] text-corpo">
              Leva menos de 10 segundos.
            </p>
          </div>
        </section>

        <div className="filete-ouro" aria-hidden="true" />

        {/* 6 — Vídeo (embed futuro) */}
        <section className="py-14 md:py-20">
          <div className="card-nivel-a flex aspect-video items-center justify-center bg-areia">
            {/* VTURB */}
            <p className="text-sm text-corpo">
              Em breve: um recado em vídeo do Jonas para você.
            </p>
          </div>
        </section>

        <div className="filete-ouro" aria-hidden="true" />

        {/* 7 — O que é enviado só no grupo */}
        <section aria-labelledby="so-no-grupo" className="py-14 md:py-20">
          <h2
            id="so-no-grupo"
            className="text-center font-display text-2xl font-semibold text-tinta md:text-3xl"
          >
            O que é enviado <span className="ouro-texto">só no grupo</span>
          </h2>
          <ul className="card-nivel-a mt-8 space-y-4">
            {CONTEUDOS_GRUPO.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="icone-card mt-0.5 h-8 w-8 rounded-lg">
                  <IconeCheck className="h-4 w-4" />
                </span>
                <span className="text-[15px] leading-relaxed text-corpo">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="filete-ouro" aria-hidden="true" />

        {/* 8 — Detalhes do encontro */}
        <section aria-labelledby="detalhes" className="py-14 md:py-20">
          <h2
            id="detalhes"
            className="text-center font-display text-2xl font-semibold text-tinta md:text-3xl"
          >
            Detalhes do encontro
          </h2>
          <div className="card-nivel-a mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-[12px] font-semibold tracking-[0.12em] text-ouro-tinta uppercase">
                Datas
              </p>
              <p className="mt-2 font-display text-[15px] font-semibold text-tinta">
                {IMERSAO.dataDia1} e {IMERSAO.dataDia2}
              </p>
            </div>
            <div>
              <p className="text-[12px] font-semibold tracking-[0.12em] text-ouro-tinta uppercase">
                Horário
              </p>
              <p className="mt-2 font-display text-[15px] font-semibold text-tinta">
                {IMERSAO.horario}
              </p>
            </div>
            <div>
              <p className="text-[12px] font-semibold tracking-[0.12em] text-ouro-tinta uppercase">
                Onde
              </p>
              <p className="mt-2 font-display text-[15px] font-semibold text-tinta">
                Ao vivo pelo Zoom
              </p>
            </div>
          </div>
        </section>

        <div className="filete-ouro" aria-hidden="true" />

        {/* 9 — E-mail e suporte */}
        <section aria-labelledby="suporte" className="py-14 text-center md:py-20">
          <h2
            id="suporte"
            className="font-display text-2xl font-semibold text-tinta md:text-3xl"
          >
            E-mail e suporte
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-corpo">
            Enviamos a confirmação da sua inscrição para o e-mail usado na
            compra. Se não encontrar, verifique a caixa de spam. Qualquer
            dúvida, fale com a gente:
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_SUPORTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-borda-forte bg-white px-6 py-3 text-sm font-semibold text-tinta ${FOCO}`}
            >
              <IconeWhatsApp className="h-4 w-4 text-ouro-tinta" />
              Suporte pelo WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL_SUPORTE}`}
              className={`inline-flex min-h-12 items-center justify-center rounded-full border border-borda-forte bg-white px-6 py-3 text-sm font-semibold text-tinta ${FOCO}`}
            >
              {EMAIL_SUPORTE}
            </a>
          </div>
        </section>
      </main>

      {/* 10 — Rodapé espresso */}
      <footer className="bg-espresso px-4 py-10 text-center">
        <img
          src="/logo-equilibrio.webp"
          alt=""
          width={30}
          height={30}
          className="mx-auto h-[30px] w-[30px] opacity-90"
          loading="lazy"
          decoding="async"
        />
        <p className="mt-4 text-[13px] text-pergaminho/70">
          {IMERSAO.nome} — {IMERSAO.marca}
        </p>
      </footer>
    </div>
  );
}
