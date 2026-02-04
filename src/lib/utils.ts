import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx and tailwind-merge for optimal class handling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to generate responsive class names
 * Based on Tailwind's breakpoint system
 */
export function responsiveClass(
  baseClass: string,
  mobileClass?: string,
  tabletClass?: string,
  desktopClass?: string
): string {
  const classes = [baseClass];
  
  if (mobileClass) classes.push(`sm:${mobileClass}`);
  if (tabletClass) classes.push(`md:${tabletClass}`);
  if (desktopClass) classes.push(`lg:${desktopClass}`);
  
  return classes.join(" ");
}

/**
 * Utility function to check if running on client side
 */
export function isClient(): boolean {
  return typeof window !== "undefined";
}

/**
 * Utility function to format currency
 */
export function formatCurrency(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Utility function to debounce function calls
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

/**
 * Utility function to throttle function calls
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}