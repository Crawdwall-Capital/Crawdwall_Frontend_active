import React from "react";
import { Button } from "@/components/ui/Button";

interface KYCCardProps {
  title: string;
  percentage: number;
  summary: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const KYCCard = ({ 
  title, 
  percentage, 
  summary, 
  buttonText, 
  onButtonClick 
}: KYCCardProps) => {
  return (
    <div className="bg-card border border-outline rounded-card p-6 ">
      {/* Title and Percentage */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-h3-mobile md:text-body-lg-desktop text-textPrimary" style={{ fontWeight: 600 }}>
          {title}
        </h3>
        
      </div>
      <div className="flex justify-end">
        <p className="text-h3-mobile md:text-body-md-desktop text-primary font-semibold">
          {percentage}%
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-divider rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      {/* Summary */}
      <p className="text-body-md-mobile md:text-button-desktop text-textSecondary mb-6">
        {summary}
      </p>

      {/* Button */}
      <Button 
        variant="primary" 
        size="md" 
        className="w-full"
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export { KYCCard };