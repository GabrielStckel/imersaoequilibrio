import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLoteAtivo } from "@/hooks/useLoteAtivo";
import { useCheckoutUrl } from "@/hooks/useCheckoutUrl";
import { IMERSAO } from "@/config/imersao";
import { trackInitiateCheckout } from "@/lib/tracking";

type Props = {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  surface?: "light" | "dark";
  semSeta?: boolean;
  origem: string;
  to?: "checkout" | "oferta";
};

export function CtaButton({
  label,
  className,
  size = "md",
  surface = "dark",
  semSeta = false,
  origem,
  to = "oferta",
}: Props) {
  const { lote } = useLoteAtivo();
  const checkoutUrl = useCheckoutUrl();
  const textoCta = label ?? `${IMERSAO.cta} ${lote.nome}`;

  const href = to === "checkout" ? checkoutUrl : "#oferta";

  const sizes = {
    sm: "min-h-11 px-4 py-2.5",
    md: "min-h-12 px-6 py-3.5",
    lg: "min-h-12 px-8 py-4",
  } as const;

  const variantClasses =
    surface === "light"
      ? "botao-ouro-claro text-espresso"
      : "botao-ouro-metal text-espresso";

  return (
    <a
      href={href}
      target={to === "checkout" ? "_blank" : undefined}
      rel={to === "checkout" ? "noopener noreferrer" : undefined}
      aria-label={textoCta}
      onClick={() =>
        trackInitiateCheckout({ origem, lote: lote.nome, value: lote.preco, currency: "BRL" })
      }
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-xl font-display text-base font-semibold tracking-[0.01em] transition-[filter,transform,box-shadow] duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ouro focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        variantClasses,
        sizes[size],
        className,
      )}
    >
      <span className="relative z-10">{textoCta}</span>
      {!semSeta && (
        <ArrowRight
          className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      )}
    </a>
  );
}
