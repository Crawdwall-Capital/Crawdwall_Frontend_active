import React from "react";
import { CardProps } from "@/types";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, padding = "lg", hover = false, square = false, ...props }, ref) => {
    const paddingClasses = {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    };

    const baseClasses = "bg-card rounded-card border border-outline shadow-card";
    
    const hoverClasses = hover 
      ? "hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1" 
      : "";

    const squareClasses = square 
      ? "aspect-square" 
      : "";

    const combinedClasses = cn(
      baseClasses,
      paddingClasses[padding],
      hoverClasses,
      squareClasses,
      className
    );

    return (
      <div
        ref={ref}
        className={combinedClasses}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };