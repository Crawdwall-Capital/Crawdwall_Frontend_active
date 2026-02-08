import React, { useState, useEffect } from "react";
import { Shield, ChevronUp, Medal, Building, FileText, CheckCircle, Mail, Phone, Globe, Upload, Eye, ChevronDown, Lock, UserCog, ShieldCheck, BadgeCheck, X, Plus, Facebook, Instagram, Twitter, Linkedin, Youtube, User, Calendar, Target, Award, Users, DollarSign, FileCheck, Home, Building2, CreditCard, Trash2, FileUp, FileSignature, CalendarDays } from "lucide-react";

const TrackRecordForm = ({ onCompletionChange }: { onCompletionChange: (percent: number) => void }) => {
  const [focusArea, setFocusArea] = useState<string>("");
  const [yearsExperience, setYearsExperience] = useState<string>("");
  const [projectsDelivered, setProjectsDelivered] = useState<string>("");
  const [projectLinks, setProjectLinks] = useState<string>("");
  const [projectSize, setProjectSize] = useState<string>("");
  const [sponsors, setSponsors] = useState<string>("");

  const focusAreaOptions = [
    "Technology & IT Services",
    "Finance & Banking",
    "Healthcare & Pharmaceuticals",
    "Education & Training",
    "Real Estate & Construction",
    "Agriculture & Agribusiness",
    "Manufacturing",
    "Retail & E-commerce",
    "Energy & Utilities",
    "Transportation & Logistics",
    "Media & Entertainment",
    "Consulting & Professional Services",
    "Hospitality & Tourism",
    "Non-Profit & Social Enterprise",
    "Creative Arts & Design",
    "Research & Development",
    "Government Projects",
    "International Development",
    "Environmental & Sustainability",
    "Other"
  ];

  // Calculate completion percentage for this form
  useEffect(() => {
    const totalFields = 6; // Focus Area, Years Exp, Projects Delivered, Project Links, Project Size, Sponsors
    let completedFields = 0;
    
    if (focusArea) completedFields++;
    if (yearsExperience) completedFields++;
    if (projectsDelivered.trim()) completedFields++;
    if (projectLinks.trim()) completedFields++;
    if (projectSize.trim()) completedFields++;
    if (sponsors.trim()) completedFields++;
    
    const completionPercent = Math.round((completedFields / totalFields) * 100);
    onCompletionChange(completionPercent);
  }, [focusArea, yearsExperience, projectsDelivered, projectLinks, projectSize, sponsors, onCompletionChange]);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <Award className="text-primary" size={24} />
        <div>
          <h4 className="text-body-lg-desktop text-textPrimary font-medium">
            Track Record & Credibility
          </h4>
          <p className="text-body-sm-desktop text-textSecondary">
            Showcase your company's experience, achievements, and credibility
          </p>
        </div>
      </div>

      {/* Primary Focus Area - Single line */}
      <div>
        <label className="block text-body-sm-desktop text-textSecondary mb-2">
          Primary Focus Area *
        </label>
        <div className="relative">
          <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
          <select
            className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            value={focusArea}
            onChange={(e) => setFocusArea(e.target.value)}
            required
          >
            <option value="">Select your primary focus area</option>
            {focusAreaOptions.map((area, index) => (
              <option key={index} value={area.toLowerCase().replace(/\s+/g, '-')}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Years of Experience - Single line */}
      <div>
        <label className="block text-body-sm-desktop text-textSecondary mb-2">
          Years of Experience in This Area *
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
          <select
            className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            value={yearsExperience}
            onChange={(e) => setYearsExperience(e.target.value)}
            required
          >
            <option value="">Select years of experience</option>
            {Array.from({ length: 31 }, (_, i) => i).map(year => (
              <option key={year} value={year}>
                {year === 0 ? "Less than 1 year" : year === 1 ? "1 year" : `${year} years`}
              </option>
            ))}
            <option value="30+">30+ years</option>
          </select>
        </div>
      </div>

      {/* Number of Major Projects Delivered - Single line */}
      <div>
        <label className="block text-body-sm-desktop text-textSecondary mb-2">
          Number of Major Projects Delivered *
        </label>
        <div className="relative">
          <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
          <input
            type="number"
            min="0"
            className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="0"
            value={projectsDelivered}
            onChange={(e) => setProjectsDelivered(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Links to Past Events/Projects - Single textarea */}
      <div>
        <label className="block text-body-sm-desktop text-textSecondary mb-2">
          Links to Past Events / Projects (websites, media, socials)
        </label>
        <div className="relative">
          <Globe className="absolute left-3 top-3 text-textSecondary" size={18} />
          <textarea
            className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent min-h-[120px]"
            placeholder="Enter links to your past projects, events, media coverage, or social media posts (one per line or separated by commas)"
            value={projectLinks}
            onChange={(e) => setProjectLinks(e.target.value)}
          />
        </div>
        <p className="text-xs text-textSecondary mt-2">
          Separate multiple links with commas or new lines
        </p>
      </div>

      {/* Average Project Size Executed - Single input */}
      <div>
        <label className="block text-body-sm-desktop text-textSecondary mb-2">
          Average Project Size Executed (₦ range) *
        </label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
          <input
            type="text"
            className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="e.g., ₦500,000 - ₦5,000,000"
            value={projectSize}
            onChange={(e) => setProjectSize(e.target.value)}
            required
          />
        </div>
        <p className="text-xs text-textSecondary mt-2">
          Examples: ₦500,000 - ₦5,000,000 or ₦10 million - ₦100 million
        </p>
      </div>

      {/* Major Sponsors/Partners - Single textarea */}
      <div>
        <label className="block text-body-sm-desktop text-textSecondary mb-2">
          Any Major Sponsors / Partners Worked With
        </label>
        <div className="relative">
          <Users className="absolute left-3 top-3 text-textSecondary" size={18} />
          <textarea
            className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent min-h-[120px]"
            placeholder="List notable organizations you've collaborated with (one per line or separated by commas)"
            value={sponsors}
            onChange={(e) => setSponsors(e.target.value)}
          />
        </div>
        <p className="text-xs text-textSecondary mt-2">
          Examples: Coca-Cola, MTN Nigeria, Dangote Group, Microsoft, etc.
        </p>
      </div>
    </div>
  );
};

export { TrackRecordForm };