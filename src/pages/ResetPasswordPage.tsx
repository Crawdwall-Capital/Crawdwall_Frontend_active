import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Modal } from "@/components/sections/Modal";
import FromImage from "@/components/sections/FormImage";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Password strength (0 - 3)
  const getPasswordStrength = () => {
    let strength = 0;
    if (newPassword.length >= 6) strength += 1;
    if (/[A-Z]/.test(newPassword) && /[0-9]/.test(newPassword)) strength += 1;
    if (/[^A-Za-z0-9]/.test(newPassword) && newPassword.length >= 10) strength += 1;
    return strength;
  };

  const strength = getPasswordStrength();

  const getBarColor = (barIndex: number) => {
    if (strength === 3) return "bg-success";
    if (strength >= barIndex) return "bg-warning";
    return "bg-divider";
  };

  const passwordsMatch = newPassword.length > 0 && newPassword === confirmPassword;
  const canSubmit = strength === 3 && passwordsMatch && !loading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setShowSuccessModal(true);
  };

  // Handle navigation to login
  const handleGoToLogin = () => {
    setShowSuccessModal(false);
    navigate('/login');
  };

  return (
    <>
      <div className="min-h-screen flex">
        {/* Left Side - Form Image */}
        <div className="hidden lg:flex lg:w-1/2">
          <FromImage />
        </div>

        {/* Right Side - Reset Password Form */}
        <div className="w-full lg:w-1/2 bg-background flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-lg bg-card rounded-card shadow-lg border border-outline p-8">

            <h1 className="text-h1-mobile md:text-h1-desktop text-textPrimary mb-2">
              Reset Password
            </h1>

            <p className="text-body-md-mobile md:text-body-md-desktop text-textSecondary mb-8">
              Create a new password for your account. Make sure it's strong and secure.
            </p>
              
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <p className="text-body-md-mobile md:text-body-md-desktop text-textSecondary mb-2">
                  New Password
                </p>
                {/* New Password */}
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border border-outline rounded-button px-4 py-3 focus-ring pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral"
                  >
                    {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Password Strength Indicator */}
              <div className="flex gap-2">
                <div className={`h-1 flex-1 rounded-full transition-colors ${getBarColor(1)}`} />
                <div className={`h-1 flex-1 rounded-full transition-colors ${getBarColor(2)}`} />
                <div className={`h-1 flex-1 rounded-full transition-colors ${getBarColor(3)}`} />
              </div>

              <div>
                <p className="text-body-md-mobile md:text-body-md-desktop text-textSecondary mb-2">
                  Confirm New Password
                </p>
                {/* Confirm Password */}
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border border-outline rounded-button px-4 py-3 focus-ring pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Password Match Indicator */}
              {confirmPassword && !passwordsMatch && (
                <p className="text-sm text-error">
                  Passwords do not match
                </p>
              )}

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
                {loading ? "Resetting..." : "Reset Password"}
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

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Password Reset Successful!"
        message="Your password has been successfully reset. You can now log in with your new password."
        buttonText="Go to Login"
        onButtonClick={handleGoToLogin}
        icon={
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />
    </>
  );
}