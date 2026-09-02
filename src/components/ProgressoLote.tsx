import { useJanelaLote } from "@/hooks/useProgressoProgramado";
import { IMERSAO } from "@/config/imersao";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { cn } from "@/lib/utils";

export function textoEncerramento(nomeLote: string, dias: number) {
  return dias <= 0 ? `${nomeLote} encerra hoje` : `${nomeLote} encerra em ${dias} dias`;
}

export function ProgressoLote({
  tone = "dark",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const { pct, diasRestantes } = useJanelaLote();
  const { lote } = useLoteAtivo();
  const rotulo = textoEncerramento(lote.nome ?? IMERSAO.lotes[0]!.nome, diasRestantes);

  return (
    <div className={cn("w-full max-w-sm", className)}>
      <div
        className="h-[6px] w-full overflow-hidden rounded-full"
        style={{ backgroundColor: "rgba(122,95,28,.20)" }}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={rotulo}
      >
        <div
          className="ouro-metal h-full rounded-full transition-[width] duration-1000 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p
        className={cn(
          "mt-2.5 font-body text-[13px]",
          tone === "dark" ? "text-pergaminho/80" : "text-corpo",
        )}
      >
        {rotulo}
      </p>
    </div>
  );
}
