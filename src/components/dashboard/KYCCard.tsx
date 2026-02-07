import React from "react";
import { Button } from "@/components/ui/Button";
import { Play } from 'lucide-react';

interface KYCCardProps {
  title: string;
  percentage: number;
  summary: string;
  completeSummary?: string; // Optional summary text for when percentage is 100
  buttonText: string;
  onButtonClick?: () => void;
}

const KYCCard = ({ 
  title, 
  percentage, 
  summary, 
  completeSummary = "Your documents are under review. We'll notify you once verification is complete.", // Default complete summary
  buttonText, 
  onButtonClick 
}: KYCCardProps) => {
  const isComplete = percentage === 100;

  return (
    <div className="bg-card border border-outline rounded-card p-6">
      {/* Title and Percentage */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-h3-mobile md:text-body-md-desktop text-textPrimary" style={{ fontWeight: 600 }}>
          {title}
        </h3>
        {isComplete && (
          <span className="text-[12px] bg-[#EBF2FF] text-primary px-2 py-1 rounded-card">
            IN REVIEW
          </span>
        )}
      </div>
      <div className="flex justify-end ">
        <p className={`text-h3-mobile md:text-body-md-desktop font-semibold text-primary`}>
          {percentage}%
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-divider rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ease-out bg-primary`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      {/* Summary - Changes when percentage is 100 */}
      <p className="text-body-md-mobile md:text-button-desktop text-textSecondary mb-2" style={{ fontWeight: 400 }}>
        {isComplete ? completeSummary : summary}
      </p>

      {/* Button - Changes when percentage is 100 */}
      {isComplete ? (
        <Button 
          variant="secondary" 
          size="md" 
          className="w-full text-button-desktop text-primary bg-white border border-primary text-primary hover:bg-primary/5 cursor-default p-2" 
          disabled
        >
          View Submitted Document
        </Button>
      ) : (
        <Button 
          variant="primary" 
          size="md" 
          className="w-full"
          onClick={onButtonClick}
        >
         <span ><Play size={30} className="text-white pr-3" /></span>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export { KYCCard };