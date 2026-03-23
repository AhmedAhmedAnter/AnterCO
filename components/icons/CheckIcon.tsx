import { cn } from "@/lib/utils";

export const CheckIcon = ({
    className,
    ...props
}: React.ComponentProps<"svg">) => {
    return (
        <svg
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("w-3.5 h-2.75", className)}
            {...props}
        >
            <path
                d="M1 5.5L4.5 9L13 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
