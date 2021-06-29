import { info3, info7 } from "./data";

function Partie7() {
  return (
    <div className="w-full mr-0 sm:w-full md:w-full flex flex-1 flex-col  justify-center items-center bg-[#eee]   mt-6 mb-4">
      <div className="flex w-auto justify-center items-center bg-black  -mt-5 mb-5">
        <p className="uppercase px-10 py-2 text-white">NOS PARTENAIRES</p>
      </div>
      <div className="grid  self-start md:self-center  md:grid-cols-2 md:ml-0 xl:grid-cols-3 w-full ">
        {info7.map((item, i) => (
          <div key={i} className="flex md:mx-10 mr-2 mt-2 md:flex-col ">
            <div>
              <img
                className="w-60 mr-2 mb-3  object-cover h-auto  md:h-48 md:w-96 xl:w-64   "
                src={item.img}
                alt="photo"
              />
            </div>
            <div>
              <p className="w-48 pb-7 text-xl font-black md:w-96 xl:w-full">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partie7;
