import React from "react";
import { Lock, LucideIcon, Unlock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

interface DashboardCardProps {
  icon: LucideIcon;
  title: string;
  summary: string;
  lockedButtonText?: string; // Text when locked
  unlockedButtonText?: string; // Text when unlocked
  isLocked?: boolean;
  navigateTo?: string;
}

const DashboardCard = ({ 
  icon: Icon, 
  title, 
  summary, 
  lockedButtonText , 
  unlockedButtonText , 
  isLocked = true,
  navigateTo 
}: DashboardCardProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (!isLocked && navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <div className="bg-card border border-outline rounded-card p-6 relative">
      {/* Top Row - Icon and Lock/Unlock */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          <Icon size={24} />
        </div>
        <div className="text-textSecondary flex items-center gap-1">
          {isLocked ? (
            <>
              <Lock size={20} />
              <span className="text-xs">Locked</span>
            </>
          ) : (
            <>
              <Unlock size={20} className="text-success" />
              <span className="text-xs text-success">Unlocked</span>
            </>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-h3-mobile md:text-body-lg-desktop text-textPrimary mb-2">
        {title}
      </h3>

      {/* Summary */}
      <p className="text-body-md-mobile md:text-button-desktop text-textSecondary mb-6">
        {summary}
      </p>

      {/* Button - Different text for locked/unlocked */}
      {isLocked ? (
        <Button 
          variant="secondary" 
          size="md" 
          className="w-full bg-disabledBorder border-none text-disabledText cursor-not-allowed"
          disabled
        >
          {lockedButtonText}
        </Button>
      ) : (
        <Button 
          variant="primary" 
          size="md" 
          className="w-full"
          onClick={handleButtonClick}
        >
          {unlockedButtonText}
        </Button>
      )}
    </div>
  );
};

export { DashboardCard };