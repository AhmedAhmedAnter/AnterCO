"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const containerVariants = cva("mx-auto w-full", {
    variants: {
        size: {
            sm: "max-w-screen-sm",
            md: "max-w-screen-md",
            lg: "max-w-screen-lg",
            xl: "max-w-screen-xl",
            "2xl": "max-w-screen-2xl",
            full: "max-w-full",
            prose: "max-w-prose",
        },
        paddingX: {
            none: "px-0",
            sm: "px-4",
            md: "px-6",
            lg: "px-8",
            xl: "px-12",
        },
        paddingY: {
            none: "py-0",
            sm: "py-4",
            md: "py-6",
            lg: "py-8",
            xl: "py-12",
            "2xl": "py-16",
            "3xl": "py-20",
        },
        center: {
            true: "flex flex-col items-center",
            false: "",
        },
    },
    defaultVariants: {
        size: "xl",
        paddingX: "md",
        paddingY: "none",
        center: false,
    },
})

type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof containerVariants> & {
        as?: React.ElementType
    }

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    (
        { className, size, paddingX, paddingY, center, as: Comp = "div", ...props },
        ref
    ) => {
        return (
            <Comp
                ref={ref}
                className={cn(
                    containerVariants({ size, paddingX, paddingY, center, className })
                )}
                {...props}
            />
        )
    }
)
Container.displayName = "Container"

export { Container, containerVariants }

