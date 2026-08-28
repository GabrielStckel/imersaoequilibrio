import { createFileRoute, Link } from "@tanstack/react-router";
import { IMERSAO } from "@/config/imersao";

const titulo = "Política de privacidade — Imersão Equilíbrio Sistêmico";
const descricao =
  "Como tratamos os dados de quem se inscreve na imersão Equilíbrio Sistêmico, incluindo cookies e rastreio de campanhas.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
    ],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <Link to="/" className="font-body text-[0.75rem] uppercase tracking-[0.24em] text-gold-deep">
        ← Voltar
      </Link>
      <h1 className="mt-8 font-display text-4xl font-semibold text-ink">Política de privacidade</h1>
      <div className="mt-8 space-y-5 font-body text-[0.95rem] leading-[1.8] text-graphite">
        <p>
          Coletamos nome, e-mail e telefone informados no checkout para viabilizar o acesso à imersão{" "}
          {IMERSAO.nome} e enviar comunicações relacionadas ao evento.
        </p>
        <p>
          Utilizamos cookies e tecnologias de mensuração (Meta Pixel e parâmetros de campanha) para
          medir a performance dos anúncios. Esses dados são usados de forma agregada e você pode
          bloqueá-los nas configurações do navegador.
        </p>
        <p>
          Os dados de pagamento são processados diretamente pela Hotmart; não armazenamos dados de
          cartão.
        </p>
        <p>
          Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo{" "}
          <a href={IMERSAO.suporte} className="text-gold-deep underline" target="_blank" rel="noopener noreferrer">
            nosso suporte
          </a>
          .
        </p>
      </div>
    </main>
  );
}
