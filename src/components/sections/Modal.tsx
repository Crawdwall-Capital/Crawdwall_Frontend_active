import React from "react";
import { Button } from "@/components/ui/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText: string;
  onButtonClick: () => void;
  icon?: React.ReactNode;
}

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  buttonText, 
  onButtonClick, 
  icon 
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`
        relative bg-card rounded-card shadow-card-hover p-8 mx-4 w-full max-w-md
        transform transition-all duration-300 ease-out
        ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'}
      `}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-textSecondary hover:text-textPrimary transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Icon */}
          {icon && (
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center text-success">
                {icon}
              </div>
            </div>
          )}

          {/* Title */}
          <h2 className="text-h3-mobile md:text-h3-desktop text-textPrimary mb-4">
            {title}
          </h2>

          {/* Message */}
          <p className="text-body-md-mobile md:text-body-md-desktop text-textSecondary mb-8">
            {message}
          </p>

          {/* Action Button */}
          <Button 
            variant="primary" 
            size="md" 
            className="w-full"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Modal };