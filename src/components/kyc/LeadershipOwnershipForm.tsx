import React, { useState, useEffect } from "react";
import { Mail, Phone, X, Plus } from "lucide-react";

const LeadershipOwnershipForm = ({ onCompletionChange }: { onCompletionChange: (percent: number) => void }) => {
  const [leader, setLeader] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    nationality: "",
    ownership: ""
  });

  const [showAdditionalDirectors, setShowAdditionalDirectors] = useState(false);
  const [additionalDirectors, setAdditionalDirectors] = useState<Array<{
    name: string;
    role: string;
    email: string;
    phone: string;
    nationality: string;
    ownership: string;
  }>>([
    {
      name: "",
      role: "",
      email: "",
      phone: "",
      nationality: "",
      ownership: ""
    }
  ]);

  const nationalities = [
    "Nigerian",
    "American",
    "British",
    "Canadian",
    "Ghanaian",
    "Kenyan",
    "South African",
    "Indian",
    "Chinese",
    "French",
    "German",
    "Japanese",
    "Australian",
    "Other"
  ];

  const updateLeader = (field: keyof typeof leader, value: string) => {
    setLeader(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addAdditionalDirector = () => {
    setAdditionalDirectors([
      ...additionalDirectors,
      {
        name: "",
        role: "",
        email: "",
        phone: "",
        nationality: "",
        ownership: ""
      }
    ]);
  };

  const removeAdditionalDirector = (index: number) => {
    if (additionalDirectors.length > 1) {
      setAdditionalDirectors(additionalDirectors.filter((_, i) => i !== index));
    } else {
      // If only one director left, clear the form instead of removing
      setAdditionalDirectors([{
        name: "",
        role: "",
        email: "",
        phone: "",
        nationality: "",
        ownership: ""
      }]);
    }
  };

  const updateAdditionalDirector = (index: number, field: keyof typeof additionalDirectors[0], value: string) => {
    const updatedDirectors = [...additionalDirectors];
    updatedDirectors[index][field] = value;
    setAdditionalDirectors(updatedDirectors);
  };

  // Calculate completion percentage for this form
  useEffect(() => {
    const totalRequiredFields = 6; // Main leader has 6 required fields
    
    let completedFields = 0;

    // Check main leader
    if (leader.name.trim()) completedFields++;
    if (leader.role.trim()) completedFields++;
    if (leader.email.trim()) completedFields++;
    if (leader.phone.trim()) completedFields++;
    if (leader.nationality) completedFields++;
    if (leader.ownership.trim()) completedFields++;

    const completionPercent = Math.round((completedFields / totalRequiredFields) * 100);
    onCompletionChange(completionPercent);
  }, [leader, onCompletionChange]);

  return (
    <div className="space-y-6">
      <div className="border border-outline rounded-card p-6 space-y-4">
        {/* Name */}
        <div>
          <label className="block text-body-sm-desktop text-textSecondary mb-2">
            Founder / Lead Organizer / Project Director Name *
          </label>
          <input
            type="text"
            className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Full name"
            value={leader.name}
            onChange={(e) => updateLeader('name', e.target.value)}
            required
          />
        </div>

        {/* Role/Title */}
        <div>
          <label className="block text-body-sm-desktop text-textSecondary mb-2">
            Role / Title *
          </label>
          <input
            type="text"
            className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="e.g., CEO, Founder, Director"
            value={leader.role}
            onChange={(e) => updateLeader('role', e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-body-sm-desktop text-textSecondary mb-2">
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
            <input
              type="email"
              className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="email@example.com"
              value={leader.email}
              onChange={(e) => updateLeader('email', e.target.value)}
              required
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-body-sm-desktop text-textSecondary mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
            <input
              type="tel"
              className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="+234 800 000 0000"
              value={leader.phone}
              onChange={(e) => updateLeader('phone', e.target.value)}
              required
            />
          </div>
        </div>

        {/* Nationality */}
        <div>
          <label className="block text-body-sm-desktop text-textSecondary mb-2">
            Nationality *
          </label>
          <select
            className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            value={leader.nationality}
            onChange={(e) => updateLeader('nationality', e.target.value)}
            required
          >
            <option value="">Select nationality</option>
            {nationalities.map((nationality, idx) => (
              <option key={idx} value={nationality.toLowerCase()}>
                {nationality}
              </option>
            ))}
          </select>
        </div>

        {/* Percentage Ownership/Control */}
        <div>
          <label className="block text-body-sm-desktop text-textSecondary mb-2">
            Percentage Ownership / Control *
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              max="100"
              step="0.1"
              className="w-full border border-outline rounded-button px-4 py-3 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="0.0"
              value={leader.ownership}
              onChange={(e) => updateLeader('ownership', e.target.value)}
              required
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textSecondary">
              %
            </span>
          </div>
          <p className="text-xs text-textSecondary mt-2">
            Enter the ownership percentage for this individual (0-100%)
          </p>
        </div>
      </div>

      {/* Other Directors / Partners / Organizers Section */}
      <div className="border border-outline rounded-card overflow-hidden">
        <button
          type="button"
          onClick={() => setShowAdditionalDirectors(!showAdditionalDirectors)}
          className="w-full flex items-center justify-center p-6 hover:bg-secondaryBg transition-colors group"
        >
          <span className="text-button-desktop text-primary hover:underline decoration-2 underline-offset-4 transition-all duration-200 group-hover:underline">
            + Other Directors / Partners / Organizers
          </span>
        </button>

        {showAdditionalDirectors && (
          <div className="p-6 border-t border-outline space-y-6">
            <div className="mb-4">
              <p className="text-body-sm-desktop text-textSecondary">
                Add information for additional directors, partners, or organizers (optional)
              </p>
            </div>

            {additionalDirectors.map((director, index) => (
              <div key={index} className="border border-outline rounded-card p-6 space-y-4 relative">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-body-md-desktop text-textPrimary font-medium">
                    Additional Director {index + 1}
                  </h5>
                  {additionalDirectors.length > 0 && (
                    <button
                      type="button"
                      onClick={() => removeAdditionalDirector(index)}
                      className="flex items-center gap-1 text-error hover:text-error/80 text-sm"
                    >
                      <X size={16} /> Remove
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-body-sm-desktop text-textSecondary mb-2">
                      Directors / Partners / Organizers Name *
                    </label>
                    <input
                      type="text"
                      className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Full name"
                      value={director.name}
                      onChange={(e) => updateAdditionalDirector(index, 'name', e.target.value)}
                    />
                  </div>

                  {/* Role/Title */}
                  <div>
                    <label className="block text-body-sm-desktop text-textSecondary mb-2">
                      Role / Title
                    </label>
                    <input
                      type="text"
                      className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., Director, Partner, Organizer"
                      value={director.role}
                      onChange={(e) => updateAdditionalDirector(index, 'role', e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-body-sm-desktop text-textSecondary mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
                      <input
                        type="email"
                        className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="email@example.com"
                        value={director.email}
                        onChange={(e) => updateAdditionalDirector(index, 'email', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-body-sm-desktop text-textSecondary mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" size={18} />
                      <input
                        type="tel"
                        className="w-full border border-outline rounded-button pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+234 800 000 0000"
                        value={director.phone}
                        onChange={(e) => updateAdditionalDirector(index, 'phone', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Nationality */}
                  <div>
                    <label className="block text-body-sm-desktop text-textSecondary mb-2">
                      Nationality
                    </label>
                    <select
                      className="w-full border border-outline rounded-button px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={director.nationality}
                      onChange={(e) => updateAdditionalDirector(index, 'nationality', e.target.value)}
                    >
                      <option value="">Select nationality</option>
                      {nationalities.map((nationality, idx) => (
                        <option key={idx} value={nationality.toLowerCase()}>
                          {nationality}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Percentage Ownership/Control */}
                  <div>
                    <label className="block text-body-sm-desktop text-textSecondary mb-2">
                      Percentage Ownership / Control
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        className="w-full border border-outline rounded-button px-4 py-3 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="0.0"
                        value={director.ownership}
                        onChange={(e) => updateAdditionalDirector(index, 'ownership', e.target.value)}
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textSecondary">
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addAdditionalDirector}
              className="flex items-center gap-2 px-4 py-2 border border-outline rounded-button text-body-sm-desktop hover:bg-secondaryBg transition-colors"
            >
              <Plus size={16} /> Add Another Director
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { LeadershipOwnershipForm };