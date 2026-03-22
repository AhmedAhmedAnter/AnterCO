"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const flexVariants = cva("flex", {
    variants: {
        inline: {
            true: "inline-flex",
            false: "",
        },
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
        grow: {
            0: "flex-grow-0",
            1: "flex-grow",
        },
        shrink: {
            0: "flex-shrink-0",
            1: "flex-shrink",
        },
        basis: {
            auto: "basis-auto",
            full: "basis-full",
            0: "basis-0",
            "1/2": "basis-1/2",
            "1/3": "basis-1/3",
            "2/3": "basis-2/3",
            "1/4": "basis-1/4",
            "3/4": "basis-3/4",
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
        fullHeight: {
            true: "h-full",
            false: "",
        },
    },
    defaultVariants: {
        inline: false,
        direction: "row",
        align: "stretch",
        justify: "start",
        wrap: "nowrap",
        gap: "none",
        grow: 0,
        shrink: 1,
        basis: "auto",
        padding: "none",
        fullWidth: false,
        fullHeight: false,
    },
})

type FlexProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof flexVariants> & {
        as?: React.ElementType
    }

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
    (
        {
            className,
            inline,
            direction,
            align,
            justify,
            wrap,
            gap,
            gapX,
            gapY,
            grow,
            shrink,
            basis,
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
                    flexVariants({
                        inline,
                        direction,
                        align,
                        justify,
                        wrap,
                        gap,
                        gapX,
                        gapY,
                        grow,
                        shrink,
                        basis,
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
Flex.displayName = "Flex"

export { Flex, flexVariants }

