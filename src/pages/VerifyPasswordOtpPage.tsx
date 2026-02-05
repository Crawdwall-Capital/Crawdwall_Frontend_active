import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "@/components/sections/Modal";
import FromImage from "@/components/sections/FormImage";

export default function VerifyPasswordOtp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const canSubmit = otp.every(digit => digit !== "") && !loading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setShowSuccessModal(true);
  };

  // Handle navigation to reset password
  const handleContinueToReset = () => {
    setShowSuccessModal(false);
    navigate('/reset-password');
  };

  return (
    <>
      <div className="min-h-screen flex">
        {/* Left Side - Form Image */}
        <div className="hidden lg:flex lg:w-1/2">
          <FromImage />
        </div>

        {/* Right Side - OTP Verification Form */}
        <div className="w-full lg:w-1/2 bg-background flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-lg bg-card rounded-card shadow-lg border border-outline p-8">

            <h1 className="text-h1-mobile md:text-h1-desktop text-textPrimary mb-2">
              Verify Code
            </h1>

            <p className="text-body-md-mobile md:text-body-md-desktop text-textSecondary mb-8">
              Enter the 6-digit verification code we sent to your email address.
            </p>
              
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <p className="text-body-md-mobile md:text-body-md-desktop text-textSecondary mb-4">
                  Verification Code
                </p>
                {/* OTP Input Boxes */}
                <div className="flex gap-3 justify-center mb-6">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        inputRefs.current[index] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-12 text-center text-lg font-semibold border border-outline rounded-button focus-ring"
                      required
                    />
                  ))}
                </div>
              </div>

              {/* Resend Code */}
              <div className="text-center">
                <p className="text-body-sm-desktop text-textSecondary">
                  Didn't receive the code?{" "}
                  <button 
                    type="button"
                    className="text-primary font-medium hover:underline"
                  >
                    Resend Code
                  </button>
                </p>
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
                {loading ? "Verifying..." : "Verify Code"}
              </button>

              <p className="text-center text-body-sm-desktop text-textSecondary">
                Want to try a different email?{" "}
                <button 
                  type="button"
                  onClick={() => navigate('/forgot-password')}
                  className="text-primary font-medium hover:underline"
                >
                  Go Back
                </button>
              </p>

              <p className="text-center text-body-sm-desktop text-neutral">
                Terms and conditions | Privacy policy
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Code Verified!"
        message="Your verification code has been confirmed. You can now proceed to reset your password."
        buttonText="Reset Password"
        onButtonClick={handleContinueToReset}
        icon={
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />
    </>
  );
}