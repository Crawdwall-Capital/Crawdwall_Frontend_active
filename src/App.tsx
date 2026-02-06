import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import Login from "./pages/loginPage";
import { SignupPage } from "./pages/SignupPage";
import ForgotPassword from "./pages/ForgotPasswordPage";
import VerifyPasswordOtp from "./pages/VerifyPasswordOtpPage";
import ResetPassword from "./pages/ResetPasswordPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";

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
        <Route path="/dashboard/proposals" element={<DashboardPage />} />
        <Route path="/dashboard/kyc" element={<DashboardPage />} />
        <Route path="/dashboard/settings" element={<DashboardPage />} />
        <Route path="/dashboard/profile" element={<DashboardPage />} />
      </Routes>
    </main>
  );
}

export default App;