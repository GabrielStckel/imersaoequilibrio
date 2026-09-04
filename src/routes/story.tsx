import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/story")({
  component: RedirectStory,
});

function RedirectStory() {
  return (
    <Navigate
      to="/"
      replace
      search={{
        utm_source: "instagram",
        utm_medium: "stories",
        utm_campaign: "equilibrio-out26",
        utm_content: "frio",
        src: "igstory",
      }}
    />
  );
}
