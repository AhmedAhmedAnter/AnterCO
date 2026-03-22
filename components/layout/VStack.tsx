"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const vStackVariants = cva("flex flex-col", {
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
        reverse: {
            true: "flex-col-reverse",
            false: "",
        },
    },
    defaultVariants: {
        align: "stretch",
        justify: "start",
        gap: "md",
        padding: "none",
        fullWidth: false,
        fullHeight: false,
        reverse: false,
    },
})

type VStackProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof vStackVariants> & {
        as?: React.ElementType
    }

const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
    (
        {
            className,
            align,
            justify,
            gap,
            padding,
            fullWidth,
            fullHeight,
            reverse,
            as: Comp = "div",
            ...props
        },
        ref
    ) => {
        return (
            <Comp
                ref={ref}
                className={cn(
                    vStackVariants({
                        align,
                        justify,
                        gap,
                        padding,
                        fullWidth,
                        fullHeight,
                        reverse,
                        className,
                    })
                )}
                {...props}
            />
        )
    }
)
VStack.displayName = "VStack"

export { VStack, vStackVariants }
