"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const stackVariants = cva("flex", {
    variants: {
        direction: {
            row: "flex-row",
            column: "flex-col",
            "row-reverse": "flex-row-reverse",
            "column-reverse": "flex-col-reverse",
        },
        align: {
            start: "items-start",
            center: "items-center",
            end: "items-end",
            stretch: "items-stretch",
            baseline: "items-baseline",
        },
        justify: {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
            between: "justify-between",
            around: "justify-around",
            evenly: "justify-evenly",
        },
        wrap: {
            wrap: "flex-wrap",
            nowrap: "flex-nowrap",
            "wrap-reverse": "flex-wrap-reverse",
        },
        gap: {
            none: "gap-0",
            xs: "gap-1",
            sm: "gap-2",
            md: "gap-4",
            lg: "gap-6",
            xl: "gap-8",
            "2xl": "gap-10",
            "3xl": "gap-12",
        },
        padding: {
            none: "p-0",
            xs: "p-1",
            sm: "p-2",
            md: "p-4",
            lg: "p-6",
            xl: "p-8",
            "2xl": "p-10",
        },
        fullWidth: {
            true: "w-full",
            false: "",
        },
        fullHeight: {
            true: "h-full",
            false: "",
        },
    },
    defaultVariants: {
        direction: "column",
        align: "stretch",
        justify: "start",
        wrap: "nowrap",
        gap: "none",
        padding: "none",
        fullWidth: false,
        fullHeight: false,
    },
})

type StackProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof stackVariants> & {
        as?: React.ElementType
    }

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
    (
        {
            className,
            direction,
            align,
            justify,
            wrap,
            gap,
            padding,
            fullWidth,
            fullHeight,
            as: Comp = "div",
            ...props
        },
        ref
    ) => {
        return (
            <Comp
                ref={ref}
                className={cn(
                    stackVariants({
                        direction,
                        align,
                        justify,
                        wrap,
                        gap,
                        padding,
                        fullWidth,
                        fullHeight,
                        className,
                    })
                )}
                {...props}
            />
        )
    }
)
Stack.displayName = "Stack"

export { Stack, stackVariants }

