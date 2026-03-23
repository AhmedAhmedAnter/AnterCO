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
import {
    Dropdown,
    DropdownContent,
    DropdownItem,
    DropdownTrigger,
} from "@/components/ui/dropdown"

export interface NavLink {
    label: string
    href: string
    hasDropdown?: boolean
    subLinks?: { label: string; href: string }[]
}

interface NavbarProps {
    links: NavLink[]
    logo?: string
    className?: string
}

export const Navbar = ({ links, logo = "ANTER.CO", className }: NavbarProps) => {
    const [isMounted, setIsMounted] = React.useState(false)
    const [openMobileDropdown, setOpenMobileDropdown] = React.useState<
        string | null
    >(null)
    const [openDesktopDropdown, setOpenDesktopDropdown] = React.useState<
        string | null
    >(null)

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
                                        {logo}
                                    </SheetTitle>
                                </SheetHeader>
                                <Box className="flex flex-col gap-6 mt-10">
                                    {links.map((link) => (
                                        <Box key={link.label} className="w-full">
                                            <Box
                                                className="flex items-center justify-between group px-2 py-3 cursor-pointer rounded-xl hover:bg-black/5 active:scale-[0.98] transition-all"
                                                onClick={() =>
                                                    link.hasDropdown &&
                                                    setOpenMobileDropdown(
                                                        openMobileDropdown ===
                                                            link.label
                                                            ? null
                                                            : link.label
                                                    )
                                                }
                                            >
                                                <Link
                                                    href={link.href}
                                                    className="flex-1"
                                                    onClick={(e) => {
                                                        if (link.hasDropdown)
                                                            e.preventDefault()
                                                    }}
                                                >
                                                    <Text className="text-lg font-secondary font-medium">
                                                        {link.label}
                                                    </Text>
                                                </Link>
                                                {link.hasDropdown && (
                                                    <HugeiconsIcon
                                                        icon={ArrowDown01Icon}
                                                        size={18}
                                                        className={cn(
                                                            "transition-transform",
                                                            openMobileDropdown ===
                                                                link.label &&
                                                                "rotate-180"
                                                        )}
                                                    />
                                                )}
                                            </Box>
                                            {link.hasDropdown &&
                                                openMobileDropdown ===
                                                    link.label && (
                                                    <Box className="flex flex-col gap-4 mt-4 pl-6 border-l border-black/5">
                                                        {link.subLinks?.map(
                                                            (sub) => (
                                                                <Link
                                                                    key={
                                                                        sub.label
                                                                    }
                                                                    href={
                                                                        sub.href
                                                                    }
                                                                    className="hover:translate-x-1 active:scale-95 transition-all"
                                                                >
                                                                    <Text className="text-base font-secondary text-black/60 hover:text-black">
                                                                        {
                                                                            sub.label
                                                                        }
                                                                    </Text>
                                                                </Link>
                                                            )
                                                        )}
                                                    </Box>
                                                )}
                                        </Box>
                                    ))}
                                </Box>
                            </SheetContent>
                        </Sheet>
                    )}
                </Box>

                {/* Logo */}
                <Link
                    href="/"
                    className="active:scale-95 transition-transform"
                >
                    <Text className="font-bold text-2xl lg:text-3xl font-sans tracking-tighter shrink-0">
                        {logo}
                    </Text>
                </Link>
            </HStack>

            {/* Nav Links - Desktop only */}
            <HStack className="hidden lg:flex gap-6 shrink-0">
                {links.map((link) =>
                    link.hasDropdown ? (
                        <Box
                            key={link.label}
                            onMouseEnter={() =>
                                setOpenDesktopDropdown(link.label)
                            }
                            onMouseLeave={() => setOpenDesktopDropdown(null)}
                        >
                            <Dropdown
                                open={openDesktopDropdown === link.label}
                                onOpenChange={(open) =>
                                    setOpenDesktopDropdown(
                                        open ? link.label : null
                                    )
                                }
                            >
                                <DropdownTrigger asChild>
                                    <Box className="flex items-center gap-1 group cursor-pointer outline-none active:scale-95 transition-all">
                                        <Text className="text-base font-secondary group-hover:opacity-70 transition-opacity">
                                            {link.label}
                                        </Text>
                                        <HugeiconsIcon
                                            icon={ArrowDown01Icon}
                                            size={16}
                                            className="group-hover:opacity-70 transition-opacity"
                                        />
                                    </Box>
                                </DropdownTrigger>
                                <DropdownContent className="w-52 p-2">
                                    {link.subLinks?.map((sub) => (
                                        <DropdownItem
                                            key={sub.label}
                                            asChild
                                            className="rounded-lg px-3 py-2 cursor-pointer hover:bg-black/5 active:scale-[0.98] transition-all"
                                        >
                                            <Link
                                                href={sub.href}
                                                className="w-full font-secondary text-sm"
                                            >
                                                {sub.label}
                                            </Link>
                                        </DropdownItem>
                                    ))}
                                </DropdownContent>
                            </Dropdown>
                        </Box>
                    ) : (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="flex items-center gap-1 group active:scale-95 transition-all"
                        >
                            <Text className="text-base font-secondary hover:opacity-70 transition-opacity">
                                {link.label}
                            </Text>
                        </Link>
                    )
                )}
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
