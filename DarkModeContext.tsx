import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define the shape of the context value
interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// Create the context
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

// Define the provider component
export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode === 'dark';
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const html = window.document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to use the dark mode context
export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
}