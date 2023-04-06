import React from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { Card } from "../components/ModelsComponent";
function Car() {
  const { name } = useParams<{ name: string }>();
  return (
    <div>
      <Nav />
      <div className="mt-16 bg-red-500 p-5">to jest {name}</div>
    </div>
  );
}

export default Car;
