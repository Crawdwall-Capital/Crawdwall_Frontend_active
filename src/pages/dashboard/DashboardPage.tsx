import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { KYCCard } from "@/components/dashboard/KYCCard";
import {
  Wallet,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle,
  User,
  ArrowRight, // Changed from MoveRight to ArrowRight since you're using ArrowRight

} from "lucide-react";

const DashboardPage = () => {
  const navigate = useNavigate();

  // Sample data for ongoing projects
  const ongoingProjects = [
    {
      id: "PRJ001",
      name: "Tech Conference 2024",
      description: "Annual technology conference in Lagos",
      service: "Event Financing",
      status: "In Progress",
      budget: "N50,000"
    },
    {
      id: "PRJ002",
      name: "Music Festival",
      description: "3-day music festival in Abuja",
      service: "Fundraising",
      status: "Under Review",
      budget: "N120,000"
    },
    {
      id: "PRJ003",
      name: "Business Summit",
      description: "Corporate networking event",
      service: "Event Financing",
      status: "Approved",
      budget: "N75,000"
    }
  ];

  const tasks = [
    {
      id: 1,
      title: "Complete KYC Verification",
      description: "Your account remains limited until verification is submitted",
      priority: "low",
      link: "start"
    },
    {
      id: 2,
      title: "Invite team members",
      description: "Add your accounting team for easy reporting access",
      priority: "optional",
      link: "invite"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'text-success bg-success/10';
      case 'in progress': return 'text-warning bg-warning/10';
      case 'under review': return 'text-neutral bg-neutral/10';
      default: return 'text-textSecondary bg-secondaryBg';
    }
  };

  const getTaskStatusIcon = (priority: string) => {
    switch (priority) {
      case 'low': return <CheckCircle size={30} className="text-success" />;
      case 'medium': return <Clock size={30} className="text-warning" />;
      case 'high': return <AlertCircle size={30} className="text-error" />;
      default: return <User size={30} className="text-textSecondary" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-error';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-textSecondary';
    }
  };

  return (
    <DashboardLayout pageTitle="Dashboard">
      <div>
        <p className="text-body-md-mobile md:text-body-md-desktop text-primary mb-6" style={{ fontWeight: 600 }}>
          Financial Services
        </p>

        {/* Top Row - Dashboard Cards and KYC Card */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Dashboard Cards Container */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Dashboard Card 1 */}
            <DashboardCard
              icon={Wallet}
              title="Financing"
              summary="Receive direct capital from Crawdwall with structured repayment or revenue sharing."
              lockedButtonText="Complete KYC to access"
              unlockedButtonText="Apply for Financing"
              isLocked={false}
              navigateTo="/dashboard/financeServices/finanace"
            />

            {/* Dashboard Card 2 */}
            <DashboardCard
              icon={TrendingUp}
              title="Fundraising"
              summary="Raise capital from external investors with Crawdwall structuring and oversight."
              lockedButtonText="Complete KYC to access"
              unlockedButtonText="Apply for Fundraising"
              isLocked={false}
              navigateTo="/dashboard/proposals"
            />
          </div>

          {/* KYC Verification Card */}
          <div className="w-full lg:w-[290px] flex-shrink-0">
            <KYCCard
              title="Level 1 Verification"
              percentage={10}
              summary="Verify your company identity to unlock full fundraising and investment features"
              completeSummary="Our compliance team is currently reviewing your submission. Estimated time: 24-48hours"
              buttonText="Start Verification"
              onButtonClick={() => navigate('/dashboard/kyc')}
            />
          </div>
        </div>

        {/* Bottom Row - Ongoing Projects and Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
          {/* Ongoing Projects Section */}
          <div className="lg:col-span-2 bg-card border border-outline rounded-card p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-h3-mobile md:text-h3-desktop text-textPrimary">
                Ongoing Projects
              </h3>
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
                          Name/Description
                        </th>
                        <th className="px-3 py-3 text-left text-body-sm-desktop text-textSecondary font-medium whitespace-nowrap">
                          Service
                        </th>
                        <th className="px-3 py-3 text-left text-body-sm-desktop text-textSecondary font-medium whitespace-nowrap">
                          Status
                        </th>
                        <th className="px-3 py-3 text-left text-body-sm-desktop text-textSecondary font-medium whitespace-nowrap">
                          Budget
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-card divide-y divide-divider">
                      {ongoingProjects.map((project) => (
                        <tr key={project.id} className="hover:bg-secondaryBg/50 transition-colors">
                          <td className="px-3 py-3 text-body-sm-desktop text-textPrimary font-medium whitespace-nowrap">
                            {project.id}
                          </td>
                          <td className="px-3 py-3 min-w-[200px]">
                            <div>
                              <div className="text-body-sm-desktop text-textPrimary font-medium">
                                {project.name}
                              </div>
                              <div className="text-xs text-textSecondary">
                                {project.description}
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-3 text-body-sm-desktop text-textSecondary whitespace-nowrap">
                            {project.service}
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                          </td>
                          <td className="px-3 py-3 text-body-sm-desktop text-textPrimary font-semibold whitespace-nowrap">
                            {project.budget}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Tasks Section */}
          <div className="lg:col-span-1 bg-card border border-outline rounded-card p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-h3-mobile md:text-h3-desktop text-textPrimary">
                Tasks
              </h3>
            </div>

            <div className="space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-start gap-3 p-3 border border-divider rounded-button">
                  {/* Profile Icon (left side) */}
                  <div className="flex-shrink-0 mt-3">
                    {getTaskStatusIcon(task.priority)}
                  </div>

                  {/* Main Content - takes up remaining space */}
                  <div className="flex-1 min-w-0">
                    {/* Priority Badge */}
                    <p className={`text-body-sm-desktop ${getPriorityColor(task.priority)}`} style={{ fontWeight: 500 }}>
                      {task.priority.toUpperCase()}
                    </p>

                    {/* Task Title */}
                    <div className="text-button-mobile md:text-button-desktop text-textPrimary font-medium mt-1">
                      {task.title}
                    </div>

                    {/* Task Description */}
                    <div className="text-xs text-textSecondary mt-1">
                      {task.description}
                    </div>

                    {/* Optional: Add link/action button */}
                    {task.link && (
                      <button className="text-primary text-body-sm-desktop hover:underline mt-1 flex items-center gap-1">
                        {task.link === 'start' ? 'Start Now' : 'Invite Now'}
                        <ArrowRight size={14} /> {/* Changed from MoveRight to ArrowRight */}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export { DashboardPage };