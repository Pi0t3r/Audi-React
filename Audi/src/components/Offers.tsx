import React from "react";

interface iOffer {
  title: string;
  text: string;
  button: string;
  background?: string;
}

export const OfferWithBackground = ({
  title,
  text,
  button,
  background,
}: iOffer) => {
  return (
    <div
      className={`${background} bg-cover bg-center w-full h-[30rem] flex items-center justify-center bg-fixed`}
    >
      <div className="bg-white w-3/4 h-2/3 p-5">
        <h3 className="font-bold">{title}</h3>
        <p>{text}</p>
        <button className="w-full bg-black text-white font-medium py-7 mt-5">
          {button}
        </button>
      </div>
    </div>
  );
};

export const OfferWithoutBackground = ({
  title,
  text,
  button,
}: iOffer) => {
  return (
    <div className="text-left px-14 pb-14 mt-10">
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="my-5">{text}</p>
      <button className="border-2 border-black w-full py-3">{button}</button>
    </div>
  );
};
