import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  alignment = "left",
  className,
}: SectionHeadingProps) {
  const alignmentClass =
    alignment === "center"
      ? "text-center mx-auto"
      : alignment === "right"
        ? "text-right ml-auto"
        : "text-left mr-auto";

  return (
    <div className={cn("max-w-2xl flex flex-col gap-3", alignmentClass, className)}>
      <Text variant="h2">
        {title}
      </Text>
      {subtitle && (
        <Text variant="p">
          {subtitle}
        </Text>
      )}
      <div className={cn("h-1.5 w-16 bg-primary rounded-full mt-2", alignment === "center" ? "mx-auto" : alignment === "right" ? "ml-auto" : "")} />
    </div>
  );
}
