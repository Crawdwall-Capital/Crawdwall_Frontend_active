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
        <div className="bg-card border border-outline rounded-card p-4 md:p-6">
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
            <Button variant="primary" size="md" className="w-full md:w-auto">
              Create New Proposal
            </Button>
          </div>

          {/* Table wrapper with horizontal scroll on mobile */}
          <div className="overflow-x-auto -mx-4 md:mx-0">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-divider">
                  <thead className="bg-disableBg">
                    <tr>
                      <th className="px-3 py-3 text-left text-body-sm-desktop text-textSecondary font-medium whitespace-nowrap">
                        Project ID
                      </th>
                      <th className="px-3 py-3 text-left text-body-sm-desktop text-textSecondary font-medium whitespace-nowrap">
                        Project Name/Description
                      </th>
                      <th className="px-3 py-3 text-left text-body-sm-desktop text-textSecondary font-medium whitespace-nowrap">
                        Services
                      </th>
                      <th className="px-3 py-3 text-left text-body-sm-desktop text-textSecondary font-medium whitespace-nowrap">
                        Submission Date
                      </th>
                      <th className="px-3 py-3 text-left text-body-sm-desktop text-textSecondary font-medium whitespace-nowrap">
                        Budget
                      </th>
                      <th className="px-3 py-3 text-left text-body-sm-desktop text-textSecondary font-medium whitespace-nowrap">
                        Status
                      </th>
                      <th className="px-3 py-3 text-left text-body-sm-desktop text-textSecondary font-medium whitespace-nowrap">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-card divide-y divide-divider">
                    {proposals.map((proposal) => (
                      <tr key={proposal.id} className="hover:bg-secondaryBg/50 transition-colors">
                        <td className="px-3 py-3 text-body-sm-desktop text-textPrimary font-medium whitespace-nowrap">
                          {proposal.id}
                        </td>
                        <td className="px-3 py-3 min-w-[200px]">
                          <div>
                            <div className="text-body-sm-desktop text-textPrimary font-medium">
                              {proposal.name}
                            </div>
                            <div className="text-xs text-textSecondary">
                              {proposal.description}
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3 text-body-sm-desktop text-textSecondary whitespace-nowrap">
                          {proposal.service}
                        </td>
                        <td className="px-3 py-3 text-body-sm-desktop text-textSecondary whitespace-nowrap">
                          {proposal.submissionDate}
                        </td>
                        <td className="px-3 py-3 text-body-sm-desktop text-textPrimary font-semibold whitespace-nowrap">
                          {proposal.budget}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(proposal.status)}`}>
                            {proposal.status}
                          </span>
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap">
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
        </div>
      </div>
    </DashboardLayout>
  );
};

export { ProposalPage };