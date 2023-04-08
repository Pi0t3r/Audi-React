import React from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { Audi } from "../utilities/data/cars";
import Carousel from "react-multi-carousel";
import "../index.css";
import Footer from "./Footer";
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

function Car() {
  const { carID } = useParams<{ carID: string }>();
  const car = Audi.find((car) => car.id.toString() === carID);
  if (!car) {
    return <div>Car not found</div>;
  }
  return (
    <>
      <Nav />
      <div className="mt-16">
        <>
          <picture className="relative">
            <img src={car.headerImage} alt={car.name} />
            <div className="absolute inset-0 shadow-[inset_0px_-100px_35px_2px_black;] p-5">
              <h2 className="text-3xl font-medium text-white mb-4 absolute bottom-36 left-5">
                {car.name}
              </h2>
              <button className="bg-white p-4 text-lg bottom-20 inset-x-5 absolute">
                Rozpocznij konfigurację
              </button>
            </div>
          </picture>
          {car.emission && (
            <div className="bg-black text-white p-5 -mt-5">
              <p>
                Emicja CO<sub>2</sub> w cyklu mieszkanym: {car.emission} g/km
              </p>
              <p>Zużycie w cyklu mieszanym: {car.consumption}</p>
            </div>
          )}
        </>
        <div className="relative flex items-center justify-center">
          <img
            src={car.fixedBackground}
            className="bg-fixed bg-cover bg-center"
          />
          <div className="absolute top-32  inset-x-3 bg-white text-left p-10">
            <h3 className="font-bold text-xl">{car.cardTitle}</h3>
            <p className="mt-6 text-neutral-700 font-medium">{car.cardText}</p>
          </div>
        </div>
        <div className="text-center mt-10 text-4xl font-medium px-5">
          <h3>Audi {car.name} w liczbach</h3>
          <div className="text-base mt-14 border-b-[1px] pb-5">
            <p className="font-bold text-lg">Moc</p>
            <p className="font-light">
              <span className="font-bold text-3xl pr-5">
                {car.power?.kilowatt}
              </span>
              kW
            </p>
            {car.power?.hp && <p>({car.power?.hp} KM)</p>}
          </div>
          <div className="text-base mt-14 border-b-[1px] pb-5">
            <p className="font-bold text-lg">Przyśpieszenie (0-100km/h)</p>
            <p>
              <span className="pr-5 text-3xl font-bold">
                {car.power?.speed}
              </span>
              sek.
            </p>
          </div>
          {car.power?.Nm && (
            <div className="text-base mt-14 border-b-[1px] pb-5">
              <p className="font-bold text-lg">Maksymalny moment obrotowy</p>
              <p>
                <span className="pr-5 text-3xl font-bold">{car.power?.Nm}</span>
                Nm
              </p>
            </div>
          )}
          {car.power?.acumulator && (
            <div className="text-base mt-14 border-b-[1px] pb-5">
              <p className="font-bold pb-2">Pojemność akumulatora (netto) do</p>
              <p>
                <span className="pr-5 text-3xl font-bold">
                  {car.power?.acumulator}
                </span>
                kWh
              </p>
            </div>
          )}
        </div>
        {car.price && (
          <div className="bg-black text-white p-5">
            <h3>
              Tylko w cenie od {car.price} PLN lub od {car.instalment} PLN /mc
            </h3>
          </div>
        )}
        <div className="bg-white">
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
            <>
              <img src={car.carousel?.image1} />
              <div className="p-5">
                <p className="font-light text-sm">
                  <span className="font-bold mr-2">
                    {car.carousel?.title1}:
                  </span>
                  {car.carousel?.text1}
                </p>
              </div>
            </>
            <>
              <img src={car.carousel?.image2} />
              <div className="p-5">
                <p className="font-light text-sm">
                  <span className="font-bold mr-2">
                    {car.carousel?.title2}:
                  </span>
                  {car.carousel?.text2}
                </p>
              </div>
            </>
            <>
              <img src={car.carousel?.image3} />
              <div className="p-5">
                <p className="font-light text-sm">
                  <span className="font-bold mr-2">
                    {car.carousel?.title3}:
                  </span>
                  {car.carousel?.text3}
                </p>
              </div>
            </>
          </Carousel>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Car;
