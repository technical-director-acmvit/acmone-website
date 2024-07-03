import React from "react";
import Navbar from "../Navbar";

const Home: React.FC = () => {
  return (
    <div className='name="viewport" content="width=device-width, initial-scale=1.0'>
      <div
        className="min-h-screen sm:h-screen bg-white sm:bg-fixed bg-no-repeat flex sm:flex-col flex-col"
        style={{
          backgroundImage:
            "url('/PinkSpreadPurpleStripes.svg'), url('/GreenDotsPurpleCircles.svg'), url('/TeamBrainstorming.svg'), url('/LogoB.svg')",
          backgroundPosition:
            "top 111.5% right 116%, left 110% top 40%, center top 13%, center top 60%",
          backgroundSize: "25%, 21%, 22%, 20%",
        }}
      >
        <Navbar textColor="black" logoColor="black" />
        <div className="flex flex-col flex-1 justify-end items-center sm:text-center font-serif pb-20">
          <h1 className="text-black text-3xl md:text-4xl">ACM IN ONE</h1>
          <button className="mt-5 px-6 py-2 bg-black text-white text-lg md:text-xl rounded-lg">
            <a href="/download" className="px-8 py-2 block">
              Download
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
