import React, { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from "../utilities/style/ThemeContext";
import { themeLight, themeDark } from "../utilities/style/theme";
function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="h-16 fixed left-0 right-0 z-10 top-0 bg-white">
      <ul
        style={{
          backgroundColor: isDarkMode
            ? themeDark.colors.blackBackground
            : themeLight.colors.whiteBackground,
          color: isDarkMode
            ? themeDark.colors.whiteText
            : themeLight.colors.blackText,
        }}
        className="flex flex-row items-center justify-between w-full h-full px-4"
      >
        <li
          style={{
            color: isDarkMode
              ? themeDark.colors.whiteText
              : themeLight.colors.blackText,
          }}
        >
          <button>
            <MenuIcon />
          </button>
        </li>
        <li className="tracking-[-0.4em] text-4xl">OOOO</li>
        <li>
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
