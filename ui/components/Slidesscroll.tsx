"use client";
import React, { useState } from "react";
import Image from "next/image";

const images = [
  "/LoginPage.svg",
  "/Announcements.svg",
  "/Events.svg",
  "/Profile.svg",
  "/Meetings.svg",
  "/Resources.svg",
  "/MyTasks.svg",
  "/Odns.svg",
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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        className={`absolute left-4 bg-gray-800 text-white p-2 rounded-full ${
          currentIndex === 0
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-700"
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
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ minWidth: "100%" }}
            >
              <Image
                src={src}
                alt={`Slide ${index}`}
                width={200} // Adjusted width to 200px
                height={150} // Adjusted height to 150px
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`absolute right-4 bg-gray-800 text-white p-2 rounded-full ${
          currentIndex === images.length - 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-700"
        }`}
        onClick={nextImage}
        disabled={currentIndex === images.length - 1}
      >
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
