import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const ProfilePage = () => {
  return (
    <DashboardLayout pageTitle="Profile">
      <div className="space-y-6">
        <div className="bg-card border border-outline rounded-card p-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-semibold">
              JD
            </div>
            <div>
              <h3 className="text-h3-mobile text-textPrimary">
                John Doe
              </h3>
              <p className="text-body-md-mobile text-textSecondary">
                john.doe@company.com
              </p>
              <span className="inline-block bg-success/10 text-success px-2 py-1 rounded-full text-xs font-medium mt-2">
                Verified
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-body-md-desktop text-textPrimary font-medium mb-3">
                Company Information
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-textSecondary">Company:</span>
                  <span className="text-textPrimary">Financial Global Holdings</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-textSecondary">Industry:</span>
                  <span className="text-textPrimary">Financial Services</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-textSecondary">Location:</span>
                  <span className="text-textPrimary">Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-body-md-desktop text-textPrimary font-medium mb-3">
                Account Status
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-textSecondary">KYC Status:</span>
                  <span className="text-warning">In Progress</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-textSecondary">Account Type:</span>
                  <span className="text-textPrimary">Business</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-textSecondary">Member Since:</span>
                  <span className="text-textPrimary">January 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-divider">
            <button className="bg-primary text-white px-6 py-3 rounded-button hover:opacity-90 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export { ProfilePage };