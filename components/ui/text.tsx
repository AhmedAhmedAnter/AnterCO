import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textVariants = cva(
    "text-foreground",
    {
        variants: {
            variant: {
                default: "text-base text-black-500",
                "heading-xl": "text-[56px] leading-[62px] tracking-[0]",
                "heading-lg": "text-[48px] leading-[54px] tracking-[0]",
                "heading-md": "text-[40px] leading-[46px] tracking-[0]",
                "heading-sm": "text-[36px] leading-[42px] tracking-[0]",
                "heading-xs": "text-[32px] leading-[38px] tracking-[0]",
                "body-xl": "text-[28px] leading-[36px] tracking-[0]",
                "body-lg": "text-[24px] leading-[32px] tracking-[0]",
                "body-md": "text-[20px] leading-[28px] tracking-[0]",
                "body-sm": "text-[18px] leading-[24px] tracking-[0]",
                "body-xs": "text-[16px] leading-[20px] tracking-[0]",
                "caption-sm": "text-sm leading-[16px] tracking-[0]",
                "caption-xs": "text-[12px] leading-[14px] tracking-[0]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

type TextProps = React.HTMLAttributes<HTMLElement> &
    VariantProps<typeof textVariants> & {
        as?: React.ElementType
    }


const variantTagMap: Record<string, React.ElementType> = {
    default: "p",
    "heading-xl": "h1",
    "heading-lg": "h2",
    "heading-md": "h3",
    "heading-sm": "h4",
    "heading-xs": "h5",
    "body-xl": "p",
    "body-lg": "p",
    "body-md": "p",
    "body-sm": "p",
    "body-xs": "p",
    "caption-sm": "span",
    "caption-xs": "span",
}

const Text = React.forwardRef<HTMLElement, TextProps>(
    ({ className, variant, as, ...props }, ref) => {
        const Comp = as || (variant ? variantTagMap[variant] : undefined) || "p"

        return (
            <Comp
                ref={ref}
                className={cn(textVariants({ variant, className }))}
                {...props}
            />
        )
    }
)
Text.displayName = "Text"

export { Text, textVariants }
