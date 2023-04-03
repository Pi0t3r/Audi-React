import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../components/Carousel";
import { Audi } from "../utilities/data/cars";
import "../index.css";
import { useContext } from "react";
import { ThemeContext } from "../utilities/style/ThemeContext";
import { themeDark, themeLight } from "../utilities/style/theme";

interface iModel {
  background?: string;
  image?: string;
  filter?: string;
  textImage?: string;
}

const Card = ({ filter }: iModel) => {
  const filterAudi = Audi.filter((name) => name.model === filter);
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        ssr={true}
        infinite={false}
        autoPlay={false}
        keyBoardControl={true}
        transitionDuration={500}
        removeArrowOnDeviceType={["mobile"]}
      >
        {filterAudi.map((item) => (
          <div
            style={{
              backgroundColor: isDarkMode
                ? themeDark.colors.blackBackground
                : themeLight.colors.whiteBackground,
              color: isDarkMode
                ? themeDark.colors.whiteText
                : themeLight.colors.blackText,
            }}
            className="absolute -top-60 inset-x-5 h-96 ease-in duration-300"
          >
            <div className="h-[45%] p-5">
              <h4 className="font-bold mb-3">{item.name}</h4>
              {item.price && <p>Cena od {item.price} PLN</p>}
              {item.instalment && (
                <p className="text-neutral-500">
                  rata od {item.instalment} PLN (w Audi Perfect Lease dla
                  przedsiębiorców - rata netto)
                </p>
              )}
            </div>
            <div>
              <img
                loading="lazy"
                src={item.imageCar}
                alt={item.alt}
                className="h-26"
              />
            </div>
            <div className="text-center mt-3">
              <button
                className={`border-[2px] w-11/12 text-lg p-3 ease-in duration-300 ${
                  isDarkMode ? "border-white" : "border-black"
                }`}
              >
                Poznaj model
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

const Model = ({ background, textImage, filter }: iModel) => {
  return (
    <>
      <div className="overflow-hidden w-full h-screen">
        <div className="absolute w-full h-1/3">
          <div className="relative w-full h-full overflow-x-hidden">
            <img
              loading="lazy"
              src={textImage}
              className="absolute top-0 scale-75 -left-[15%]"
            />
            <img
              loading="lazy"
              src={background}
              className="absolute -right-1/3 h-26"
            />
          </div>
          <div className="h-[30rem]">
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
        background="/src/utilities/img/e-tron/e-tronGT/side.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/etrongt.svg"
        filter="e-tron"
      />
      <Model
        background="/src/utilities/img/Q8-etron/Q8e-tron/q8e-tronside.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q8etron.svg"
        filter="Q8 e-tron"
      />
      <Model
        background="/src/utilities/img/A1/A1side.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a1.svg"
        filter="A1"
      />
      <Model
        background="/src/utilities/img/A3/A3sportback/a3side.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a3.svg"
        filter="A3"
      />
      <Model
        background="/src/utilities/img/A4/A4Avant/avantFront.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a4.svg"
        filter="A4"
      />
      <Model
        background="/src/utilities/img/A5/A5Coupe/a5side.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a5.svg"
        filter="A5"
      />
      <Model
        background="/src/utilities/img/A6/A6Limousine/a6side.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a6.svg"
        filter="A6"
      />
      <Model
        background="/src/utilities/img/A7/A7Sportback/a7side.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a7.svg"
        filter="A7"
      />
      <Model
        background="/src/utilities/img/A8/A8/a8side.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a8.svg"
        filter="A8"
      />
      <Model
        background="/src/utilities/img/Q2/Q2/q2side.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q2.svg"
        filter="Q2"
      />
      <Model
        background="/src/utilities/img/Q3/Q3/q3side.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q3.svg"
        filter="Q3"
      />
      <Model
        background="/src/utilities/img/Q4e-tron/Q4e-tron/q4e-tronside.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q4.svg"
        filter="Q4"
      />
      <Model
        background="/src/utilities/img/Q5/Q5/q5side.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q5.svg"
        filter="Q5"
      />
      <Model
        background="/src/utilities/img/Q7/Q7/q7side.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q7.svg"
        filter="Q7"
      />
      <Model
        background="/src/utilities/img/Q8/Q8/q8side.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q8.svg"
        filter="Q8"
      />
      <Model
        background="/src/utilities/img/TT/TTCoupe/ttside.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/tt.svg"
        filter="TT"
      />
      <Model
        background="/src/utilities/img/R8/R8CoupeV10Quattro/r8side.png"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/r8.svg"
        filter="R8"
      />
    </div>
  );
};

export default ModelsComponent;