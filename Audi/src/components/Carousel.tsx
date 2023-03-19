import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../index.css";

export const CarouselOne = () => {
  return (
    <div>
      <Carousel>
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
