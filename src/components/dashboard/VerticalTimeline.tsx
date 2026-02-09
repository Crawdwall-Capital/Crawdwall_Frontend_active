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
    completedSteps?: (number | string)[]; // Only steps that are 100% complete
}

const VerticalTimeline = ({
    steps,
    activeStep,
    onChangeStep,
    showConnectingLine = true,
    showStepNumbers = false,
    className = "",
    defaultIcon: DefaultIcon = Circle,
    completedSteps = [], // This should only contain IDs of steps that are 100% complete
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
                    const isCompleted = completedSteps.includes(step.id); // ONLY if explicitly marked as completed
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
                                ${isCurrent ? 'text-primary text-body-sm-desktop' : 
                                  isCompleted ? 'text-success text-body-sm-desktop' :
                                  'text-textSecondary text-body-sm-desktop'}`}>
                                {step.title}
                                
                                {/* Optional description */}
                                {step.description && (
                                    <p className={`text-xs mt-1 ${
                                        isCurrent ? 'text-primary/70' : 
                                        isCompleted ? 'text-success/70' : 
                                        'text-textSecondary'
                                    }`}>
                                        {step.description}
                                    </p>
                                )}
                                
                                {/* Status indicator 
                                <div className="mt-1">
                                    {isCompleted ? (
                                        <span className="inline-flex items-center gap-1 text-xs text-success font-medium">
                                            <CheckCircle size={12} />
                                            Completed
                                        </span>
                                    ) : isCurrent ? (
                                        <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                                            <Circle size={12} />
                                            In Progress
                                        </span>
                                    ) : (
                                        <span className="text-xs text-textSecondary">
                                            Pending
                                        </span>
                                    )}
                                </div>
                                */}
                            </div>

                            {/* Step indicator - on the RIGHT side */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300
                                    ${isCurrent ? 'bg-primary border-primary' :
                                      isCompleted ? 'bg-success border-success' :
                                      'bg-white border-outline'}`}
                                >
                                    {isCompleted ? (
                                        <CheckCircle size={16} className="text-white" />
                                    ) : isCurrent ? (
                                        <StepIcon size={16} className="text-white" />
                                    ) : step.icon ? (
                                        <StepIcon size={16} className={iconColor} />
                                    ) : (
                                        <DefaultIcon size={16} className="text-textSecondary" />
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