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
        <p className={`legend text-lg ${expand ? "font-bold" : "font-medium"}`}>
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
        <img
          onClick={handleClick}
          src={expand ? imageFront : imageBack}
          className="h-26"
        />
        <p className="legend font-medium text-lg">{title}</p>
        {bodyFilter.map((item) => (
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
          imageSide="/src/utilities/img/e-tron/e-tronGT/etrongt.webp"
          imageFront="/src/utilities/img/e-tron/e-tronGT/side.webp"
          title="e-tron"
        />
        <Item
          filter="Q8 e-tron"
          title="Q8 e-tron"
          imageFront="/src/utilities/img/Q8-etron/Q8e-tron/q8e-tronside.webp"
          imageSide="/src/utilities/img/Q8-etron/Q8e-tron/q8e-tron.webp"
        />
        <Item
          filter="A1"
          title="A1"
          imageSide="/src/utilities/img/A1/A1.webp"
          imageFront="/src/utilities/img/A1/A1side.webp"
        />
        <Item
          filter="A3"
          title="A3"
          imageSide="/src/utilities/img/A3/A3sportback/a3.webp"
          imageFront="/src/utilities/img/A3/A3sportback/a3side.webp"
        />
        <Item
          filter="A4"
          title="A4"
          imageSide="/src/utilities/img/A4/A4Limousine/a4.webp"
          imageFront="/src/utilities/img/A4/A4Limousine/a4side.webp"
        />
        <Item
          filter="A5"
          title="A5"
          imageSide="/src/utilities/img/A5/A5Coupe/a5.webp"
          imageFront="/src/utilities/img/A5/A5Coupe/a5side.webp"
        />
        <Item
          filter="A6"
          title="A6"
          imageFront="/src/utilities/img/A6/A6Limousine/a6side.webp"
          imageSide="/src/utilities/img/A6/A6Limousine/a6.webp"
        />
        <Item
          filter="A7"
          title="A7"
          imageSide="/src/utilities/img/A7/A7Sportback/a7.webp"
          imageFront="/src/utilities/img/A7/A7Sportback/a7side.webp"
        />
        <Item
          filter="A8"
          title="A8"
          imageSide="/src/utilities/img/A8/A8/a8.webp"
          imageFront="/src/utilities/img/A8/A8/a8side.webp"
        />
        <Item
          filter="Q2"
          title="Q2"
          imageFront="/src/utilities/img/Q2/Q2/q2side.webp"
          imageSide="/src/utilities/img/Q2/Q2/q2.webp"
        />
        <Item
          filter="Q3"
          title="Q3"
          imageFront="/src/utilities/img/Q3/Q3/q3side.webp"
          imageSide="/src/utilities/img/Q3/Q3/q3.webp"
        />
        <Item
          filter="Q4"
          imageFront="/src/utilities/img/Q4e-tron/Q4e-tron/q4e-tronside.webp"
          imageSide="/src/utilities/img/Q4e-tron/Q4e-tron/q4e-tron.webp"
          title="Q4 e-tron"
        />
        <Item
          filter="Q5"
          title="Q5"
          imageFront="/src/utilities/img/Q5/Q5/q5side.webp"
          imageSide="/src/utilities/img/Q5/Q5/q5.webp"
        />
        <Item
          filter="Q7"
          title="Q7"
          imageFront="/src/utilities/img/Q7/Q7/q7side.webp"
          imageSide="/src/utilities/img/Q7/Q7/q7.webp"
        />
        <Item
          filter="Q8"
          title="Q8"
          imageFront="/src/utilities/img/Q8/Q8/q8side.webp"
          imageSide="/src/utilities/img/Q8/Q8/q8.webp"
        />
        <Item
          filter="TT"
          title="TT"
          imageFront="/src/utilities/img/TT/TTCoupe/ttside.webp"
          imageSide="/src/utilities/img/TT/TTCoupe/tt.webp"
        />
        <Item
          filter="R8"
          title="R8"
          imageFront="/src/utilities/img/R8/R8CoupeV10Quattro/r8side.webp"
          imageSide="/src/utilities/img/R8/R8CoupeV10Quattro/r8.webp"
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
          imageBack="/src/utilities/img/A1/sportback.webp"
          imageFront="/src/utilities/img/A1/A1side.webp"
          title="Sportback"
        />
        <Body
          body="Compact"
          title="Compact"
          imageBack="/src/utilities/img/A3/A3sportback/compact.webp"
          imageFront="/src/utilities/img/A3/A3sportback/a3side.webp"
        />
        <Body
          body="Limousine"
          title="Limousine"
          imageBack="/src/utilities/img/A4/A4Limousine/limousine.webp"
          imageFront="/src/utilities/img/A4/A4Limousine/a4side.webp"
        />
        <Body
          body="Avant"
          imageFront="/src/utilities/img/A4/A4Avant/avantFront.webp"
          imageBack="/src/utilities/img/A4/A4Avant/avant.webp"
          title="Avant"
        />
        <Body
          body="allroad"
          title="Allroad quattro"
          imageBack="/src/utilities/img/A4/A4Allroad/allroad.webp"
          imageFront="/src/utilities/img/A4/A4Allroad/allroadfront.webp"
        />
        <Body
          body="Coupe"
          title="Coupe"
          imageFront="/src/utilities/img/A5/A5Coupe/a5side.webp"
          imageBack="/src/utilities/img/A5/A5Coupe/coupe.webp"
        />
        <Body
          body="Suv"
          title="SUV"
          imageBack="/src/utilities/img/Q2/Q2/suv.webp"
          imageFront="/src/utilities/img/Q2/Q2/q2side.webp"
        />
        <Body
          body="Sport"
          title="Sport"
          imageBack="/src/utilities/img/A4/RS4Avant/sport.webp"
          imageFront="/src/utilities/img/A4/RS4Avant/sportfront.webp"
        />
        <Body
          body="Electric"
          title="Electric drive"
          imageBack="/src/utilities/img/Q4e-tron/Q4e-tron/electric.webp"
          imageFront="/src/utilities/img/Q4e-tron/Q4e-tron/q4e-tronside.webp"
        />
        <Body
          body="plugin"
          title="Plug-in Hybrid"
          imageBack="/src/utilities/img/A3/A3sportbacktfsie/plug-in.webp"
          imageFront="/src/utilities/img/A3/A3sportbacktfsie/a3tfsie.webp"
        />
        <Body
          body="Alternative"
          title="Alternative drive"
          imageBack="/src/utilities/img/A6/A6LimousineTFSIe/alternative.webp"
          imageFront="/src/utilities/img/A6/A6LimousineTFSIe/alternativefront.webp"
        />
        <Body
          body="Spyder"
          title="Spyder"
          imageBack="/src/utilities/img/R8/R8SpyderRWD/spyder.webp"
          imageFront="/src/utilities/img/R8/R8SpyderRWD/r8spyderfront.webp"
        />
      </Carousel>
    </div>
  );
};
