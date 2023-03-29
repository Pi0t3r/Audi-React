import Nav from "./Nav";
import { useContext } from "react";
import { ThemeContext } from "../utilities/style/ThemeContext";
import { themeDark, themeLight } from "../utilities/style/theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../components/Carousel";
import { Audi } from "../utilities/data/cars";
import "../index.css";
import ModelsComponent from "../components/ModelsComponent";
import Footer from "./Footer";

function Models() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <Nav />
      <div className="mt-16">
        <div
          className="text-4xl py-10 pl-5 ease-in duration-300"
          style={{
            backgroundColor: isDarkMode
              ? themeDark.colors.blackBackground
              : themeLight.colors.whiteBackground,
            color: isDarkMode
              ? themeDark.colors.whiteText
              : themeLight.colors.blackText,
          }}
        >
          <h2>Modele</h2>
        </div>
        <div
          className={`${
            isDarkMode ? "bg-white text-black" : "bg-black text-white"
          } text-black p-5 text-2xl ease-in duration-300`}
        >
          <button>
            Otwórz filtry{" "}
            <span className="ml-5">
              <KeyboardArrowDownIcon />
            </span>
          </button>
        </div>
        <div
          className={`w-full ${isDarkMode ? "bg-[#1c1c1c]" : "bg-[#f2f2f2]"}`}
        >
          <ModelsComponent setTheme={isDarkMode} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Models;
