import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Settings } from "lucide-react";

const SettingsPage = () => {
  return (
    <DashboardLayout pageTitle="Settings">
      <div className="space-y-6">
        <div className="bg-card border border-outline rounded-card p-8 text-center">
          <Settings size={48} className="mx-auto text-textSecondary mb-4" />
          <h3 className="text-h3-mobile text-textPrimary mb-2">
            Account Settings
          </h3>
          <p className="text-body-md-mobile text-textSecondary mb-6">
            Manage your account preferences, security settings, and notification preferences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-card border border-outline p-4 rounded-button hover:bg-secondaryBg transition text-left">
              <div className="font-medium text-textPrimary">Security</div>
              <div className="text-sm text-textSecondary">Password & 2FA</div>
            </button>
            <button className="bg-card border border-outline p-4 rounded-button hover:bg-secondaryBg transition text-left">
              <div className="font-medium text-textPrimary">Notifications</div>
              <div className="text-sm text-textSecondary">Email & SMS preferences</div>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export { SettingsPage };