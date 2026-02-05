import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isSignupPage = location.pathname === '/signup';
  const isLoginPage = location.pathname === '/login';
  const isLandingPage = location.pathname === '/';

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Invest", href: "/invest" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Compliance", href: "/compliance" },
  ];

  return (
    <nav className="bg-blue-50 shadow-md py-4 px-4 md:px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/">
            <img 
              src="/images/CW1.png" 
              alt="Crawdwall Logo" 
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-blue-500 font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          
          <Button variant="secondary" size="md">
            Start Investment
          </Button>

          {isLandingPage && (
            <Button 
              variant="primary" 
              size="md"
              onClick={() => navigate('/signup')}
            >
              Get Funding
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-textSecondary focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-50 py-4 px-4 border-t border-outline">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-500 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="secondary" className="w-full">
                Start Investment
              </Button>
              {isLandingPage && (
                <Button 
                  variant="primary" 
                  className="w-full"
                  onClick={() => navigate('/signup')}
                >
                  Get Funding
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export { Navbar };