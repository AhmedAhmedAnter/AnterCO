"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const spanVariants = cva("inline", {
    variants: {
        display: {
            inline: "inline",
            "inline-block": "inline-block",
            "inline-flex": "inline-flex",
        },
        color: {
            inherit: "text-inherit",
            foreground: "text-foreground",
            primary: "text-primary",
            secondary: "text-secondary",
            muted: "text-gray-500",
            danger: "text-red-500",
            success: "text-green-500",
            warning: "text-yellow-500",
            aqua: "text-aqua-500",
            desert: "text-desert-500",
        },
        weight: {
            light: "font-light",
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
        },
        size: {
            inherit: "text-inherit",
            xs: "text-xs",
            sm: "text-sm",
            base: "text-base",
            lg: "text-lg",
            xl: "text-xl",
            "2xl": "text-2xl",
        },
        decoration: {
            none: "no-underline",
            underline: "underline",
            "line-through": "line-through",
        },
        transform: {
            none: "normal-case",
            uppercase: "uppercase",
            lowercase: "lowercase",
            capitalize: "capitalize",
        },
        truncate: {
            true: "truncate",
            false: "",
        },
        whitespace: {
            normal: "whitespace-normal",
            nowrap: "whitespace-nowrap",
            pre: "whitespace-pre",
            "pre-line": "whitespace-pre-line",
            "pre-wrap": "whitespace-pre-wrap",
        },
    },
    defaultVariants: {
        display: "inline",
        color: "inherit",
        weight: "normal",
        size: "inherit",
        decoration: "none",
        transform: "none",
        truncate: false,
        whitespace: "normal",
    },
})

type SpanProps = React.HTMLAttributes<HTMLSpanElement> &
    VariantProps<typeof spanVariants>

const Span = React.forwardRef<HTMLSpanElement, SpanProps>(
    (
        {
            className,
            display,
            color,
            weight,
            size,
            decoration,
            transform,
            truncate,
            whitespace,
            ...props
        },
        ref
    ) => {
        return (
            <span
                ref={ref}
                className={cn(
                    spanVariants({
                        display,
                        color,
                        weight,
                        size,
                        decoration,
                        transform,
                        truncate,
                        whitespace,
                        className,
                    })
                )}
                {...props}
            />
        )
    }
)
Span.displayName = "Span"

export { Span, spanVariants }

