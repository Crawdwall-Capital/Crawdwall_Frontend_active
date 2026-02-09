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
    

      {/* Declarations Checklist */}
      <div className="space-y-6">
        {/* Declaration 1 */}
        <div className={`p-4 border-none rounded-card transition-all ${declarations.infoAccurate ? 'border-primary bg-primary/5' : 'border-outline'}`}>
          <label className="flex items-start gap-3 cursor-pointer">
            <div className="flex-shrink-0 mt-1">
              <input
                type="checkbox"
                checked={declarations.infoAccurate}
                onChange={() => handleDeclarationChange('infoAccurate')}
                className="flex items-start gap-3 text-body-sm-desktop text-textSecondary"
              />
            </div>
            <div className="flex-1">
              <p className="text-button-desktop text-textPrimary  mb-1" style={{ fontWeight: 400 }}>
                I confirm that all provided information is accurate and reflects the current legal standing of the entity.
              </p>
              
            </div>
          </label>
        </div>

        {/* Declaration 2 */}
        <div className={`p-4 border-none rounded-card transition-all ${declarations.backgroundChecks ? 'border-primary bg-primary/5' : 'border-outline'}`}>
          <label className="flex items-start gap-3 cursor-pointer">
            <div className="flex-shrink-0 mt-1">
              <input
                type="checkbox"
                checked={declarations.backgroundChecks}
                onChange={() => handleDeclarationChange('backgroundChecks')}
                className="flex items-start gap-3 text-body-sm-desktop text-textSecondary"
              />
            </div>
            <div className="flex-1">
              <p className="text-button-desktop text-textPrimary  mb-1" style={{ fontWeight: 400 }}>
                I authorize Crawdwall Capital to perform institutional background checks through verified third-party providers.
              </p>
              
            </div>
          </label>
        </div>

        {/* Declaration 3 */}
        <div className={`p-4 border-none rounded-card transition-all ${declarations.termsAndConditions ? 'border-primary bg-primary/5' : 'border-outline'}`}>
          <label className="flex items-start gap-3 cursor-pointer">
            <div className="flex-shrink-0 mt-1">
              <input
                type="checkbox"
                checked={declarations.termsAndConditions}
                onChange={() => handleDeclarationChange('termsAndConditions')}
                className="flex items-start gap-3 text-body-sm-desktop text-textSecondary"
              />
            </div>
            <div className="flex-1">
              <p className="text-button-desktop text-textPrimary  mb-1" style={{ fontWeight: 400 }}>
                I agree to Crawdwall Capital's  <span className="text-primary">Terms and Conditions.</span>
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

      
      
    </div>
  );
};


export { DeclarationsConsentForm };