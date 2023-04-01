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
        <img
          onClick={handleClick}
          src={expand ? imageFront : imageSide}
          className="h-26"
        />
        <p className="legend font-medium text-lg">{title}</p>
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
          imageSide="/src/utilities/img/e-tron/etrongt.webp"
          imageFront="/src/utilities/img/e-tron/side.webp"
          title="e-tron"
        />
        <Item
          filter="Q8 e-tron"
          title="Q8 e-tron"
          imageFront="/src/utilities/img/Q8/Q8side.webp"
          imageSide="/src/utilities/img/Q8/q8.webp"
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
          imageFront="/src/utilities/img/A3/a3side.webp"
          imageSide="/src/utilities/img/A3/a3.webp"
        />
        <Item
          filter="A4"
          title="A4"
          imageSide="/src/utilities/img/A4/a4.webp"
          imageFront="/src/utilities/img/A4/a4side.webp"
        />
        <Item
          filter="A5"
          title="A5"
          imageFront="/src/utilities/img/A5/a5side.webp"
          imageSide="/src/utilities/img/A5/a5.webp"
        />
        <Item
          filter="A6"
          title="A6"
          imageFront="/src/utilities/img/A6/a6side.webp"
          imageSide="/src/utilities/img/A6/a6.webp"
        />
        <Item
          filter="A7"
          title="A7"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4ka02y/2023.png?imwidth=550"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/4ka02y/2023.png?imwidth=291"
        />
        <Item
          filter="A8"
          title="A8"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4nc0da/2022.png?imwidth=550"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/4nc0da/2022.png?imwidth=291"
        />
        <Item
          filter="Q2"
          title="Q2"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/gagbzg/2023.png?imwidth=291"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/gagbzg/2023.png?imwidth=550"
        />
        <Item
          filter="Q3"
          title="Q3"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f3bbky/2023.png?imwidth=291"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f3bbky/2023.png?imwidth=550"
        />
        <Item
          filter="Q4"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f4b/2022.png?imwidth=291"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f4b/2022.png?imwidth=550"
          title="Q4 e-tron"
        />
        <Item
          filter="Q5"
          title="Q5"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f4b/2022.png?imwidth=291"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/fygbuy/2023.png?imwidth=550"
        />
        <Item
          filter="Q7"
          title="Q7"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/4mgcb2/2023.png?imwidth=291"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4mgcb2/2023.png?imwidth=550"
        />
        <Item
          filter="Q8"
          title="Q8"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/4mn0b2/2023.png?imwidth=291"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4mn0b2/2023.png?imwidth=550"
        />
        <Item
          filter="TT"
          title="TT"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/fvp08y/2023.png?imwidth=291"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/fvp08y/2023.png?imwidth=550"
        />
        <Item
          filter="R8"
          title="R8"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/4sprde/2022.png?imwidth=291"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4sprde/2022.png?imwidth=550"
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
          imageBack="/src/utilities/img/bodyType/sportback.webp"
          imageFront="/src/utilities/img/A1/A1side.webp"
          title="Sportback"
        />
        <Body
          body="Compact"
          title="Compact"
          imageBack="/src/utilities/img/bodyType/compact.webp"
          imageFront="/src/utilities/img/A3/a3side.webp"
        />
        <Body
          body="Limousine"
          title="Limousine"
          imageBack="/src/utilities/img/bodyType/limousine.webp"
          imageFront="/src/utilities/img/A4/a4side.webp"
        />
        <Body
          body="Avant"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8wd/2023.png?imwidth=291"
          imageBack="https://mediaservice.audi.com/media/live/50900/fly1400x601n6/8wd/2023.png?imwidth=291"
          title="Avant"
        />
        <Body
          body="allroad"
          title="Allroad quattro"
          imageBack="/src/utilities/img/bodyType/allroad.webp"
          imageFront="/src/utilities/img/bodyType/allroadfront.webp"
        />
        <Body
          body="Coupe"
          title="Coupe"
          imageFront="/src/utilities/img/A5/a5side.webp"
          imageBack="/src/utilities/img/bodyType/coupe.webp"
        />
        <Body
          body="Suv"
          title="SUV"
          imageBack="/src/utilities/img/bodyType/avant.webp"
          imageFront="/src/utilities/img/A6/a6side.webp"
        />
        <Body
          body="Sport"
          title="Sport"
          imageBack="/src/utilities/img/bodyType/sport.webp"
          imageFront="/src/utilities/img/bodyType/sportfront.webp"
        />
        <Body
          body="Electric"
          title="Electric drive"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f4b/2022.png?imwidth=291"
          imageBack="https://mediaservice.audi.com/media/live/50900/fly1400x601n6/f4b/2022.png?imwidth=291"
        />
        <Body
          body="plugin"
          title="Plug-in Hybrid"
          imageBack="/src/utilities/img/bodyType/plug-in.webp"
          imageFront="/src/utilities/img/A3/a3side.webp"
        />
        <Body
          body="Alternative"
          title="Alternative drive"
          imageBack="https://mediaservice.audi.com/media/live/50900/fly1400x601n6/4a2bqy/2023.png?imwidth=291"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/4a2bqy/2023.png?imwidth=291"
        />
        <Body
          body="Spyder"
          title="Spyder"
          imageBack="https://mediaservice.audi.com/media/live/50900/fly1400x601n6/4srrde/2022.png?imwidth=291"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/4srrde/2022.png?imwidth=291"
        />
      </Carousel>
    </div>
  );
};
