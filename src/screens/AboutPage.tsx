"use client";
import React from "react";
import Navbar from "../../ui/elements/Navbar";

const About: React.FC = () => {
  return (
    <div
      className="flex flex-col bg-white h-screen w-full bg-fixed bg-no-repeat"
      style={{
        backgroundImage:
          "url('/PinkSpreadPurpleStripes.png'), url('/GreenDotsPurpleCircles.png'), url('/TeamBrainstorming.png'), url('/Logo1.png')",
        backgroundPosition:
          "right 120% top 120%, left 105% top 50%, left 48% top 21%, left 49% top 66%",
        backgroundSize: "25%, 21%, 22%, 22%",
      }}
    >
      <Navbar textColor="black" showLogo={false} />
      <div className="flex flex-col items-center mt-20 md:mt-96 font-serif text-center">
        <h1 className="text-black text-3xl md:text-4xl">ACM IN ONE</h1>
        <button className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-black text-white text-lg md:text-xl rounded-lg">
          Download
        </button>
      </div>
    </div>
  );
};

export default About;
