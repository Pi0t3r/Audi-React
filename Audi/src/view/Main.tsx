import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CarouselOne, CarouselTwo } from "../components/Carousel";
import React, { useContext, useState } from "react";
import {
  OfferWithBackground,
  OfferWithoutBackground,
} from "../components/Offers";
import { themeDark, themeLight } from "../utilities/style/theme";
import { ThemeContext } from "../utilities/style/ThemeContext";
import DropdownModel from "../components/Dropdown";

interface iButton {
  text: string;
  border: string;
  background: string;
  textColor?: string;
  height: string;
  margin?: string;
}

function Main() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [activeButton, setActiveButton] = useState<string>("Modele");
  const [activeCarousel, setActiveCarousel] = useState<string>("CarouselOne");
  const handleButtonClick = (buttonName: string, carouselName: string) => {
    setActiveButton(buttonName);
    setActiveCarousel(carouselName);
  };
  const Button = ({
    text,
    border,
    background,
    textColor,
    height,
    margin,
  }: iButton) => {
    return (
      <button
        className={`${border} ${background} ${textColor} w-full ${height} ${margin} font-medium text-xl cursor-pointer md:w-[49%] md:h-16`}
      >
        {text}
      </button>
    );
  };
  return (
    <div>
      <div className="bg-headerImageMain bg-cover bg-center w-full h-[100vh] text-white relative flex flex-col items-start px-4 mt-16">
        <div className="absolute inset-0 bg-gradient-to-t via-transparent from-black to-transparent" />
        <div className="absolute bottom-1/2 node:pr-10 text-2xl pr-16 md:bottom-[30%]">
          <h2 className="font-medium text-3xl">Doświadczaj postępu.</h2>
          <p className="mt-4 pr-20">
            Poznaj nową gamę w pełni elektrycznych modeli Audi Q8 e-tron, z
            zasięgiem blisko 600 km.
          </p>
        </div>
        <div className="flex flex-col w-full bottom-20 fold:max-node:w-[90%] absolute node:left-0 node:px-4 md:w-3/5 md:flex-row md:justify-between md:w-4/5">
          <Button
            text="Poznaj Audi Q8 e-tron"
            border="border-none"
            background="bg-white"
            textColor="text-black"
            height="h-16"
            margin="mb-2"
          />
          <Button
            text="Poznaj Audi Q8 Sportback e-tron"
            border="border-2 border-white"
            background="none"
            height="h-20"
          />
        </div>
      </div>
      <div className="p-4 bg-neutral-700 text-white">
        <h3 className="font-bold text-2xl">Wirtualny salon Audi</h3>
        <DropdownModel />
      </div>
      <div
        className="p-4 w-full ease-in duration-300"
        style={{
          backgroundColor: isDarkMode
            ? themeDark.colors.blackBackground
            : themeLight.colors.whiteBackground,
          color: isDarkMode
            ? themeDark.colors.whiteText
            : themeLight.colors.blackText,
        }}
      >
        <h3 className="text-3xl font-medium">Skonfiguruj swoje Audi</h3>
        <div className="flex flex-row justify-start mt-4 text-lg">
          <button
            className={
              activeButton === "Modele"
                ? "border-b-[1px] border-black"
                : "text-gray-400"
            }
            onClick={() => handleButtonClick("Modele", "CarouselOne")}
          >
            Modele
          </button>
          <button
            className={`
              ${
                activeButton === "Typ nadwozia"
                  ? "border-b-[1px] border-black"
                  : "text-gray-400"
              } ml-8
            `}
            onClick={() => handleButtonClick("Typ nadwozia", "CarouselTwo")}
          >
            Typ nadwozia
          </button>
        </div>
        <div className="mt-4">
          {activeCarousel === "CarouselOne" && <CarouselOne />}
          {activeCarousel === "CarouselTwo" && <CarouselTwo />}
        </div>
      </div>
      <OfferWithoutBackground
        title="Bezkompromisowa oferta Audi Business Edition"
        text="Audi Classic Leasing 104%"
        button="Poznaj ofertę"
      />
      <OfferWithBackground
        title="Nie czekamy na przyszłość. Tworzymy ją."
        text="Poznaj nowe, w pełni elektryczne Audi activesphere concept z rodziny
            samochodów koncepcyjnych sphere."
        button="Dowiedz się więcej"
        background="bg-backgroundEle"
        height="h-1/2"
      />
      <OfferWithoutBackground
        title=" Wyjątkowa oferta na modele z rocznika 2022"
        text="Audi Classing Leasing 103%"
        button="Poznaj ofertę"
      />
      <OfferWithBackground
        title="Elektryczne e-tron GT quattro"
        text="Z ratą już od 5943 zł netto/m-c"
        button="Poznaj ofertę"
        background="bg-etron"
        height="h-1/3"
      />
      <div
        style={{
          backgroundColor: isDarkMode
            ? themeDark.colors.blackBackground
            : themeLight.colors.whiteBackground,
          color: isDarkMode
            ? themeDark.colors.whiteText
            : themeLight.colors.blackText,
        }}
        className="p-10 text-center ease-in duration-300 pb-20"
      >
        <h3 className="font-medium text-2xl node:text-4xl">
          Oferta Audi Perfect Lease
        </h3>
        <p className="my-10 node:text-lg">
          Twoje nowe Audi - w bezkonkurencyjnej ofercie finansowania dla
          przedsiębiorców, z niską miesięczną ratą leasingu.
        </p>
        <button className="node:text-lg">
          Poznaj Audi Perfect Lease{" "}
          <span>
            <ChevronRightIcon />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Main;
