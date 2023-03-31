import Nav from "./Nav";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../utilities/style/ThemeContext";
import { themeDark, themeLight } from "../utilities/style/theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../index.css";
import ModelsComponent from "../components/ModelsComponent";
import Footer from "./Footer";
import { Audi } from "../utilities/data/cars";

interface iFilter {
  title: string;
  setList: string;
}

const Filter = ({ title, setList }: iFilter) => {
  const models = Array.from(new Set(Audi.map((car) => car.model)));
  const uniqueBodies = Array.from(new Set(Audi.flatMap((car) => car.body)));
  return (
    <div>
      <h3 className="p-4 text-2xl font-medium text-neutral-400">{title}</h3>
      <ul className="list-none">
        {setList === "Body" &&
          uniqueBodies.map((car) => (
            <button className="border-2 border-neutral-200 p-3 text-neutral-200 m-1">
              {car}
            </button>
          ))}
        {setList === "Model" &&
          models.map((car) => (
            <button className="border-2 border-neutral-200 p-3 text-neutral-200 m-1">
              {car}
            </button>
          ))}
      </ul>
    </div>
  );
};

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
