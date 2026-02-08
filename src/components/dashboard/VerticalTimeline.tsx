import React from "react";
import { CheckCircle, Circle, LucideIcon } from "lucide-react";

export interface TimelineStep {
    id: number | string;
    title: string;
    description?: string;
    icon?: LucideIcon;
    iconColor?: string;
}

export interface VerticalTimelineProps {
    steps: TimelineStep[];
    activeStep: number | string;
    onChangeStep?: (stepId: number | string) => void;
    showConnectingLine?: boolean;
    showStepNumbers?: boolean;
    className?: string;
    defaultIcon?: LucideIcon;
    completedSteps?: (number | string)[];
}

const VerticalTimeline = ({
    steps,
    activeStep,
    onChangeStep,
    showConnectingLine = true,
    showStepNumbers = false,
    className = "",
    defaultIcon: DefaultIcon = Circle,
    completedSteps = [],
}: VerticalTimelineProps) => {
    return (
        <div className={`relative ${className}`}>
            {/* Vertical connecting line - optional */}
            {showConnectingLine && (
                <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-divider"></div>
            )}

            <div className="space-y-8">
                {steps.map((step, index) => {
                    const isCurrent = step.id === activeStep;
                    const isCompleted = completedSteps.includes(step.id) || 
                        (typeof step.id === 'number' && typeof activeStep === 'number' && step.id < activeStep);
                    const isClickable = !!onChangeStep;

                    const StepIcon = step.icon || DefaultIcon;
                    const iconColor = step.iconColor || "text-textSecondary";

                    return (
                        <div
                            key={step.id}
                            className={`relative flex justify-between items-start ${isClickable ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
                            onClick={() => isClickable && onChangeStep?.(step.id)}
                        >
                            {/* Step title - on the LEFT side */}
                            <div className={`text-body-md-desktop font-medium pr-4
                ${isCurrent ? 'text-primary text-body-sm-desktop' : 'text-textSecondary text-body-sm-desktop'}`}>
                                {step.title}


                            </div>

                            {/* Step indicator - on the RIGHT side */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                  ${isCurrent ? 'bg-primary border-primary' :
                                        isCompleted ? 'bg-success border-success' :
                                            'bg-white border-divider'}`}
                                >
                                    {isCurrent ? (
                                        <StepIcon size={16} className="text-white" />
                                    ) : isCompleted ? (
                                        <CheckCircle size={16} className="text-white" />
                                    ) : step.icon ? (
                                        <StepIcon size={16} className={iconColor} />
                                    ) : (
                                        <StepIcon size={16} className="text-textSecondary" />
                                    )}
                                </div>

                                {/* Optional connecting line segment */}
                                {showConnectingLine && index < steps.length - 1 && (
                                    <div className="absolute left-3.5 top-8 h-8 w-0.5 bg-divider"></div>
                                )}
                            </div>


                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default VerticalTimeline;