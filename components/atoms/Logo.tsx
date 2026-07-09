import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ABBREVIATION_NAME } from "@/constants";

export function Logo({ className, isLight }: { className?: string; isLight?: boolean }) {
  return (
    <Link href="/" className={cn("relative flex items-center w-48 sm:w-64 h-10 transition-transform hover:scale-[1.02]", className)}>
      <div
        className={cn(
          "absolute left-0 -top-3 sm:-top-4 px-3 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-5 rounded-b-2xl",
          !isLight ? "bg-background" : "bg-transparent"
        )}
      >
        <Image
          src="/logo/logo.png"
          alt={`Logo ${ABBREVIATION_NAME}`}
          width={300}
          height={100}
          className={cn(
            "h-12 sm:h-16 w-auto object-contain max-w-none origin-top-left",
            isLight && "brightness-0 invert"
          )}
          priority
        />
      </div>
    </Link>
  );
}
