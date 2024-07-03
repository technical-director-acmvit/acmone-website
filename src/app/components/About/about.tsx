"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../Navbar";

const images = [
    { src: "/LoginPage.svg", text: "Login to the app!" },
    { src: "/Announcements.svg", text: "Stay updated about club activities" },
    { src: "/Events.svg", text: "Stay updated about club events" },
    { src: "/Profile.svg", text: "Access your Profile" },
    { src: "/Meetings.svg", text: "Join meetings and find moments" },
    { src: "/Resources.svg", text: "Find resources for projects" },
    { src: "/MyTasks.svg", text: "Be aware of your Tasks" },
    { src: "/Odns.svg", text: "Apply your OD's and night slips" },
];

const About: React.FC = () => {
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
            className="bg-gray-900 text-white min-h-screen flex flex-col bg-no-repeat justify-start"
            style={{
                backgroundImage: "url(/Group2.svg)",
                backgroundPosition: "right top 55%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "19.5%",
            }}
        >
            <Navbar logoColor="white" textColor="white" />
            <div className="h-[80vh] flex justify-center items-center">
                <main className="flex flex-row items-center justify-center relative self-center w-[60%] h-full">
                    <button
                        className={`bg-gray-900 text-white p-4 rounded-full ${
                            currentIndex === 0
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-gray-800"
                        }`}
                        onClick={prevImage}
                        disabled={currentIndex === 0}
                    >
                        ❮
                    </button>
                    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{
                                transform: `translateX(-${
                                    currentIndex * 100
                                }%)`,
                            }}
                        >
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="w-full lg:flex-row md:flex-col flex-col flex items-center justify-center"
                                    style={{ minWidth: "100%" }}
                                >
                                    <div className="my-4 justify-center flex">
                                        <Image
                                            src={image.src}
                                            alt={`Slide ${index}`}
                                            width={185}
                                            height={185}
                                            className="lg:w-[100%] md:w-[60%] w-[90%]"
                                        />
                                    </div>
                                    <p className="text-white text-3xl font-medium ml-7 md:ml-8 text-center">
                                        {image.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex mt-4 space-x-4">
                        <button
                            className={`bg-gray-900 text-white p-4 rounded-full ${
                                currentIndex === images.length - 1
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:bg-gray-800"
                            }`}
                            onClick={nextImage}
                            disabled={currentIndex === images.length - 1}
                        >
                            ❯
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default About;
