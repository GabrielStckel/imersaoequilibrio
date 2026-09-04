import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/dm")({
  component: RedirectDm,
});

function RedirectDm() {
  return (
    <Navigate
      to="/"
      replace
      search={{
        utm_source: "instagram",
        utm_medium: "direct",
        utm_campaign: "equilibrio-out26",
        utm_content: "frio",
        src: "igdm",
      }}
    />
  );
}
