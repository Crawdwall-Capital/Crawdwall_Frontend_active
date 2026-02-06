import React from "react";
import { Bell, MessageCircle, User  } from "lucide-react";

interface DashboardNavbarProps {
  pageTitle: string;
}

const DashboardNavbar = ({ pageTitle }: DashboardNavbarProps) => {
  return (
    <div className="bg-card  px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Page Title */}
        <div>
          <h1 className="text-h3-mobile md:text-h3-desktop text-textPrimary" style={{ fontWeight: 700 }}>
            {pageTitle}
          </h1>
        </div>

        {/* Right Side - Icons and Profile */}
        <div className="flex items-center gap-4">
          {/* Message Icon */}
          <button className="p-2 text-textSecondary hover:text-textPrimary hover:bg-secondaryBg rounded-button transition-colors">
            <MessageCircle size={20} />
          </button>

          {/* Notification Icon */}
          <button className="p-2 text-textSecondary hover:text-textPrimary hover:bg-secondaryBg rounded-button transition-colors relative">
            <Bell size={20} />
            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full"></span>
          </button>

          {/* Profile Picture */}
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
            <User size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashboardNavbar };