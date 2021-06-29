import { info2 } from "./data";

function Partie2() {
  return (
    <div className="flex ml-6  items-center  xl:mx-44 cursor-pointer">
      <div className="grid    md:grid-cols-2 md:ml-0 xl:grid-cols-3 ">
        {info2.map((item, i) => (
          <div key={i} className="flex  mr-2 mt-2 md:flex-col ">
            <div>
              <img
                className="w-60 mr-2 mb-3  object-cover h-auto  md:h-48 md:w-96 xl:w-screen   "
                src={item.img}
                alt="photo"
              />
            </div>
            <div>
              <p className="w-48 text-sm font-black md:w-96 xl:w-full">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partie2;
