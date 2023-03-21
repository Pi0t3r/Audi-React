import React, { createContext } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  setIsDarkMode: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
  isDarkMode: false,
  setIsDarkMode: false,
});
