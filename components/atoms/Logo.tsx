import Link from "next/link";
import { ABBREVIATION_NAME } from "@/constants";
import { cn } from "@/lib/utils";

export function Logo({ className, isLight }: { className?: string; isLight?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-sm">
        <span className="text-white font-bold text-xl tracking-tighter">
          F
        </span>
      </div>
      <span className={cn("font-bold text-xl tracking-tight hidden sm:inline-block", isLight ? "text-white" : "text-foreground")}>
        {ABBREVIATION_NAME}
      </span>
    </Link>
  );
}
