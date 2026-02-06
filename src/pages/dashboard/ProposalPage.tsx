import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { FileText } from "lucide-react";

const ProposalPage = () => {
  return (
    <DashboardLayout pageTitle="Proposals">
      <div className="space-y-6">
        <div className="bg-card border border-outline rounded-card p-8 text-center">
          <FileText size={48} className="mx-auto text-textSecondary mb-4" />
          <h3 className="text-h3-mobile text-textPrimary mb-2">
            Proposals Management
          </h3>
          <p className="text-body-md-mobile text-textSecondary mb-6">
            Create, manage, and track your funding proposals. Submit new proposals and monitor their approval status.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-button hover:opacity-90 transition">
            Create New Proposal
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export { ProposalPage };