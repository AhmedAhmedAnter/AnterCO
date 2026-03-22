"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const boxVariants = cva("", {
    variants: {
        display: {
            block: "block",
            inline: "inline",
            "inline-block": "inline-block",
            flex: "flex",
            "inline-flex": "inline-flex",
            grid: "grid",
            hidden: "hidden",
        },
        padding: {
            none: "p-0",
            xs: "p-1",
            sm: "p-2",
            md: "p-4",
            lg: "p-6",
            xl: "p-8",
            "2xl": "p-10",
            "3xl": "p-12",
        },
        paddingX: {
            none: "px-0",
            xs: "px-1",
            sm: "px-2",
            md: "px-4",
            lg: "px-6",
            xl: "px-8",
            "2xl": "px-10",
        },
        paddingY: {
            none: "py-0",
            xs: "py-1",
            sm: "py-2",
            md: "py-4",
            lg: "py-6",
            xl: "py-8",
            "2xl": "py-10",
        },
        margin: {
            none: "m-0",
            xs: "m-1",
            sm: "m-2",
            md: "m-4",
            lg: "m-6",
            xl: "m-8",
            auto: "m-auto",
        },
        marginX: {
            none: "mx-0",
            xs: "mx-1",
            sm: "mx-2",
            md: "mx-4",
            lg: "mx-6",
            xl: "mx-8",
            auto: "mx-auto",
        },
        marginY: {
            none: "my-0",
            xs: "my-1",
            sm: "my-2",
            md: "my-4",
            lg: "my-6",
            xl: "my-8",
            auto: "my-auto",
        },
        rounded: {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            "3xl": "rounded-3xl",
            full: "rounded-full",
        },
        shadow: {
            none: "shadow-none",
            sm: "shadow-sm",
            md: "shadow-md",
            lg: "shadow-lg",
            xl: "shadow-xl",
            "2xl": "shadow-2xl",
        },
        border: {
            none: "border-0",
            thin: "border",
            medium: "border-2",
            thick: "border-4",
        },
        borderColor: {
            default: "border-border",
            primary: "border-primary",
            secondary: "border-secondary",
            transparent: "border-transparent",
            black: "border-black-500",
            gray: "border-gray-200",
        },
        background: {
            transparent: "bg-transparent",
            primary: "bg-primary",
            secondary: "bg-secondary",
            white: "bg-white",
            black: "bg-black-900",
            gray: "bg-gray-50",
            muted: "bg-gray-100",
        },
        fullWidth: {
            true: "w-full",
            false: "",
        },
        fullHeight: {
            true: "h-full",
            false: "",
        },
        position: {
            static: "static",
            relative: "relative",
            absolute: "absolute",
            fixed: "fixed",
            sticky: "sticky",
        },
        overflow: {
            visible: "overflow-visible",
            hidden: "overflow-hidden",
            scroll: "overflow-scroll",
            auto: "overflow-auto",
            clip: "overflow-clip",
        },
    },
    defaultVariants: {
        display: "block",
        padding: "none",
        margin: "none",
        rounded: "none",
        shadow: "none",
        border: "none",
        background: "transparent",
        fullWidth: false,
        fullHeight: false,
        position: "static",
        overflow: "visible",
    },
})

type BoxProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof boxVariants> & {
        as?: React.ElementType
    }

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
    (
        {
            className,
            display,
            padding,
            paddingX,
            paddingY,
            margin,
            marginX,
            marginY,
            rounded,
            shadow,
            border,
            borderColor,
            background,
            fullWidth,
            fullHeight,
            position,
            overflow,
            as: Comp = "div",
            ...props
        },
        ref
    ) => {
        return (
            <Comp
                ref={ref}
                className={cn(
                    boxVariants({
                        display,
                        padding,
                        paddingX,
                        paddingY,
                        margin,
                        marginX,
                        marginY,
                        rounded,
                        shadow,
                        border,
                        borderColor,
                        background,
                        fullWidth,
                        fullHeight,
                        position,
                        overflow,
                        className,
                    })
                )}
                {...props}
            />
        )
    }
)
Box.displayName = "Box"

export { Box, boxVariants }

