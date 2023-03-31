import { Audi } from "../utilities/data/cars";

interface iFilter {
  title: string;
  setList: string;
}

const Filter = ({ title, setList }: iFilter) => {
  const models = Array.from(new Set(Audi.map((car) => car.model)));
  const uniqueBodies = Array.from(new Set(Audi.flatMap((car) => car.body)));
  return (
    <div>
      <h3 className="p-4 text-2xl font-medium text-neutral-400">{title}</h3>
      <ul className="list-none">
        {setList === "Body" &&
          uniqueBodies.map((car) => (
            <button className="border-2 border-neutral-200 p-3 text-neutral-200 m-1">
              {car}
            </button>
          ))}
        {setList === "Model" &&
          models.map((car) => (
            <button className="border-2 border-neutral-200 p-3 text-neutral-200 m-1">
              {car}
            </button>
          ))}
      </ul>
    </div>
  );
};

export default Filter;
