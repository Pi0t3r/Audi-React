import React, { useState } from "react";
import "../index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

interface iItem {
  filter: string;
  imageFront: string;
  imageSide: string;
  title: string;
}

const Item = ({ filter, imageFront, imageSide, title }: iItem) => {
  const [expand, setExpand] = useState<boolean>(false);
  const handleClick = () => {
    setExpand(!expand);
  };
  const filterAudi = Audi.filter((item) => item.model === filter);
  return (
    <>
      <div>
        <img onClick={handleClick} src={expand ? imageFront : imageSide} />
        <p className="legend font-medium text-lg">{title}</p>
        {filterAudi.map((item) => (
          <>
            {expand && (
              <div className="relative">
                <div>
                  <img src={item.imageCar} />
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
interface iBody {
  body: string;
  title: string;
  imageFront: string;
  imageBack: string;
}
const Body = ({ body, imageFront, imageBack, title }: iBody) => {
  const [expand, setExpand] = useState<boolean>(false);
  const handleClick = () => {
    setExpand(!expand);
  };
  const bodyFilter = Audi.filter((item) => item.body.includes(body));
  return (
    <>
      <div>
        <img onClick={handleClick} src={expand ? imageFront : imageBack} />
        <p className="legend font-medium text-lg">{title}</p>
        {bodyFilter.map((item) => (
          <>
            {expand && (
              <div className="relative">
                <div>
                  <img src={item.imageCar} />
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
        removeArrowOnDeviceType={["mobile"]}
      >
        <Item
          filter="e-tron"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f83rj7/2022.png?imwidth=550"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f83rj7/2022.png?imwidth=291"
          title="e-tron"
        />
        <Item
          filter="Q8 e-tron"
          title="Q8 e-tron"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/gegcvc/2024.png?imwidth=291"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/gegcvc/2024.png?imwidth=291"
        />
        <Item
          filter="A1"
          title="A1"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/gbaasg/2023.png?imwidth=291"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/gbaasg/2023.png?imwidth=550"
        />
        <Item
          filter="A3"
          title="A3"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8yaar/2021.png?imwidth=291"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8yaar/2021.png?imwidth=550"
        />
        <Item
          filter="A4"
          title="A4"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8wc/2023.png?imwidth=550"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8wc/2023.png?imwidth=291"
        />
        <Item
          filter="A5"
          title="A5"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f5pbzg/2023.png?imwidth=291"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f5pbzg/2023.png?imwidth=550"
        />
        <Item
          filter="A6"
          title="A6"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/4a2a/2023.png?imwidth=291"
          imageSide="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4a2a/2023.png?imwidth=550"
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
        removeArrowOnDeviceType={["mobile"]}
      >
        <Body
          body="Sportback"
          imageBack="https://mediaservice.audi.com/media/live/50900/fly1400x601n6/gbaasg/2023.png?imwidth=291"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/gbaasg/2023.png?imwidth=291"
          title="Sportback"
        />
        <Body
          body="Compact"
          title="Compact"
          imageBack="https://mediaservice.audi.com/media/live/50900/fly1400x601n6/8yaar/2021.png?imwidth=291"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8yaar/2021.png?imwidth=291"
        />
        <Body
          body="Limousine"
          title="Limousine"
          imageBack="https://mediaservice.audi.com/media/live/50900/fly1400x601n6/8wc/2023.png?imwidth=291"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8wc/2023.png?imwidth=291"
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
          imageBack="https://mediaservice.audi.com/media/live/50900/fly1400x601n6/8wj/2023.png?imwidth=291"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8wj/2023.png?imwidth=291"
        />
        <Body
          body="Coupe"
          title="Coupe"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f5pbzg/2023.png?imwidth=291"
          imageBack="https://mediaservice.audi.com/media/live/50900/fly1400x601n6/f5pbzg/2023.png?imwidth=291"
        />
        <Body
          body="Suv"
          title="SUV"
          imageBack="https://mediaservice.audi.com/media/live/50900/fly1400x601n6/gagbzg/2023.png?imwidth=291"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/gagbzg/2023.png?imwidth=291"
        />
        <Body
          body="Sport"
          title="Sport"
          imageBack="https://mediaservice.audi.com/media/live/50900/fly1400x601n6/8wdr/2023.png?imwidth=291"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8wdr/2023.png?imwidth=291"
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
          imageBack="https://mediaservice.audi.com/media/live/50900/fly1400x601n6/8yabpx/2021.png?imwidth=291"
          imageFront="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8yaar/2021.png?imwidth=291"
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
