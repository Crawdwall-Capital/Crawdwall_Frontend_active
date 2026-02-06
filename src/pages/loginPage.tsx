import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Modal } from "@/components/sections/Modal";
import { Navbar } from "@/components/sections/Navbar";
import FromImage from "@/components/sections/FormImage";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const canSubmit = email.length > 0 && password.length > 0 && !loading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setShowSuccessModal(true);
  };

  // Handle dashboard navigation
  const handleGoToDashboard = () => {
    setShowSuccessModal(false);
    navigate('/dashboard');
  };

  return (
    <>
    <Navbar/>
      <div className="min-h-screen flex">
        {/* Left Side - Form Image */}
        <div className="hidden lg:flex lg:w-1/2">
          <FromImage />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 bg-background flex items-center justify-center px-8 py-8">
          <div className="w-full max-w-x1 bg-card rounded-card shadow-lg border border-outline p-8">

            <h1 className="text-h1-mobile md:text-h2-desktop text-textPrimary mb-2">
              Welcome back !
            </h1>

            <p className="text-body-md-mobile md:text-body-md-desktop text-textSecondary mb-8">
              Please enter your credentials to access dashboard
            </p>
              
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <p className="text-body-md-mobile md:text-body-sm-desktop text-black mb-2">
                  Company Email
                </p>
                {/* Email */}
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-outline rounded-button px-4 py-3 focus-ring"
                  required
                />
              </div>

              <div>
                <p className="text-body-md-mobile md:text-body-sm-desktop text-black mb-2">
                  Password
                </p>
                {/* Password */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
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

              {/* Forgot Password */}
              <div className="flex justify-between">
                <label className="flex items-start gap-3 text-body-sm-desktop text-black">
                  <input
                    type="checkbox"
                    className="mt-1 accent-primary"
                  />
                  <span>
                    Remember Password
                  </span>
                </label>
             
                <button 
                  type="button"
                  onClick={() => navigate('/forgot-password')}
                  className="text-primary font-medium text-body-sm-desktop hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!canSubmit}
                className={`w-full rounded-button py-3 text-button-desktop shadow-button transition
                  ${
                    canSubmit
                      ? "bg-primary text-white hover:opacity-90"
                      : "bg-primaryContainer text-white cursor-not-allowed"
                  }
                `}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>

              <p className="text-center text-body-sm-desktop text-textSecondary">
                Don't have an account?{" "}
                <button 
                  type="button"
                  onClick={() => navigate('/signup')}
                  className="text-primary font-medium hover:underline"
                >
                  Sign up
                </button>
              </p>

              <p className="text-center text-body-sm-desktop text-neutral hover">
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
        title="Welcome Back!"
        message="You have successfully signed in to your Crawdwall account. Access your dashboard to manage your projects and funding."
        buttonText="Go to Dashboard"
        onButtonClick={handleGoToDashboard}
      />
    </>
  );
}