import { info4 } from "./data";

function Partie4() {
  return (
    <div className="flex flex-col mt-6">
      <div className="mx-0 md:grid md:grid-cols-2  md:mx-14">
        {info4.map((item, i) => (
          <div
            key={i}
            className="ml-0 w-84 flex flex-row md:justify-center  mr-2 mt-2 cursor-pointer"
          >
            <div className="w-40">
              <img
                className="w-auto  object-cover m-3  md:w-44  "
                src={item.img}
                alt="photo"
              />
            </div>
            <div>
              <p className="w-40 ml-4 mt-1 text-base font-bold md:w-44">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partie4;
