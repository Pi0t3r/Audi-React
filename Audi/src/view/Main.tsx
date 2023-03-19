interface iButton {
  text: string;
  border: string;
  background: string;
  textColor?: string;
  height: number;
  margin?: string;
}

const Button = ({
  text,
  border,
  background,
  textColor,
  height,
  margin,
}: iButton) => {
  return (
    <button
      className={`${border} ${background} ${textColor} w-full h-${height} ${margin} font-medium text-xl cursor-pointer`}
    >
      {text}
    </button>
  );
};

function Main() {
  return (
    <div>
      <div className="bg-headerImageMain bg-cover bg-center w-full h-[30rem] text-white relative flex flex-col items-start px-4">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-[10%] text-2xl pr-16">
          <h2 className="font-medium text-3xl">Doświadczaj postępu.</h2>
          <p className="mt-4">
            Poznaj bliżej rodzinne sportowe kombi Audi RS6.
          </p>
        </div>
        <div className="flex flex-col w-72 bottom-10 absolute">
          <Button
            text="Poznaj Audi RS6"
            border="border-none"
            background="bg-white"
            textColor="text-black"
            height={20}
            margin="mb-2"
          />
          <Button
            text="Poznaj gamę Audi A6"
            border="border-2 border-white"
            background="none"
            height={24}
          />
          {/* <button>Poznaj Audi RS6</button> */}
          {/* <button>Poznaj gamę Audi A6</button> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
