import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/wpp")({
  component: RedirectWpp,
});

function RedirectWpp() {
  return (
    <Navigate
      to="/"
      replace
      search={{
        utm_source: "whatsapp",
        utm_medium: "mensagem",
        utm_campaign: "equilibrio-out26",
        utm_content: "frio",
        src: "wpp",
      }}
    />
  );
}
