// Button Component Types
export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

// Card Component Types
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg" | "xl";
  hover?: boolean;
  square?: boolean;
}

// Frame Component Types
export interface FrameProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

// Hero Section Types
export interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  illustration?: React.ReactNode;
}

// Proposal to Payout Section Types
export interface ProposalStep {
  id: number;
  title: string;
  description: string;
  ideas: string[];
  buttonText: string;
  onButtonClick?: () => void;
  icon?: React.ReactNode;
}

export interface ProposalToPayoutProps {
  steps: ProposalStep[];
}

// Two-Part Section Types
export interface TwoPartSectionProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  reverseOnDesktop?: boolean;
}

// Icon Card Types
export interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  summary: string;
  className?: string;
}

// Footer Section Types
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  sections: FooterSection[];
  copyrightText: string;
}

// Utility Types
export type ResponsiveProp<T> = T | { mobile?: T; tablet?: T; desktop?: T };

export interface WithClassName {
  className?: string;
}

// Color Palette Types
export interface ColorPalette {
  primary: string;
  secondary: string;
  tertiary: string;
  neutral: string;
  neutralVariant: string;
  error: string;
  success: string;
  warning: string;
  background: string;
  card: string;
  textPrimary: string;
  textSecondary: string;
  placeholder: string;
  outline: string;
  divider: string;
  disabledText: string;
  disabledBorder: string;
  secondaryBg: string;
  primaryContainer: string;
  secondaryContainer: string;
  onPrimaryContainer: string;
  onSecondaryContainer: string;
  errorContainer: string;
  onErrorContainer: string;
  disabledBg: string;
  white: string;
}