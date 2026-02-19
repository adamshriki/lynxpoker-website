"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-blue-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "relative bg-gradient-to-r from-amber-500 to-amber-600 text-gray-950 font-bold hover:from-amber-400 hover:to-amber-500 active:from-amber-600 active:to-amber-700 shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.6)] overflow-hidden",
        secondary:
          "bg-surface-plus-2 text-text-primary border border-amber-500/20 hover:border-amber-500/40 hover:bg-surface-plus-3 active:bg-surface-plus-2",
        ghost:
          "text-text-secondary hover:text-amber-400 hover:bg-amber-500/5",
        outline:
          "border border-amber-500/30 text-amber-400 bg-transparent hover:bg-amber-500/10 hover:border-amber-500/50",
        danger:
          "bg-surface-rose-primary text-text-primary hover:bg-surface-rose-plus-1 active:bg-surface-rose-primary",
        link:
          "text-amber-400 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3 py-1 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 py-3 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {/* Shimmer overlay for primary */}
        {variant === "primary" && (
          <span className="absolute inset-0 shimmer-gold pointer-events-none rounded-lg" />
        )}
        {loading ? (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        ) : null}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
