import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Audi } from "../utilities/data/cars";
import "../index.css";
import { useContext } from "react";
import { ThemeContext } from "../utilities/style/ThemeContext";
import { themeDark, themeLight } from "../utilities/style/theme";
import { Link } from "react-router-dom";

interface iModel {
  background?: string;
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
    breakpoint: { max: 3000, min: 731 },
    items: 2,
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
      className="relative w-full xl:w-[90%] xl:max-w-3xl"
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
          className="absolute w-[90%] max-w-sm -top-60 left-1/2 -translate-x-[45%] xl:left-40 h-96 ease-in duration-300 tablet:-top-48 overflow-x-hidden"
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
          <div className="absolute top-1/3 mdmd:top-1/2 nethub:top-1/3 w-full left-1/2 -translate-x-1/2">
            <img
              loading="lazy"
              src={item.imageCar}
              alt={item.name}
              className="max-h-40 absolute left-1/2 -translate-x-1/2"
            />
          </div>
          <div className="text-center mt-3 absolute bottom-5 inset-x-0">
            <button
              className={`border-[2px] w-11/12 text-lg p-3 ease-in duration-300 ${
                isDarkMode ? "border-white" : "border-black"
              }`}
            >
              <Link to={`/Car/${item.id}`}>Poznaj model</Link>
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

const Model = ({ background, textImage, filter }: iModel) => {
  return (
    <>
      <div className="overflow-hidden w-full h-screen tablet:h-[50vh]">
        <div className="absolute w-[90%] h-1/3 tablet:flex">
          <div className="relative w-full h-full nethub:h-[150%] overflow-hidden tablet:w-1/3">
            <img
              src={textImage}
              className="absolute top-0 scale-75 -left-[15%]"
            />
            <picture>
              <img
                src={background}
                className="absolute -right-1/3 h-26 scale-125 tablet:top-1/2 tablet:left-0"
              />
            </picture>
          </div>
          <div className="h-[30rem] bg-transparent tablet:w-2/3 tablet:absolute tablet:left-1/3 xl:w-3/5 overflow-x-hidden">
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
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f83rj7/2022.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/etrongt.svg"
        filter="e-tron"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/gegcvc/2024.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q8etron.svg"
        filter="Q8 e-tron"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/gbaasg/2023.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a1.svg"
        filter="A1"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8yaar/2021.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a3.svg"
        filter="A3"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8wc/2023.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a4.svg"
        filter="A4"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f5pbzg/2023.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a5.svg"
        filter="A5"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/4a2a/2023.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a6.svg"
        filter="A6"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/4ka02y/2023.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a7.svg"
        filter="A7"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/4nc0da/2022.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/a8.svg"
        filter="A8"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/gagbzg/2023.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q2.svg"
        filter="Q2"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f3bbky/2023.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q3.svg"
        filter="Q3"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f4b/2022.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q4.svg"
        filter="Q4"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/fygbuy/2023.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q5.svg"
        filter="Q5"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/4mgcb2/2023.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q7.svg"
        filter="Q7"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/4mn0b2/2023.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/q8.svg"
        filter="Q8"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/fvp08y/2023.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/tt.svg"
        filter="TT"
      />
      <Model
        background="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/4sprde/2022.png?imwidth=850"
        textImage="https://www.audi.pl/bin/nemo.static.20230323062727/cms4i-nemo-mofi/assets/img/modelfinder-2/r8.svg"
        filter="R8"
      />
    </div>
  );
};

export default ModelsComponent;
