import Nav from "./Nav";
import { useContext } from "react";
import { ThemeContext } from "../utilities/style/ThemeContext";
import { themeDark, themeLight } from "../utilities/style/theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../components/Carousel";
import { Audi } from "../utilities/data/cars";
interface iCard {
  model: string;
  price: number;
  instalment: number;
  background: string;
  image: string;
  alt: string;
}
interface iCardsProps {
  cards?: iCard[];
  name:string,
}

const Card = ({ model, price, instalment, background, image, alt }: iCard) => {
  return (
    <>
      <div className="w-full overflow-hidden h-screen ">
        <div className="absolute w-full h-1/5">
          <div>
            <img
              src="https://www.audi.pl/bin/nemo.static.20230323062350/cms4i-nemo-mofi/assets/img/modelfinder-2/etrongt.svg"
              className="absolute top-0 "
            />
            <img
              src={background}
              className="absolute top-10 -right-1/3 scale-150"
            />
          </div>

          <div className="bg-white absolute top-[130%] inset-x-0 h-96 mx-5">
            <div className="h-[45%] p-5">
              <h4 className="font-bold mb-3">{model}</h4>
              <p>Cena od {price} PLN</p>
              <p className="text-neutral-500">
                rata od {instalment} PLN (w Audi Perfect Lease dla
                przedsiębiorców - rata netto)
              </p>
            </div>
            <div className="w-full h-1/3">
              <img src={image} alt={alt} />
            </div>
            <div className="text-center">
              <button className="border-[1px] w-[90%] text-lg p-5 border-black">
                Poznaj model
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Cards = ({ cards }: iCardsProps) => {
  // const filterAudi = Audi.filter((name))
  return (
    <div>
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
        {cards?.map((card, index) => (
          <Card
            key={index}
            model={card.model}
            price={card.price}
            instalment={card.instalment}
            image={card.image}
            alt={card.alt}
            background={card.background}
          />
        ))}
      </Carousel>
    </div>
  );
};

function Models() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const cardsData: iCard[] = [
    
    {
      model: "e-tron GT quattro",
      price: 468000,
      instalment: 5943,
      alt: "side view for car e-tron GT quattro",
      background:
        "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f83rj7/2022.png?imwidth=850",
      image:
        "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f83rj7/2022.png?imwidth=550",
    },
    {
      model: "RS e-tron GT",
      price: 630600,
      instalment: 8007,
      alt: "side view for car RS e-tron GT",
      background:
        "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f83rj7/2022.png?imwidth=850",
      image:
        "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f83rh7/2022.png?imwidth=550",
    },
  ];
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
          <Cards cards={cardsData} />
        </div>
      </div>
    </div>
  );
}

export default Models;
