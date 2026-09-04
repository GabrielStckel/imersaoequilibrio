import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/bio")({
  component: RedirectBio,
});

function RedirectBio() {
  return (
    <Navigate
      to="/"
      replace
      search={{
        utm_source: "instagram",
        utm_medium: "bio",
        utm_campaign: "equilibrio-out26",
        utm_content: "frio",
        src: "igbio",
      }}
    />
  );
}
