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
      <span aria-hidden="true" className={cn("h-px w-10", tone === "dark" ? "bg-gold/60" : "bg-gold-deep/40")} />
      <span
        className={cn(
          "font-body text-[0.68rem] uppercase tracking-[0.28em]",
          tone === "dark" ? "text-gold" : "text-gold-deep",
        )}
      >
        {children}
      </span>
    </div>
  );
}
