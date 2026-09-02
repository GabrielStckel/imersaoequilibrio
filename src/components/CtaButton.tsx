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
    sm: "min-h-11 px-4 py-2.5",
    md: "min-h-12 px-6 py-3.5",
    lg: "min-h-12 px-8 py-4",
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
        "group inline-flex items-center justify-center gap-2 rounded-xl font-display text-base font-semibold tracking-[0.01em] transition-[filter,transform,box-shadow] duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ouro focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        variant === "solid"
          ? "botao-ouro-metal text-espresso"
          : "border border-ouro-tinta/50 text-ouro-tinta hover:border-ouro-tinta hover:bg-ouro/10",
        sizes[size],
        className,
      )}
    >
      <span className="relative z-10">{textoCta}</span>
      <ArrowRight
        className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </a>
  );
}
