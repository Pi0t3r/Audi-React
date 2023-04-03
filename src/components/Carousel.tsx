import React, { useState } from "react";
import "../index.css";
import Carousel from "react-multi-carousel";
import { Audi } from "../utilities/data/cars";
export const responsive = {
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  superLarge: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
};
interface iItemBody {
  body?: string;
  title: string;
  filter?: string;
  imageFront: string;
  imageBack?: string;
  imageSide?: string;
}
const Item = ({ filter, imageFront, imageSide, title }: iItemBody) => {
  const [expand, setExpand] = useState<boolean>(false);
  const handleClick = () => {
    setExpand(!expand);
  };
  const filterAudi = Audi.filter((item) => item.model === filter);
  return (
    <>
      <div>
        <picture>
          <img
            onClick={handleClick}
            src={expand ? imageFront : imageSide}
            className="h-26"
          />
        </picture>
        <p
          className={`legend text-lg ${
            expand ? "font-bold border-b-[1px] border-black" : "font-medium"
          }`}
        >
          {title}
        </p>
        {filterAudi.map((item) => (
          <>
            {expand && (
              <div className="relative">
                <div>
                  <img src={item.imageCar} className="h-26" />
                  <p className="text-center">{item.name}</p>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

const Body = ({ body, imageFront, imageBack, title }: iItemBody) => {
  const [expand, setExpand] = useState<boolean>(false);
  const handleClick = () => {
    setExpand(!expand);
  };
  const bodyFilter = Audi.filter((item) =>
    body ? item.body.includes(body) : true
  );
  return (
    <>
      <div>
        <img loading="lazy"
          onClick={handleClick}
          src={expand ? imageFront : imageBack}
          className="h-26"
        />
        <p className={`legend text-lg ${
            expand ? "font-bold border-b-[1px] border-black" : "font-medium"
          }`}>{title}</p>
        {bodyFilter.map((item) => (
          <>
            {expand && (
              <div className="relative">
                <div>
                  <img loading="lazy" src={item.imageCar} className="h-26" />
                  <p className="text-center">{item.name}</p>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
};
export const CarouselOne = () => {
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
        autoPlaySpeed={5000}
        keyBoardControl={true}
        transitionDuration={500}
      >
        <Item
          filter="e-tron"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f83rj7/2022.png?imwidth=291"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f83rj7/2022.png?imwidth=291"
          title="e-tron"
        />
        <Item
          filter="Q8 e-tron"
          title="Q8 e-tron"
          imageFront="/src/utilities/img/Q8-etron/Q8e-tron/q8e-tronside.png"
          imageSide="/src/utilities/img/Q8-etron/Q8e-tron/q8e-tron.png"
        />
        <Item
          filter="A1"
          title="A1"
          imageSide="/src/utilities/img/A1/A1.png"
          imageFront="/src/utilities/img/A1/A1side.png"
        />
        <Item
          filter="A3"
          title="A3"
          imageSide="/src/utilities/img/A3/A3sportback/a3.png"
          imageFront="/src/utilities/img/A3/A3sportback/a3side.png"
        />
        <Item
          filter="A4"
          title="A4"
          imageSide="/src/utilities/img/A4/A4Limousine/a4.png"
          imageFront="/src/utilities/img/A4/A4Limousine/a4side.png"
        />
        <Item
          filter="A5"
          title="A5"
          imageSide="/src/utilities/img/A5/A5Coupe/a5.png"
          imageFront="/src/utilities/img/A5/A5Coupe/a5side.png"
        />
        <Item
          filter="A6"
          title="A6"
          imageFront="/src/utilities/img/A6/A6Limousine/a6side.png"
          imageSide="/src/utilities/img/A6/A6Limousine/a6.png"
        />
        <Item
          filter="A7"
          title="A7"
          imageSide="/src/utilities/img/A7/A7Sportback/a7.png"
          imageFront="/src/utilities/img/A7/A7Sportback/a7side.png"
        />
        <Item
          filter="A8"
          title="A8"
          imageSide="/src/utilities/img/A8/A8/a8.png"
          imageFront="/src/utilities/img/A8/A8/a8side.png"
        />
        <Item
          filter="Q2"
          title="Q2"
          imageFront="/src/utilities/img/Q2/Q2/q2side.png"
          imageSide="/src/utilities/img/Q2/Q2/q2.png"
        />
        <Item
          filter="Q3"
          title="Q3"
          imageFront="/src/utilities/img/Q3/Q3/q3side.png"
          imageSide="/src/utilities/img/Q3/Q3/q3.png"
        />
        <Item
          filter="Q4"
          imageFront="/src/utilities/img/Q4e-tron/Q4e-tron/q4e-tronside.png"
          imageSide="/src/utilities/img/Q4e-tron/Q4e-tron/q4e-tron.png"
          title="Q4 e-tron"
        />
        <Item
          filter="Q5"
          title="Q5"
          imageFront="/src/utilities/img/Q5/Q5/q5side.png"
          imageSide="/src/utilities/img/Q5/Q5/q5.png"
        />
        <Item
          filter="Q7"
          title="Q7"
          imageFront="/src/utilities/img/Q7/Q7/q7side.png"
          imageSide="/src/utilities/img/Q7/Q7/q7.png"
        />
        <Item
          filter="Q8"
          title="Q8"
          imageFront="/src/utilities/img/Q8/Q8/q8side.png"
          imageSide="/src/utilities/img/Q8/Q8/q8.png"
        />
        <Item
          filter="TT"
          title="TT"
          imageFront="/src/utilities/img/TT/TTCoupe/ttside.png"
          imageSide="/src/utilities/img/TT/TTCoupe/tt.png"
        />
        <Item
          filter="R8"
          title="R8"
          imageFront="/src/utilities/img/R8/R8CoupeV10Quattro/r8side.png"
          imageSide="/src/utilities/img/R8/R8CoupeV10Quattro/r8.png"
        />
      </Carousel>
    </div>
  );
};

export const CarouselTwo = () => {
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
        autoPlaySpeed={5000}
        keyBoardControl={true}
        transitionDuration={500}
      >
        <Body
          body="Sportback"
          imageBack="/src/utilities/img/A1/sportback.png"
          imageFront="/src/utilities/img/A1/A1side.png"
          title="Sportback"
        />
        <Body
          body="Compact"
          title="Compact"
          imageBack="/src/utilities/img/A3/A3sportback/compact.png"
          imageFront="/src/utilities/img/A3/A3sportback/a3side.png"
        />
        <Body
          body="Limousine"
          title="Limousine"
          imageBack="/src/utilities/img/A4/A4Limousine/limousine.png"
          imageFront="/src/utilities/img/A4/A4Limousine/a4side.png"
        />
        <Body
          body="Avant"
          imageFront="/src/utilities/img/A4/A4Avant/avantFront.png"
          imageBack="/src/utilities/img/A4/A4Avant/avant.png"
          title="Avant"
        />
        <Body
          body="allroad"
          title="Allroad quattro"
          imageBack="/src/utilities/img/A4/A4Allroad/allroad.png"
          imageFront="/src/utilities/img/A4/A4Allroad/allroadfront.png"
        />
        <Body
          body="Coupe"
          title="Coupe"
          imageFront="/src/utilities/img/A5/A5Coupe/a5side.png"
          imageBack="/src/utilities/img/A5/A5Coupe/coupe.png"
        />
        <Body
          body="Suv"
          title="SUV"
          imageBack="/src/utilities/img/Q2/Q2/suv.png"
          imageFront="/src/utilities/img/Q2/Q2/q2side.png"
        />
        <Body
          body="Sport"
          title="Sport"
          imageBack="/src/utilities/img/A4/RS4Avant/sport.png"
          imageFront="/src/utilities/img/A4/RS4Avant/sportfront.png"
        />
        <Body
          body="Electric"
          title="Electric drive"
          imageBack="/src/utilities/img/Q4e-tron/Q4e-tron/electric.png"
          imageFront="/src/utilities/img/Q4e-tron/Q4e-tron/q4e-tronside.png"
        />
        <Body
          body="plugin"
          title="Plug-in Hybrid"
          imageBack="/src/utilities/img/A3/A3sportbacktfsie/plug-in.png"
          imageFront="/src/utilities/img/A3/A3sportbacktfsie/a3tfsie.png"
        />
        <Body
          body="Alternative"
          title="Alternative drive"
          imageBack="/src/utilities/img/A6/A6LimousineTFSIe/alternative.png"
          imageFront="/src/utilities/img/A6/A6LimousineTFSIe/alternativefront.png"
        />
        <Body
          body="Spyder"
          title="Spyder"
          imageBack="/src/utilities/img/R8/R8SpyderRWD/spyder.png"
          imageFront="/src/utilities/img/R8/R8SpyderRWD/r8spyderfront.png"
        />
      </Carousel>
    </div>
  );
};
