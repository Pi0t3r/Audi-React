import React, { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { themeLight, themeDark } from "../utilities/style/theme";
import Sidebar from "../components/Sidebar";
import { ThemeContext } from "../utilities/style/ThemeContext";
function Nav() {
  const {isDarkMode, setIsDarkMode } =
    useContext(ThemeContext);
  const [move, setMove] = useState(false);
  const handleClick = () => {
    setMove(!move);
  };
  return (
    <div className="h-16 fixed left-0 right-0 z-10 top-0 shadow-[0_14px_20px_5px_#959595]">
      <ul
        style={{
          backgroundColor: isDarkMode
            ? themeDark.colors.blackBackground
            : themeLight.colors.whiteBackground,
          color: isDarkMode
            ? themeDark.colors.whiteText
            : themeLight.colors.blackText,
        }}
        className="flex flex-row items-center justify-between w-full h-full px-4 ease-in duration-300"
      >
        <li
          style={{
            color: isDarkMode
              ? themeDark.colors.whiteText
              : themeLight.colors.blackText,
          }}
        >
          <button onClick={handleClick}>
            <MenuIcon />
          </button>
        </li>
        <li className="tracking-[-0.3em] text-4xl">OOOO</li>
        <li>
          <button
            className="z-20 relative"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </button>
        </li>
      </ul>
      <div>
        <Sidebar move={move} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Nav;
