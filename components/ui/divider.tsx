import * as React from "react"
import { cn } from "@/lib/utils"

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
    thickness?: number | string
    color?: string
    width?: number | string
    height?: number | string
    orientation?: "horizontal" | "vertical"
}

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
    ({
        className,
        thickness = "1px",
        color = "bg-black-50",
        width,
        height,
        orientation = "horizontal",
        style,
        ...props
    }, ref) => {
        const isHorizontal = orientation === "horizontal";

        return (
            <hr
                ref={ref}
                data-slot="divider"
                className={cn("shrink-0 border-none", color, className)}
                style={{
                    width: width || (isHorizontal ? "100%" : thickness),
                    height: height || (isHorizontal ? thickness : "100%"),
                    ...style,
                }}
                {...props}
            />
        )
    }
)
Divider.displayName = "Divider"

export { Divider }
