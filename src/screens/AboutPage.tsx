"use client";
import React, { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/LoginPage.svg", text: "Login in to the APP!" },
  { src: "/Announcements.svg", text: "Stay updated about the club activities" },
  { src: "/Events.svg", text: "Stay updated about the club events" },
  { src: "/Profile.svg", text: "Acces your Profile" },
  { src: "/Meetings.svg", text: "Join meets and find moms" },
  { src: "/Resources.svg", text: "Find Resources for projects" },
  { src: "/MyTasks.svg", text: "Be Aware of your Tasks" },
  { src: "/Odns.svg", text: "Apply your OD's and night slips" },
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div
      className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/PurpleCirclePinksStripes.svg'),url('/PurpleCirclePinksStripes.svg')",
        backgroundPosition: "right 120% top 130%,left 120% top 130%",
        backgroundSize: "30%,30%",
      }}
    >
      <main className="flex-grow flex items-center justify-center relative w-full">
        <button
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${
            currentIndex === 0
              ? "opacity-100 cursor-not-allowed"
              : "hover:bg-gray-900"
          }`}
          onClick={prevImage}
          disabled={currentIndex === 0}
        >
          ❮
        </button>
        <div className="relative max-w-lg overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex flex-col items-center justify-center"
                style={{ minWidth: "100%" }}
              >
                <Image
                  src={image.src}
                  alt={`Slide ${index}`}
                  width={200}
                  height={150}
                />
                <p className="text-white text-xl mt-4">{image.text}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${
            currentIndex === images.length - 1
              ? "opacity-100 cursor-not-allowed"
              : "hover:bg-gray-900"
          }`}
          onClick={nextImage}
          disabled={currentIndex === images.length - 1}
        >
          ❯
        </button>
      </main>
    </div>
  );
};

export default ImageSlider;
