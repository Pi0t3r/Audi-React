import React from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { Audi } from "../utilities/data/cars";
function Car() {
  const { carID } = useParams<{ carID: string }>();
  const car = Audi.find((car) => car.id.toString() === carID);
  if (!car) {
    return <div>Car not found</div>;
  }
  return (
    <div>
      <Nav />
      <div className="mt-16 bg-red-500 p-5">
        <p>to jest samochód o id:{carID}</p>
        <div>
          <p>{car.id}</p>
          <p>{car.name}</p>
          <p>{car.price}</p>
          <p>{car.instalment}</p>
        </div>
      </div>
    </div>
  );
}

export default Car;
