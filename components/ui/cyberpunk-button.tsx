import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-none text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const CyberpunkButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          "relative overflow-hidden",
          "before:content-[''] before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-white before:opacity-20 before:skew-x-[-15deg] before:transition-all before:duration-700",
          "after:content-[''] after:absolute after:top-0 after:right-0 after:w-2 after:h-full after:bg-white after:opacity-20 after:skew-x-[-15deg] after:transition-all after:duration-700",
          "hover:before:translate-x-[250%] hover:after:translate-x-[-250%]",
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
CyberpunkButton.displayName = "CyberpunkButton"

export { CyberpunkButton, buttonVariants }

