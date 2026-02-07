import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Shield, ChevronUp, User, Building, FileText, CheckCircle, Mail, Phone, Globe, Upload, Eye, ChevronDown,Lock } from "lucide-react";
import VerticalTimeline, { TimelineStep } from "@/components/dashboard/VerticalTimeline";

const KYCVerificationPage = () => {
  const percentage = 56; // You can make this dynamic
  const [activeStep, setActiveStep] = useState<number>(2); // Start at step 2

  // Define the timeline steps with icons
  const kycSteps: TimelineStep[] = [
    {
      id: 1,
      title: "Company Profile",
      icon: User,
      iconColor: "text-blue-500"
    },
    {
      id: 2,
      title: "Leadership & Ownership",
      icon: Building,
      iconColor: "text-green-500"
    },
    {
      id: 3,
      title: "Track Record & Credibility",
      icon: FileText,
      iconColor: "text-orange-500"
    },
    {
      id: 4,
      title: "Compliance & Identity",
      icon: Shield,
      iconColor: "text-purple-500"
    },
    {
      id: 5,
      title: "Declarations & Consent",
      icon: Shield,
      iconColor: "text-purple-500"
    }
  ];

  return (
    <DashboardLayout pageTitle="Verification (KYC)">
      <div className="space-y-6">
        {/* Two boxes side by side */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="md:w-1/4 space-y-6">
            {/* Level 1 Box */}
            <div className="bg-card border border-none rounded-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <p className="text-body-md-mobile md:text-body-md-desktop text-black" style={{ fontWeight: 600 }}>
                    Level 1
                  </p>
                  <p className="text-error bg-error/10 py-2 px-4 rounded-frame text-body-sm-desktop whitespace-nowrap">
                    Unverified
                  </p>
                </div>
                <ChevronUp size={24} />
              </div>
            </div>

            {/* Vertical Timeline Card (Separate card below) */}
            <div className="p-6">

              <VerticalTimeline
                steps={kycSteps}
                activeStep={activeStep}
                onChangeStep={(stepId) => {
                  if (typeof stepId === 'number') {
                    setActiveStep(stepId);
                  }
                }}
                showConnectingLine={true}
                showStepNumbers={false}
              />
            </div>
            <div className="bg-disableBg border border-outliner rounded-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <p className="text-body-md-mobile md:text-body-md-desktop text-disabledText" style={{ fontWeight: 600 }}>
                    Level 2
                  </p>
                  <p className="flex text-disabledText bg-disableBg py-2 px-4 border border-disabledText rounded-frame text-body-sm-desktop whitespace-nowrap"> 
                    <span className="pr-2"> <Lock size={20} className="text-disabledText"/></span> LOCKED </p>
                </div>
                <ChevronDown size={24} className="text-disabledText" />
              </div>
            </div>
          </div>

          {/* Right Column - Main content with forms BELOW the existing box */}
          <div className="md:w-3/4 space-y-6">
            {/* Existing Level 1 Verification Box */}
            <div className="bg-card border border-none rounded-card p-4">
              {/* Title and percentage on same line */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-body-md-mobile md:text-body-md-desktop text-textPrimary font-medium" style={{ fontWeight: 600 }}>
                  Level 1 Verification
                </h3>
                <span className="text-body-md-mobile md:text-body-md-desktop text-primary font-semibold" style={{ fontWeight: 600 }}>
                  {percentage}%
                </span>
              </div>

              {/* Progress line */}
              <div className="w-full bg-divider rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

              <p className="text-button-desktop p-2 text-textSecondary">
                Verify your company identity to unlock full fundraising and investment features
              </p>
            </div>

            {/* Forms Card (Appears BELOW with margin) */}
            <div className="bg-card border border-outline rounded-card p-6">
              {/* Header with step title */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-h3-mobile text-textPrimary mb-1">
                    {kycSteps.find(step => step.id === activeStep)?.title}
                  </h3>
                  <p className="text-body-sm-desktop text-textSecondary">
                    Step {activeStep} of {kycSteps.length}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-body-sm-desktop text-textSecondary">Progress:</span>
                  <span className="text-body-md-desktop text-primary font-semibold">
                    {Math.round((activeStep / kycSteps.length) * 100)}%
                  </span>
                </div>
              </div>

              {/* Dynamic Form based on active step */}
              <div className="space-y-6">
                {activeStep === 1 && <PersonalInformationForm />}
                {activeStep === 2 && <CompanyDetailsForm />}
                {activeStep === 3 && <DocumentUploadForm />}
                {activeStep === 4 && <FinalVerificationForm />}
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-divider">
                <button
                  onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                  disabled={activeStep === 1}
                  className="px-6 py-3 border border-outline rounded-button text-body-sm-desktop disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondaryBg"
                >
                  Previous
                </button>

                <button
                  onClick={() => {
                    if (activeStep < kycSteps.length) {
                      setActiveStep(prev => prev + 1);
                    } else {
                      // Handle final submission
                      alert("Verification submitted successfully!");
                    }
                  }}
                  className="px-6 py-3 bg-primary text-white rounded-button text-body-sm-desktop hover:opacity-90"
                >
                  {activeStep === kycSteps.length ? 'Submit Verification' : 'Continue'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

// Form Components (same as before)
const PersonalInformationForm = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-body-sm-desktop text-textSecondary mb-2">First Name</label>
        <input
          type="text"
          className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter first name"
        />
      </div>
      <div>
        <label className="block text-body-sm-desktop text-textSecondary mb-2">Last Name</label>
        <input
          type="text"
          className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter last name"
        />
      </div>
    </div>

    <div>
      <label className="block text-body-sm-desktop text-textSecondary mb-2">Email Address</label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
        <input
          type="email"
          className="w-full border border-outline rounded-button px-10 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="your.email@example.com"
        />
      </div>
    </div>

    <div>
      <label className="block text-body-sm-desktop text-textSecondary mb-2">Phone Number</label>
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
        <input
          type="tel"
          className="w-full border border-outline rounded-button px-10 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="+1 (555) 123-4567"
        />
      </div>
    </div>

    <div>
      <label className="block text-body-sm-desktop text-textSecondary mb-2">Date of Birth</label>
      <input
        type="date"
        className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
  </div>
);

const CompanyDetailsForm = () => (
  <div className="space-y-4">
    <div>
      <label className="block text-body-sm-desktop text-textSecondary mb-2">Company Name</label>
      <input
        type="text"
        className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder="Enter company legal name"
      />
    </div>

    <div>
      <label className="block text-body-sm-desktop text-textSecondary mb-2">Company Registration Number</label>
      <input
        type="text"
        className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder="e.g., RC1234567"
      />
    </div>

    <div>
      <label className="block text-body-sm-desktop text-textSecondary mb-2">Industry</label>
      <select className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent">
        <option value="">Select Industry</option>
        <option value="technology">Technology</option>
        <option value="finance">Finance & Banking</option>
        <option value="healthcare">Healthcare</option>
        <option value="education">Education</option>
        <option value="retail">Retail & E-commerce</option>
        <option value="manufacturing">Manufacturing</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div>
      <label className="block text-body-sm-desktop text-textSecondary mb-2">Company Website</label>
      <div className="relative">
        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
        <input
          type="url"
          className="w-full border border-outline rounded-button px-10 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="https://www.example.com"
        />
      </div>
    </div>

    <div>
      <label className="block text-body-sm-desktop text-textSecondary mb-2">Company Address</label>
      <textarea
        className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent h-24"
        placeholder="Enter full company address"
      />
    </div>
  </div>
);

const DocumentUploadForm = () => (
  <div className="space-y-6">
    <div className="border-2 border-dashed border-outline rounded-button p-8 text-center hover:bg-secondaryBg cursor-pointer transition-colors">
      <Upload className="mx-auto text-textSecondary mb-3" size={32} />
      <p className="text-textSecondary mb-1">Drag & drop documents here</p>
      <p className="text-sm text-textSecondary">or click to browse files</p>
      <p className="text-xs text-textSecondary mt-2">Maximum file size: 10MB</p>
    </div>

    <div className="space-y-4">
      <h4 className="text-body-md-desktop text-textPrimary font-medium">Required Documents</h4>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 border border-outline rounded-button">
          <div className="flex items-center gap-3">
            <FileText size={20} className="text-primary" />
            <div>
              <p className="text-body-sm-desktop text-textPrimary">Company Registration Certificate</p>
              <p className="text-xs text-textSecondary">PDF, JPG, or PNG format</p>
            </div>
          </div>
          <button className="text-primary text-sm hover:underline">Upload</button>
        </div>

        <div className="flex items-center justify-between p-3 border border-outline rounded-button">
          <div className="flex items-center gap-3">
            <FileText size={20} className="text-primary" />
            <div>
              <p className="text-body-sm-desktop text-textPrimary">Tax Identification Document</p>
              <p className="text-xs text-textSecondary">PDF, JPG, or PNG format</p>
            </div>
          </div>
          <button className="text-primary text-sm hover:underline">Upload</button>
        </div>

        <div className="flex items-center justify-between p-3 border border-outline rounded-button">
          <div className="flex items-center gap-3">
            <FileText size={20} className="text-primary" />
            <div>
              <p className="text-body-sm-desktop text-textPrimary">Director's ID/Passport</p>
              <p className="text-xs text-textSecondary">PDF, JPG, or PNG format</p>
            </div>
          </div>
          <button className="text-primary text-sm hover:underline">Upload</button>
        </div>
      </div>
    </div>
  </div>
);

const FinalVerificationForm = () => (
  <div className="space-y-6">
    <div className="p-4 border border-outline rounded-button bg-primary/5">
      <div className="flex items-center gap-3 mb-2">
        <CheckCircle className="text-success" size={20} />
        <h4 className="text-body-md-desktop text-textPrimary font-medium">Review Your Submission</h4>
      </div>
      <p className="text-body-sm-desktop text-textSecondary">
        Please review all information before submitting for verification. You can go back to previous steps to make changes.
      </p>
    </div>

    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border border-outline rounded-button">
          <h5 className="text-body-sm-desktop text-textPrimary font-medium mb-2">Personal Information</h5>
          <div className="space-y-1">
            <p className="text-sm text-textSecondary">John Doe</p>
            <p className="text-sm text-textSecondary">john.doe@example.com</p>
            <p className="text-sm text-textSecondary">+1 (555) 123-4567</p>
          </div>
          <button className="text-primary text-xs hover:underline mt-2 flex items-center gap-1">
            <Eye size={12} /> View Details
          </button>
        </div>

        <div className="p-4 border border-outline rounded-button">
          <h5 className="text-body-sm-desktop text-textPrimary font-medium mb-2">Company Details</h5>
          <div className="space-y-1">
            <p className="text-sm text-textSecondary">TechCorp Inc.</p>
            <p className="text-sm text-textSecondary">RC9876543</p>
            <p className="text-sm text-textSecondary">Technology</p>
          </div>
          <button className="text-primary text-xs hover:underline mt-2 flex items-center gap-1">
            <Eye size={12} /> View Details
          </button>
        </div>
      </div>

      <div className="p-4 border border-outline rounded-button">
        <h5 className="text-body-sm-desktop text-textPrimary font-medium mb-2">Uploaded Documents</h5>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-textSecondary">Registration Certificate.pdf</span>
            <span className="text-xs text-success">✓ Uploaded</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-textSecondary">Tax ID Document.pdf</span>
            <span className="text-xs text-success">✓ Uploaded</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-textSecondary">Passport Front.jpg</span>
            <span className="text-xs text-success">✓ Uploaded</span>
          </div>
        </div>
      </div>
    </div>

    <div className="p-4 border border-outline rounded-button">
      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" className="mt-1 accent-primary" />
        <div>
          <p className="text-body-sm-desktop text-textPrimary">
            I certify that all information provided is accurate and complete
          </p>
          <p className="text-xs text-textSecondary mt-1">
            By checking this box, you confirm that all documents and information submitted are true and valid.
          </p>
        </div>
      </label>
    </div>
  </div>
);

export { KYCVerificationPage };