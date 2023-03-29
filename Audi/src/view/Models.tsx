import Nav from "./Nav";
import { useContext } from "react";
import { ThemeContext } from "../utilities/style/ThemeContext";
import { themeDark, themeLight } from "../utilities/style/theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../components/Carousel";
import { Audi } from "../utilities/data/cars";
import "../index.css";
interface iModel {
  background?: string;
  image?: string;
  alt?: string;
  filter?: string;
  textImage?: string;
}

const Card = ({ alt, image, filter }: iModel) => {
  const filterAudi = Audi.filter((name) => name.model === filter);
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
          <div className="bg-white absolute -top-60 inset-x-5 h-96">
            <div className="h-[45%] p-5">
              <h4 className="font-bold mb-3">{item.name}</h4>
              <p>Cena od {item.price} PLN</p>
              <p className="text-neutral-500">
                rata od {item.instalment} PLN (w Audi Perfect Lease dla
                przedsiębiorców - rata netto)
              </p>
            </div>
            <div>
              <img src={item.imageCar} alt={item.alt} />
            </div>
            <div className="text-center mt-3">
              <button className="border-[1px] w-11/12 text-lg p-3 border-black">
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
          <div className="relative w-full h-[90%] overflow-x-hidden">
            <img
              src={textImage}
              className="absolute top-0 scale-75 -left-[15%]"
            />
            <img
              src={background}
              className="absolute top-10 -right-1/3 scale-125"
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

function Models() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
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
          } text-black p-5 text-2xl ease-in duration-300`}
        >
          <button>
            Otwórz filtry{" "}
            <span className="ml-5">
              <KeyboardArrowDownIcon />
            </span>
          </button>
        </div>
        <div className="w-full bg-[#f2f2f2]">
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
        </div>
      </div>
    </div>
  );
}

export default Models;
