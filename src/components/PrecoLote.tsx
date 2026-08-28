import { IMERSAO } from "@/config/imersao";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { cn } from "@/lib/utils";

export function PrecoLote({
  tone = "dark",
  size = "md",
  className,
}: {
  tone?: "light" | "dark";
  size?: "md" | "lg";
  className?: string;
}) {
  const { lote } = useLoteAtivo();

  return (
    <div className={cn("flex flex-wrap items-end gap-x-4 gap-y-1", className)}>
      <span
        className={cn(
          "font-body text-sm line-through",
          tone === "dark" ? "text-bone/40" : "text-graphite/60",
        )}
      >
        De {IMERSAO.valorCheio}
      </span>
      <span
        className={cn(
          "font-display leading-none text-gold",
          size === "lg" ? "text-6xl sm:text-7xl" : "text-5xl",
        )}
      >
        {lote.preco}
      </span>
      <span
        className={cn("font-body text-sm", tone === "dark" ? "text-bone/70" : "text-graphite")}
      >
        {lote.parcela} · {lote.nome}
      </span>
    </div>
  );
}
