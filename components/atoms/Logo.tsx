import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ABBREVIATION_NAME } from "@/constants";

interface LogoProps {
  className?: string;
  isLight?: boolean;
  variant?: "default" | "navbar";
}

export function Logo({ className, isLight, variant = "default" }: LogoProps) {
  if (variant === "navbar") {
    return (
      <Link href="/" className={cn("relative flex items-center w-48 sm:w-64 h-10 transition-transform hover:scale-[1.02]", className)}>
        <div
          className={cn(
            "absolute left-0 -top-3 sm:-top-4 px-3 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-5 rounded-b-2xl",
            !isLight ? "bg-background" : "bg-transparent"
          )}
        >
          <Image
            src={isLight ? "/logo/logo-invert.png" : "/logo/logo.png"}
            alt={`Logo ${ABBREVIATION_NAME}`}
            width={300}
            height={100}
            className="h-12 sm:h-16 w-auto object-contain max-w-none origin-top-left"
            priority
          />
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className={cn("flex items-center hover:opacity-90 transition-opacity", className)}>
      <Image
        src={isLight ? "/logo/logo-invert.png" : "/logo/logo.png"}
        alt={`Logo ${ABBREVIATION_NAME}`}
        width={300}
        height={100}
        className="h-12 sm:h-16 w-auto object-contain"
        priority
      />
    </Link>
  );
}
