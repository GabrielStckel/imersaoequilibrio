import { cn } from "@/lib/utils";

function ChamaHotmart({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 1.6c.5 2.7-.3 4.6-2.3 6.6-2.4 2.4-3.4 4-3.4 6.2 0 1.3.4 2.4 1.1 3.3-1.8-.6-3-2.4-3-4.6 0-.4 0-.8.1-1.2-1.7 1.5-2.7 3.5-2.7 5.7C3.3 21.3 7.2 25 12 25s8.7-3.7 8.7-7.4c0-3.3-1.6-5.6-4.2-8.2-1.6-1.6-2.7-3.1-3-7.8Z"
        fill="#FF4F00"
        transform="translate(0 -1)"
      />
    </svg>
  );
}

export function HotmartGuarantee({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex flex-col items-center gap-1 text-center", className)}>
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-ouro/25" />
      <div className="flex items-center justify-center gap-2">
        <ChamaHotmart className="h-[22px] w-[22px] shrink-0" />
        <span className="font-display text-[15px] font-semibold text-pergaminho">Hotmart</span>
      </div>
      <p className="font-body text-[13px] font-medium text-pergaminho/85 lg:text-[14px]">
        Pagamento Seguro
      </p>
      <p className="font-body text-[12px] font-normal text-pergaminho/70 lg:text-[14px]">
        Garantia incondicional de 7 dias
      </p>
    </div>
  );
}