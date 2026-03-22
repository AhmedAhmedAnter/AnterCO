"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const spacerVariants = cva("", {
    variants: {
        size: {
            xs: "",
            sm: "",
            md: "",
            lg: "",
            xl: "",
            "2xl": "",
            "3xl": "",
            auto: "flex-grow",
        },
        direction: {
            horizontal: "",
            vertical: "",
            both: "",
        },
    },
    compoundVariants: [
        
        { direction: "horizontal", size: "xs", class: "w-1" },
        { direction: "horizontal", size: "sm", class: "w-2" },
        { direction: "horizontal", size: "md", class: "w-4" },
        { direction: "horizontal", size: "lg", class: "w-6" },
        { direction: "horizontal", size: "xl", class: "w-8" },
        { direction: "horizontal", size: "2xl", class: "w-12" },
        { direction: "horizontal", size: "3xl", class: "w-16" },

        
        { direction: "vertical", size: "xs", class: "h-1" },
        { direction: "vertical", size: "sm", class: "h-2" },
        { direction: "vertical", size: "md", class: "h-4" },
        { direction: "vertical", size: "lg", class: "h-6" },
        { direction: "vertical", size: "xl", class: "h-8" },
        { direction: "vertical", size: "2xl", class: "h-12" },
        { direction: "vertical", size: "3xl", class: "h-16" },

        
        { direction: "both", size: "xs", class: "w-1 h-1" },
        { direction: "both", size: "sm", class: "w-2 h-2" },
        { direction: "both", size: "md", class: "w-4 h-4" },
        { direction: "both", size: "lg", class: "w-6 h-6" },
        { direction: "both", size: "xl", class: "w-8 h-8" },
        { direction: "both", size: "2xl", class: "w-12 h-12" },
        { direction: "both", size: "3xl", class: "w-16 h-16" },
    ],
    defaultVariants: {
        size: "md",
        direction: "vertical",
    },
})

type SpacerProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof spacerVariants>

const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
    ({ className, size, direction, ...props }, ref) => {
        return (
            <div
                ref={ref}
                aria-hidden="true"
                className={cn(spacerVariants({ size, direction, className }))}
                {...props}
            />
        )
    }
)
Spacer.displayName = "Spacer"

export { Spacer, spacerVariants }

