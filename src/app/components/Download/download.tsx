import React from "react";
import Navbar from "../Navbar";

export default function DownLoad() {
  return (
    
    <div
      className="bg-gray-900 text-white min-h-screen flex flex-col justify-between bg-no-repeat"
      style={{
        backgroundImage: "url('/DownloadPage.svg')",
        backgroundPosition: "75% 66%",
        backgroundSize: "28%",
      }}
    >
      <Navbar logoColor="white" textColor="white" />
      <main className="flex-grow flex items-center">
        <div className="ml-20">
          {" "}
          <h1 className="text-4xl mb-4">Download the APK now!</h1>
          <div className="flex flex-col items-center space-y-4">
            <button className="bg-white text-black px-6 py-2 rounded-full mb-4 hover:bg-green-200">
              Download
            </button>
            <p className="text-gray-400">Version: 1.0.0xx</p>
            <p className="text-gray-400">For IOS and ANDROID</p>
          </div>
        </div>
      </main>
      <footer className="flex justify-center mb-8">
        <p className="text-gray-400">Made with ♥ by ACM-VIT</p>
      </footer>
    </div>
    
  );
}
