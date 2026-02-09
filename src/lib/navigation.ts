// Navigation utility to handle problematic navigation scenarios
export const forceNavigate = (path: string) => {
  console.log(`Force navigating to: ${path}`);
  
  // Use window.location for reliable navigation
  if (window.location.pathname !== path) {
    window.location.href = path;
  }
};

export const safeNavigate = (navigate: (path: string) => void, path: string, currentPath: string) => {
  console.log(`Safe navigate: ${currentPath} -> ${path}`);
  
  // If we're already on the target path, don't navigate
  if (currentPath === path) {
    console.log('Already on target path, skipping navigation');
    return;
  }
  
  try {
    // Try React Router navigation first
    navigate(path);
    
    // Verify navigation worked after a short delay
    setTimeout(() => {
      if (window.location.pathname !== path) {
        console.log('React Router navigation failed, using window.location');
        window.location.href = path;
      }
    }, 100);
  } catch (error) {
    console.error('Navigation error:', error);
    // Fallback to window.location
    window.location.href = path;
  }
};