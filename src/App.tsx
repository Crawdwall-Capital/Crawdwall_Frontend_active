import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import Login from "./pages/loginPage";
import { SignupPage } from "./pages/SignupPage";
import ForgotPassword from "./pages/ForgotPasswordPage";
import VerifyPasswordOtp from "./pages/VerifyPasswordOtpPage";
import ResetPassword from "./pages/ResetPasswordPage";

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
      </Routes>
    </main>
  );
}

export default App;