import React, { useState, useEffect } from "react";
import { Shield, ChevronUp, Medal, Building, FileText, CheckCircle, Mail, Phone, Globe, Upload, Eye, ChevronDown, Lock, UserCog, ShieldCheck, BadgeCheck, X, Plus, Facebook, Instagram, Twitter, Linkedin, Youtube, User, Calendar, Target, Award, Users, DollarSign, FileCheck, Home, Building2, CreditCard, Trash2, FileUp, FileSignature, CalendarDays } from "lucide-react";

const CompanyProfileForm = ({ onCompletionChange }: { onCompletionChange: (percent: number) => void }) => {
  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [website, setWebsite] = useState("");
  const [socialLinks, setSocialLinks] = useState<Array<{ platform: string; url: string }>>([
    { platform: "", url: "" }
  ]);
  const [companyEmail, setCompanyEmail] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState<Array<{ countryCode: string; number: string; label?: string }>>([
    { countryCode: "+234", number: "", label: "" }
  ]);

  const companyTypes = [
    "Private Limited Company (LTD)",
    "Public Limited Company (PLC)",
    "Limited Liability Partnership (LLP)",
    "Sole Proprietorship",
    "Partnership",
    "Non-Profit Organization",
    "Government Agency",
    "Educational Institution",
    "Startup",
    "Other"
  ];

  const socialPlatforms = [
    { value: "facebook", label: "Facebook", icon: Facebook },
    { value: "instagram", label: "Instagram", icon: Instagram },
    { value: "twitter", label: "Twitter/X", icon: Twitter },
    { value: "linkedin", label: "LinkedIn", icon: Linkedin },
    { value: "youtube", label: "YouTube", icon: Youtube },
    { value: "tiktok", label: "TikTok", icon: () => <span className="text-sm">TikTok</span> },
    { value: "other", label: "Other", icon: Globe }
  ];

  const countryCodes = [
    { code: "+234", country: "Nigeria", flag: "🇳🇬" },
    { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+233", country: "Ghana", flag: "🇬🇭" },
    { code: "+254", country: "Kenya", flag: "🇰🇪" },
    { code: "+27", country: "South Africa", flag: "🇿🇦" },
    { code: "+91", country: "India", flag: "🇮🇳" },
    { code: "+86", country: "China", flag: "🇨🇳" },
    { code: "+33", country: "France", flag: "🇫🇷" },
    { code: "+49", country: "Germany", flag: "🇩🇪" },
    { code: "+81", country: "Japan", flag: "🇯🇵" },
    { code: "+61", country: "Australia", flag: "🇦🇺" }
  ];

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { platform: "", url: "" }]);
  };

  const removeSocialLink = (index: number) => {
    if (socialLinks.length > 1) {
      setSocialLinks(socialLinks.filter((_, i) => i !== index));
    }
  };

  const updateSocialLink = (index: number, field: keyof typeof socialLinks[0], value: string) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index][field] = value;
    setSocialLinks(updatedLinks);
  };

  const addPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, { countryCode: "+234", number: "", label: "" }]);
  };

  const removePhoneNumber = (index: number) => {
    if (phoneNumbers.length > 1) {
      setPhoneNumbers(phoneNumbers.filter((_, i) => i !== index));
    }
  };

  const updatePhoneNumber = (index: number, field: keyof typeof phoneNumbers[0], value: string) => {
    const updatedNumbers = [...phoneNumbers];
    updatedNumbers[index][field] = value;
    setPhoneNumbers(updatedNumbers);
  };

  // Calculate completion percentage for this form
  useEffect(() => {
    let completedFields = 0;
    const totalFields = 6; // Company Name, Type, Website, Email, Phone Numbers (min 1), Social Links (optional)
    
    if (companyName.trim()) completedFields++;
    if (companyType) completedFields++;
    if (website.trim()) completedFields++;
    if (companyEmail.trim()) completedFields++;
    
    // Check if at least one phone number is filled
    const hasPhoneNumber = phoneNumbers.some(phone => phone.number.trim());
    if (hasPhoneNumber) completedFields++;
    
    // Social links are optional, but we'll count them if filled
    const hasSocialLinks = socialLinks.some(link => link.url.trim());
    if (hasSocialLinks) completedFields++;
    
    const completionPercent = Math.round((completedFields / totalFields) * 100);
    onCompletionChange(completionPercent);
  }, [companyName, companyType, website, companyEmail, phoneNumbers, socialLinks, onCompletionChange]);

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-body-sm-desktop text-textSecondary mb-2">
          Company / Organization Name *
        </label>
        <input
          type="text"
          className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter your company's legal name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-body-sm-desktop text-textSecondary mb-2">
          Company / Organization Type *
        </label>
        <select
          className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
          value={companyType}
          onChange={(e) => setCompanyType(e.target.value)}
          required
        >
          <option value="">Select company type</option>
          {companyTypes.map((type, index) => (
            <option key={index} value={type.toLowerCase().replace(/\s+/g, '-')}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-body-sm-desktop text-textSecondary mb-2">
          Website *
        </label>
        <div className="relative">
          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
          <input
            type="url"
            className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="https://www.yourcompany.com"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="block text-body-sm-desktop text-textSecondary">
            Social Media Links
          </label>
          <button
            type="button"
            onClick={addSocialLink}
            className="flex items-center gap-1 text-primary text-sm hover:underline"
          >
            <Plus size={16} /> Add Link
          </button>
        </div>

        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-48">
                <select
                  className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={link.platform}
                  onChange={(e) => updateSocialLink(index, 'platform', e.target.value)}
                >
                  <option value="">Select platform</option>
                  {socialPlatforms.map((platform) => (
                    <option key={platform.value} value={platform.value}>
                      {platform.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex-1 min-w-0">
                <input
                  type="url"
                  className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="https://"
                  value={link.url}
                  onChange={(e) => updateSocialLink(index, 'url', e.target.value)}
                />
              </div>
              
              <button
                type="button"
                onClick={() => removeSocialLink(index)}
                className="flex-shrink-0 p-3 text-error hover:bg-error/10 rounded-button"
                disabled={socialLinks.length === 1}
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-body-sm-desktop text-textSecondary mb-2">
          Company Email *
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
          <input
            type="email"
            className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="info@company.com"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="block text-body-sm-desktop text-textSecondary">
            Phone Numbers *
          </label>
          <button
            type="button"
            onClick={addPhoneNumber}
            className="flex items-center gap-1 text-primary text-sm hover:underline"
          >
            <Plus size={16} /> Add Number
          </button>
        </div>

        <div className="space-y-4">
          {phoneNumbers.map((phone, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-32">
                <select
                  className="w-full border border-outline rounded-button px-3 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={phone.countryCode}
                  onChange={(e) => updatePhoneNumber(index, 'countryCode', e.target.value)}
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.code}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <input
                  type="tel"
                  className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Phone number"
                  value={phone.number}
                  onChange={(e) => updatePhoneNumber(index, 'number', e.target.value)}
                  required
                />
              </div>
              <div className="w-32">
                <input
                  type="text"
                  className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Label (optional)"
                  value={phone.label}
                  onChange={(e) => updatePhoneNumber(index, 'label', e.target.value)}
                />
              </div>
              <button
                type="button"
                onClick={() => removePhoneNumber(index)}
                className="p-3 text-error hover:bg-error/10 rounded-button"
                disabled={phoneNumbers.length === 1}
              >
                <X size={18} />
              </button>
            </div>
          ))}
          <p className="text-xs text-textSecondary">
            Example labels: Main Office, Support, Sales, HR, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export { CompanyProfileForm };