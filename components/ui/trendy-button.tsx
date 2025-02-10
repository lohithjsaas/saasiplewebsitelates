import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#FF8C00] to-[#FFC300] text-primary-foreground hover:from-[#FF8C00]/80 hover:to-[#FFC300]/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
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

const TrendyButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          "relative overflow-hidden group font-bold",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#FF8C00] before:to-[#FFC300] before:opacity-0 before:transition-opacity before:duration-300",
          "hover:before:opacity-100",
          "after:absolute after:inset-0 after:bg-gradient-to-r after:from-[#FF8C00] after:to-[#FFC300] after:opacity-100 after:transition-opacity after:duration-300",
          "hover:after:opacity-0",
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{props.children}</span>
      </button>
    )
  },
)
TrendyButton.displayName = "TrendyButton"

export { TrendyButton, buttonVariants }

