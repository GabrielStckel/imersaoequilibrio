import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { IMERSAO } from "@/config/imersao";
import { trackInitiateCheckout } from "@/lib/tracking";

type Props = {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  origem: string;
};

export function CtaButton({
  label,
  className,
  size = "md",
  variant = "solid",
  origem,
}: Props) {
  const { lote } = useLoteAtivo();
  const textoCta = label ?? `${IMERSAO.cta} ${lote.nome}`;

  const sizes = {
    sm: "px-4 py-2 text-[0.78rem]",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4.5 text-base",
  } as const;

  return (
    <a
      href={lote.checkout}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={textoCta}
      onClick={() =>
        trackInitiateCheckout({ origem, lote: lote.nome, value: lote.preco, currency: "BRL" })
      }
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-[10px] font-medium tracking-[0.01em] transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        variant === "solid"
          ? "bg-gold text-espresso shadow-[0_10px_30px_-14px_rgba(194,162,76,0.9)] hover:bg-gold-soft"
          : "border border-gold/50 text-gold hover:border-gold hover:bg-gold/10",
        sizes[size],
        className,
      )}
    >
      {textoCta}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </a>
  );
}
