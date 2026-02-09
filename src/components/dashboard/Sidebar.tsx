import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Shield, 
  Settings, 
  User,
  X
} from "lucide-react";
import { forceNavigate, safeNavigate } from "@/lib/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: LayoutDashboard, 
      path: '/dashboard' 
    },
    { 
      id: 'proposals', 
      label: 'Proposals', 
      icon: FileText, 
      path: '/dashboard/proposals' 
    },
    { 
      id: 'kyc', 
      label: 'Verification (KYC)', 
      icon: Shield, 
      path: '/dashboard/kyc' 
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: Settings, 
      path: '/dashboard/settings' 
    },
    { 
      id: 'profile', 
      label: 'Profile', 
      icon: User, 
      path: '/dashboard/profile' 
    },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavigation = (path: string) => {
    safeNavigate(navigate, path, location.pathname);
    onClose(); // Close sidebar on mobile after navigation
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-secondary h-screen flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo and Close Button */}
        <div className="p-6 border-outline flex items-center justify-between">
          <img 
            src="/images/whiteLogo.png" 
            alt="Crawdwall Logo" 
            className="h-10 w-auto"
          />
          {/* Close button - only visible on mobile */}
          <button
            onClick={onClose}
            className="lg:hidden text-white hover:bg-secondaryBg/20 p-2 rounded-button"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <p className="text-white p-2 text-body-sm-desktop">
            MAIN MENU
          </p>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => forceNavigate(item.path)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-button text-left transition-colors
                      ${active 
                        ? 'bg-primaryContainer text-black' 
                        : 'text-white hover:bg-secondaryBg hover:text-textPrimary'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span className="text-body-md-desktop">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export { Sidebar };