import Nav from "./Nav";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../utilities/style/ThemeContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../index.css";
import ModelsComponent from "../components/ModelsComponent";
import Footer from "./Footer";
import Filter from "../components/FilterModelsBodies";

function Models() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [expand, setExpand] = useState(false);
  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <div>
      <Nav />
      <div className="mt-16">
        <div
          className={`text-4xl py-10 pl-5 ease-in duration-300 ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <h2>Modele</h2>
        </div>
        <div
          className={`${
            isDarkMode ? "bg-white text-black" : "bg-black text-white"
          } text-black p-5 text-2xl ease-in duration-300 sticky top-16 z-[9]`}
        >
          <button onClick={handleClick}>
            Otwórz filtry
            <span className="ml-5">
              <KeyboardArrowDownIcon />
            </span>
          </button>
        </div>
        {expand && (
          <div className="overflow-scroll h-[100%] bg-neutral-800 z-20 fixed top-16 left-0 right-0 bottom-0">
            <button
              onClick={handleClick}
              className="bg-black w-full h-16 text-white text-left pl-5 text-xl"
            >
              Zamknij filtry <KeyboardArrowUpIcon />
            </button>
            <Filter title="Modele" setList="Model" />
            <Filter title="Nadwozie" setList="Body" />
          </div>
        )}
        <div
          className={`w-full ${isDarkMode ? "bg-[#1c1c1c]" : "bg-[#f2f2f2]"} pb-10`}
        >
          <ModelsComponent setTheme={isDarkMode} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Models;

