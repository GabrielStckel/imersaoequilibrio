import { IMERSAO } from "@/config/imersao";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { cn } from "@/lib/utils";

export function PrecoLote({
  tone = "dark",
  size = "md",
  align = "left",
  className,
}: {
  tone?: "light" | "dark";
  size?: "md" | "lg";
  align?: "left" | "center";
  className?: string;
}) {
  const { lote } = useLoteAtivo();

  if (align === "center") {
    return (
      <div className={cn("flex flex-col items-center text-center", className)}>
        <span
          className={cn(
            "font-body text-sm line-through",
            tone === "dark" ? "text-pergaminho/80" : "text-corpo",
          )}
        >
          De {IMERSAO.valorCheio}
        </span>
        <span
          className={cn(
            "font-display leading-none text-ouro-luz",
            size === "lg" ? "text-6xl sm:text-7xl" : "text-5xl",
          )}
        >
          {lote.preco}
        </span>
        <span
          className={cn(
            "mt-2 font-body text-sm",
            tone === "dark" ? "text-pergaminho/80" : "text-corpo",
          )}
        >
          {lote.parcela} · {lote.nome}
        </span>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap items-end gap-x-4 gap-y-1", className)}>
      <span
        className={cn(
          "font-body text-sm line-through",
          tone === "dark" ? "text-pergaminho/80" : "text-corpo",
        )}
      >
        De {IMERSAO.valorCheio}
      </span>
      <span
        className={cn(
          "font-display leading-none text-ouro-luz",
          size === "lg" ? "text-6xl sm:text-7xl" : "text-5xl",
        )}
      >
        {lote.preco}
      </span>
      <span
        className={cn("font-body text-sm", tone === "dark" ? "text-pergaminho/80" : "text-corpo")}
      >
        {lote.parcela} · {lote.nome}
      </span>
    </div>
  );
}
