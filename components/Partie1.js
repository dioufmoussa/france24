import Image from "next/image";
import { info, info1 } from "./data";

function Partie1() {
  return (
    <div className="flex flex-col m-5 mt-10 justify-center items-center   xl:flex-row  ">
      {/* left  */}
      <div className="flex flex-col justify-center  cursor-pointer mr-10 w-full md:self-start xl:ml-40">
        <img
          className="h-100  ml-5 mr-5  md:mr-10 xl:w-full"
          src="https://flyairsenegal.com/wp-content/uploads/2019/12/Dakar.jpg"
        />

        <div className="flex justify-center ml-5 items-center bg-[#00a7e3] my-3 w-32 whitespace-nowrap rounded-sm">
          <p className=" text-white">LONG FORMAT</p>
        </div>
        <p className="text-2xl font-bold w-10/12 ml-5">
          Au Sénégal, l'école de cosmétologie Farifima pour développer un
          secteur d'avenir
        </p>
        <div className=" border-b-2 border-gray-300 p-8 mb-3" />
        <div className="grid  sm:grid-cols-2 md:grid-cols-2 ml-8 md:ml-0">
          {info1.map((item, i) => (
            <div key={i} className="mr-2 mt-2">
              <div className="w-64  md:w-72 xl:w-full h-40 ">
                <img
                  className="w-64 object-cover md:w-72 xl:w-full h-40 "
                  src={item.img}
                  alt="photo"
                />
              </div>
              <div>
                <p className="w-64 md:w-72 text-lg font-bold  xl:w-full">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* right */}
      <div className=" ml-2 self-start bg-gray-300  md:w-7/12 mr-56 ">
        <div className="h-full bg-gray-300">
          <div className="flex justify-center items-center mt-10 bg-black h-10 w-72 mx-auto">
            <p className="text-white text-2xl">L'INFO EN CONTINU</p>
          </div>
          <div className="flex flex-col justify center items-center w-72  ml-3 mt-10 ">
            {info.map((item, i) => (
              <div
                key={i}
                className=" self-start border-l-2 border-[#00a7e3] h-20  cursor-pointer"
              >
                <div className="flex justify-center   ml-0 w-72 ">
                  <div className="w-4  border-t-2 border-[#00a7e3] self-start " />
                  <p className=" flex justify-center items-center bg-[#00a7e3] w-20 h-6 text-white p-2 self-start -mt-3 mr-2">
                    {item.heure}
                  </p>
                  <p className="-mt-3 pb-7 w-42 text-md font-bold">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}

            <div className=" self-start border-l-2 border-[#00a7e3] w-72 ">
              <div className="flex justify-center w-72  ml-20  mt-7">
                <p className="w-72 p-5">suivez Toute l actu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partie1;
