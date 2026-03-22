"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const aspectRatioVariants = cva("relative overflow-hidden", {
    variants: {
        ratio: {
            square: "aspect-square",
            video: "aspect-video",
            "4/3": "aspect-[4/3]",
            "3/2": "aspect-[3/2]",
            "16/9": "aspect-[16/9]",
            "21/9": "aspect-[21/9]",
            "1/1": "aspect-[1/1]",
            "2/1": "aspect-[2/1]",
            "3/1": "aspect-[3/1]",
            "9/16": "aspect-[9/16]",
            auto: "aspect-auto",
        },
        fit: {
            fill: "[&>*]:object-fill",
            contain: "[&>*]:object-contain",
            cover: "[&>*]:object-cover",
            none: "[&>*]:object-none",
            "scale-down": "[&>*]:object-scale-down",
        },
        position: {
            center: "[&>*]:object-center",
            top: "[&>*]:object-top",
            bottom: "[&>*]:object-bottom",
            left: "[&>*]:object-left",
            right: "[&>*]:object-right",
        },
        rounded: {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            full: "rounded-full",
        },
        fullWidth: {
            true: "w-full",
            false: "",
        },
    },
    defaultVariants: {
        ratio: "square",
        fit: "cover",
        position: "center",
        rounded: "none",
        fullWidth: true,
    },
})

type AspectRatioProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof aspectRatioVariants>

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
    ({ className, ratio, fit, position, rounded, fullWidth, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    aspectRatioVariants({
                        ratio,
                        fit,
                        position,
                        rounded,
                        fullWidth,
                        className,
                    })
                )}
                {...props}
            />
        )
    }
)
AspectRatio.displayName = "AspectRatio"

export { AspectRatio, aspectRatioVariants }

