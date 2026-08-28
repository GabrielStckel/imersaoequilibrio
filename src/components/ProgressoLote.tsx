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
        style={{ backgroundColor: tone === "dark" ? "rgba(228,211,163,0.18)" : "var(--color-line)" }}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Ingressos garantidos neste lote"
      >
        <div
          className="h-full rounded-full bg-gold transition-[width] duration-1000 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p
        className={cn(
          "mt-2.5 font-body text-[0.78rem]",
          tone === "dark" ? "text-bone/60" : "text-graphite",
        )}
      >
        <span className={tone === "dark" ? "text-gold" : "text-gold-deep"}>{pct}%</span> dos
        ingressos deste lote já garantidos
      </p>
    </div>
  );
}
