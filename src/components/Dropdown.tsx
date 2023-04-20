import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { Audi } from "../utilities/data/cars";

interface iList {
  title: string;
  listItems: string[];
  setSelected: (value: string) => void;
  setNewCar: (value: number) => void;
  setUsedCar: (value: number) => void;
  setExpand: (value: boolean) => void;
}

const List = ({
  title,
  listItems,
  setSelected,
  setNewCar,
  setUsedCar,
  setExpand,
}: iList) => {
  return (
    <div>
      <li>
        <div className="flex flex-row justify-between">
          <span className="text-neutral-400 p-3">{title}</span>
        </div>
        <div className="mt-4 flex flex-col">
          {listItems.map((item) => (
            <li
              onClick={() => {
                setSelected(item);
                const filterAudi = Audi.filter((name) => name.name === item);
                const amountNew = filterAudi[0]?.amountNew ?? 0;
                const amountUsed = filterAudi[0]?.amountUsed ?? 0;
                setNewCar(amountNew);
                setUsedCar(amountUsed);
                setExpand(false);
              }}
              className="py-3 pl-6 w-full active:bg-neutral-700"
            >
              {item}
            </li>
          ))}
        </div>
      </li>
    </div>
  );
};
function DropdownModel() {
  const [selected, setSelected] = useState<string>("A1 Sportback");
  const [newCar, setNewCar] = useState<number>(3);
  const [usedCar, setUsedCar] = useState<number>(14);
  const [expand, setExpand] = useState<boolean>(false);
  const handleCLick = () => {
    setExpand(!expand);
  };
  return (
    <div>
      <label htmlFor="model">
        Model
        <div
          onClick={handleCLick}
          className="flex flex-row justify-between border-b-[1px]"
        >
          <span>{selected}</span>
          <span>
            <KeyboardArrowDownIcon />
          </span>
        </div>
        {expand && (
          <div className="fixed inset-x-0 top-0 z-50 bg-white text-black overflow-scroll h-screen max-w-7xl mx-auto">
            <div className="flex flex-row justify-between bg-neutral-600 p-4 text-white">
              <div className="flex flex-col">
                <span className="text-neutral-300">Model</span>
                <span>{selected}</span>
              </div>
              <div onClick={handleCLick}>
                <CloseIcon />
              </div>
            </div>
            <ul>
              <List
                title="e-tron GT"
                listItems={["e-tron GT quattro", "RS e-tron GT"]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />
              <List
                title="A1"
                listItems={["A1 Sportback"]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />
              <List
                title="A3"
                listItems={[
                  "A3 Sportback",
                  "A3 Sportback TFSI e",
                  "A3 Limousine",
                  "S3 Sportback",
                  "S3 Limousine",
                  "RS3 Sportback",
                  "RS3 Limousine",
                ]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />
              <List
                title="A4"
                listItems={[
                  "A4 Limousine",
                  "A4 Avant",
                  "A4 allroad quattro",
                  "S4 Limousine",
                  "S4 Avant",
                  "RS4 Avant",
                ]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />
              <List
                title="A5"
                listItems={[
                  "A5 Coupe",
                  "A5 Sportback",
                  "S5 Coupe",
                  "S5 Sportback",
                  "RS5 Coupe",
                  "RS5 Sportback",
                ]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />
              <List
                title="A6"
                listItems={[
                  "A6 Limousine",
                  "A6 Limousine TFSI e",
                  "A6 Avant",
                  "A6 Avant TFSI e",
                  "A6 allroad quattro",
                  "S6 Avant",
                  "S6 Limousine",
                  "RS6 Avant",
                ]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />
              <List
                title="A7"
                listItems={[
                  "A7 Sportback",
                  "A7 Sportback TFSI e",
                  "S7 Sportback TDI",
                  "RS5 Sportback",
                ]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />
              <List
                title="A8"
                listItems={["A8", "A8 TFSI e", "A8 L", "A8 L TFSI e", "S8"]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setExpand={setExpand}
                setUsedCar={setUsedCar}
              />
              <List
                title="Q2"
                listItems={["Q2"]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />
              <List
                title="Q3"
                listItems={[
                  "Q3",
                  "Q3 TFSI e",
                  "Q3 Sportback",
                  "Q3 Sportback TFSI e",
                  "RSQ3 ",
                  "RSQ3 Sportback",
                ]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />
              <List
                title="Q4 e-tron"
                listItems={["Q4 e-tron", "Q4 Sportback e-tron"]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />
              <List
                title="Q5"
                listItems={[
                  "Q5",
                  "Q5 TFSI e",
                  "Q5 Sportback",
                  "Q5 Sportback TFSI e",
                  "SQ5 ",
                  "SQ5 Sportback",
                ]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />
              <List
                title="Q7"
                listItems={["Q7", "Q7 TFSI e", "SQ7 TFSI"]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />
              <List
                title="Q8"
                listItems={["Q8", "SQ8 TFSI", "RSQ8"]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />
              <List
                title="TT"
                listItems={["TT Coupe", "TTS Coupe"]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />
              <List
                title="R8"
                listItems={[
                  "R8 Coupe V10 performance",
                  "R8 Coupe V10 performance RWD",
                  "R8 Spyder V10 performance",
                  "R8 Coupe V10 performance RWD",
                ]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />

              <List
                title="e-tron"
                listItems={[
                  "Audi e-tron",
                  "Audi e-tron Sportback",
                  "Audi e-tron S",
                  "Audi e-tron S Sportback",
                ]}
                setSelected={setSelected}
                setNewCar={setNewCar}
                setUsedCar={setUsedCar}
                setExpand={setExpand}
              />
            </ul>
          </div>
        )}
      </label>
      <div className="mt-4">
        <p>
          <span>{newCar}</span> Samochody nowe <ChevronRightIcon />
        </p>
        <p>
          <span>{usedCar}</span> Samochody używane <ChevronRightIcon />
        </p>
      </div>
    </div>
  );
}

export default DropdownModel;
