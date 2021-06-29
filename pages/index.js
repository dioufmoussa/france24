import Head from "next/head";
import { useState } from "react";
import Bande from "../components/Bande";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Partie1 from "../components/Partie1";
import Partie2 from "../components/Partie2";
import Partie3 from "../components/Partie3";
import Partie4 from "../components/Partie4";
import Partie5 from "../components/Partie5";
import Partie6 from "../components/Partie6";
import Partie7 from "../components/Partie7";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative overflow-x-hidden">
      <Head>
        <title>France 24-Info,news & actualites</title>
        <link rel="icon" href="/france24.ico" />
      </Head>
      <Header open={open} setOpen={setOpen} />
      {open && <Menu open={open} setOpen={setOpen} />}

      <main className=" flex flex-col  bg-white justify-center w-screen ">
        <Bande />
        <div className="hidden md:flex h-28 bg-gray-100 " />
        <Partie1 />
        <div className="h-10" />
        <Partie2 />
        <Partie3 />
        <Partie4 />
        <Partie5 />
        <Partie6 />
        <Partie7 />
      </main>
    </div>
  );
}
