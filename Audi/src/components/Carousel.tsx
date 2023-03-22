import Carousel from "react-multi-carousel";
import "../index.css";
import "react-multi-carousel/lib/styles.css";
import "../index.css"
const responsive = {
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
export const CarouselOne = () => {
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
          <img src="/src/utilities/img/etrongt.jpg" />
          <p className="legend">e-tron GT</p>
        </div>
        <div>
          <img src="/src/utilities/img/q8etron.jpg" />
          <p className="legend">Q8 e-tron</p>
        </div>
        <div>
          <img src="/src/utilities/img/a1.jpg" />
          <p className="legend">A1</p>
        </div>
        <div>
          <img src="/src/utilities/img/a3.jpg" />
          <p className="legend">A3</p>
        </div>
        <div>
          <img src="/src/utilities/img/a4.png" />
          <p className="legend">A4</p>
        </div>
        <div>
          <img src="/src/utilities/img/a5.jpg" />
          <p className="legend">A5</p>
        </div>
        <div>
          <img src="/src/utilities/img/a6.png" />
          <p className="legend">A6</p>
        </div>
        <div>
          <img src="/src/utilities/img/a7.jpg" />
          <p className="legend">A7</p>
        </div>
        <div>
          <img src="/src/utilities/img/a8.jpg" />
          <p className="legend">A8</p>
        </div>
        <div>
          <img src="/src/utilities/img/q2.jpg" />
          <p className="legend">Q2</p>
        </div>
        <div>
          <img src="/src/utilities/img/q3.jpg" />
          <p className="legend">Q3</p>
        </div>
        <div>
          <img src="/src/utilities/img/q4etron.jpg" />
          <p className="legend">Q4 e-tron</p>
        </div>
        <div>
          <img src="/src/utilities/img/q5.jpg" />
          <p className="legend">Q5</p>
        </div>
        <div>
          <img src="/src/utilities/img/q7.jpg" />
          <p className="legend">Q7</p>
        </div>
        <div>
          <img src="/src/utilities/img/q8.jpg" />
          <p className="legend">Q8</p>
        </div>
        <div>
          <img src="/src/utilities/img/tt.jpg" />
          <p className="legend">TT</p>
        </div>
        <div>
          <img src="/src/utilities/img/r8.jpg" />
          <p className="legend">R8</p>
        </div>
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
          <img src="/src/utilities/img/a4.png" />
          <p className="legend">Sportback</p>
        </div>
        <div>
          <img src="/src/utilities/img/a1.jpg" />
          <p className="legend">Kompaktowy</p>
        </div>
        <div>
          <img src="/src/utilities/img/a8.jpg" />
          <p className="legend">Limousine</p>
        </div>
        <div>
          <img src="/src/utilities/img/a6avant.jpg" />
          <p className="legend">Avant</p>
        </div>
        <div>
          <img src="/src/utilities/img/allroad.jpg" />
          <p className="legend">allroad quattro</p>
        </div>
        <div>
          <img src="/src/utilities/img/tt.jpg" />
          <p className="legend">Coupe</p>
        </div>
        <div>
          <img src="/src/utilities/img/q5.jpg" />
          <p className="legend">SUV</p>
        </div>
        <div>
          <img src="/src/utilities/img/rs6.jpg" />
          <p className="legend">Sport</p>
        </div>
        <div>
          <img src="/src/utilities/img/electric.jpg" />
          <p className="legend">Napęd elektryczny</p>
        </div>
        <div>
          <img src="/src/utilities/img/a3.jpg" />
          <p className="legend">Plug-in Hybrid</p>
        </div>
        <div>
          <img src="/src/utilities/img/a6.png" />
          <p className="legend">Napęd alternatywny</p>
        </div>
        <div>
          <img src="/src/utilities/img/spyder.jpg" />
          <p className="legend">Spyder</p>
        </div>
      </Carousel>
    </div>
  );
};
