import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Box, HStack } from "@/components/layout"
import { Text } from "@/components/ui/text"

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
    currentPage: number
    totalPages?: number
    totalItems?: number
    itemsPerPage?: number
    onPageChange?: (page: number) => void
    showResultText?: boolean
    siblingCount?: number
}

const Pagination = ({
    className,
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage = 10,
    onPageChange,
    showResultText = true,
    siblingCount = 1,
    ...props
}: PaginationProps) => {

    const computedTotalPages = totalPages ?? (totalItems ? Math.ceil(totalItems / itemsPerPage) : 1)


    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= computedTotalPages && page !== currentPage) {
            onPageChange?.(page)
        }
    }







    const paginationRange = React.useMemo(() => {
        const totalPageNumbers = siblingCount + 5



        if (computedTotalPages <= totalPageNumbers) {
            return Array.from({ length: computedTotalPages }, (_, i) => i + 1)
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
        const rightSiblingIndex = Math.min(currentPage + siblingCount, computedTotalPages)

        const shouldShowLeftDots = leftSiblingIndex > 2
        const shouldShowRightDots = rightSiblingIndex < computedTotalPages - 2

        const firstPageIndex = 1
        const lastPageIndex = computedTotalPages

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount
            const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1)
            return [...leftRange, "...", computedTotalPages]
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount
            const rightRange = Array.from({ length: rightItemCount }, (_, i) => computedTotalPages - rightItemCount + i + 1)
            return [firstPageIndex, "...", ...rightRange]
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i)
            return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex]
        }

        return []
    }, [totalItems, itemsPerPage, currentPage, siblingCount, computedTotalPages])


    const startItem = (currentPage - 1) * itemsPerPage + 1
    const endItem = Math.min(currentPage * itemsPerPage, totalItems || 0)

    return (
        <HStack
            className={cn("w-full py-5 px-6 gap-4 flex-col lg:flex-row", className)}
            justify="between"
            align="center"
            {...props}
        >
            {showResultText && totalItems && (
                <Text variant="caption-sm" className="font-medium text-gray-500 text-center lg:text-left">
                    Showing {startItem}-{endItem} from {totalItems}
                </Text>
            )}
            {!showResultText && <div />} 


            <HStack className="gap-2">
                <Box
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={cn(
                        "w-8 h-8 border rounded-sm p-1.5 gap-1 flex justify-center items-center text-sm leading-4 tracking-[0] font-medium transition-colors cursor-pointer",
                        currentPage === 1
                            ? "border-black-50 text-gray-300 pointer-events-none"
                            : "border-black-50 text-gray-500 hover:border-gray-500 hover:text-gray-500 hover:font-semibold"
                    )}
                >
                    <ChevronLeft className="w-4 h-4" />
                </Box>
                {paginationRange.map((pageNumber, idx) => {
                    const isPageVisibleOnMobile = pageNumber === currentPage ||
                        (pageNumber === currentPage + 1 && currentPage < computedTotalPages) ||
                        (currentPage === computedTotalPages && pageNumber === currentPage - 1);

                    if (pageNumber === "...") {
                        return (
                            <Box
                                key={`dots-${idx}`}
                                className="hidden lg:flex w-8 h-8 border border-black-50 rounded-sm p-1.5 justify-center items-center text-gray-500 text-sm font-medium"
                            >
                                ...
                            </Box>
                        )
                    }
                    const isSelected = pageNumber === currentPage
                    return (
                        <Box
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber as number)}
                            className={cn(
                                "w-8 h-8 border rounded-sm p-1.5 flex justify-center items-center text-sm font-medium transition-colors cursor-pointer",
                                !isPageVisibleOnMobile && "hidden lg:flex",
                                isSelected
                                    ? "border-primary-700 text-primary-700 font-semibold hover:border-primary-700 hover:text-primary-700"
                                    : "border-black-50 text-gray-500 hover:border-primary-700 hover:text-primary-700 hover:font-semibold"
                            )}
                        >
                            {pageNumber}
                        </Box>
                    )
                })}
                <Box
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={cn(
                        "w-8 h-8 border rounded-sm p-1.5 gap-1 flex justify-center items-center text-sm leading-4 tracking-[0] font-medium transition-colors cursor-pointer",
                        currentPage === computedTotalPages
                            ? "border-black-50 text-gray-300 pointer-events-none"
                            : "border-black-50 text-gray-500 hover:border-gray-500 hover:text-gray-500 hover:font-semibold"
                    )}
                >
                    <ChevronRight className="w-4 h-4" />
                </Box>
            </HStack>
        </HStack>
    )
}

export { Pagination }
