import React from "react";
import Navbar from "../Navbar";

const DownLoad: React.FC = () => {
  return (
    <div
      className="bg-gray-900 text-white min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/DownloadPage.svg')",
        backgroundPosition: "75% 66%",
        backgroundSize: "28%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar logoColor="white" textColor="white" />
      <main className="flex-grow flex items-center justify-center md:justify-start">
        <div className="max-w-4xl mx-6 text-center md:text-left">
          <h1 className="text-4xl mb-4">Download the APK now!</h1>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <button className="bg-white text-black px-6 py-2 rounded-full mb-4 hover:bg-green-200">
              Download
            </button>
            <p className="text-gray-400">Version: 1.0.0.1</p>
            <p className="text-gray-400">For iOS and Android</p>
          </div>
        </div>
      </main>
      <footer className="flex justify-center mb-8">
        <p className="text-gray-400">Made with ♥ by ACM-VIT</p>
      </footer>
    </div>
  );
};

export default DownLoad;
