import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { KYCCard } from "@/components/dashboard/KYCCard";
import {
  DollarSign,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle,
  User,
  ArrowRight, // Changed from MoveRight to ArrowRight since you're using ArrowRight
  MoveRight // Added if you want to use MoveRight
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
      budget: "$50,000"
    },
    {
      id: "PRJ002", 
      name: "Music Festival",
      description: "3-day music festival in Abuja",
      service: "Fundraising",
      status: "Under Review",
      budget: "$120,000"
    },
    {
      id: "PRJ003",
      name: "Business Summit",
      description: "Corporate networking event",
      service: "Event Financing", 
      status: "Approved",
      budget: "$75,000"
    }
  ];

  const tasks = [
    {
      id: 1,
      title: "Complete KYC Verification",
      description: "Your account remains limited until verification is submitted",
      priority: "high",
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
      case 'completed': return <CheckCircle size={30} className="text-success" />;
      case 'in-progress': return <Clock size={30} className="text-warning" />;
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
        <p className="text-body-md-desktop text-primary mb-6" style={{ fontWeight: 600 }}>
          Financial Services
        </p>
        
        {/* Top Row - Dashboard Cards and KYC Card */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Dashboard Cards Container */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dashboard Card 1 */}
            <DashboardCard
              icon={DollarSign}
              title="Financing"
              summary="Receive direct capital from Crawdwall with structured repayment or revenue sharing."
              buttonText="Complete KYC to access"
              isLocked={true}
            />

            {/* Dashboard Card 2 */}
            <DashboardCard
              icon={TrendingUp}
              title="Fundraising"
              summary="Raise capital from external investors with Crawdwall structuring and oversight."
              buttonText="Complete KYC to access"
              isLocked={true}
            />
          </div>

          {/* KYC Verification Card */}
          <div className="w-full lg:w-[290px] flex-shrink-0">
            <KYCCard
              title="Level 1 Verification"
              percentage={6}
              summary="Verify your company identity to unlock full fundraising and investment features"
              buttonText="Start Verification"
              onButtonClick={() => navigate('/dashboard/kyc')}
            />
          </div>
        </div>

        {/* Bottom Row - Ongoing Projects and Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Ongoing Projects Section */}
          <div className="lg:col-span-2 bg-card border border-outline rounded-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-h3-mobile text-textPrimary">
                Ongoing Projects
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-disableBg">
                  <tr className="border-b border-outline">
                    <th className="text-left p-3 text-body-sm-desktop text-textSecondary font-medium">
                      Project ID
                    </th>
                    <th className="text-left p-3 text-body-sm-desktop text-textSecondary font-medium">
                      Name/Description
                    </th>
                    <th className="text-left p-3 text-body-sm-desktop text-textSecondary font-medium">
                      Service
                    </th>
                    <th className="text-left p-3 text-body-sm-desktop text-textSecondary font-medium">
                      Status
                    </th>
                    <th className="text-left p-3 text-body-sm-desktop text-textSecondary font-medium">
                      Budget
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ongoingProjects.map((project) => (
                    <tr key={project.id} className="border-b border-divider">
                      <td className="p-3 text-body-sm-desktop text-textPrimary font-medium">
                        {project.id}
                      </td>
                      <td className="p-3">
                        <div>
                          <div className="text-body-sm-desktop text-textPrimary font-medium">
                            {project.name}
                          </div>
                          <div className="text-xs text-textSecondary">
                            {project.description}
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-body-sm-desktop text-textSecondary">
                        {project.service}
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="p-3 text-body-sm-desktop text-textPrimary font-semibold">
                        {project.budget}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tasks Section */}
          <div className="lg:col-span-1 bg-card border border-outline rounded-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-h3-mobile text-textPrimary">
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
                  <div className="flex-1">
                    {/* Priority Badge */}
                    <p className={`text-body-sm-desktop ${getPriorityColor(task.priority)}`} style={{ fontWeight: 500 }}>
                      {task.priority.toUpperCase()}
                    </p>
                    
                    {/* Task Title */}
                    <div className="text-button-desktop text-textPrimary font-medium mt-1">
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