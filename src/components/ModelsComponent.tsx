import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Audi } from "../utilities/data/cars";
import "../index.css";
import { useContext } from "react";
import { ThemeContext } from "../utilities/style/ThemeContext";
import { themeDark, themeLight } from "../utilities/style/theme";
import { Link } from "react-router-dom";

interface iModel {
  image?: string;
  filter?: string;
  textImage?: string;
}
const responsiveModel = {
  mobile: {
    breakpoint: { max: 730, min: 0 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1131, min: 731 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1132 },
    items: 3,
  },
};

export const Card = ({ filter }: iModel) => {
  const filterAudi = Audi.filter((name) => name.model === filter);
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <Carousel
      responsive={responsiveModel}
      swipeable={true}
      draggable={false}
      showDots={false}
      ssr={true}
      infinite={false}
      autoPlay={false}
      keyBoardControl={true}
      transitionDuration={500}
      className="relative w-full mt-20 tablet:mt-10"
    >
      {filterAudi.map((item) => (
        <div
          key={item.name}
          style={{
            backgroundColor: isDarkMode
              ? themeDark.colors.blackBackground
              : themeLight.colors.whiteBackground,
            color: isDarkMode
              ? themeDark.colors.whiteText
              : themeLight.colors.blackText,
          }}
          className="relative w-[80%] mdmd:w-72 max-w-sm ml-14 h-96 ease-in duration-300 "
        >
          <div className="p-5 absolute top-0">
            <h4 className="font-bold mb-3">{item.name}</h4>
            {item.price && <p>Cena od {item.price} PLN</p>}
            {item.instalment && (
              <p className="text-neutral-500">
                rata od {item.instalment} PLN (w Audi Perfect Lease dla
                przedsiębiorców - rata netto)
              </p>
            )}
          </div>
          <div className="absolute top-1/3 w-full left-1/2 -translate-x-1/2">
            <img
              loading="lazy"
              src={item.imageCar}
              alt={item.name}
              className="max-h-40 absolute left-1/2 -translate-x-1/2"
            />
          </div>
          <div className="text-center mt-3 absolute bottom-5 inset-x-0">
            <button
              className={`border-[2px] w-11/12 text-lg p-3 ease-in duration-300 hover:scale-y-110 hover:bg-neutral-700 hover:text-white ${
                isDarkMode ? "border-white" : "border-black"
              }`}
            >
              <Link to={`/Car/${item.model}/${item.name}/${item.id}`}>
                Poznaj model
              </Link>
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

const Model = ({ textImage, filter }: iModel) => {
  return (
    <>
      <div className="relative w-full h-[40rem] tablet:h-96 tablet:mb-10">
        <div className="absolute w-full h-full tablet:flex">
          <div className="absolute w-80 h-80 tablet:w-1/5 tablet:h-full">
            <img
              src={textImage}
              className="absolute top-0 tablet:top-1/2 tablet:-translate-y-1/2"
            />
          </div>
          <div className="h-full tablet:w-4/5 tablet:absolute tablet:right-0">
            <Card filter={filter} />
          </div>
        </div>
      </div>
    </>
  );
};

const ModelsComponent = ({ setTheme }: { setTheme: boolean }) => {
  return (
    <div>
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/etrongt.svg"
        filter="e-tron"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q8etron.svg"
        filter="Q8 e-tron"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a1.svg"
        filter="A1"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a3.svg"
        filter="A3"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a4.svg"
        filter="A4"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a5.svg"
        filter="A5"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a6.svg"
        filter="A6"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a7.svg"
        filter="A7"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a8.svg"
        filter="A8"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q2.svg"
        filter="Q2"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q3.svg"
        filter="Q3"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q4.svg"
        filter="Q4"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q5.svg"
        filter="Q5"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q7.svg"
        filter="Q7"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q8.svg"
        filter="Q8"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/tt.svg"
        filter="TT"
      />
      <Model
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/r8.svg"
        filter="R8"
      />
    </div>
  );
};

export default ModelsComponent;
