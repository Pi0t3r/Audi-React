import React, { useContext } from "react";
import { ThemeContext } from "../utilities/style/ThemeContext";
import { themeLight, themeDark } from "../utilities/style/theme";
interface iOffer {
  title: string;
  text: string;
  button: string;
  background?: string;
  height?: string;
}

export function OfferWithBackground({
  title,
  text,
  button,
  background,
  height,
}: iOffer) {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${background} bg-cover bg-center w-full h-[50rem] flex items-center justify-center bg-fixed`}
    >
      <div
        style={{
          backgroundColor: isDarkMode
            ? themeDark.colors.blackBackground
            : themeLight.colors.whiteBackground,
          color: isDarkMode
            ? themeDark.colors.whiteText
            : themeLight.colors.blackText,
        }}
        className={`bg-white w-3/4 ${height} iphone:h-96 tablet:h-80  pt-5 px-6 relative ease-in duration-300`}
      >
        <h3 className="font-extrabold text-2xl iphone:text-3xl">{title}</h3>
        <p className="mt-5 text-base iphone:text-lg">{text}</p>
        <button
          style={{
            backgroundColor: isDarkMode
              ? themeLight.colors.whiteBackground
              : themeDark.colors.blackBackground,
            color: isDarkMode
              ? themeLight.colors.blackText
              : themeDark.colors.whiteText,
          }}
          className="bg-black text-white font-medium py-5 mt-5 absolute left-0 right-0 mx-5 bottom-10 ease-in duration-300 iphone:w-48"
        >
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
      className="text-left px-14 node:px-12 text-lg pb-14 pt-14 ease-in duration-300"
    >
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="my-5">{text}</p>
      <button
        style={{
          borderColor: isDarkMode ? "white" : "black",
        }}
        className="border-[1px] border-black w-full py-3 iphone:w-2/3 max-w-lg"
      >
        {button}
      </button>
    </div>
  );
}
