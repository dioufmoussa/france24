import Bar from "./Bar";
import { info6 } from "./data";

function Partie6() {
  return (
    <div className="flex items-center ">
      <div className="grid md:grid-cols-2 md:mx-40 ">
        {info6.map((item, i) => (
          <div key={i} className="w-auto self-start xl:w-96">
            <p className="p-4 text-sm font-bold leading-tight ">{item.title}</p>
            <Bar />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partie6;
