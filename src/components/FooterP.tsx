import React from "react";

interface iParagraph {
  text: string;
  link?:string
}

export const ParagraphFooter = ({ text,link }: iParagraph) => {
  return <p className="my-5 text-sm">{text} <a href="https://vw-group.pl/grupa-volkswagen,srodowisko.html." className="font-medium hover:text-neutral-300 ease-in duration-300">{link}</a></p>;
};


