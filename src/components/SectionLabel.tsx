import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span aria-hidden="true" className="filete-ouro w-10" />
      <span
        className={cn(
          "font-body text-xs uppercase tracking-[0.1em]",
          tone === "dark" ? "text-ouro-luz" : "text-ouro-tinta",
        )}
      >
        {children}
      </span>
    </div>
  );
}
