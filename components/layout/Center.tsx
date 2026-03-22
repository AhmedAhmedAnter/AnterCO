"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const centerVariants = cva("flex items-center justify-center", {
    variants: {
        direction: {
            row: "flex-row",
            column: "flex-col",
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
        fullScreen: {
            true: "w-screen h-screen",
            false: "",
        },
        inline: {
            true: "inline-flex",
            false: "",
        },
    },
    defaultVariants: {
        direction: "row",
        gap: "none",
        padding: "none",
        fullWidth: false,
        fullHeight: false,
        fullScreen: false,
        inline: false,
    },
})

type CenterProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof centerVariants> & {
        as?: React.ElementType
    }

const Center = React.forwardRef<HTMLDivElement, CenterProps>(
    (
        {
            className,
            direction,
            gap,
            padding,
            fullWidth,
            fullHeight,
            fullScreen,
            inline,
            as: Comp = "div",
            ...props
        },
        ref
    ) => {
        return (
            <Comp
                ref={ref}
                className={cn(
                    centerVariants({
                        direction,
                        gap,
                        padding,
                        fullWidth,
                        fullHeight,
                        fullScreen,
                        inline,
                        className,
                    })
                )}
                {...props}
            />
        )
    }
)
Center.displayName = "Center"

export { Center, centerVariants }

