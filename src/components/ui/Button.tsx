import React from "react";
import { ButtonProps } from "@/types";
import { cn } from "@/lib/utils";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      loading = false,
      disabled = false,
      size = "md",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = "inline-flex items-center justify-center rounded-button font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const sizeClasses = {
      sm: "min-h-[36px] px-4 py-2 text-sm",
      md: "min-h-[44px] px-6 py-3 text-button-mobile md:text-button-desktop",
      lg: "min-h-[52px] px-8 py-4 text-lg",
    };
    
    const variantClasses = {
      primary: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 shadow-button hover:shadow-md active:scale-[0.98]",
      secondary: "bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 active:bg-blue-100 active:text-blue-700 active:border-blue-700 active:scale-[0.98] shadow-button",
    };

    const combinedClasses = cn(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      loading && "opacity-75 cursor-not-allowed",
      className
    );

    return (
      <button
        ref={ref}
        className={combinedClasses}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };