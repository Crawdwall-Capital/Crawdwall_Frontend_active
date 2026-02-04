import React from "react";
import { IconCardProps } from "@/types";
import { cn } from "@/lib/utils";

const IconCard = ({ icon, title, summary, className }: IconCardProps) => {
  return (
    <div className={cn("text-center p-6 bg-white rounded-lg", className)}>
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-slate-800 mb-3">
        {title}
      </h3>
      
      {/* Summary */}
      <p className="text-base text-slate-600 leading-relaxed">
        {summary}
      </p>
    </div>
  );
};

export { IconCard };