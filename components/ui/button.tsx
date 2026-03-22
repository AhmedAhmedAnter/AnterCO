import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-pointer min-h-[40px] px-[16px] py-[10px] rounded-[4px] flex flex-row justify-center items-center gap-[4px] whitespace-nowrap text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-1 focus-visible:ring-ring [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "text-[16px] leading-[20px] tracking-[0] font-semibold",
        secondary: "text-[16px] leading-[20px] tracking-[0] font-semibold",
        tertiary: "border border-transparent hover:bg-transparent bg-transparent text-[16px] leading-[20px] tracking-[0] font-semibold",
        custom: ""
      },
      color: {
        black: "",
        desert: "",
        danger: "",
        gray: "",
        aqua: "",
      },
      size: {
        default: "",
        sm: "min-h-[32px] px-3 text-xs",
        lg: "min-h-[48px] px-8 text-base",
        icon: "h-10 w-10 min-w-10 px-0",
      },
      iconOnly: {
        true: "px-0 w-10 min-w-10",
        false: ""
      },
      iconSize: {
        sm: "[&_svg]:size-3",
        default: "[&_svg:not([class*='size-'])]:size-4",
        lg: "[&_svg]:size-5",
        xl: "[&_svg]:size-6",
        custom: "[&_svg]:size-[var(--button-icon-size)]",
      }
    },
    compoundVariants: [

      { variant: "primary", color: "black", class: "bg-black-900 text-white hover:bg-black-900/80" },
      { variant: "secondary", color: "black", class: "bg-black-50 text-black-900 hover:bg-black-50/80" },
      { variant: "tertiary", color: "black", class: "border-black-50 text-black-900 hover:bg-gray-25" },


      { variant: "primary", color: "desert", class: "bg-desert-500 text-black-500 hover:bg-desert-700 hover:text-black-500" },
      { variant: "secondary", color: "desert", class: "bg-desert-50 text-desert-500 hover:bg-desert-100 hover:text-desert-700" },
      { variant: "tertiary", color: "desert", class: "border-desert-500 text-desert-500 hover:border-desert-500 hover:text-desert-700" },


      { variant: "primary", color: "danger", class: "bg-red-500 text-white hover:bg-red-700 hover:text-white" },
      { variant: "secondary", color: "danger", class: "bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-700" },
      { variant: "tertiary", color: "danger", class: "border-red-100 text-red-500 hover:border-red-500 hover:text-red-700" },


      { variant: "primary", color: "gray", class: "bg-gray-500 text-white hover:bg-gray-700 hover:text-white" },
      { variant: "secondary", color: "gray", class: "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700" },
      { variant: "tertiary", color: "gray", class: "border-black-50 text-gray-500 hover:border-gray-500 hover:text-gray-700" },


      { variant: "primary", color: "aqua", class: "bg-aqua-600 text-black-500 hover:bg-aqua-700 hover:text-black-500" },
      { variant: "secondary", color: "aqua", class: "bg-aqua-50 text-aqua-900 hover:bg-aqua-100 hover:text-aqua-900" },
      { variant: "tertiary", color: "aqua", class: "border-aqua-200 text-aqua-900 hover:border-aqua-500 hover:text-aqua-700" },


      { size: "sm", iconOnly: true, class: "px-0 w-8 min-w-8" },
      { size: "lg", iconOnly: true, class: "px-0 w-12 min-w-12" },

    ],
    defaultVariants: {
      variant: "primary",
      color: "desert",
      size: "default",
      iconOnly: false,
      iconSize: "default"
    },
  }
)

export type ButtonProps = React.ComponentProps<"button"> &
  Omit<VariantProps<typeof buttonVariants>, "iconSize"> & {
    asChild?: boolean
    icon?: React.ReactNode
    iconPosition?: "left" | "right"
    iconSize?: VariantProps<typeof buttonVariants>["iconSize"] | number
  }

function Button({
  className,
  variant = "custom",
  color,
  size,
  iconOnly,
  iconSize,
  asChild = false,
  icon,
  iconPosition = "left",
  children,
  style,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button"

  const isCustomIconSize = typeof iconSize === "number"
  const resolvedIconSize = isCustomIconSize ? "custom" : iconSize
  const buttonStyle = isCustomIconSize
    ? { ...style, "--button-icon-size": `${iconSize}px` } as React.CSSProperties
    : style


  if (iconOnly && icon) {
    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, color, size, iconOnly: true, iconSize: resolvedIconSize, className }))}
        style={buttonStyle}
        {...props}
      >
        {icon}
      </Comp>
    )
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, color, size, iconSize: resolvedIconSize, className }))}
      style={buttonStyle}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </Comp>
  )
}

export { Button, buttonVariants }