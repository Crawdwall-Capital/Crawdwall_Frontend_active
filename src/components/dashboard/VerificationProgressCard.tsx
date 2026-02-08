// components/dashboard/VerificationProgressCard.tsx
import React from "react";

interface VerificationProgressCardProps {
  level: number;
  percentage: number;
  isComplete: boolean;
  description: string;
}

export const VerificationProgressCard: React.FC<VerificationProgressCardProps> = ({
  level,
  percentage,
  isComplete,
  description
}) => {
  return (
    <div className="bg-card border border-none rounded-card p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-body-md-mobile md:text-body-md-desktop text-textPrimary font-medium" style={{ fontWeight: 600 }}>
          Level {level} Verification
        </h3>
        <span className="text-body-md-mobile md:text-body-md-desktop text-primary font-semibold" style={{ fontWeight: 600 }}>
          {percentage}%
        </span>
      </div>

      <div className="w-full bg-divider rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${isComplete ? 'bg-success' : 'bg-primary'}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="text-button-desktop p-2 text-textSecondary">
        {description}
      </p>
    </div>
  );
};