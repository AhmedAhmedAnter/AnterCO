"use client";
import * as React from "react"
import { Box, HStack, VStack } from "@/components/layout"
import { Text, Button } from "@/components/ui"
import Image from "next/image"
import { useCounter } from "@/hooks/use-counter"
import { HugeiconsIcon } from "@hugeicons/react"
import { PlusSignIcon } from "@hugeicons/core-free-icons"

export const Hero = () => {
    const [isMounted, setIsMounted] = React.useState(false)
    const stats = [
        { count: useCounter(200), label: "International Brands" },
        { count: useCounter(2000), label: "High-Quality Products" },
        { count: useCounter(30000), label: "Happy Customers" },
    ]

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <Box className="w-full bg-[#F2F0F1] overflow-hidden">
            <VStack
                className="max-w-(--breakpoint-2xl) mx-auto px-4 lg:px-20 pt-0 relative"
                gap="none"
            >
                <HStack
                    className="w-full flex-col-reverse lg:flex-row"
                    align="center"
                    justify="between"
                    gap="none"
                >
                    {/* Left Side: Content */}
                    <VStack
                        className="w-full lg:w-1/2 z-10 pb-10 lg:pb-0"
                        align="start"
                        gap="lg"
                    >
                        <Text
                            as="h1"
                            className="text-4xl md:text-6xl lg:text-[64px] font-sans font-bold leading-tight uppercase tracking-tight pt-8 lg:pt-0"
                        >
                            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
                        </Text>
                        <Text className="text-black/60 font-secondary text-sm md:text-base max-w-lg leading-relaxed">
                            Browse through our diverse range of meticulously
                            crafted garments, designed to bring out your
                            individuality and cater to your sense of style.
                        </Text>
                        <Button className="rounded-full px-12 py-4 min-w-50 bg-black text-white hover:bg-black/80 transition-all font-secondary text-base lg:w-auto w-full">
                            Shop Now
                        </Button>

                        {/* Stats - Unified */}
                        <HStack
                            className="flex flex-wrap md:flex-nowrap justify-center lg:justify-start gap-4 lg:gap-8 pt-5 lg:pt-10 w-full"
                            align="center"
                        >
                            {stats.map((stat, index) => (
                                <React.Fragment key={stat.label}>
                                    <VStack
                                        gap="none"
                                        className="shrink-0"
                                        align="start"
                                    >
                                        <HStack align="center" gap="xs">
                                            <Text className="text-2xl lg:text-[40px] font-sans font-bold">
                                                {isMounted
                                                    ? stat.count.toLocaleString()
                                                    : "0"}
                                            </Text>
                                            <HugeiconsIcon
                                                icon={PlusSignIcon}
                                                size={24}
                                                className="text-black lg:w-8 lg:h-8"
                                            />
                                        </HStack>
                                        <Text className="text-black/60 font-secondary text-[12px] lg:text-base">
                                            {stat.label}
                                        </Text>
                                    </VStack>
                                    {index < stats.length - 1 && (
                                        <Box className="w-px h-10 lg:h-12 bg-black/10 shrink-0" />
                                    )}
                                </React.Fragment>
                            ))}
                        </HStack>
                    </VStack>

                    {/* Right Side: Image */}
                    <Box className="w-full lg:w-1/2 relative h-112.5 md:h-150 lg:h-165 flex items-end">
                        {/* Models Image */}
                        <Image
                            src="/images/hero-cool.jpg"
                            alt="Models"
                            fill
                            priority
                            className="object-cover object-center md:object-bottom-right select-none"
                        />
                    </Box>
                </HStack>
            </VStack>
        </Box>
    )
}
