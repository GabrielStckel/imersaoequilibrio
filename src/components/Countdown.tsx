import { useCountdown } from "@/hooks/useCountdown";
import { IMERSAO } from "@/config/imersao";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown({ className }: { className?: string }) {
  const c = useCountdown(IMERSAO.inicioEvento);

  if (c.aoVivo) {
    return (
      <p className={cn("font-display text-2xl text-ouro-luz", className)}>Estamos ao vivo agora</p>
    );
  }

  const blocos = [
    { valor: c.dias, label: "dias" },
    { valor: c.horas, label: "horas" },
    { valor: c.minutos, label: "min" },
    { valor: c.segundos, label: "seg" },
  ];

  return (
    <div className={cn("flex gap-3 sm:gap-4", className)} aria-live="off">
      {blocos.map((b) => (
        <div
          key={b.label}
          className="min-w-[64px] rounded-[10px] border border-ouro/28 bg-espresso-alt px-3 py-2.5 text-center sm:min-w-[76px]"
        >
          <div className="font-display text-3xl font-bold leading-none text-ouro-luz sm:text-4xl">
            {pad(b.valor)}
          </div>
          <div className="mt-1.5 font-body text-[11px] uppercase tracking-[0.1em] text-pergaminho/70 lg:text-[14px]">
            {b.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function CountdownInline({ className }: { className?: string }) {
  const c = useCountdown(IMERSAO.inicioEvento);
  if (c.aoVivo) return <span className={className}>Ao vivo agora</span>;
  return (
    <span className={cn("font-body tabular-nums", className)}>
      {c.dias}d {pad(c.horas)}:{pad(c.minutos)}:{pad(c.segundos)}
    </span>
  );
}
