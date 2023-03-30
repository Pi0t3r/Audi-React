import React, { createContext } from "react";
import { themeDark, themeLight } from "./theme";
interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  themeLight: {
    colors: {
      whiteBackground: string;
      blackText: string;
    };
  };
  themeDark: {
    colors: {
      whiteText: string;
      blackBackground: string;
    };
  };
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  themeDark,
  themeLight,
  setIsDarkMode: (value: boolean | ((prevValue: boolean) => boolean)) => {},
});
