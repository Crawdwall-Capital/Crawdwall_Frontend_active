import React, { useState, useEffect } from "react";
import { Shield, ChevronUp, Medal, Building, FileText, CheckCircle, Mail, Phone, Globe, Upload, Eye, ChevronDown, Lock, UserCog, ShieldCheck, BadgeCheck, X, Plus, Facebook, Instagram, Twitter, Linkedin, Youtube, User, Calendar, Target, Award, Users, DollarSign, FileCheck, Home, Building2, CreditCard, Trash2, FileUp, FileSignature, CalendarDays } from "lucide-react";




const DeclarationsConsentForm = ({ onCompletionChange }: { onCompletionChange: (percent: number) => void }) => {
  const [declarations, setDeclarations] = useState({
    infoAccurate: false,
    backgroundChecks: false,
    termsAndConditions: false
  });

  const [signature, setSignature] = useState("");
  const [signatureDate, setSignatureDate] = useState("");

  const handleDeclarationChange = (key: keyof typeof declarations) => {
    setDeclarations(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const allDeclarationsAccepted = () => {
    return declarations.infoAccurate && declarations.backgroundChecks && declarations.termsAndConditions;
  };

  // Calculate completion percentage for this form
  useEffect(() => {
    const totalFields = 5; // 3 declarations + signature + date
    let completedFields = 0;
    
    if (declarations.infoAccurate) completedFields++;
    if (declarations.backgroundChecks) completedFields++;
    if (declarations.termsAndConditions) completedFields++;
    if (signature.trim()) completedFields++;
    if (signatureDate) completedFields++;
    
    const completionPercent = Math.round((completedFields / totalFields) * 100);
    onCompletionChange(completionPercent);
  }, [declarations, signature, signatureDate, onCompletionChange]);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <BadgeCheck className="text-primary" size={24} />
        <div>
          <h4 className="text-body-lg-desktop text-textPrimary font-medium">
            Declarations & Consent
          </h4>
          <p className="text-body-sm-desktop text-textSecondary">
            Review and accept the declarations to complete your verification
          </p>
        </div>
      </div>

      {/* Declarations Checklist */}
      <div className="space-y-6">
        {/* Declaration 1 */}
        <div className={`p-4 border rounded-card transition-all ${declarations.infoAccurate ? 'border-primary bg-primary/5' : 'border-outline'}`}>
          <label className="flex items-start gap-3 cursor-pointer">
            <div className="flex-shrink-0 mt-1">
              <input
                type="checkbox"
                checked={declarations.infoAccurate}
                onChange={() => handleDeclarationChange('infoAccurate')}
                className="w-5 h-5 accent-primary rounded border-outline focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
            </div>
            <div className="flex-1">
              <p className="text-body-md-desktop text-textPrimary font-medium mb-1">
                I confirm that all provided information is accurate and reflects the current legal standing of the entity.
              </p>
              <p className="text-sm text-textSecondary">
                By checking this box, you certify that all company details, leadership information, track records, and uploaded documents are truthful, complete, and up-to-date.
              </p>
            </div>
          </label>
        </div>

        {/* Declaration 2 */}
        <div className={`p-4 border rounded-card transition-all ${declarations.backgroundChecks ? 'border-primary bg-primary/5' : 'border-outline'}`}>
          <label className="flex items-start gap-3 cursor-pointer">
            <div className="flex-shrink-0 mt-1">
              <input
                type="checkbox"
                checked={declarations.backgroundChecks}
                onChange={() => handleDeclarationChange('backgroundChecks')}
                className="w-5 h-5 accent-primary rounded border-outline focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
            </div>
            <div className="flex-1">
              <p className="text-body-md-desktop text-textPrimary font-medium mb-1">
                I authorize Crawdwall Capital to perform institutional background checks through verified third-party providers.
              </p>
              <p className="text-sm text-textSecondary">
                You grant Crawdwall Capital permission to verify your company information through authorized third-party verification services to confirm the authenticity of provided details.
              </p>
            </div>
          </label>
        </div>

        {/* Declaration 3 */}
        <div className={`p-4 border rounded-card transition-all ${declarations.termsAndConditions ? 'border-primary bg-primary/5' : 'border-outline'}`}>
          <label className="flex items-start gap-3 cursor-pointer">
            <div className="flex-shrink-0 mt-1">
              <input
                type="checkbox"
                checked={declarations.termsAndConditions}
                onChange={() => handleDeclarationChange('termsAndConditions')}
                className="w-5 h-5 accent-primary rounded border-outline focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
            </div>
            <div className="flex-1">
              <p className="text-body-md-desktop text-textPrimary font-medium mb-1">
                I agree to Crawdwall Capital's Terms and Conditions.
              </p>
              <p className="text-sm text-textSecondary">
                You accept all terms, conditions, and policies governing the use of Crawdwall Capital's platform and services. <a href="#" className="text-primary hover:underline">View Terms and Conditions</a>
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Digital Signature and Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Digital Signature */}
        <div>
          <label className="block text-body-sm-desktop text-textSecondary mb-2">
            Digital Signature *
          </label>
          <div className="relative">
            <FileSignature className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
            <input
              type="text"
              className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Type your full name as signature"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              required
              disabled={!allDeclarationsAccepted()}
            />
          </div>
          <p className="text-xs text-textSecondary mt-2">
            Enter your full legal name as your digital signature
          </p>
        </div>

        {/* Date */}
        <div>
          <label className="block text-body-sm-desktop text-textSecondary mb-2">
            Date *
          </label>
          <div className="relative">
            <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
            <input
              type="date"
              className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
              value={signatureDate}
              onChange={(e) => setSignatureDate(e.target.value)}
              required
              disabled={!allDeclarationsAccepted()}
            />
          </div>
          <p className="text-xs text-textSecondary mt-2">
            Today's date or date of signing
          </p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="p-4 border border-outline rounded-card bg-primary/5">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-body-md-desktop text-textPrimary font-medium">
            Verification Summary
          </h5>
          <div className={`px-3 py-1 rounded-full ${allDeclarationsAccepted() && signature && signatureDate ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
            {allDeclarationsAccepted() && signature && signatureDate ? 'Ready to Submit' : 'Pending Declarations'}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-textSecondary">Declarations Accepted:</span>
            <span className={`text-sm font-medium ${declarations.infoAccurate && declarations.backgroundChecks && declarations.termsAndConditions ? 'text-success' : 'text-warning'}`}>
              {Object.values(declarations).filter(Boolean).length} of 3
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-textSecondary">Digital Signature:</span>
            <span className={`text-sm font-medium ${signature ? 'text-success' : 'text-warning'}`}>
              {signature ? '✓ Provided' : 'Pending'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-textSecondary">Date:</span>
            <span className={`text-sm font-medium ${signatureDate ? 'text-success' : 'text-warning'}`}>
              {signatureDate ? '✓ Provided' : 'Pending'}
            </span>
          </div>
        </div>
      </div>

      {/* Final Note */}
      <div className="p-4 border border-outline rounded-card">
        <p className="text-sm text-textSecondary">
          <strong>Important:</strong> By submitting this verification form, you acknowledge that all information provided is accurate to the best of your knowledge. Any misrepresentation may result in suspension or termination of your account and potential legal action.
        </p>
      </div>
    </div>
  );
};


export { DeclarationsConsentForm };