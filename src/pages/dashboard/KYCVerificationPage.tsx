import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Shield, CheckCircle, Clock, AlertCircle, ChevronUp } from "lucide-react";

const KYCVerificationPage = () => {
  const percentage = 56; // You can make this dynamic

  return (
    <DashboardLayout pageTitle="KYC Verification">
      <div className="space-y-6">
        {/* Two boxes side by side */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* First Box - 1/5 of screen size */}
          <div className="md:w-1/4 bg-card border border-none rounded-card p-6 h-fit">
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

          {/* Second Box - 4/5 of screen size */}
          <div className="md:w-3/4 bg-card border border-none rounded-card p-4">
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
        </div>

        {/* KYC Verification Process Container */}
        <div className="bg-card border border-outline rounded-card p-8">
          <div className="flex items-center gap-4 mb-6">
            <ChevronUp size={32} className="text-primary" />
            <div>
              <h3 className="text-h3-mobile text-textPrimary">
                KYC Verification Process
              </h3>
              <p className="text-body-md-mobile text-textSecondary">
                Complete your verification to unlock all platform features
              </p>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-body-sm-desktop text-textSecondary">Progress</span>
              <span className="text-body-sm-desktop text-primary font-semibold">65%</span>
            </div>
            <div className="w-full bg-divider rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '5%' }}></div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 border border-divider rounded-button">
              <CheckCircle size={20} className="text-success" />
              <div className="flex-1">
                <div className="text-body-sm-desktop text-textPrimary font-medium">
                  Personal Information
                </div>
                <div className="text-xs text-textSecondary">Completed</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 border border-divider rounded-button">
              <CheckCircle size={20} className="text-success" />
              <div className="flex-1">
                <div className="text-body-sm-desktop text-textPrimary font-medium">
                  Company Details
                </div>
                <div className="text-xs text-textSecondary">Completed</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 border border-primary rounded-button bg-primary/5">
              <Clock size={20} className="text-primary" />
              <div className="flex-1">
                <div className="text-body-sm-desktop text-textPrimary font-medium">
                  Document Upload
                </div>
                <div className="text-xs text-textSecondary">In Progress</div>
              </div>
              <button className="text-primary text-sm hover:underline">
                Continue
              </button>
            </div>

            <div className="flex items-center gap-3 p-4 border border-divider rounded-button opacity-50">
              <AlertCircle size={20} className="text-textSecondary" />
              <div className="flex-1">
                <div className="text-body-sm-desktop text-textSecondary font-medium">
                  Final Verification
                </div>
                <div className="text-xs text-textSecondary">Pending</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export { KYCVerificationPage };