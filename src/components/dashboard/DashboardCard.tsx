import React from "react";
import { Lock, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface DashboardCardProps {
  icon: LucideIcon;
  title: string;
  summary: string;
  buttonText: string;
  isLocked?: boolean;
}

const DashboardCard = ({ 
  icon: Icon, 
  title, 
  summary, 
  buttonText, 
  isLocked = true 
}: DashboardCardProps) => {
  return (
    <div className="bg-card border border-outline rounded-card p-6 relative">
      {/* Top Row - Icon and Lock */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          <Icon size={24} />
        </div>
        {isLocked && (
          <div className="text-textSecondary">
            <Lock size={20} />
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-h3-mobile md:text-body-lg-desktop text-textPrimary mb-2">
        {title}
      </h3>

      {/* Summary */}
      <p className="text-body-md-mobile md:text-button-desktop text-textSecondary mb-6">
        {summary}
      </p>

      {/* Button */}
      <Button 
        variant="secondary" 
        size="md" 
        className="w-full bg-disabledBorder border-none text-disabledText cursor-not-allowed"
        disabled
      >
        {buttonText}
      </Button>
    </div>
  );
};

export { DashboardCard };