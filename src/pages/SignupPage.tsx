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

  // Password strength logic (0 - 4)
  const getPasswordStrength = () => {
    let strength = 0;
    if (password.length >= 8) strength += 1; // Minimum length
    if (/[a-z]/.test(password)) strength += 1; // Lowercase letter
    if (/[A-Z]/.test(password)) strength += 1; // Uppercase letter
    if (/[0-9]/.test(password)) strength += 1; // Number
    if (/[^A-Za-z0-9]/.test(password)) strength += 1; // Special character
    return Math.min(strength, 4); // Cap at 4
  };

  const strength = getPasswordStrength();
  
  const getStrengthLabel = () => {
    if (password.length === 0) return { text: "Enter a password", color: "text-textSecondary" };
    if (strength === 1) return { text: "Very Weak", color: "text-error" };
    if (strength === 2) return { text: "Weak", color: "text-warning" };
    if (strength === 3) return { text: "Good", color: "text-success" };
    if (strength === 4) return { text: "Strong", color: "text-success" };
    return { text: "Very Weak", color: "text-error" };
  };

  const getBarColor = (barIndex: number) => {
    if (strength >= barIndex) {
      if (strength === 4) return "bg-success";
      if (strength === 3) return "bg-success";
      if (strength === 2) return "bg-warning";
      return "bg-error";
    }
    return "bg-divider";
  };

  const passwordsMatch = password.length > 0 && password === confirmPassword;
  const canSubmit = strength >= 3 && passwordsMatch && agreed && !loading;

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

  const strengthLabel = getStrengthLabel();

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
          <div className="w-full max-w-x1 bg-card rounded-card shadow-lg border border-outline p-12">
            <h1 className="text-h2-mobile md:text-h2-desktop text-textPrimary mb-2">
              Build the future project finance.
            </h1>

            <p className="text-body-md-mobile md:text-body-md-desktop text-textSecondary mb-8">
              Enter your company details to begin onboarding and verification process.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Company Name */}
              <div>
                <p className="text-body-md-mobile md:text-body-md-desktop text-textSecondary mb-2">
                  Company Name
                </p>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full border border-outline rounded-button px-4 py-3 focus-ring"
                  required
                />
              </div>

              {/* Company Email */}
              <div>
                <p className="text-body-md-mobile md:text-body-md-desktop text-black mb-2">
                  Company Email
                </p>
                <input
                  type="email"
                  placeholder="Company email"
                  className="w-full border border-outline rounded-button px-4 py-3 focus-ring"
                  required
                />
              </div>
              
              {/* Password */}
              <div>
                <p className="text-body-md-mobile md:text-body-md-desktop text-black mb-2">
                  Password
                </p>
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
              </div>

              {/* Password Strength Indicator */}
              {password.length > 0 && (
                <div className="space-y-2">
                  {/* Strength Bars */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((barIndex) => (
                      <div 
                        key={barIndex}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${getBarColor(barIndex)}`}
                      />
                    ))}
                  </div>
                  
                  {/* Strength Label */}
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-medium ${strengthLabel.color}`}>
                      Password Strength: <span className="font-semibold">{strengthLabel.text}</span>
                    </span>
                    <span className="text-xs text-textSecondary">
                      {strength}/4
                    </span>
                  </div>
                </div>
              )}

              {/* Confirm Password */}
              <div>
                <p className="text-body-md-mobile md:text-body-md-desktop text-black mb-2">
                  Confirm Password
                </p>
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
              </div>

              {/* Password Match Indicator */}
              {confirmPassword && !passwordsMatch && (
                <p className="text-sm text-error flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
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
                  ${canSubmit
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
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Success"
        message="You have been logged in succesfully."
        buttonText="Start KYC"
        onButtonClick={handleStartKYC}
      />
    </>
  );
};

export { SignupPage };