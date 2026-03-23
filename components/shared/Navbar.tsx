"use client"

import * as React from "react"
import Link from "next/link"
import { HStack, Box } from "@/components/layout"
import { Text } from "@/components/ui"
import { HugeiconsIcon } from "@hugeicons/react"
import {
    Search01Icon,
    ShoppingCart01Icon,
    UserCircleIcon,
    ArrowDown01Icon,
    Menu01Icon,
} from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

interface NavbarProps {
    className?: string
}

const navLinks = [
    { label: "Shop", href: "/shop", hasDropdown: true },
    { label: "On Sale", href: "/on-sale" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Brands", href: "/brands" },
]

export const Navbar = ({ className }: NavbarProps) => {
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <HStack
            as="nav"
            className={cn(
                "w-full bg-white border-b border-border py-6 px-4 md:px-10 lg:px-20",
                className
            )}
            justify="between"
            align="center"
            gap="md"
        >
            {/* Left Section: Menu & Logo */}
            <HStack className="gap-4 lg:gap-0" align="center">
                {/* Mobile/Tablet Menu */}
                <Box className="lg:hidden">
                    {isMounted && (
                        <Sheet>
                            <SheetTrigger asChild>
                                <Box className="cursor-pointer px-0 py-0">
                                    <HugeiconsIcon
                                        icon={Menu01Icon}
                                        size={24}
                                    />
                                </Box>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-75">
                                <SheetHeader>
                                    <SheetTitle className="text-left font-sans font-bold text-2xl">
                                        ANTER.CO
                                    </SheetTitle>
                                </SheetHeader>
                                <Box className="flex flex-col gap-6 mt-10">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className="flex items-center justify-between group px-2"
                                        >
                                            <Text className="text-lg font-secondary font-medium">
                                                {link.label}
                                            </Text>
                                            {link.hasDropdown && (
                                                <HugeiconsIcon
                                                    icon={ArrowDown01Icon}
                                                    size={18}
                                                />
                                            )}
                                        </Link>
                                    ))}
                                </Box>
                            </SheetContent>
                        </Sheet>
                    )}
                </Box>

                {/* Logo */}
                <Link href="/">
                    <Text className="font-bold text-2xl lg:text-3xl font-sans tracking-tighter shrink-0">
                        ANTER.CO
                    </Text>
                </Link>
            </HStack>

            {/* Nav Links - Desktop only */}
            <HStack className="hidden lg:flex gap-6 shrink-0">
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="flex items-center gap-1 group"
                    >
                        <Text className="text-base font-secondary hover:opacity-70 transition-opacity">
                            {link.label}
                        </Text>
                        {link.hasDropdown && (
                            <HugeiconsIcon
                                icon={ArrowDown01Icon}
                                size={16}
                                className="group-hover:opacity-70 transition-opacity"
                            />
                        )}
                    </Link>
                ))}
            </HStack>

            {/* Search - Responsive */}
            <Box className="flex-1 max-w-142.5 hidden lg:block">
                <HStack
                    className="w-full bg-[#F0F0F0] rounded-full px-4 py-3 gap-3"
                    align="center"
                >
                    <HugeiconsIcon
                        icon={Search01Icon}
                        size={20}
                        className="text-black/40"
                    />
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="bg-transparent border-none outline-none w-full text-base font-secondary placeholder:text-black/40"
                    />
                </HStack>
            </Box>

            {/* Right Icons */}
            <HStack className="gap-3 lg:gap-4 shrink-0">
                {/* Mobile Search Icon */}
                <Box className="lg:hidden cursor-pointer">
                    <HugeiconsIcon icon={Search01Icon} size={24} />
                </Box>
                <Link href="/cart">
                    <HugeiconsIcon
                        icon={ShoppingCart01Icon}
                        size={24}
                        className="cursor-pointer hover:opacity-70 transition-opacity"
                    />
                </Link>
                <Link href="/profile">
                    <HugeiconsIcon
                        icon={UserCircleIcon}
                        size={24}
                        className="cursor-pointer hover:opacity-70 transition-opacity"
                    />
                </Link>
            </HStack>
        </HStack>
    )
}
