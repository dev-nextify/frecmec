import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textVariants = cva(
  "",
  {
    variants: {
      variant: {
        h1: "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance font-heading",
        h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 font-heading",
        h3: "scroll-m-20 text-2xl font-semibold tracking-tight font-heading",
        h4: "scroll-m-20 text-xl font-semibold tracking-tight font-heading",
        p: "leading-7 [&:not(:first-child)]:mt-6",
        blockquote: "mt-6 border-l-2 pl-6 italic",
        list: "my-6 ml-6 list-disc [&>li]:mt-2",
        inlineCode: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        lead: "text-xl text-muted-foreground",
        large: "text-lg font-semibold",
        small: "text-sm font-medium leading-none",
        muted: "text-sm text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "p",
    },
  }
)

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
  VariantProps<typeof textVariants> {
  as?: React.ElementType
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, as: Tag = "p", ...props }, ref) => {

    // Si no pasamos "as" pero pasamos un variant de heading (h1-h4), forzamos el tag
    const defaultTags: Record<string, React.ElementType> = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      p: "p",
      blockquote: "blockquote",
      list: "ul",
      inlineCode: "code",
    }

    const ActualComp = Tag !== "p" ? Tag : (variant ? defaultTags[variant] || "p" : "p")

    return (
      <ActualComp
        ref={ref as any}
        className={cn(textVariants({ variant, className }))}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export { Text, textVariants }
