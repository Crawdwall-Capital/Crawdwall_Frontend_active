import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import VerticalTimeline, { TimelineStep } from "@/components/dashboard/VerticalTimeline";
import { User, Building, FileText, Shield } from "lucide-react";

const FinancingPage = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: TimelineStep[] = [
     {
    id: 1,
    title: "Personal Information",
    icon: User,
    iconColor: "text-blue-500"
  },
  {
    id: 2,
    title: "Company Details",
    icon: Building,
    iconColor: "text-green-500"
  },
  {
    id: 3,
    title: "Document Upload",
    icon: FileText,
    iconColor: "text-orange-500"
  },
  {
    id: 4,
    title: "Final Verification",
    icon: Shield,
    iconColor: "text-purple-500"
  }
  ];

  return (
    <DashboardLayout pageTitle="KYC Verification">
      <div className="p-2 md:p-6">
        <h2 className="text-h2-mobile md:text-h2-desktop text-textPrimary mb-2">KYC Verification</h2>
        <p className="text-body-md-mobile md:text-body-md-desktop text-textSecondary mb-6">
          Complete all 4 steps to verify your account
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Left column - Timeline (takes 1 column) */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-outline rounded-card p-4 md:p-6">
              <h3 className="text-h3-mobile md:text-h3-desktop text-textPrimary mb-6">Verification Steps</h3>
              <VerticalTimeline 
                steps={steps}
                activeStep={activeStep}
                onChangeStep={(stepId) => {
                  if (typeof stepId === 'number') {
                    setActiveStep(stepId);
                  }
                }}
                showConnectingLine={true}
                showStepNumbers={true}
              />
            </div>
          </div>

          {/* Right column - Content for current step (takes 3 columns) */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-outline rounded-card p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                <h3 className="text-h3-mobile md:text-h3-desktop text-textPrimary">
                  {steps.find(step => step.id === activeStep)?.title}
                </h3>
                <span className="text-body-sm-desktop text-primary font-medium">
                  Step {activeStep} of {steps.length}
                </span>
              </div>
              
              {/* Dynamic form based on active step */}
              {activeStep === 1 && <PersonalInfoForm />}
              {activeStep === 2 && <CompanyDetailsForm />}
              {activeStep === 3 && <DocumentUploadForm />}
              {activeStep === 4 && <VerificationForm />}
              
              {/* Navigation buttons */}
              <div className="flex flex-col sm:flex-row justify-between mt-8 pt-6 border-t border-divider gap-3">
                <button
                  onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                  disabled={activeStep === 1}
                  className="px-6 py-3 border border-outline rounded-button disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondaryBg"
                >
                  Previous
                </button>
                
                <button
                  onClick={() => {
                    if (activeStep < steps.length) {
                      setActiveStep(prev => prev + 1);
                    } else {
                      // Handle form submission
                      alert("Form submitted!");
                    }
                  }}
                  className="px-6 py-3 bg-primary text-white rounded-button hover:opacity-90"
                >
                  {activeStep === steps.length ? 'Submit Verification' : 'Next Step'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

// Form components (keep these in the same file or separate them)
const PersonalInfoForm = () => (
  <div className="space-y-4">
    <div>
      <label className="block text-body-sm-desktop text-textSecondary mb-2">Full Name</label>
      <input type="text" className="w-full border border-outline rounded-button px-4 py-3" />
    </div>
    <div>
      <label className="block text-body-sm-desktop text-textSecondary mb-2">Email</label>
      <input type="email" className="w-full border border-outline rounded-button px-4 py-3" />
    </div>
    <div>
      <label className="block text-body-sm-desktop text-textSecondary mb-2">Phone Number</label>
      <input type="tel" className="w-full border border-outline rounded-button px-4 py-3" />
    </div>
  </div>
);

const CompanyDetailsForm = () => (
  <div className="space-y-4">
    <div>
      <label className="block text-body-sm-desktop text-textSecondary mb-2">Company Name</label>
      <input type="text" className="w-full border border-outline rounded-button px-4 py-3" />
    </div>
    <div>
      <label className="block text-body-sm-desktop text-textSecondary mb-2">Registration Number</label>
      <input type="text" className="w-full border border-outline rounded-button px-4 py-3" />
    </div>
    <div>
      <label className="block text-body-sm-desktop text-textSecondary mb-2">Industry</label>
      <select className="w-full border border-outline rounded-button px-4 py-3">
        <option>Select Industry</option>
        <option>Technology</option>
        <option>Finance</option>
        <option>Healthcare</option>
        <option>Education</option>
      </select>
    </div>
  </div>
);

const DocumentUploadForm = () => (
  <div className="space-y-6">
    <div className="border-2 border-dashed border-outline rounded-button p-6 md:p-8 text-center hover:bg-secondaryBg cursor-pointer transition-colors">
      <p className="text-textSecondary mb-1">Drag & drop documents here</p>
      <p className="text-sm text-textSecondary">or click to browse</p>
    </div>
    
    <div>
      <p className="text-body-sm-desktop text-textSecondary mb-3">Required documents:</p>
      <ul className="space-y-2">
        <li className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          Company registration certificate
        </li>
        <li className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          Tax identification number
        </li>
        <li className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          Director's identification
        </li>
      </ul>
    </div>
  </div>
);

const VerificationForm = () => (
  <div className="space-y-4">
    <div className="p-4 border border-outline rounded-button">
      <h4 className="font-medium mb-2">Review Your Information</h4>
      <p className="text-sm text-textSecondary">Please review all the information you've provided before submitting.</p>
    </div>
    
    <div className="space-y-2">
      <div className="flex justify-between py-2 border-b border-divider">
        <span className="text-textSecondary">Personal Info:</span>
        <span className="font-medium">Completed</span>
      </div>
      <div className="flex justify-between py-2 border-b border-divider">
        <span className="text-textSecondary">Company Details:</span>
        <span className="font-medium">Completed</span>
      </div>
      <div className="flex justify-between py-2 border-b border-divider">
        <span className="text-textSecondary">Documents:</span>
        <span className="font-medium">Completed</span>
      </div>
    </div>
  </div>
);

export { FinancingPage };