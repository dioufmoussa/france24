import Image from "next/image";
import { MenuIcon, PlayIcon, XIcon } from "@heroicons/react/outline";
import { HomeIcon, ArrowNarrowRightIcon } from "@heroicons/react/solid";

function Header({ open, setOpen }) {
  return (
    <div
      className={`w-full flex flex-col items-center top-0 fixed  bg-white  `}
    >
      {/* headerTop */}
      <div
        className={`flex  w-screen justify-between items-center flex-grow px-10 md:pl-40 ${
          open && "pb-5"
        }`}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/FRANCE_24_logo.svg/1200px-FRANCE_24_logo.svg.png"
          width={50}
          height={70}
          objectFit="contain"
          className="cursor-pointer"
        />
        <div className="flex flex-col justify-center items-center md:flex-row cursor-pointer">
          <PlayIcon className="h-10 " />
          <p>EN DIRECT</p>
        </div>
        {open ? (
          <XIcon
            className="h-9  cursor-pointer transform hover:scale-105 transition duration-700 ease-in-out hover:text-red-700 "
            onClick={() => setOpen(!open)}
          />
        ) : (
          <MenuIcon
            className="h-9  cursor-pointer transform hover:scale-105 transition duration-700 ease-in-out hover:text-[#00a7e3]"
            onClick={() => setOpen(!open)}
          />
        )}
      </div>

      {/* headerDown  */}
      <div className={`bg-[#00a7e3] w-full   ${open && "h-12"}`}>
        <div className="flex overflow-x-scroll  scrollbar-hide bg-[#00a7e3] max-w-screen-2xl p-1 justify-between items-center  whitespace-nowrap flex-1 pl-10 relative md:pl-40">
          <p>
            {" "}
            <HomeIcon className="h-6  text-[#6FB6E6] cursor-pointer mr-2 md:mr-0" />
          </p>
          <p className=" text-white bg-[#6FB6E6] text-sm rounded p-1 mr-2 cursor-pointer ">
            #SENEGAL
          </p>
          <p className="text-white bg-[#6FB6E6] text-sm rounded p-1 mr-2 cursor-pointer ">
            #CASAMANCE
          </p>
          <p className="text-white bg-[#6FB6E6] text-sm rounded p-1 mr-2 cursor-pointer ">
            #LUTTE
          </p>
          <p className="text-white text-xs font-semibold mr-2 cursor-pointer ">
            FRANCE
          </p>
          <p className="text-white text-xs font-semibold mr-2 cursor-pointer ">
            AFRIQUE
          </p>
          <p className="text-white text-xs font-semibold mr-2 cursor-pointer ">
            REPORTAGES
          </p>
          <p className="text-white text-xs font-semibold mr-2 cursor-pointer ">
            EMISSIONS
          </p>
          <p className=" text-white mr-80 text-xs font-semibold cursor-pointer">
            STOP L'INFOX
          </p>
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#00a7e3] h-9  w-12" />
        </div>
      </div>
    </div>
  );
}

export default Header;
