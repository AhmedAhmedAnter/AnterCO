"use client"

import * as React from "react"
import { DropdownMenu as DropdownPrimitive } from "radix-ui"
import { CheckIcon, ChevronRightIcon, DotIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dropdown({
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.Root>) {
  return <DropdownPrimitive.Root data-slot="dropdown" {...props} />
}

function DropdownPortal({
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.Portal>) {
  return (
    <DropdownPrimitive.Portal data-slot="dropdown-portal" {...props} />
  )
}

function DropdownTrigger({
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.Trigger>) {
  return (
    <DropdownPrimitive.Trigger
      data-slot="dropdown-trigger"
      {...props}
    />
  )
}

function DropdownContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.Content>) {
  return (
    <DropdownPortal>
      <DropdownPrimitive.Content
        data-slot="dropdown-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-white text-black data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border border-black-100 p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownPortal>
  )
}

function DropdownItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownPrimitive.Item
      data-slot="dropdown-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-black-100 focus:text-black data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-disabled:pointer-events-none data-disabled:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
}

function DropdownCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.CheckboxItem>) {
  return (
    <DropdownPrimitive.CheckboxItem
      data-slot="dropdown-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownPrimitive.CheckboxItem>
  )
}

function DropdownRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.RadioGroup>) {
  return (
    <DropdownPrimitive.RadioGroup
      data-slot="dropdown-radio-group"
      {...props}
    />
  )
}

function DropdownRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.RadioItem>) {
  return (
    <DropdownPrimitive.RadioItem
      data-slot="dropdown-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownPrimitive.ItemIndicator>
          <DotIcon className="size-4 fill-current" />
        </DropdownPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownPrimitive.RadioItem>
  )
}

function DropdownLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownPrimitive.Label
      data-slot="dropdown-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
}

function DropdownSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.Separator>) {
  return (
    <DropdownPrimitive.Separator
      data-slot="dropdown-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function DropdownShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function DropdownSub({
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.Sub>) {
  return <DropdownPrimitive.Sub data-slot="dropdown-sub" {...props} />
}

function DropdownSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownPrimitive.SubTrigger
      data-slot="dropdown-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none [&>svg]:size-4 [&>svg]:shrink-0",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </DropdownPrimitive.SubTrigger>
  )
}

function DropdownSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.SubContent>) {
  return (
    <DropdownPrimitive.SubContent
      data-slot="dropdown-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

function DropdownGroup({
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.Group>) {
  return (
    <DropdownPrimitive.Group data-slot="dropdown-group" {...props} />
  )
}

export {
  Dropdown,
  DropdownPortal,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownShortcut,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  DropdownGroup,
}
