import React, { useState, useEffect } from "react";
import { Shield, ChevronUp, Medal, Building, FileText, CheckCircle, Mail, Phone, Globe, Upload, Eye, ChevronDown, Lock, UserCog, ShieldCheck, BadgeCheck, X, Plus, Facebook, Instagram, Twitter, Linkedin, Youtube, User, Calendar, Target, Award, Users, DollarSign, FileCheck, Home, Building2, CreditCard, Trash2, FileUp, FileSignature, CalendarDays } from "lucide-react";


const ComplianceIdentityForm = ({ onCompletionChange }: { onCompletionChange: (percent: number) => void }) => {
  const [files, setFiles] = useState<{
    incorporation: File | null;
    governmentId: File | null;
    proofOfAddress: File | null;
    taxId: File | null;
  }>({
    incorporation: null,
    governmentId: null,
    proofOfAddress: null,
    taxId: null
  });

  const [uploadProgress, setUploadProgress] = useState<{
    incorporation: number;
    governmentId: number;
    proofOfAddress: number;
    taxId: number;
  }>({
    incorporation: 0,
    governmentId: 0,
    proofOfAddress: 0,
    taxId: 0
  });

  const [uploadStatus, setUploadStatus] = useState<{
    incorporation: 'idle' | 'uploading' | 'success' | 'error';
    governmentId: 'idle' | 'uploading' | 'success' | 'error';
    proofOfAddress: 'idle' | 'uploading' | 'success' | 'error';
    taxId: 'idle' | 'uploading' | 'success' | 'error';
  }>({
    incorporation: 'idle',
    governmentId: 'idle',
    proofOfAddress: 'idle',
    taxId: 'idle'
  });

  // Calculate completion percentage for this form
  useEffect(() => {
    const totalRequiredFields = 3; // Incorporation, Government ID, Proof of Address are required
    let completedFields = 0;
    
    if (uploadStatus.incorporation === 'success') completedFields++;
    if (uploadStatus.governmentId === 'success') completedFields++;
    if (uploadStatus.proofOfAddress === 'success') completedFields++;
    // Tax ID is optional, but we'll count it if uploaded
    if (uploadStatus.taxId === 'success') completedFields++;
    
    const completionPercent = Math.round((completedFields / totalRequiredFields) * 100);
    onCompletionChange(Math.min(completionPercent, 100));
  }, [uploadStatus, onCompletionChange]);

  const handleFileUpload = (field: keyof typeof files, file: File) => {
    // Set the file immediately
    setFiles(prev => ({ ...prev, [field]: file }));
    setUploadStatus(prev => ({ ...prev, [field]: 'uploading' }));
    
    // Start upload simulation
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20; // Faster progress
      setUploadProgress(prev => ({ ...prev, [field]: progress }));
      
      if (progress >= 100) {
        clearInterval(interval);
        setUploadStatus(prev => ({ ...prev, [field]: 'success' }));
      }
    }, 200);
  };

  const handleFileChange = (field: keyof typeof files, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB");
        return;
      }
      
      // EXPANDED FILE TYPE VALIDATION FOR PDFs
      const allowedTypes = [
        'application/pdf', 
        'application/x-pdf', 
        'application/acrobat', 
        'application/vnd.pdf', 
        'text/pdf', 
        'application/x-download',
        'image/jpeg', 
        'image/png', 
        'image/jpg'
      ];
      
      const allowedExtensions = ['.pdf', '.jpg', '.jpeg', '.png', '.PDF', '.JPG', '.JPEG', '.PNG'];
      
      // Check MIME type
      const isValidMimeType = allowedTypes.includes(file.type.toLowerCase());
      
      // Check file extension as fallback
      const fileName = file.name.toLowerCase();
      const hasValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));
      
      // Accept the file if either the MIME type or extension is valid
      if (!isValidMimeType && !hasValidExtension) {
        alert(`Please upload PDF, JPEG, or PNG files only.\n\nFile type detected: ${file.type || 'unknown'}\nFile name: ${file.name}`);
        return;
      }
      
      handleFileUpload(field, file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (field: keyof typeof files, event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    
    const file = event.dataTransfer.files?.[0];
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB");
        return;
      }
      
      // EXPANDED FILE TYPE VALIDATION FOR PDFs
      const allowedTypes = [
        'application/pdf', 
        'application/x-pdf', 
        'application/acrobat', 
        'application/vnd.pdf', 
        'text/pdf', 
        'application/x-download',
        'image/jpeg', 
        'image/png', 
        'image/jpg'
      ];
      
      const allowedExtensions = ['.pdf', '.jpg', '.jpeg', '.png', '.PDF', '.JPG', '.JPEG', '.PNG'];
      
      // Check MIME type
      const isValidMimeType = allowedTypes.includes(file.type.toLowerCase());
      
      // Check file extension as fallback
      const fileName = file.name.toLowerCase();
      const hasValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));
      
      // Accept the file if either the MIME type or extension is valid
      if (!isValidMimeType && !hasValidExtension) {
        alert(`Please upload PDF, JPEG, or PNG files only.\n\nFile type detected: ${file.type || 'unknown'}\nFile name: ${file.name}`);
        return;
      }
      
      handleFileUpload(field, file);
    }
  };

  const removeFile = (field: keyof typeof files) => {
    setFiles(prev => ({ ...prev, [field]: null }));
    setUploadProgress(prev => ({ ...prev, [field]: 0 }));
    setUploadStatus(prev => ({ ...prev, [field]: 'idle' }));
  };

  const getFileIcon = (fileName: string) => {
    if (fileName.toLowerCase().endsWith('.pdf')) {
      return <FileText className="text-primary" size={24} />;
    } else if (fileName.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/)) {
      return <FileCheck className="text-primary" size={24} />;
    }
    return <FileText className="text-primary" size={24} />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const FileUploadBox = ({ 
    field, 
    title, 
    description, 
    required = false,
    icon: Icon 
  }: { 
    field: keyof typeof files;
    title: string;
    description: string;
    required?: boolean;
    icon: React.ElementType;
  }) => {
    const isUploading = uploadStatus[field] === 'uploading';
    const isSuccess = uploadStatus[field] === 'success';
    const hasFile = !!files[field];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon size={20} className={isSuccess ? "text-success" : "text-primary"} />
            <label className={`text-body-sm-desktop ${isSuccess ? 'text-success' : 'text-textSecondary'}`}>
              {title} {required && <span className="text-error">*</span>}
            </label>
          </div>
          {hasFile && (
            <button
              type="button"
              onClick={() => removeFile(field)}
              className="flex items-center gap-1 text-error hover:text-error/80 text-sm"
            >
              <Trash2 size={16} /> Remove
            </button>
          )}
        </div>

        {!hasFile ? (
          <div
            className={`border-2 border-dashed rounded-button p-6 text-center hover:bg-secondaryBg cursor-pointer transition-all duration-300 ${
              isUploading 
                ? 'border-primary bg-primary/5' 
                : 'border-outline hover:border-primary'
            }`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(field, e)}
            onClick={() => {
              const input = document.getElementById(`${field}-upload`);
              if (input) {
                (input as HTMLInputElement).click();
              }
            }}
          >
            <Upload className={`mx-auto mb-3 ${isUploading ? 'text-primary animate-pulse' : 'text-textSecondary'}`} size={32} />
            <p className={`mb-1 ${isUploading ? 'text-primary font-medium' : 'text-textSecondary'}`}>
              {isUploading ? 'Uploading...' : 'Drag & drop your file here'}
            </p>
            <p className={`text-sm ${isUploading ? 'text-primary' : 'text-textSecondary'}`}>
              {isUploading ? 'Please wait while we upload your file' : 'or click to browse files'}
            </p>
            <p className="text-xs text-textSecondary mt-2">Maximum file size: 10MB (PDF, JPG, PNG)</p>
            <input
              id={`${field}-upload`}
              type="file"
              className="hidden"
              onChange={(e) => handleFileChange(field, e)}
              accept=".pdf,.jpg,.jpeg,.png,.PDF,.JPG,.JPEG,.PNG"
            />
          </div>
        ) : (
          <div className={`border rounded-card p-4 transition-all duration-300 ${
            isSuccess 
              ? 'border-success bg-success/5 shadow-success/10 shadow-sm' 
              : isUploading
                ? 'border-primary bg-primary/5'
                : 'border-outline'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {getFileIcon(files[field]!.name)}
                <div>
                  <p className={`text-body-sm-desktop ${isSuccess ? 'text-success font-medium' : 'text-textPrimary'}`}>
                    {files[field]!.name}
                  </p>
                  <p className={`text-xs ${isSuccess ? 'text-success/80' : 'text-textSecondary'}`}>
                    {formatFileSize(files[field]!.size)} • {files[field]!.type ? files[field]!.type.split('/')[1].toUpperCase() : 'File'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {isUploading ? (
                  <>
                    <div className="w-24 bg-divider rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress[field]}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-primary">{uploadProgress[field]}%</span>
                  </>
                ) : isSuccess ? (
                  <div className="flex items-center gap-2 text-success">
                    <CheckCircle size={18} />
                    <span className="text-sm font-medium">Uploaded</span>
                  </div>
                ) : null}
              </div>
            </div>
            
            {/* Success message */}
            {isSuccess && (
              <div className="mt-3 p-2 bg-success/10 rounded-frame">
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-success" />
                  <span className="text-xs text-success">Document successfully uploaded and verified</span>
                </div>
              </div>
            )}
          </div>
        )}
        <p className={`text-xs ${isSuccess ? 'text-success/80' : 'text-textSecondary'}`}>
          {description}
        </p>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <ShieldCheck className="text-primary" size={24} />
        <div>
          <h4 className="text-body-lg-desktop text-textPrimary font-medium">
            Compliance & Identity Verification
          </h4>
          <p className="text-body-sm-desktop text-textSecondary">
            Upload required documents for identity verification and compliance
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Certificate of Incorporation / Registration */}
        <FileUploadBox
          field="incorporation"
          title="Certificate of Incorporation / Registration"
          description="Upload a clear scan or photo of your company's official registration certificate"
          required={true}
          icon={Building2}
        />

        {/* Government ID of Lead Organizer / Director */}
        <FileUploadBox
          field="governmentId"
          title="Government ID of Lead Organizer / Director"
          description="Valid government-issued ID (International Passport, Driver's License, National ID Card)"
          required={true}
          icon={CreditCard}
        />

        {/* Proof of Address */}
        <FileUploadBox
          field="proofOfAddress"
          title="Proof of Address"
          description="Recent utility bill, bank statement, or lease agreement (not older than 3 months)"
          required={true}
          icon={Home}
        />

        {/* Tax ID */}
        <FileUploadBox
          field="taxId"
          title="Tax ID (if applicable)"
          description="Tax Identification Number (TIN) certificate or equivalent tax registration document"
          required={false}
          icon={FileCheck}
        />
      </div>

      {/* Upload Requirements */}
      <div className="p-4 border border-outline rounded-card bg-primary/5">
        <h5 className="text-body-sm-desktop text-textPrimary font-medium mb-2">Upload Requirements:</h5>
        <ul className="space-y-1 text-sm text-textSecondary">
          <li className="flex items-center gap-2">
            <CheckCircle size={14} className="text-success" />
            All documents must be clear and legible
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle size={14} className="text-success" />
            Maximum file size: 10MB per document
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle size={14} className="text-success" />
            Accepted formats: PDF, JPG, JPEG, PNG
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle size={14} className="text-success" />
            Documents must be valid and not expired
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle size={14} className="text-success" />
            Proof of address must be recent (within last 3 months)
          </li>
        </ul>
      </div>

      {/* Upload Status Summary */}
      <div className="p-4 border border-outline rounded-card">
        <h5 className="text-body-sm-desktop text-textPrimary font-medium mb-3">Upload Status</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {Object.entries(uploadStatus).map(([field, status]) => {
            if (field === 'taxId' && !files[field as keyof typeof files]) return null;
            
            const fieldTitles: Record<keyof typeof uploadStatus, string> = {
              incorporation: "Incorporation Certificate",
              governmentId: "Government ID",
              proofOfAddress: "Proof of Address",
              taxId: "Tax ID"
            };
            
            const getStatusInfo = () => {
              switch (status) {
                case 'success':
                  return { text: 'Uploaded', color: 'text-success', bg: 'bg-success/10', icon: <CheckCircle size={14} /> };
                case 'uploading':
                  return { text: 'Uploading...', color: 'text-primary', bg: 'bg-primary/10', icon: <Upload size={14} /> };
                case 'error':
                  return { text: 'Error', color: 'text-error', bg: 'bg-error/10', icon: <X size={14} /> };
                default:
                  return { text: 'Pending', color: 'text-warning', bg: 'bg-warning/10', icon: null };
              }
            };
            
            const statusInfo = getStatusInfo();
            
            return (
              <div key={field} className="flex items-center justify-between p-2">
                <span className="text-sm text-textSecondary">{fieldTitles[field as keyof typeof uploadStatus]}</span>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-frame ${statusInfo.bg} ${statusInfo.color}`}>
                  {statusInfo.icon}
                  <span className="text-xs font-medium">{statusInfo.text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { ComplianceIdentityForm };