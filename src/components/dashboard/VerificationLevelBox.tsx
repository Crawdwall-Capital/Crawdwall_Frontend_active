// components/dashboard/VerificationLevelBox.tsx
import { ChevronUp, ChevronDown, Lock } from "lucide-react";
import React from "react";

interface VerificationLevelBoxProps {
  level: number;
  isVerified: boolean;
  isLocked?: boolean;
  percentage?: number;
  onToggle?: () => void;
  isExpanded?: boolean;
}

export const VerificationLevelBox: React.FC<VerificationLevelBoxProps> = ({
  level,
  isVerified,
  isLocked = false,
  percentage,
  onToggle,
  isExpanded = false
}) => {
  return (
    <div className={`border rounded-card p-6 transition-all duration-300 ${
      isVerified 
        ? 'border-success bg-success/5' 
        : isLocked 
          ? 'border-outliner bg-disableBg' 
          : 'border-none bg-card'
    }`}>
      <div className="flex items-center justify-between cursor-pointer" onClick={onToggle}>
        <div className="flex items-center gap-2 whitespace-nowrap">
          <p className="text-body-md-mobile md:text-body-md-desktop" style={{ 
            fontWeight: 600, 
            color: isLocked ? 'var(--disabledText)' : 'black' 
          }}>
            Level {level}
          </p>
          {isLocked ? (
            <p className="flex text-disabledText bg-disableBg py-2 px-4 border border-disabledText rounded-frame text-body-sm-desktop whitespace-nowrap"> 
              <span className="pr-2"><Lock size={20} className="text-disabledText"/></span> LOCKED 
            </p>
          ) : (
            <p className={`py-2 px-4 rounded-frame text-body-sm-desktop whitespace-nowrap ${
              isVerified ? 'text-success bg-success/10' : 'text-error bg-error/10'
            }`}>
              {isVerified ? 'Verified ✓' : 'Unverified'}
            </p>
          )}
        </div>
        {isLocked ? (
          <ChevronDown size={24} className="text-disabledText" />
        ) : isExpanded ? (
          <ChevronUp size={24} className={isVerified ? "text-success" : ""} />
        ) : (
          <ChevronDown size={24} className={isVerified ? "text-success" : ""} />
        )}
      </div>
    </div>
  );
};