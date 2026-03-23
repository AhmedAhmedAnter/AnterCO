import * as React from "react"
import IMAGE from "next/image"
import { Box, HStack, VStack } from "@/components/layout"
import { Text, Button } from "@/components/ui"
import { HugeiconsIcon } from "@hugeicons/react"
import { StarIcon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

export const Hero = () => {
    return (
        <Box className="w-full bg-[#F2F0F1] relative overflow-hidden">
            <Box className="max-w-screen-2xl mx-auto px-4 lg:px-20 pt-10 lg:pt-20 pb-0 lg:pb-0 flex flex-col lg:flex-row items-center relative">
                {/* Left Content */}
                <VStack className="w-full lg:w-1/2 z-10" gap="xl" align="start">
                    <Text
                        as="h1"
                        className="text-4xl lg:text-[64px] leading-tight lg:leading-[64px] font-bold font-sans tracking-tighter"
                    >
                        FIND CLOTHES <br className="hidden lg:block" /> THAT MATCHES <br className="hidden lg:block" /> YOUR STYLE
                    </Text>
                    <Text className="text-black/60 text-sm lg:text-base font-secondary max-w-[545px]">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </Text>
                    <Button
                        className="bg-black text-white px-12 py-7 rounded-full text-base font-secondary font-medium w-full lg:w-auto mt-4 active:scale-95 transition-transform"
                    >
                        Shop Now
                    </Button>

                    <HStack className="w-full flex-wrap gap-x-8 gap-y-6 mt-10 lg:mt-12" align="center">
                        <VStack gap="none" align="start">
                            <Text className="text-2xl lg:text-[40px] font-bold font-secondary">200+</Text>
                            <Text className="text-black/60 text-xs lg:text-base font-secondary whitespace-nowrap">International Brands</Text>
                        </VStack>
                        <Box className="h-12 w-px bg-black/10 hidden lg:block" />
                        <VStack gap="none" align="start">
                            <Text className="text-2xl lg:text-[40px] font-bold font-secondary">2,000+</Text>
                            <Text className="text-black/60 text-xs lg:text-base font-secondary whitespace-nowrap">High-Quality Products</Text>
                        </VStack>
                        <Box className="h-12 w-px bg-black/10 hidden lg:block" />
                        <VStack gap="none" align="start">
                            <Text className="text-2xl lg:text-[40px] font-bold font-secondary">30,000+</Text>
                            <Text className="text-black/60 text-xs lg:text-base font-secondary whitespace-nowrap">Happy Customers</Text>
                        </VStack>
                    </HStack>
                </VStack>

                {/* Right Image */}
                <Box className="w-full lg:w-1/2 relative mt-12 lg:mt-0 flex justify-end items-end">
                    <Box className="relative w-full h-[400px] lg:h-[663px]">
                        <IMAGE
                            src="/images/hero.jpg"
                            alt="Hero Models"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </Box>
                    
                    {/* Decorative Stars */}
                    <Box className="absolute top-1/4 left-0 lg:-left-20 animate-pulse hidden lg:block">
                        <HugeiconsIcon icon={StarIcon} size={56} className="text-black" />
                    </Box>
                    <Box className="absolute top-10 right-0 lg:-right-4 animate-pulse hidden lg:block">
                        <HugeiconsIcon icon={StarIcon} size={104} className="text-black" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
