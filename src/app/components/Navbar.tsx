import React from "react";
interface NavbarProps {
  logoColor: "black" | "white";
  textColor: "black" | "white";
}
import Image from "next/image";


const Navbar: React.FC<NavbarProps> = ({ logoColor, textColor }) => {
  return (
    <nav className="bg-transparent py-5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-8 flex justify-between items-center">
        <div className="pr-4 sm:pr-8">
          {logoColor === "black" ? (
            <Image src="/LogoB.svg" alt="Logo" width={150} height={100} />
          ) : (
            <Image src="/Logo.svg" alt="Logo" width={150} height={100} />
          )}
        </div>
        <ul className="flex gap-6 list-none">
          <li>
            <a
              href="/"
              className={`block py-2 px-4 text-center font-bold ${
                textColor === "black" ? "text-black" : "text-white"
              } hover:text-gray-200`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`block py-2 px-4 text-center font-bold ${
                textColor === "black" ? "text-black" : "text-white"
              } hover:text-gray-200`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/delete"
              className={`block py-2 px-4 text-center font-bold ${
                textColor === "black" ? "text-black" : "text-white"
              } hover:text-gray-200`}
            >
              Delete
            </a>
          </li>
          <li>
            <a
              href="/download"
              className={`block py-2 px-4 text-center font-bold ${
                textColor === "black" ? "text-black" : "text-white"
              } hover:text-gray-200`}
            >
              Download
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


