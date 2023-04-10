import React, { useState, useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ThemeContext } from "../utilities/style/ThemeContext";
interface iListItem {
  text: string;
  listItems?: string[];
}

export const ListItem = ({ text, listItems }: iListItem) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [expand, setExpand] = useState<boolean>(false);
  const handleClick = () => {
    setExpand(!expand);
  };
  return (
    <div>
      <li
        onClick={handleClick}
        className="flex justify-between items-center border-b-[1px] border-neutral-100/70 py-2 pl-4 node:text-lg font-medium py-4"
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
        <div className={`${isDarkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-300'} p-4 leading-8`}>
          {listItems?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      )}
    </div>
  );
};
