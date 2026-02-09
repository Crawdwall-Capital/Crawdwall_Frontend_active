import React, { useState, useEffect } from "react";
import { Target, Calendar, DollarSign, Users, Globe, Plus, X } from "lucide-react";

const TrackRecordForm = ({ onCompletionChange }: { onCompletionChange: (percent: number) => void }) => {
  const [focusArea, setFocusArea] = useState<string>("");
  const [yearsExperience, setYearsExperience] = useState<string>("");
  const [projectsDelivered, setProjectsDelivered] = useState<string>("");
  const [projectLinks, setProjectLinks] = useState<string[]>([""]);
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
    
    // Check if at least one project link is filled
    const hasProjectLinks = projectLinks.some(link => link.trim());
    if (hasProjectLinks) completedFields++;
    
    if (projectSize.trim()) completedFields++;
    if (sponsors.trim()) completedFields++;
    
    const completionPercent = Math.round((completedFields / totalFields) * 100);
    onCompletionChange(completionPercent);
  }, [focusArea, yearsExperience, projectsDelivered, projectLinks, projectSize, sponsors, onCompletionChange]);

  const addProjectLink = () => {
    setProjectLinks([...projectLinks, ""]);
  };

  const removeProjectLink = (index: number) => {
    if (projectLinks.length > 1) {
      setProjectLinks(projectLinks.filter((_, i) => i !== index));
    } else {
      // If only one link left, clear it instead of removing
      setProjectLinks([""]);
    }
  };

  const updateProjectLink = (index: number, value: string) => {
    const updatedLinks = [...projectLinks];
    updatedLinks[index] = value;
    setProjectLinks(updatedLinks);
  };

  return (
    <div className="space-y-8">
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

      {/* Links to Past Events/Projects - Multiple inputs */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="block text-body-sm-desktop text-textSecondary">
            Links to Past Events / Projects (websites, media, socials)
          </label>
          
        </div>

        <div className="space-y-4">
          {projectLinks.map((link, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
                  <input
                    type="text"
                    className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="https://example.com/project or social media link"
                    value={link}
                    onChange={(e) => updateProjectLink(index, e.target.value)}
                  />
                </div>
              </div>
              
              {projectLinks.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeProjectLink(index)}
                  className="flex-shrink-0 p-3 text-error hover:bg-error/10 rounded-button"
                >
                  <X size={18} />
                </button>
              )}
              
            </div>
            
          ))}
          
        </div>
        <div className="flex justify-center mt-2">
  <button
    type="button"
    onClick={addProjectLink}
    className="flex items-center gap-1 text-primary text-sm hover:underline"
  >
    <Plus size={16} /> Add Link
  </button>
</div>

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

      {/* Major Sponsors/Partners - Single input */}
      <div>
        <label className="block text-body-sm-desktop text-textSecondary mb-2">
          Any Major Sponsors / Partners Worked With
        </label>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
          <input
            type="text"
            className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="e.g., Coca-Cola, MTN Nigeria, Dangote Group, Microsoft"
            value={sponsors}
            onChange={(e) => setSponsors(e.target.value)}
          />
        </div>
        <p className="text-xs text-textSecondary mt-2">
          Separate multiple sponsors/partners with commas
        </p>
      </div>
    </div>
  );
};

export { TrackRecordForm };