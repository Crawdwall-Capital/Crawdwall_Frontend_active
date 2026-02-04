import React from "react";
import { FrameProps } from "@/types";
import { cn } from "@/lib/utils";

const Frame = React.forwardRef<HTMLDivElement, FrameProps>(
  (
    { 
      children, 
      className, 
      maxWidth = "xl", 
      padding = "md",
      ...props 
    }, 
    ref
  ) => {
    const maxWidthClasses = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      full: "max-w-full",
    };

    const paddingClasses = {
      none: "",
      sm: "px-4",
      md: "px-6",
      lg: "px-8",
      xl: "px-10",
    };

    const baseClasses = "w-full mx-auto";
    
    const combinedClasses = cn(
      baseClasses,
      maxWidthClasses[maxWidth],
      paddingClasses[padding],
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

Frame.displayName = "Frame";

export { Frame };