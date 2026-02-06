import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Shield, 
  Settings, 
  User 
} from "lucide-react";

const Sidebar = () => {
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
      label: 'KYC Verification', 
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

  return (
    <div className="w-64 bg-card h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6  border-outline flex items-center justify-center">
        <img 
          src="/images/CW1.png" 
          alt="Crawdwall Logo" 
          className="h-10 w-auto"
        />
      </div>

      
      {/* Navigation */}
      <nav className="flex-1 p-4">
        <p className="text-disabledText p-2 text-body-sm-desktop">
        MAIN MENU
      </p>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-button text-left transition-colors
                    ${active 
                      ? 'bg-primaryContainer text-black' 
                      : 'text-textSecondary hover:bg-secondaryBg hover:text-textPrimary '
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
  );
};

export { Sidebar };