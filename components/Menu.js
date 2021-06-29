import { useState } from "react";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { FaDailymotion, FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { ImSoundcloud2 } from "react-icons/im";

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-16 h-screen  w-full bg-white fixed overflow-y-scroll  ">
      <div
        onClick={() => setOpen(!open)}
        className="h-auto bg-[#eee] cursor-pointer"
      >
        {!open ? (
          <div
            onClick={() => setOpen(!open)}
            className=" flex ml-8 items-center md:ml-36 h-16"
          >
            <p className="mr-2 text-lg font-normal cursor-pointer">LANGUES</p>
            <div>
              <ChevronDownIcon className="h-3" />
            </div>
          </div>
        ) : (
          <div
            onClick={() => setOpen(!open)}
            className=" flex ml-8 items-center md:ml-36 h-16"
          >
            <p className="mr-2 text-lg font-normal cursor-pointer">LANGUES</p>
            <div>
              <ChevronUpIcon className="h-3" />
            </div>
          </div>
        )}
        {open && (
          <div className="ml-8  items-center md:ml-36 md:flex md:space-x-4  pb-5  divide-gray-700">
            <p className="p-1 text-md font-normal cursor-pointer">Francais</p>
            <div className="hidden md:flex md:text-gray-400">|</div>
            <p className="p-1 text-md font-normal cursor-pointer">Englis</p>
            <div className=" hidden md:flex md:text-gray-400">|</div>
            <p className="p-1 text-md font-normal cursor-pointer">Español</p>
            <div className="hidden md:flex md:text-gray-400">|</div>
            <p className="p-1 text-md font-normal cursor-pointer ">عربي</p>
          </div>
        )}
      </div>
      <div className="md:grid md:grid-cols-2 lg:divide-x-2 py-10  ">
        <div>
          {/* thematique */}
          <div className="flex justify-center items-center ml-3 md:ml-32 h-10 w-36 bg-black my-3">
            {" "}
            <p className="text-lg font-normal text-white uppercase ">
              Thématique
            </p>{" "}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 ml-3 md:ml-32">
            <p className="cursor-pointer p-1 text-[#00a7e3] text-xl font-medium leading-none">
              À la Une
            </p>
            <p className="cursor-pointer p-1 ">France</p>
            <p className="cursor-pointer p-1">Découvertes</p>
            <p className="cursor-pointer p-1">Europe</p>
            <p className="cursor-pointer p-1">Amériques</p>
            <p className="cursor-pointer p-1">Asie-Pacifique</p>
            <p className="cursor-pointer p-1">Moyen-Orient</p>

            <p className="cursor-pointer p-1">Culture</p>

            <p className="cursor-pointer p-1">Planète</p>
            <p className="cursor-pointer p-1">Les plus vus</p>

            <p className="cursor-pointer p-1">Sports</p>
            <p className="cursor-pointer p-1">Économie / Technologie</p>

            <p className="cursor-pointer p-1">Afrique</p>
            <p className="cursor-pointer p-1">Stop L'Infox</p>

            <p className="cursor-pointer p-1">Voyage</p>
          </div>
        </div>

        {/* antenne */}
        <div>
          {/* thematique */}
          <div className="flex justify-center items-center ml-3 md:ml-32 h-10 w-36 bg-black my-3">
            {" "}
            <p className="text-lg font-normal uppercase text-white">
              À l'antennes
            </p>{" "}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 ml-3 md:ml-32">
            <p className="cursor-pointer p-1">La chaîne en direct</p>
            <p className="cursor-pointer p-1">Le dernier journal</p>
            <p className="cursor-pointerp-1">Émissions</p>

            <p className="cursor-pointerp-1">Grille des programmes</p>
            <p className="cursor-pointer p-1">
              Le journal accessible sous-titré
            </p>
          </div>
        </div>
      </div>
      <div className="h-28 bg-white">
        <div className=" flex justify-center items-center w-64 ml-3 md:ml-32 h-10  bg-black my-3">
          <p className="sm:p-3   text-white text-lg font-normal ">
            SUR LES RÉSEAUX SOCIAUX
          </p>
        </div>
        <div className="flex  flex-wrap items-center ml-3 md:ml-32  ">
          <div>
            <AiFillFacebook
              size={34}
              color="#30559F"
              className="mr-4 cursor-pointer"
            />
          </div>
          <div>
            <AiFillTwitterSquare
              size={34}
              color="#00a7e3"
              className="mr-4 cursor-pointer"
            />
          </div>
          <div>
            <FaInstagramSquare
              size={32}
              color="#D73074"
              className="mr-4 cursor-pointer"
            />
          </div>
          <div>
            <IoLogoYoutube
              size={36}
              color="red"
              className="mr-4 cursor-pointer"
            />
          </div>
          <div>
            <FaDailymotion
              size={32}
              color="#0064DC"
              className="mr-4 cursor-pointer"
            />
          </div>
          <div>
            <ImSoundcloud2
              size={30}
              color="#FF7700"
              className="mr-3 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#eee] ">
        <div className=" h-96 divide-y-2 divide-white">
          <div className="h-12 flex items-center">
            <p className="ml-3 md:ml-32 uppercase font-semibold cursor-pointer">
              services
            </p>
          </div>
          <div className="h-12 flex items-center cursor-pointer">
            <p className="ml-3 md:ml-32 uppercase font-semibold">
              À propos de France 24
            </p>
          </div>
          <div className="h-12 flex items-center cursor-pointer">
            <p className="ml-3 md:ml-32 uppercase font-semibold ">
              Les sites France Médias Monde
            </p>
          </div>
          <div className="flex flex-wrap items-center ">
            <img
              className="h-20 w-20 object-contain  ml-3 md:ml-32 cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUuztdCEmEj-RHxbVEVSdCceAEnmJaBR7PA&usqp=CAU"
              alt="rfi"
            />
            <img
              className="h-12 w-12 object-contain m-2 cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/FRANCE_24_logo.svg/1200px-FRANCE_24_logo.svg.png"
              alt="rfi"
            />
            <img
              className="h-12 w-12 object-contain m-2 cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2EZPHF8RwsnOjeTQB5gDxJUC8tnXzRjtnQ&usqp=CAU"
              alt="rfi"
            />
            <p className="ml-6 text-sm w-72 md:w-96">
              © 2021 Copyright France 24 - Tous droits réservés. France 24 n'est
              pas responsable des contenus provenant de sites Internet externes.
              Fréquentation certifiée par l'ACPM/OJD.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
