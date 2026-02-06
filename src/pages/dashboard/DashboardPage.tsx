import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { KYCCard } from "@/components/dashboard/KYCCard";
import {
  DollarSign,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  Shield,
  Settings,
  User,
  MoveRight 
} from "lucide-react";

const DashboardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine page content based on route
  const getPageContent = () => {
    switch (location.pathname) {
      case '/dashboard/proposals':
        return {
          title: 'Proposals',
          content: <ProposalsContent />
        };
      case '/dashboard/kyc':
        return {
          title: 'KYC Verification',
          content: <KYCContent />
        };
      case '/dashboard/settings':
        return {
          title: 'Settings',
          content: <SettingsContent />
        };
      case '/dashboard/profile':
        return {
          title: 'Profile',
          content: <ProfileContent />
        };
      default:
        return {
          title: 'Dashboard',
          content: <DashboardContent />
        };
    }
  };

  const { title, content } = getPageContent();

  return (
    <DashboardLayout pageTitle={title}>
      {content}
    </DashboardLayout>
  );
};

// Main Dashboard Content
const DashboardContent = () => {
  const navigate = useNavigate();
  // Sample data for ongoing projects
  const ongoingProjects = [
    {
      id: "PRJ001",
      name: "Tech Conference 2024",
      description: "Annual technology conference in Lagos",
      service: "Event Financing",
      status: "SUBMITTED",
      budget: "$50,000"
    },
    {
      id: "PRJ002",
      name: "Music Festival",
      description: "3-day music festival in Abuja",
      service: "Fundraising",
      status: "IN REVIEW",
      budget: "$120,000"
    },
    {
      id: "PRJ003",
      name: "Business Summit",
      description: "Corporate networking event",
      service: "Event Financing",
      status: "APPROVED",
      budget: "$75,000"
    }
  ];

  // Sample tasks
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
    switch (status) {
      case 'APPROVED': return 'text-success bg-success/10';
      case 'SUBMITTED': return 'text-warning bg-warning/10';
      case 'IN REVIEW': return 'text-neutral bg-neutral/10';
      case 'REJECTED': return 'text-error bg-error/10'
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
    <div>
      <p className="text-body-md-desktop text-primary mb-1" style={{ fontWeight: 600 }}>
        Financial Services
      </p>
      {/* Top Row - Dashboard Cards and KYC Card */}
      <div className="flex flex-col lg:flex-row gap-6 ">
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
            {/*  <button className="text-primary text-body-sm-desktop hover:underline">
              View All
            </button>*/}

          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-disableBg">
                <tr className="border-b border-outline">
                  <th className="text-left p-3  text-body-sm-desktop text-textSecondary font-medium">
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
            {/*<button className="text-primary text-body-sm-desktop hover:underline">
              View All
            </button> */}

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
                  <p className={`text-body-sm-desktop ${getPriorityColor(task.priority)} `} style={{ fontWeight: 500 }}>
                    {task.priority.toUpperCase()}
                  </p>
                  <div className="flex items-center justify-between">
                    {/* Task Title */}
                    <div className="text-button-desktop text-textPrimary font-medium">
                      {task.title}
                    </div>


                  </div>

                  {/* Task Description */}
                  <div className="text-xs text-textSecondary mt-1">
                    {task.description}
                  </div>

                  {/* Optional: Add link/action button */}
                  {task.link && (
  <button className="text-primary text-body-sm-desktop hover:underline mt-1 flex items-center gap-1">
    {task.link === 'start' ? 'Start Now' : 'Invite Now'}
     <MoveRight size={14} />
  </button>
)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Proposals Page Content
const ProposalsContent = () => {
  return (
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
  );
};

// KYC Verification Page Content
const KYCContent = () => {
  return (
    <div className="space-y-6">
      <div className="bg-card border border-outline rounded-card p-8">
        <div className="flex items-center gap-4 mb-6">
          <Shield size={32} className="text-primary" />
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
            <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
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
  );
};

// Settings Page Content
const SettingsContent = () => {
  return (
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
  );
};

// Profile Page Content
const ProfileContent = () => {
  return (
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
  );
};

export { DashboardPage };