import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CarouselOne, CarouselTwo } from "../components/Carousel";
import { useState } from "react";
interface iButton {
  text: string;
  border: string;
  background: string;
  textColor?: string;
  height: string;
  margin?: string;
}

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
      className={`${border} ${background} ${textColor} w-full ${height} ${margin} font-medium text-xl cursor-pointer`}
    >
      {text}
    </button>
  );
};

function Main() {
  const [activeButton, setActiveButton] = useState("Modele");
  const [activeCarousel, setActiveCarousel] = useState("CarouselOne");
  const handleButtonClick = (buttonName: string, carouselName: string) => {
    setActiveButton(buttonName);
    setActiveCarousel(carouselName);
  };
  return (
    <div>
      <div className="bg-headerImageMain bg-cover bg-center w-full h-[30rem] text-white relative flex flex-col items-start px-4 mt-16">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-[10%] text-2xl pr-16">
          <h2 className="font-medium text-3xl">Doświadczaj postępu.</h2>
          <p className="mt-4">
            Poznaj bliżej rodzinne sportowe kombi Audi RS6.
          </p>
        </div>
        <div className="flex flex-col w-72 bottom-10 absolute">
          <Button
            text="Poznaj Audi RS6"
            border="border-none"
            background="bg-white"
            textColor="text-black"
            height="h-16"
            margin="mb-2"
          />
          <Button
            text="Poznaj gamę Audi A6"
            border="border-2 border-white"
            background="none"
            height="h-20"
          />
        </div>
      </div>
      <div className="p-4 bg-neutral-600 text-white">
        <h3 className="font-bold text-2xl">Wirtualny salon Audi</h3>
        <p className="font-light py-2">Model</p>
        <div className="flex flex-row justify-between font-medium border-b-2 border-white">
          <p>A1 Sportback</p> <KeyboardArrowDownIcon />
        </div>
        <div className="flex flex-col mt-4">
          <p>
            <span className="font-bold">17</span> samochody nowe{" "}
            <ChevronRightIcon />
          </p>
          <p>
            <span className="font-bold">5</span> samochody używane{" "}
            <ChevronRightIcon />
          </p>
        </div>
      </div>
      <div className="p-4 w-full">
        <h3 className="text-3xl font-medium">Skonfiguruj swoje Audi</h3>
        <div className="flex flex-row justify-between mt-4 text-lg">
          <button
            className={
              activeButton === "Modele"
                ? "border-b-2 border-black"
                : "text-gray-400"
            }
            onClick={() => handleButtonClick("Modele", "CarouselOne")}
          >
            Modele
          </button>
          <button
            className={
              activeButton === "Typ nadwozia"
                ? "border-b-2 border-black"
                : "text-gray-400"
            }
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
    </div>
  );
}

export default Main;
