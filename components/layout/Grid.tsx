"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const gridVariants = cva("grid", {
    variants: {
        cols: {
            1: "grid-cols-1",
            2: "grid-cols-2",
            3: "grid-cols-3",
            4: "grid-cols-4",
            5: "grid-cols-5",
            6: "grid-cols-6",
            12: "grid-cols-12",
            none: "grid-cols-none",
            auto: "grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
        },
        rows: {
            1: "grid-rows-1",
            2: "grid-rows-2",
            3: "grid-rows-3",
            4: "grid-rows-4",
            5: "grid-rows-5",
            6: "grid-rows-6",
            none: "grid-rows-none",
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
        flow: {
            row: "grid-flow-row",
            col: "grid-flow-col",
            dense: "grid-flow-dense",
            "row-dense": "grid-flow-row-dense",
            "col-dense": "grid-flow-col-dense",
        },
        align: {
            start: "items-start",
            center: "items-center",
            end: "items-end",
            stretch: "items-stretch",
            baseline: "items-baseline",
        },
        justify: {
            start: "justify-items-start",
            center: "justify-items-center",
            end: "justify-items-end",
            stretch: "justify-items-stretch",
        },
        placeItems: {
            start: "place-items-start",
            center: "place-items-center",
            end: "place-items-end",
            stretch: "place-items-stretch",
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
        cols: 1,
        gap: "md",
        flow: "row",
        align: "stretch",
        justify: "stretch",
        padding: "none",
        fullWidth: false,
        fullHeight: false,
    },
})

type GridProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof gridVariants> & {
        as?: React.ElementType
    }

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
    (
        {
            className,
            cols,
            rows,
            gap,
            gapX,
            gapY,
            flow,
            align,
            justify,
            placeItems,
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
                    gridVariants({
                        cols,
                        rows,
                        gap,
                        gapX,
                        gapY,
                        flow,
                        align,
                        justify,
                        placeItems,
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
Grid.displayName = "Grid"

export { Grid, gridVariants }

