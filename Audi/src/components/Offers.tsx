import React, { useContext } from "react";
import { ThemeContext } from "../utilities/style/ThemeContext";
import { themeLight, themeDark } from "../utilities/style/theme";
interface iOffer {
  title: string;
  text: string;
  button: string;
  background?: string;
}

export function OfferWithBackground({
  title,
  text,
  button,
  background,
}: iOffer) {
  return (
    <div
      className={`${background} bg-cover bg-center w-full h-[30rem] flex items-center justify-center bg-fixed`}
    >
      <div className="bg-white w-3/4 h-2/3 p-5">
        <h3 className="font-bold">{title}</h3>
        <p>{text}</p>
        <button className="w-full bg-black text-white font-medium py-7 mt-5">
          {button}
        </button>
      </div>
    </div>
  );
}

export function OfferWithoutBackground({ title, text, button }: iOffer) {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
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
      className="text-left px-14 pb-14 pt-5 ease-in duration-300"
    >
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="my-5">{text}</p>
      <button style={{
        borderColor: isDarkMode ? "white" : "black"
      }} className="border-2 border-black w-full py-3">{button}</button>
    </div>
  );
}
