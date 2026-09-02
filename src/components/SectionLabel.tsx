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
      <span aria-hidden="true" className={cn("h-px w-10", tone === "dark" ? "bg-ouro/60" : "bg-ouro-tinta/40")} />
      <span
        className={cn(
          "font-body text-xs uppercase tracking-[0.12em]",
          tone === "dark" ? "text-ouro-luz" : "text-ouro-tinta",
        )}
      >
        {children}
      </span>
    </div>
  );
}
