import React, { useState, useEffect } from "react";
import { Shield, ChevronUp, Medal, Building, FileText, CheckCircle, Mail, Phone, Globe, Upload, Eye, ChevronDown, Lock, UserCog, ShieldCheck, BadgeCheck, X, Plus, Facebook, Instagram, Twitter, Linkedin, Youtube, User, Calendar, Target, Award, Users, DollarSign, FileCheck, Home, Building2, CreditCard, Trash2, FileUp, FileSignature, CalendarDays } from "lucide-react";


const LeadershipOwnershipForm = ({ onCompletionChange }: { onCompletionChange: (percent: number) => void }) => {
  const [leaders, setLeaders] = useState<Array<{
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

  const addLeader = () => {
    setLeaders([
      ...leaders,
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

  const removeLeader = (index: number) => {
    if (leaders.length > 1) {
      setLeaders(leaders.filter((_, i) => i !== index));
    }
  };

  const updateLeader = (index: number, field: keyof typeof leaders[0], value: string) => {
    const updatedLeaders = [...leaders];
    updatedLeaders[index][field] = value;
    setLeaders(updatedLeaders);
  };

  const calculateTotalOwnership = () => {
    const total = leaders.reduce((sum, leader) => {
      const ownership = parseFloat(leader.ownership) || 0;
      return sum + ownership;
    }, 0);
    return total.toFixed(1);
  };

  // Calculate completion percentage for this form
  useEffect(() => {
    if (leaders.length === 0) {
      onCompletionChange(0);
      return;
    }

    const totalFieldsPerLeader = 6; // Name, Role, Email, Phone, Nationality, Ownership
    let totalFields = 0;
    let completedFields = 0;

    leaders.forEach(leader => {
      totalFields += totalFieldsPerLeader;
      if (leader.name.trim()) completedFields++;
      if (leader.role.trim()) completedFields++;
      if (leader.email.trim()) completedFields++;
      if (leader.phone.trim()) completedFields++;
      if (leader.nationality) completedFields++;
      if (leader.ownership.trim()) completedFields++;
    });

    // Bonus for total ownership being exactly 100%
    const totalOwnership = parseFloat(calculateTotalOwnership());
    if (totalOwnership === 100) {
      completedFields += 1; // Bonus point for correct ownership distribution
    }

    const completionPercent = Math.round((completedFields / (totalFields + 1)) * 100);
    onCompletionChange(Math.min(completionPercent, 100));
  }, [leaders, onCompletionChange]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-body-lg-desktop text-textPrimary font-medium">
            Leadership & Ownership Details
          </h4>
          <p className="text-body-sm-desktop text-textSecondary">
            Add information for all key leadership personnel with ownership or control
          </p>
        </div>
        <button
          type="button"
          onClick={addLeader}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-button text-body-sm-desktop hover:opacity-90"
        >
          <Plus size={16} /> Add Leader
        </button>
      </div>

      {leaders.map((leader, index) => (
        <div key={index} className="border border-outline rounded-card p-6 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <User size={20} className="text-primary" />
              <h5 className="text-body-md-desktop text-textPrimary font-medium">
                Leader {index + 1}
              </h5>
            </div>
            {leaders.length > 1 && (
              <button
                type="button"
                onClick={() => removeLeader(index)}
                className="flex items-center gap-1 text-error hover:text-error/80 text-sm"
              >
                <X size={16} /> Remove
              </button>
            )}
          </div>

          <div>
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
                onChange={(e) => updateLeader(index, 'name', e.target.value)}
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
                onChange={(e) => updateLeader(index, 'role', e.target.value)}
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
                  onChange={(e) => updateLeader(index, 'email', e.target.value)}
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
                  onChange={(e) => updateLeader(index, 'phone', e.target.value)}
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
                onChange={(e) => updateLeader(index, 'nationality', e.target.value)}
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
                  onChange={(e) => updateLeader(index, 'ownership', e.target.value)}
                  required
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textSecondary">
                  %
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Total Ownership Display */}
      <div className="p-4 border border-outline rounded-card bg-primary/5">
        <div className="flex items-center justify-between">
          <span className="text-body-md-desktop text-textPrimary font-medium">
            Total Ownership Percentage
          </span>
          <div className="flex items-center gap-2">
            <span className="text-h3-mobile text-primary font-bold">
              {calculateTotalOwnership()}%
            </span>
            <span className="text-body-sm-desktop text-textSecondary">
              / 100%
            </span>
          </div>
        </div>
        {parseFloat(calculateTotalOwnership()) > 100 && (
          <p className="text-error text-sm mt-2">
            Total ownership cannot exceed 100%
          </p>
        )}
        {parseFloat(calculateTotalOwnership()) < 100 && (
          <p className="text-warning text-sm mt-2">
            Total ownership should add up to 100%
          </p>
        )}
        {parseFloat(calculateTotalOwnership()) === 100 && (
          <p className="text-success text-sm mt-2">
            ✓ Total ownership adds up to 100%
          </p>
        )}
      </div>
    </div>
  );
};

export { LeadershipOwnershipForm };