"use client";

import * as CoreIcons from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SocialButtonProps {
  iconName: string;
  href: string;
  label: string;
}

export function SocialButton({ iconName, href, label }: SocialButtonProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconObject = (CoreIcons as any)[iconName] || CoreIcons.Link01Icon;

  return (
    <Button
      render={
        <Link
          href={href}
          target="_blank">
        </Link>
      }
      rel="noopener noreferrer"
      aria-label={label}
      size="icon"
      variant="outline"
    >
      <HugeiconsIcon icon={IconObject} />
    </Button>
  );
}
