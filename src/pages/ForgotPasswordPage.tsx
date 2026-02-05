import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Removed Modal import since we're not using it anymore
import FromImage from "@/components/sections/FormImage";
import { Navbar } from "@/components/sections/Navbar";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  // Removed showSuccessModal state since we're navigating directly

  const canSubmit = email.length > 0 && !loading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    
    // Navigate directly to OTP page instead of showing modal
    navigate('/verify-password-otp');
  };

  return (
    <>
    <Navbar/>
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
              No worries, we'll send you reset instructions.
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
    </>
  );
}