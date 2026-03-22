import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center justify-center rounded-[4px] px-2 py-1 text-sm leading-[16px] tracking-[0] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 pointer-events-none",
    {
        variants: {
            variant: {
                default:
                    "bg-gray-50 text-gray-500",
                success: "bg-green-50 text-green-500",
                inProgress: "bg-aqua-50 text-aqua-700",
                pending: "bg-yellow-50 text-yellow-500",
                failed: "bg-red-50 text-red-500",
                info: "bg-cyan-50 text-cyan-500",
                secondary: "bg-secondary-50 text-secondary-600",
                outline: "bg-white border border-black-50 text-black-500 px-3 py-1.5 gap-2"
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
