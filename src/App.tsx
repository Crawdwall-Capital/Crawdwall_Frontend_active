import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import Login from "./pages/loginPage";
import { SignupPage } from "./pages/SignupPage";
import ForgotPassword from "./pages/ForgotPasswordPage";
import VerifyPasswordOtp from "./pages/VerifyPasswordOtpPage";
import ResetPassword from "./pages/ResetPasswordPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { ProposalPage } from "./pages/dashboard/ProposalPage";
import { KYCVerificationPage } from "./pages/dashboard/KYCVerificationPage";
import { SettingsPage } from "./pages/dashboard/SettingsPage";
import { ProfilePage } from "./pages/dashboard/ProfilePage";

import { FinancingPage } from "./pages/dashboard/financeServices/FinancingPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-password-otp" element={<VerifyPasswordOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/proposals" element={<ProposalPage />} />
        <Route path="/dashboard/kyc" element={<KYCVerificationPage />} />
        <Route path="/dashboard/settings" element={<SettingsPage />} />
        <Route path="/dashboard/profile" element={<ProfilePage />} />
        <Route path="/dashboard/financeServices/finanace" element={<FinancingPage/>} />
      </Routes>
    </main>
  );
}

export default App;