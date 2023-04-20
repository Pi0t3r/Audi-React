import React, { useContext } from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { Audi } from "../utilities/data/cars";
import Carousel from "react-multi-carousel";
import "../index.css";
import Footer from "./Footer";
import { ThemeContext } from "../utilities/style/ThemeContext";
const responsive = {
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  superLarge: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
};
interface iItem {
  image: string;
  title: string;
  text: string;
}

const Item = ({ image, title, text }: iItem) => {
  return (
    <div className="tablet:flex">
      <img src={image}  className="tablet:w-1/2"/>
      <div className="px-10 flex items-center justify-center">
        <p className="font-light text-sm tablet:text-lg">
          <span className="font-bold mr-2">{title}:</span>
          {text}
        </p>
      </div>
    </div>
  );
};

function Car() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const { carID } = useParams<{ carID: string }>();
  const car = Audi.find((car) => car.id.toString() === carID);
  if (!car) {
    return <div>Car not found</div>;
  }
  return (
    <div>
      <Nav />
      <div className="mt-16">
        <>
          <picture className="relative">
            <source media="(max-width:435px)" srcSet={car.headerImage} />
            <source
              media="(min-width: 436px) and (max-width:765px)"
              srcSet={car.headerImage2}
            />
            <source media="(min-width: 766px)" srcSet={car.headerImage3} />
            <img src={car.headerImage} alt={car.name} />
            <div className="absolute inset-0 shadow-[inset_0px_-100px_35px_2px_black;] p-5">
              <h2 className="text-3xl font-medium text-white mb-4 absolute bottom-20 left-5 z-10 xl:text-5xl">
                {car.name}
              </h2>
              <div
                className={`absolute inset-0 ${
                  isDarkMode ? "bg-black/70" : "bg-transparent"
                } ease-in duration-300`}
              />
            </div>
          </picture>
          {car.emission && (
            <div className="bg-black text-white p-5 -mt-5 md:flex md:justify-between">
              <p>
                Emicja CO<sub>2</sub> w cyklu mieszkanym:{" "}
                <span className="font-bold italic">{car.emission} g/km</span>
              </p>
              <p>
                Zużycie w cyklu mieszanym:{" "}
                <span className="font-bold italic">{car.consumption}</span>
              </p>
            </div>
          )}
        </>
        <div
          className={`${car.fixedBackground} bg-cover bg-center bg-fixed w-full h-[35rem] flex items-center justify-center md:items-start md:justify-start md:pt-10 `}
        >
          <div
            className={`${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            } text-left p-10 mx-5 ease-in duration-300 tablet:max-w-lg`}
          >
            <h3 className="font-bold text-xl">{car.cardTitle}</h3>
            <p
              className={`mt-6 font-medium ${
                isDarkMode ? "text-neutral-100" : "text-neutral-700"
              } ease-in duration-300`}
            >
              {car.cardText}
            </p>
          </div>
        </div>
        <div
          className={`text-center text-4xl font-medium px-5 ease-in duration-300 ${
            isDarkMode ? "bg-black text-white" : "bg-white text black"
          }`}
        >
          <h3 className="pt-5 h-20">Audi {car.name} w liczbach</h3>
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:pb-10 md:px-10">
            <div className="text-base mt-14 border-b-[1px] md:border-none pb-5 flex-1">
              <p className="font-bold text-lg">Moc</p>
              <p className="font-light">
                <span className="font-bold text-3xl pr-5">
                  {car.power?.kilowatt}
                </span>
                kW
              </p>
              {car.power?.hp && <p>({car.power?.hp} KM)</p>}
            </div>
            <div className="text-base mt-14 border-b-[1px] md:border-none pb-5 flex-1 ">
              <p className="font-bold text-lg">Przyśpieszenie (0-100km/h)</p>
              <p>
                <span className="pr-5 text-3xl font-bold">
                  {car.power?.speed}
                </span>
                sek.
              </p>
            </div>
            {car.power?.Nm && (
              <div className="text-base mt-14 border-b-[1px] md:border-none pb-5 flex-1 ">
                <p className="font-bold text-lg">Maksymalny moment obrotowy</p>
                <p>
                  <span className="pr-5 text-3xl font-bold">
                    {car.power?.Nm}
                  </span>
                  Nm
                </p>
              </div>
            )}
            {car.power?.acumulator && (
              <div className="text-base mt-14 border-b-[1px] pb-5">
                <p className="font-bold pb-2">
                  Pojemność akumulatora (netto) do
                </p>
                <p>
                  <span className="pr-5 text-3xl font-bold">
                    {car.power?.acumulator}
                  </span>
                  kWh
                </p>
              </div>
            )}
          </div>
        </div>
        {car.price && (
          <div className="bg-black text-white p-5 md:text-center">
            <h3>
              Tylko w cenie od {car.price} PLN lub od {car.instalment} PLN /mc
            </h3>
          </div>
        )}
        <div
          className={`${
            isDarkMode ? "bg-black text-white" : "bg-slate-50 text-black"
          } ease-in duration-300`}
        >
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={false}
            showDots={true}
            ssr={true}
            infinite={false}
            autoPlay={false}
            keyBoardControl={true}
            removeArrowOnDeviceType={[
              "mobile",
              "tablet",
              "desktop",
              "superLarge",
            ]}
          >
            <Item
              image={car.carousel.image1}
              title={car.carousel.title1}
              text={car.carousel.text1}
            />
            <Item
              image={car.carousel.image2}
              title={car.carousel.title2}
              text={car.carousel.text2}
            />
            <Item
              image={car.carousel.image3}
              title={car.carousel.title3}
              text={car.carousel.text3}
            />
          </Carousel>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Car;
