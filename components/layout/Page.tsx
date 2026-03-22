"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { VStack } from "./VStack"

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
}

const Page = React.forwardRef<HTMLDivElement, PageProps>(
    ({ className, as: Comp = "main", children, ...props }, ref) => {
        return (
            <Comp
                ref={ref}
                className={cn(
                    "min-h-screen w-full lg:w-[85%] lg:pt-2 lg:pl-2 justify-center items-center bg-white text-foreground antialiased",
                    "flex flex-col",
                    className
                )}
                {...props}
            >
                <VStack className="w-full min-h-screen px-4 py-6 lg:px-6 lg:py-8 lg:rounded-tl-lg bg-black-25 border border-black-50">
                    {children}
                </VStack>
            </Comp>
        )
    }
)
Page.displayName = "Page"

export { Page }
