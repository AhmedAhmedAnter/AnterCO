"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const wrapVariants = cva("flex flex-wrap", {
    variants: {
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
        direction: {
            row: "flex-row",
            "row-reverse": "flex-row-reverse",
        },
        gap: {
            none: "gap-0",
            xs: "gap-1",
            sm: "gap-2",
            md: "gap-4",
            lg: "gap-6",
            xl: "gap-8",
            "2xl": "gap-10",
        },
        gapX: {
            none: "gap-x-0",
            xs: "gap-x-1",
            sm: "gap-x-2",
            md: "gap-x-4",
            lg: "gap-x-6",
            xl: "gap-x-8",
        },
        gapY: {
            none: "gap-y-0",
            xs: "gap-y-1",
            sm: "gap-y-2",
            md: "gap-y-4",
            lg: "gap-y-6",
            xl: "gap-y-8",
        },
        padding: {
            none: "p-0",
            xs: "p-1",
            sm: "p-2",
            md: "p-4",
            lg: "p-6",
            xl: "p-8",
        },
        fullWidth: {
            true: "w-full",
            false: "",
        },
    },
    defaultVariants: {
        align: "start",
        justify: "start",
        direction: "row",
        gap: "md",
        padding: "none",
        fullWidth: false,
    },
})

type WrapProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof wrapVariants> & {
        as?: React.ElementType
    }

const Wrap = React.forwardRef<HTMLDivElement, WrapProps>(
    (
        {
            className,
            align,
            justify,
            direction,
            gap,
            gapX,
            gapY,
            padding,
            fullWidth,
            as: Comp = "div",
            ...props
        },
        ref
    ) => {
        return (
            <Comp
                ref={ref}
                className={cn(
                    wrapVariants({
                        align,
                        justify,
                        direction,
                        gap,
                        gapX,
                        gapY,
                        padding,
                        fullWidth,
                        className,
                    })
                )}
                {...props}
            />
        )
    }
)
Wrap.displayName = "Wrap"

export { Wrap, wrapVariants }

