"use client";
import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import download from "@/app/assets/DownloadPage.svg";
import { saveAs } from "file-saver";

export default function DownLoad() {
    const downloadFile = () => {
        saveAs(
            "https://github.com/technical-director-acmvit/acmone-website/releases/download/v1.0.0/ACMOne.v1.02.apk",
            "ACMOne.apk"
        );
    };
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            <div className="flex flex-col justify-between flex-grow">
                <Navbar logoColor="white" textColor="white" />
                <main className="w-[100vw] justify-around flex lg:flex-row-reverse md:flex-row flex-col items-center h-[100%]">
                    <Image
                        src={download}
                        alt="download"
                        className="lg:w-[30%] md:w-[35%] w-[70%]"
                    />
                    <div className="flex flex-col justify-between items-center mx-5 sm:ml-20  md:ml-30 mt-[5%]">
                        <h1 className="lg:text-4xl text-xl md:text-2xl mb-4">
                            Download the APK now!
                        </h1>
                        <div className="flex flex-col items-center space-y-4">
                            <button
                                onClick={downloadFile}
                                className="bg-white text-black px-4 py-2 sm:px-6 sm:py-2 rounded-full mb-4 hover:bg-green-200"
                            >
                                Download now
                            </button>
                            <p className="text-gray-400 text-sm sm:text-base">
                                Version: 1.0.0.1
                            </p>
                            <p className="text-gray-400 text-sm sm:text-base">
                                For iOS and Android
                            </p>
                        </div>
                    </div>
                </main>
                <p className="text-gray-400 sm:mt-10 lg:text-lg text-base  self-center my-4">
                    Made with ♥ by ACM-VIT
                </p>
            </div>
        </div>
    );
}
