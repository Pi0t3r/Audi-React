import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface iListItem {
  text: string;
}

export const ListItem = ({ text }: iListItem) => {
  return (
    <li className="flex justify-between items-center border-t-[1px] border-neutral-100/70">
      {text}
      <span>
        <KeyboardArrowDownIcon />
      </span>
    </li>
  );
};
