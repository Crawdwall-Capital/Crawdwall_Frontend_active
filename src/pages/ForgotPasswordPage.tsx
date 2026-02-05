import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "@/components/sections/Modal";
import FromImage from "@/components/sections/FormImage";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const canSubmit = email.length > 0 && !loading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setShowSuccessModal(true);
  };

  // Handle navigation to OTP verification
  const handleContinueToOTP = () => {
    setShowSuccessModal(false);
    navigate('/verify-password-otp');
  };

  return (
    <>
      <div className="min-h-screen flex">
        {/* Left Side - Form Image */}
        <div className="hidden lg:flex lg:w-1/2">
          <FromImage />
        </div>

        {/* Right Side - Forgot Password Form */}
        <div className="w-full lg:w-1/2 bg-background flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-x1 bg-card rounded-card shadow-lg border border-outline p-8">

            <h1 className="text-h1-mobile md:text-h1-desktop text-textPrimary mb-2">
              Forgot Password?
            </h1>

            <p className="text-body-md-mobile md:text-body-md-desktop text-textSecondary mb-8">
              No worries, we’ll send you reset instructions.
            </p>
              
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <p className="text-body-md-mobile md:text-body-md-desktop text-textSecondary mb-2">
                  Company Email
                </p>
                {/* Email */}
                <input
                  type="email"
                  placeholder="Enter your company email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-outline rounded-button px-4 py-3 focus-ring"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!canSubmit}
                className={`w-full rounded-button py-3 text-button-desktop shadow-button transition
                  ${
                    canSubmit
                      ? "bg-primary text-white hover:opacity-90"
                      : "bg-primaryContainer text-onPrimaryContainer cursor-not-allowed"
                  }
                `}
              >
                {loading ? "Sending..." : "Send Verification Code"}
              </button>

              <p className="text-center text-body-sm-desktop text-textSecondary">
                Remember your password?{" "}
                <button 
                  type="button"
                  onClick={() => navigate('/login')}
                  className="text-primary font-medium hover:underline"
                >
                  Back to Login
                </button>
              </p>

              <p className="text-center text-body-sm-desktop text-neutral">
                Terms and conditions | Privacy policy
              </p>
            </form>
          </div>
        </div>
      </div>


      {/* Success Modal 
       {/*
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Verification Code Sent!"
        message="We've sent a 6-digit verification code to your email address. Please check your inbox and enter the code to continue."
        buttonText="Continue"
        onButtonClick={handleContinueToOTP}
        icon={
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        }
      />*/}
    </>
  );
}