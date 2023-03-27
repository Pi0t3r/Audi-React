import Nav from "./Nav";
import { useContext } from "react";
import { ThemeContext } from "../utilities/style/ThemeContext";
import { themeDark, themeLight } from "../utilities/style/theme";

function Models() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <>
      <Nav />
      <div
        className="mt-20 h-20 bg-red-500"
        style={{
          backgroundColor: isDarkMode
            ? themeDark.colors.blackBackground
            : themeLight.colors.whiteBackground,
          color: isDarkMode
            ? themeDark.colors.whiteText
            : themeLight.colors.blackText,
        }}
      >
        Witam
      </div>
    </>
  );
}

export default Models;
