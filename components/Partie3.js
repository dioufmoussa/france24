import { info3 } from "./data";

function Partie3() {
  return (
    <div className=" flex flex-col ml-2 justify-center items-center bg-[#eee]   mt-6">
      <div className="flex justify-center items-center bg-black w-auto -mt-5 mb-5">
        <p className="uppercase px-10 py-2 text-white">grande angle</p>
      </div>
      <div className="flex flex-col md:flex-row md:mx-40">
        <div className="flex flex-col mr-4  mb-4">
          <img
            className="w-auto object-contain self-center"
            src="https://images.seneweb.com/dynamic/modules/news/images/gen/fb/3f3878742fab7173e94973f7f013bb850c05805d.png"
            alt="pic"
          />
          <p className="w-96 ml-3  text-2xl font-black">
            On en sait un peu plus sur la femme retrouvée morte dans les filaos
            à Tivaouane-peulh et dont la presse a parlé ce matin.
          </p>
        </div>
        <div>
          {info3.map((item, i) => (
            <div
              key={i}
              className="flex flex-row justify-center m-0 mb-10 cursor-pointer "
            >
              <img
                className=" w-80 h-24 object-cover mr-3"
                src={item.img}
                alt="pic"
              />
              <p className="h-20 w-64 mb-4 leading-none  text-sm font-semibold md:w-96">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partie3;
