import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { themeLight, themeDark } from "../utilities/style/theme";
import React, { useContext } from "react";
import { ThemeContext } from "../utilities/style/ThemeContext";

interface iItem {
  title: string;
  href: string;
}

const Item = ({ title, href }: iItem) => {
  return (
    <li className="cursor-pointer duration-400 ease-in transition w-full text-left my-3">
      <a href={href} className="flex flex-row justify-between px-5">
        {title}{" "}
        <span>
          <ChevronRightIcon />
        </span>
      </a>
    </li>
  );
};

interface iSidebar {
  move: boolean;
  handleClick: () => void;
}

function Sidebar({ move, handleClick }: iSidebar) {
  const {isDarkMode, setIsDarkMode} = useContext(ThemeContext)
  return (
    <div
      style={{
        backgroundColor: isDarkMode
          ? themeDark.colors.blackBackground
          : themeLight.colors.whiteBackground,
        color: isDarkMode
          ? themeDark.colors.whiteText
          : themeLight.colors.blackText,
      }}
      className={`fixed z-10 top-0 bottom-0 ease-in w-full duration-300 bg-white ${
        move ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex flex-row justify-between p-5">
        <button onClick={handleClick}>
          <CloseOutlinedIcon />
        </button>
      </div>

      <div className="absolute top-20 w-full">
        <ul className="flex flex-col leading-10 justify-center items-center">
          <Item title="Modele" href="/" />
          <Item title="Oferty i porady" href="#Offers" />
          <Item title="Elektromobilność" href="#Electro" />
          <Item title="Świat Audi" href="#AudiWorld" />
          <Item title="Serwis i akcesoria" href="#services" />
        </ul>
      </div>
      
    </div>
  );
}

export default Sidebar;
