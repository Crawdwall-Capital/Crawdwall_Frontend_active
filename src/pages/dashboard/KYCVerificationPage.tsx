// pages/kyc-verification/index.tsx
import React, { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Shield, CheckCircle, UserCog, Building, Medal, ShieldCheck, BadgeCheck, FileText, CreditCard, FileCheck, Lock } from "lucide-react";
import VerticalTimeline from "@/components/dashboard/VerticalTimeline";
import { VerificationLevelBox } from "@/components/dashboard/VerificationLevelBox";
import { VerificationProgressCard } from "@/components/dashboard/VerificationProgressCard";
import { FormStepContainer } from "@/components/dashboard/FormStepContainer";
import { CompanyProfileForm } from "@/components/kyc/CompanyProfileForm";
import { LeadershipOwnershipForm } from "@/components/kyc/LeadershipOwnershipForm";
import { TrackRecordForm } from "@/components/kyc/TrackRecordForm";
import { ComplianceIdentityForm } from "@/components/kyc/ComplianceIdentityForm";
import { DeclarationsConsentForm } from "@/components/kyc/DeclarationsConsentForm";

// Level 1 KYC Steps
const level1Steps = [
  {
    id: 1,
    title: "Company Profile",
    icon: UserCog,
    iconColor: "text-primary"
  },
  {
    id: 2,
    title: "Leadership & Ownership",
    icon: Building,
    iconColor: "text-primary"
  },
  {
    id: 3,
    title: "Track Record & Credibility",
    icon: Medal,
    iconColor: "text-primary"
  },
  {
    id: 4,
    title: "Compliance & Identity",
    icon: ShieldCheck,
    iconColor: "text-primary"
  },
  {
    id: 5,
    title: "Declarations & Consent",
    icon: BadgeCheck,
    iconColor: "text-primary"
  }
];

// Level 2 KYC Steps
const level2Steps = [
  {
    id: 1,
    title: "Financial Documents",
    icon: FileText,
    iconColor: "text-primary"
  },
  {
    id: 2,
    title: "Bank Account Verification",
    icon: CreditCard,
    iconColor: "text-primary"
  },
  {
    id: 3,
    title: "Audited Statements",
    icon: FileCheck,
    iconColor: "text-primary"
  },
  {
    id: 4,
    title: "Additional Compliance",
    icon: ShieldCheck,
    iconColor: "text-primary"
  },
  {
    id: 5,
    title: "Final Approval",
    icon: BadgeCheck,
    iconColor: "text-primary"
  }
];

const KYCVerificationPage = () => {
  const [activeLevel, setActiveLevel] = useState<1 | 2>(1);
  const [expandedLevel, setExpandedLevel] = useState<1 | 2 | null>(1);
  const [activeStep, setActiveStep] = useState<number>(1);
  
  // Level 1 completion status
  const [level1Completion, setLevel1Completion] = useState<Record<number, number>>({
    1: 0, // Company Profile completion percentage
    2: 0, // Leadership & Ownership completion percentage
    3: 0, // Track Record & Credibility completion percentage
    4: 0, // Compliance & Identity completion percentage
    5: 0, // Declarations & Consent completion percentage
  });

  // Level 2 completion status
  const [level2Completion, setLevel2Completion] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const [level2ActiveStep, setLevel2ActiveStep] = useState<number>(1);

  // Calculate overall percentage for each level
  const calculateLevelPercentage = (completion: Record<number, number>) => {
    const totalSteps = Object.keys(completion).length;
    let sumOfCompletion = 0;
    
    Object.values(completion).forEach(percent => {
      sumOfCompletion += percent;
    });
    
    const overallPercentage = Math.round((sumOfCompletion / totalSteps));
    return Math.min(overallPercentage, 100);
  };

  const level1Percentage = calculateLevelPercentage(level1Completion);
  const level2Percentage = calculateLevelPercentage(level2Completion);
  const isLevel1Verified = level1Percentage === 100;
  const isLevel2Verified = level2Percentage === 100;

  // Get completed steps for each level (steps that are 100% complete)
  const getCompletedSteps = (completion: Record<number, number>): number[] => {
    return Object.entries(completion)
      .filter(([_, percent]) => percent === 100)
      .map(([stepId]) => parseInt(stepId));
  };

  const level1CompletedSteps = getCompletedSteps(level1Completion);
  const level2CompletedSteps = getCompletedSteps(level2Completion);

  const currentSteps = activeLevel === 1 ? level1Steps : level2Steps;
  const currentCompletion = activeLevel === 1 ? level1Completion : level2Completion;
  const currentActiveStep = activeLevel === 1 ? activeStep : level2ActiveStep;
  const currentCompletedSteps = activeLevel === 1 ? level1CompletedSteps : level2CompletedSteps;

  // Update completion status for a specific level
  const updateCompletionStatus = (stepId: number, completionPercent: number, level: 1 | 2 = 1) => {
    if (level === 1) {
      setLevel1Completion(prev => ({
        ...prev,
        [stepId]: completionPercent
      }));
    } else {
      setLevel2Completion(prev => ({
        ...prev,
        [stepId]: completionPercent
      }));
    }
  };

  const handleLevelToggle = (level: 1 | 2) => {
    if (level === 1) {
      setExpandedLevel(expandedLevel === 1 ? null : 1);
      setActiveLevel(1);
    } else if (level === 2 && isLevel1Verified) {
      setExpandedLevel(expandedLevel === 2 ? null : 2);
      setActiveLevel(2);
    }
  };

  const handleStepChange = (stepId: number) => {
    if (typeof stepId === 'number') {
      if (activeLevel === 1) {
        setActiveStep(stepId);
      } else {
        setLevel2ActiveStep(stepId);
      }
    }
  };

  const handleContinue = () => {
    if (activeLevel === 1) {
      if (activeStep < level1Steps.length) {
        setActiveStep(prev => prev + 1);
      } else {
        alert("Level 1 verification submitted successfully!");
      }
    } else {
      if (level2ActiveStep < level2Steps.length) {
        setLevel2ActiveStep(prev => prev + 1);
      } else {
        alert("Level 2 verification submitted successfully!");
      }
    }
  };

  const handlePrevious = () => {
    if (activeLevel === 1) {
      setActiveStep(prev => Math.max(1, prev - 1));
    } else {
      setLevel2ActiveStep(prev => Math.max(1, prev - 1));
    }
  };

  // Get current form component based on active level and step
  const renderForm = () => {
    if (activeLevel === 1) {
      switch (currentActiveStep) {
        case 1:
          return <CompanyProfileForm onCompletionChange={(percent) => updateCompletionStatus(1, percent, 1)} />;
        case 2:
          return <LeadershipOwnershipForm onCompletionChange={(percent) => updateCompletionStatus(2, percent, 1)} />;
        case 3:
          return <TrackRecordForm onCompletionChange={(percent) => updateCompletionStatus(3, percent, 1)} />;
        case 4:
          return <ComplianceIdentityForm onCompletionChange={(percent) => updateCompletionStatus(4, percent, 1)} />;
        case 5:
          return <DeclarationsConsentForm onCompletionChange={(percent) => updateCompletionStatus(5, percent, 1)} />;
        default:
          return null;
      }
    } else {
      // Level 2 form placeholder - you can create actual form components
      return (
        <div className="space-y-6">
          <div className="mb-6">
            <h4 className="text-body-lg-desktop text-textPrimary font-medium mb-2">
              {currentSteps[currentActiveStep - 1]?.title}
            </h4>
            <p className="text-body-sm-desktop text-textSecondary">
              Complete this form to proceed with Level 2 verification
            </p>
          </div>
          
          {/* Example form fields for Level 2 */}
          <div>
            <label className="block text-body-sm-desktop text-textSecondary mb-2">
              Financial Year *
            </label>
            <input
              type="text"
              className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="e.g., 2023-2024"
              onChange={(e) => {
                // Simulate completion change
                const value = e.target.value;
                const percent = value.trim() ? 100 : 0;
                updateCompletionStatus(currentActiveStep, percent, 2);
              }}
              required
            />
          </div>
          
          <div className="p-4 border border-outline rounded-card bg-primary/5">
            <p className="text-sm text-textSecondary">
              <strong>Note:</strong> This is a placeholder for Level 2 verification forms. 
              Actual forms would include financial statements, bank verifications, etc.
            </p>
          </div>
        </div>
      );
    }
  };

  // Get description for progress card
  const getLevelDescription = (level: 1 | 2) => {
    if (level === 1) {
      return level1Percentage === 100 
        ? 'Level 1 verification complete! You can now proceed to Level 2 verification.' 
        : 'Verify your company identity to unlock full fundraising and investment features';
    } else {
      return level2Percentage === 100 
        ? 'Level 2 verification complete! Your company is fully verified.' 
        : 'Complete Level 2 verification to access advanced fundraising features and investor matching.';
    }
  };

  return (
    <DashboardLayout pageTitle="Verification (KYC)">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Vertical Timeline */}
          <div className="md:w-1/4 space-y-6">
            {/* Level 1 Box */}
            <VerificationLevelBox
              level={1}
              isVerified={isLevel1Verified}
              isLocked={false}
              onToggle={() => handleLevelToggle(1)}
              isExpanded={expandedLevel === 1}
            />

            {/* Show Level 1 Timeline when expanded */}
            {expandedLevel === 1 && (
              <div className="p-6">
                <VerticalTimeline
                  steps={level1Steps}
                  activeStep={activeStep}
                  onChangeStep={handleStepChange}
                  showConnectingLine={true}
                  showStepNumbers={false}
                  completedSteps={level1CompletedSteps}
                />
              </div>
            )}

            {/* Level 2 Box */}
            <VerificationLevelBox
              level={2}
              isVerified={isLevel2Verified}
              isLocked={!isLevel1Verified}
              onToggle={() => handleLevelToggle(2)}
              isExpanded={expandedLevel === 2}
            />

            {/* Show Level 2 Timeline when expanded and unlocked */}
            {expandedLevel === 2 && isLevel1Verified && (
              <div className="p-6">
                <VerticalTimeline
                  steps={level2Steps}
                  activeStep={level2ActiveStep}
                  onChangeStep={handleStepChange}
                  showConnectingLine={true}
                  showStepNumbers={false}
                  completedSteps={level2CompletedSteps}
                />
              </div>
            )}
          </div>

          {/* Right Column - Main Content */}
          <div className="md:w-3/4 space-y-6">
            {/* Show Level 1 content when expanded */}
            {expandedLevel === 1 && (
              <>
                <VerificationProgressCard
                  level={1}
                  percentage={level1Percentage}
                  isComplete={isLevel1Verified}
                  description={getLevelDescription(1)}
                />

                <FormStepContainer
                  title={level1Steps[activeStep - 1]?.title || ""}
                  step={activeStep}
                  totalSteps={level1Steps.length}
                  stepProgress={currentCompletion[activeStep] || 0}
                  onPrevious={handlePrevious}
                  onContinue={handleContinue}
                  canContinue={currentCompletion[activeStep] >= 100}
                  isLastStep={activeStep === level1Steps.length}
                  showCompletionMessage={level1Percentage === 100}
                >
                  {renderForm()}
                </FormStepContainer>
              </>
            )}

            {/* Show Level 2 content when expanded and unlocked */}
            {expandedLevel === 2 && isLevel1Verified && (
              <>
                <VerificationProgressCard
                  level={2}
                  percentage={level2Percentage}
                  isComplete={isLevel2Verified}
                  description={getLevelDescription(2)}
                />

                <FormStepContainer
                  title={level2Steps[level2ActiveStep - 1]?.title || ""}
                  step={level2ActiveStep}
                  totalSteps={level2Steps.length}
                  stepProgress={currentCompletion[level2ActiveStep] || 0}
                  onPrevious={handlePrevious}
                  onContinue={handleContinue}
                  canContinue={currentCompletion[level2ActiveStep] >= 100}
                  isLastStep={level2ActiveStep === level2Steps.length}
                  showCompletionMessage={level2Percentage === 100}
                >
                  {renderForm()}
                </FormStepContainer>
              </>
            )}

            {/* Show message when no level is expanded */}
            {!expandedLevel && (
              <div className="bg-card border border-outline rounded-card p-8 text-center">
                <Shield className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-h3-mobile text-textPrimary mb-2">Select a Verification Level</h3>
                <p className="text-textSecondary">
                  Click on Level 1 or Level 2 in the left panel to start or continue verification.
                </p>
                {!isLevel1Verified && (
                  <p className="text-sm text-textSecondary mt-2">
                    Complete Level 1 verification to unlock Level 2.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export { KYCVerificationPage };