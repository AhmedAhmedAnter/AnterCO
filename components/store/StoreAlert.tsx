"use client"

import * as React from "react"
import Link from "next/link"
import { Box, HStack } from "@/components/layout"
import { Text } from "@/components/ui"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

export interface StoreAlertProps {
    id?: string
    message: string
    linkText?: string
    href?: string
    onClose?: () => void
    className?: string
    textClassName?: string
    linkClassName?: string
    innerClassName?: string
    iconClassName?: string
    iconSize?: number
    iconColor?: string
    iconStrokeWidth?: number
    closeIcon?: any
    hideClose?: boolean
}

export const StoreAlert = ({
    id = "default",
    message,
    linkText,
    href,
    onClose,
    className,
    textClassName,
    linkClassName,
    innerClassName,
    iconClassName,
    iconSize = 20,
    iconColor = "#fff",
    iconStrokeWidth = 2,
    closeIcon = Cancel01Icon,
    hideClose = false,
}: StoreAlertProps) => {
    const STORAGE_KEY = `store-alert-dismissed-${id}`
    const [isVisible, setIsVisible] = React.useState(true)
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(true)
        const isDismissed = localStorage.getItem(STORAGE_KEY)
        if (isDismissed) {
            setIsVisible(false)
        }
    }, [STORAGE_KEY])

    const handleClose = () => {
        setIsVisible(false)
        localStorage.setItem(STORAGE_KEY, "true")
        if (onClose) onClose()
    }

    if (!isMounted || !isVisible) return null

    return (
        <HStack
            className={cn(
                "w-full h-auto min-h-10 bg-black py-4 px-4 lg:px-6 text-white relative",
                className
            )}
            align="center"
            justify="center"
        >
            <HStack
                className={cn(
                    "gap-1 sm:gap-2 text-center max-w-[90%] md:max-w-none",
                    innerClassName
                )}
                justify="center"
                wrap="wrap"
            >
                <Text
                    className={cn(
                        "text-[11px] sm:text-xs lg:text-sm font-medium font-satoshi",
                        textClassName
                    )}
                >
                    {message}
                </Text>
                {linkText && href && (
                    <Link
                        href={href}
                        className={cn(
                            "text-[11px] sm:text-xs lg:text-sm font-satoshi underline cursor-pointer font-bold hover:opacity-80 transition-opacity",
                            linkClassName
                        )}
                    >
                        {linkText}
                    </Link>
                )}
            </HStack>
            {!hideClose && (
                <Box
                    className="absolute right-3 sm:right-5 lg:right-12 top-1/2 -translate-y-1/2"
                    onClick={handleClose}
                >
                    <HugeiconsIcon
                        icon={closeIcon}
                        size={iconSize}
                        color={iconColor}
                        strokeWidth={iconStrokeWidth}
                        className={cn("cursor-pointer", iconClassName)}
                    />
                </Box>
            )}
        </HStack>
    )
}
