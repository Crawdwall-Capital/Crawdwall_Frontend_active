import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { FileText, MoreVertical, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button"; // Import your Button component

const ProposalPage = () => {
  // Sample proposals data
  const proposals = [
    {
      id: "PRJ001",
      name: "Tech Conference 2024",
      description: "Annual technology conference in Lagos",
      service: "Event Financing",
      submissionDate: "2024-03-15",
      budget: "$50,000",
      status: "Submitted"
    },
    {
      id: "PRJ002",
      name: "Music Festival",
      description: "3-day music festival in Abuja",
      service: "Fundraising",
      submissionDate: "2024-03-10",
      budget: "$120,000",
      status: "Under Review"
    },
    {
      id: "PRJ003",
      name: "Business Summit",
      description: "Corporate networking event",
      service: "Event Financing",
      submissionDate: "2024-03-05",
      budget: "$75,000",
      status: "Approved"
    },
    {
      id: "PRJ004",
      name: "Art Exhibition",
      description: "Contemporary art showcase",
      service: "Project Financing",
      submissionDate: "2024-02-28",
      budget: "$35,000",
      status: "Rejected"
    },
    {
      id: "PRJ005",
      name: "Startup Incubator",
      description: "Tech startup acceleration program",
      service: "Fundraising",
      submissionDate: "2024-03-12",
      budget: "$200,000",
      status: "In Progress"
    },
    {
      id: "PRJ006",
      name: "Real Estate Development",
      description: "Commercial building project in Ikeja",
      service: "Project Financing",
      submissionDate: "2024-03-18",
      budget: "$500,000",
      status: "Draft"
    },
    {
      id: "PRJ007",
      name: "E-commerce Platform",
      description: "Online marketplace for African artisans",
      service: "Fundraising",
      submissionDate: "2024-03-14",
      budget: "$150,000",
      status: "Change Request"
    },
    {
      id: "PRJ008",
      name: "Healthcare Facility",
      description: "Medical center construction",
      service: "Project Financing",
      submissionDate: "2024-03-08",
      budget: "$350,000",
      status: "Approved"
    },
    {
      id: "PRJ009",
      name: "Educational Workshop",
      description: "Tech skills training program",
      service: "Event Financing",
      submissionDate: "2024-03-20",
      budget: "$25,000",
      status: "Draft"
    },
    {
      id: "PRJ010",
      name: "Agricultural Project",
      description: "Modern farming initiative",
      service: "Project Financing",
      submissionDate: "2024-03-11",
      budget: "$180,000",
      status: "Change Request"
    },
    {
      id: "PRJ011",
      name: "Film Production",
      description: "Feature film financing",
      service: "Fundraising",
      submissionDate: "2024-03-09",
      budget: "$250,000",
      status: "Under Review"
    },
    {
      id: "PRJ012",
      name: "Renewable Energy",
      description: "Solar power installation project",
      service: "Project Financing",
      submissionDate: "2024-03-16",
      budget: "$400,000",
      status: "Submitted"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'text-success bg-success/10';
      case 'submitted': return 'text-warning bg-warning/10';
      case 'in progress': return 'text-warning bg-warning/10';
      case 'under review': return 'text-neutral bg-neutral/10';
      case 'rejected': return 'text-error bg-error/10';
      case 'draft': return 'text-textSecondary bg-secondaryBg';
      case 'change request': return 'text-white bg-error'; // White text on red background
      default: return 'text-textSecondary bg-secondaryBg';
    }
  };

  return (
    <DashboardLayout pageTitle="Proposals">
      <div className="space-y-6">
        {/* Proposals Table */}
        <div className="bg-card border border-outline rounded-card p-6">
          {/* Header with search, filter, and create button */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            {/* Left: Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
                <input
                  type="text"
                  placeholder="Search "
                  className="w-full pl-10 pr-4 py-2 border border-outline rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Center: Filter by Status */}
            <div className="flex items-center gap-2">
              <span className="text-button-desktop text-disabledText">Status:</span>
              <div className="relative">
                <select className="appearance-none bg-background border border-outline rounded-button px-4 py-2 pr-8 text-body-sm-desktop text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="all">All </option>
                  <option value="draft">Draft</option>
                  <option value="submitted">Submitted</option>
                  <option value="under-review">Under Review</option>
                  <option value="change-request">Change Request</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                  <option value="in-progress">In Progress</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textSecondary pointer-events-none" size={16} />
              </div>
            </div>

            {/* Right: Create New Proposal Button */}
            <Button variant="primary" size="md">
              Create New Proposal
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-disableBg rounded-t-card">
                <tr className="border-b border-outline">
                  <th className="text-left p-3 text-body-sm-desktop text-textSecondary font-medium">
                    Project ID
                  </th>
                  <th className="text-left p-3 text-body-sm-desktop text-textSecondary font-medium">
                    Project Name/Description
                  </th>
                  <th className="text-left p-3 text-body-sm-desktop text-textSecondary font-medium">
                    Services
                  </th>
                  <th className="text-left p-3 text-body-sm-desktop text-textSecondary font-medium">
                    Submission Date
                  </th>
                  <th className="text-left p-3 text-body-sm-desktop text-textSecondary font-medium">
                    Budget
                  </th>
                  <th className="text-left p-3 text-body-sm-desktop text-textSecondary font-medium">
                    Status
                  </th>
                  <th className="text-left p-3 text-body-sm-desktop text-textSecondary font-medium">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {proposals.map((proposal) => (
                  <tr key={proposal.id} className="border-b border-divider hover:bg-secondaryBg/50 transition-colors">
                    <td className="p-3 text-body-sm-desktop text-textPrimary font-medium">
                      {proposal.id}
                    </td>
                    <td className="p-3">
                      <div>
                        <div className="text-body-sm-desktop text-textPrimary font-medium">
                          {proposal.name}
                        </div>
                        <div className="text-xs text-textSecondary">
                          {proposal.description}
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-body-sm-desktop text-textSecondary">
                      {proposal.service}
                    </td>
                    <td className="p-3 text-body-sm-desktop text-textSecondary">
                      {proposal.submissionDate}
                    </td>
                    <td className="p-3 text-body-sm-desktop text-textPrimary font-semibold">
                      {proposal.budget}
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(proposal.status)}`}>
                        {proposal.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <button className="p-1 hover:bg-divider rounded transition-colors" title="View">
                          <MoreVertical size={16} className="text-textSecondary" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export { ProposalPage };