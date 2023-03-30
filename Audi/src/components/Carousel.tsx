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
}

const Item = ({ filter }: iItem) => {
  const [expand, setExpand] = useState<boolean>(false);
  const handleClick = () => {
    setExpand(!expand);
  };
  const filterAudi = Audi.filter((item) => item.model === filter);

  return (
    <div>
      <div>
        {filterAudi.map((item) => (
          <div>
            <img
              onClick={handleClick}
              src={expand ? item.imageCarSide : item.titleImage}
            />
            <p className="legend font-medium text-lg">{item.legend}</p>
            {expand && (
              <div className="relative">
                <h3 className="font-bold text-3xl">{item.legend}</h3>
                <div>
                  <img src={item.imageCar} />
                  <p className="text-center">{item.name}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
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
        <Item filter="e-tron" />
        <Item filter="Q8 e-tron" />
        <Item filter="A1" />
        <Item filter="A3" />
        <Item filter="A4" />
        <Item filter="A5" />
        <Item filter="A6" />
        <Item filter="A7" />
        {/* 
        <div>
          <img src="/src/utilities/img/A8/a8.png" />
          <p className="legend">A8</p>
        </div>
        <div>
          <img src="/src/utilities/img/Q2/q2.png" />
          <p className="legend">Q2</p>
        </div>
        <div>
          <img src="/src/utilities/img/Q3/q3.png" />
          <p className="legend">Q3</p>
        </div>
        <div>
          <img src="/src/utilities/img/Q4e-tron/q4e.png" />
          <p className="legend">Q4 e-tron</p>
        </div>
        <div>
          <img src="/src/utilities/img/Q5/q5.png" />
          <p className="legend">Q5</p>
        </div>
        <div>
          <img src="/src/utilities/img/Q7/q7.png" />
          <p className="legend">Q7</p>
        </div>
        <div>
          <img src="/src/utilities/img/Q8/q8.png" />
          <p className="legend">Q8</p>
        </div>
        <div>
          <img src="/src/utilities/img/TT/tt.png" />
          <p className="legend">TT</p>
        </div>
        <div>
          <img src="/src/utilities/img/R8/r8.png" />
          <p className="legend">R8</p>
        </div> */}
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
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        transitionDuration={500}
        removeArrowOnDeviceType={["mobile"]}
      >
        <div>
          <img src="/src/utilities/img/bodyType/sportback.png" />
          <p className="legend">Sportback</p>
        </div>
        <div>
          <img src="/src/utilities/img/bodyType/compact.png" />
          <p className="legend">Kompaktowy</p>
        </div>
        <div>
          <img src="/src/utilities/img/bodyType/limousine.png" />
          <p className="legend">Limousine</p>
        </div>
        <div>
          <img src="/src/utilities/img/bodyType/avant.png" />
          <p className="legend">Avant</p>
        </div>
        <div>
          <img src="/src/utilities/img/bodyType/allroad.png" />
          <p className="legend">allroad quattro</p>
        </div>
        <div>
          <img src="/src/utilities/img/bodyType/coupe.png" />
          <p className="legend">Coupe</p>
        </div>
        <div>
          <img src="/src/utilities/img/bodyType/suv.png" />
          <p className="legend">SUV</p>
        </div>
        <div>
          <img src="/src/utilities/img/bodyType/sport.png" />
          <p className="legend">Sport</p>
        </div>
        <div>
          <img src="/src/utilities/img/bodyType/eleN.png" />
          <p className="legend">Napęd elektryczny</p>
        </div>
        <div>
          <img src="/src/utilities/img/bodyType/plug-in.png" />
          <p className="legend">Plug-in Hybrid</p>
        </div>
        <div>
          <img src="/src/utilities/img/bodyType/alternative.png" />
          <p className="legend">Napęd alternatywny</p>
        </div>
        <div>
          <img src="/src/utilities/img/bodyType/spyder.png" />
          <p className="legend">Spyder</p>
        </div>
      </Carousel>
    </div>
  );
};
