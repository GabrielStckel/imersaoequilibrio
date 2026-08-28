import { createFileRoute, Link } from "@tanstack/react-router";
import { IMERSAO } from "@/config/imersao";

const titulo = "Termos de uso — Imersão Equilíbrio Sistêmico";
const descricao =
  "Condições de participação, acesso às gravações e política de garantia da imersão Equilíbrio Sistêmico.";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
    ],
  }),
  component: Termos,
});

function Termos() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <Link to="/" className="font-body text-[0.75rem] uppercase tracking-[0.24em] text-gold-deep">
        ← Voltar
      </Link>
      <h1 className="mt-8 font-display text-4xl font-semibold text-ink">Termos de uso</h1>
      <div className="mt-8 space-y-5 font-body text-[0.95rem] leading-[1.8] text-graphite">
        <p>
          A imersão {IMERSAO.nome} é um evento online e ao vivo, realizado pelo Zoom nos dias{" "}
          {IMERSAO.dataDia1} e {IMERSAO.dataDia2}, das {IMERSAO.horario}. A inscrição é individual e
          intransferível.
        </p>
        <p>
          O acesso às gravações é liberado por 6 meses a partir do término do evento. É proibida a
          reprodução, gravação ou distribuição do conteúdo sem autorização por escrito.
        </p>
        <p>
          O conteúdo tem finalidade educativa e de autoconhecimento e não substitui acompanhamento
          médico ou psicológico.
        </p>
        <p>
          Garantia incondicional de 7 dias: solicitando dentro desse prazo, o valor é devolvido
          integralmente pela plataforma de pagamento.
        </p>
        <p>
          Dúvidas:{" "}
          <a href={IMERSAO.suporte} className="text-gold-deep underline" target="_blank" rel="noopener noreferrer">
            suporte no WhatsApp
          </a>
          .
        </p>
      </div>
    </main>
  );
}
