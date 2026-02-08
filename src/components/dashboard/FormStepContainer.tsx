// components/dashboard/FormStepContainer.tsx
import React, { ReactNode } from "react";
import { CheckCircle } from "lucide-react";

interface FormStepContainerProps {
  title: string;
  step: number;
  totalSteps: number;
  stepProgress: number;
  children: ReactNode;
  onPrevious?: () => void;
  onContinue?: () => void;
  canContinue?: boolean;
  isLastStep?: boolean;
  showCompletionMessage?: boolean;
}

export const FormStepContainer: React.FC<FormStepContainerProps> = ({
  title,
  step,
  totalSteps,
  stepProgress,
  children,
  onPrevious,
  onContinue,
  canContinue = false,
  isLastStep = false,
  showCompletionMessage = false
}) => {
  return (
    <div className="bg-card border border-outline rounded-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-h3-mobile text-textPrimary mb-1">
            {title}
          </h3>
          <p className="text-body-sm-desktop text-textSecondary">
            Step {step} of {totalSteps}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-body-sm-desktop text-textSecondary">Step Progress:</span>
          <span className={`text-body-md-desktop font-semibold ${stepProgress === 100 ? 'text-success' : 'text-primary'}`}>
            {stepProgress || 0}%
          </span>
          {stepProgress === 100 && (
            <CheckCircle size={20} className="text-success" />
          )}
        </div>
      </div>

      {/* Dynamic Form Content */}
      <div className="space-y-6">
        {children}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-divider">
        {step > 1 && (
          <button
            onClick={onPrevious}
            className="px-6 py-3 border border-outline rounded-button text-body-sm-desktop hover:bg-secondaryBg"
          >
            Previous
          </button>
        )}

        <button
          onClick={onContinue}
          className="px-6 py-3 bg-primary text-white rounded-button text-body-sm-desktop hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!canContinue}
        >
          {isLastStep ? 'Submit Verification' : 'Continue'}
        </button>
      </div>

      {/* Completion status indicator */}
      {showCompletionMessage && (
        <div className="mt-4 p-4 border border-success rounded-card bg-success/5">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-success" size={20} />
            <span className="text-success font-medium">All forms completed! Level 1 verification is now complete.</span>
          </div>
        </div>
      )}
    </div>
  );
};