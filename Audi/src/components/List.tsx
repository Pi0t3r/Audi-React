import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
interface iListItem {
  text: string;
  listItems?: string[];
}

export const ListItem = ({ text, listItems }: iListItem) => {
  const [expand, setExpand] = useState(false);
  const handleClick = () => {
    setExpand(!expand);
  };
  return (
    <div>
      <li
        onClick={handleClick}
        className="flex justify-between items-center border-t-[1px] border-neutral-100/70 py-2 pl-4 node:text-lg font-medium py-4"
      >
        {text}
        <span
          className={`${
            expand ? "rotate-180" : "rotate-0"
          } ease-in duration-200`}
        >
          <KeyboardArrowDownIcon />
        </span>
      </li>
      {expand && (
        <div className="bg-neutral-900 p-4 leading-8">
          {listItems?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      )}
    </div>
  );
};
