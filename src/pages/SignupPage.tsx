import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/sections/Navbar";
import { Modal } from "@/components/sections/Modal";
import FromImage from "@/components/sections/FormImage";

const SignupPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const getPasswordStrength = () => {
    let strength = 0;
    if (password.length >= 6) strength += 1;
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password) && password.length >= 10) strength += 1;
    return strength; // 0 - 3
  };

  const strength = getPasswordStrength();

  const getBarColor = (barIndex: number) => {
    if (strength === 3) return "bg-success";
    if (strength >= barIndex) return "bg-warning";
    return "bg-divider";
  };

  const passwordsMatch = password.length > 0 && password === confirmPassword;

  const canSubmit = strength === 3 && passwordsMatch && agreed && !loading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setShowSuccessModal(true);
  };

  const handleStartKYC = () => {
    setShowSuccessModal(false);
    console.log("Starting KYC process...");
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen flex">
        {/* Left Side - Form Image */}
        <div className="hidden lg:flex lg:w-1/2">
          <FromImage />
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 bg-background flex items-center justify-center px-8 py-8">
          <div className="w-full max-w-content bg-card rounded-card shadow-card p-content-padding shadow-lg border border-outline">
            <h1 className="text-h2-mobile md:text-h2-desktop text-textPrimary mb-2">
              Build the future project finance.
            </h1>

            <p className="text-body-md-mobile md:text-body-md-desktop text-textSecondary mb-8">
              Enter your company details to begin onboarding and verification process.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-outline rounded-button px-4 py-3 focus-ring"
                required
              />

              <input
                type="text"
                placeholder="Company name"
                className="w-full border border-outline rounded-button px-4 py-3 focus-ring"
                required
              />

              <input
                type="email"
                placeholder="Company email"
                className="w-full border border-outline rounded-button px-4 py-3 focus-ring"
                required
              />

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-outline rounded-button px-4 py-3 focus-ring pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Strength bars */}
              <div className="flex gap-2">
                <div className={`h-1 flex-1 rounded-full transition-colors ${getBarColor(1)}`} />
                <div className={`h-1 flex-1 rounded-full transition-colors ${getBarColor(2)}`} />
                <div className={`h-1 flex-1 rounded-full transition-colors ${getBarColor(3)}`} />
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
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

              {confirmPassword && !passwordsMatch && (
                <p className="text-sm text-error">
                  Passwords do not match
                </p>
              )}

              {/* Agreement */}
              <label className="flex items-start gap-3 text-body-sm-desktop text-textSecondary">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 accent-primary"
                  required
                />
                <span>
                  By continuing you agree on Crawdwall terms and acknowledge that
                  verification is required before accessing funding
                </span>
              </label>

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
                {loading ? "Signing up..." : "Sign up"}
              </button>

              <p className="text-center text-body-sm-desktop text-textSecondary">
                Already have an account?{" "}
                <button 
                  type="button"
                  onClick={() => navigate('/login')}
                  className="text-primary font-medium hover:underline"
                >
                  Login
                </button>
              </p>

              <p className="text-center text-body-sm-desktop text-neutral">
                Terms and conditions | Privacy policy
              </p>
            </form>
          </div>
        </div>
      </div> {/* This closes the flex container */}

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Success"
        message="You have been logged in successfully."
        buttonText="Start KYC"
        onButtonClick={handleStartKYC}
        icon={
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />
    </>
  );
};

export { SignupPage };