import { useProgressoProgramado } from "@/hooks/useProgressoProgramado";
import { cn } from "@/lib/utils";

export function ProgressoLote({
  tone = "dark",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const pct = useProgressoProgramado();

  return (
    <div className={cn("w-full max-w-sm", className)}>
      <div
        className="h-[5px] w-full overflow-hidden rounded-full"
        style={{ backgroundColor: tone === "dark" ? "color-mix(in srgb, var(--color-ouro-luz) 18%, transparent)" : "var(--color-borda)" }}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Ingressos garantidos neste lote"
      >
        <div
          className="ouro-metal h-full rounded-full transition-[width] duration-1000 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p
        className={cn(
          "mt-2.5 font-body text-[0.9375rem]",
          tone === "dark" ? "text-pergaminho/80" : "text-corpo",
        )}
      >
        <span className={tone === "dark" ? "text-ouro-luz" : "text-ouro-tinta"}>{pct}%</span> dos
        ingressos deste lote já garantidos
      </p>
    </div>
  );
}
