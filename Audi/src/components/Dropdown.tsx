import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
interface iList {
  title: string;
  listItems: string[];
}

const List = ({ title, listItems }: iList) => {
  return (
    <div>
      <li>
        <div className="flex flex-row justify-between">
          <span className="text-neutral-400 p-3">{title}</span>
        </div>
        <div className="mt-4 flex flex-col">
          {listItems.map((item) => (
            <li className="py-3 pl-6 w-full">{item}</li>
          ))}
        </div>
      </li>
    </div>
  );
};
function DropdownModel() {
  const [expand, setExpand] = useState(false);
  const handleCLick = () => {
    setExpand(!expand);
  };
  return (
    <div>
      <label htmlFor="model" className="">
        Model
        <div
          onClick={handleCLick}
          className="flex flex-row justify-between border-b-[1px]"
        >
          <span>A1 Sportback</span>
          <span>
            <KeyboardArrowDownIcon />
          </span>
        </div>
        {expand && (
          <div className="fixed inset-x-0 top-0 z-50 bg-white text-black overflow-scroll h-screen">
            <div className="flex flex-row justify-between bg-neutral-600 p-4 text-white">
              <div className="flex flex-col">
                <span className="text-neutral-300">Model</span>
                <span>A1 Sportback</span>
              </div>
              <div onClick={handleCLick}>
                <CloseIcon />
              </div>
            </div>
            <ul>
              <List
                title="e-tron GT"
                listItems={["e-tron GT quattro", "RS e-tron"]}
              />
              <List title="A1" listItems={["A1 Sportback"]} />
              <List
                title="A3"
                listItems={[
                  "A3 Sportback",
                  "A3 Sportback TFSI e",
                  "A3 Limousine",
                  "S3 Sportback",
                  "S3 Limousine",
                  "RS 3 Sportback",
                  "RS 3 Limousine",
                ]}
              />
              <List
                title="A4"
                listItems={[
                  "A4 Limousine",
                  "A4 Avant",
                  "A4 allroad quattro",
                  "S4 Limousine",
                  "S4 Avant",
                  "RS 4 Avant",
                ]}
              />
              <List
                title="A5"
                listItems={[
                  "A5 Coupe",
                  "A5 Sportback",
                  "S5 Coupe",
                  "S5 Sportback",
                  "RS 5 Coupe",
                  "RS 5 Sportback",
                ]}
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
              />
              <List
                title="A7"
                listItems={[
                  "A7 Sportback",
                  "A7 Sportback TFSI e",
                  "S7 Sportback TDI",
                  "RS5 Sportback",
                ]}
              />
              <List
                title="A8"
                listItems={["A8", "A8 TFSI e", "A8 L", "A8 L TFSI e", "S8"]}
              />
              <List title="Q2" listItems={["Q2"]} />
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
              />
              <List
                title="Q4 e-tron"
                listItems={["Q4 e-tron", "Q4 Sportback e-tron"]}
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
              />
              <List title="Q7" listItems={["Q7", "Q7 TFSI e", "SQ7 TFSI"]} />
              <List title="Q8" listItems={["Q8", "SQ8 TFSI", "RSQ8"]} />
              <List title="TT" listItems={["TT Coupe", "TTS Coupe"]} />
              <List
                title="R8"
                listItems={[
                  "R8 Coupe V10 performance",
                  "R8 Coupe V10 performance RWD",
                  "R8 Spyder V10 performance",
                  "R8 Coupe V10 performance RWD",
                ]}
              />

              <List
                title="e-tron"
                listItems={[
                  "Audi e-tron",
                  "Audi e-tron Sportback",
                  "Audi e-tron S",
                  "Audi e-tron S Sportback",
                ]}
              />
            </ul>
          </div>
        )}
      </label>
    </div>
  );
}

export default DropdownModel;

//  <p className="font-light py-2">Model</p>
{
  /* <div className="flex flex-row justify-between font-medium border-b-[1px] border-white pb-2">
<p>A1 Sportback</p> <KeyboardArrowDownIcon />
</div>
<div className="flex flex-col mt-4">
<p>
  <span className="font-bold">17</span> samochody nowe{" "}
  <ChevronRightIcon />
</p>
<p>
  <span className="font-bold">5</span> samochody używane{" "}
  <ChevronRightIcon />
</p>
</div> */
}
