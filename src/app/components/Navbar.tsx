import React from "react";
import Image from "next/image";

interface NavbarProps {
  logoColor: "black" | "white";
  textColor: "black" | "white";
}

const Navbar: React.FC<NavbarProps> = ({ logoColor, textColor }) => {
  return (
    <nav className="bg-transparent py-4 md:py-5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
        <div className="flex-shrink-0">
          {logoColor === "black" ? (
<<<<<<< HEAD
            <Image
              src="/LogoB.svg"
              alt="Logo"
              width={100}
              height={70}
              className="md:w-36 md:h-24 w-24 h-16"
            />
          ) : (
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={100}
              height={70}
              className="md:w-36 md:h-24 w-24 h-16"
            />
=======
            <Image src="/LogoBla.svg" alt="Logo" width={150} height={100} />
          ) : (
            <Image src="/LogoW.svg" alt="Logo" width={150} height={100} />
>>>>>>> 36b8700be9181cd82e89fb30a54ff18f48a216f8
          )}
        </div>
        <ul className="flex gap-2 sm:gap-4 md:gap-6 list-none">
          <li>
            <a
              href="/"
              className={`block py-2 px-2 md:px-3 text-center font-bold ${
                textColor === "black" ? "text-black" : "text-white"
              } hover:text-gray-200 text-sm md:text-base`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`block py-2 px-2 md:px-3 text-center font-bold ${
                textColor === "black" ? "text-black" : "text-white"
              } hover:text-gray-200 text-sm md:text-base`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/delete"
              className={`block py-2 px-2 md:px-3 text-center font-bold ${
                textColor === "black" ? "text-black" : "text-white"
              } hover:text-gray-200 text-sm md:text-base`}
            >
              Delete
            </a>
          </li>
          <li>
            <a
              href="/download"
              className={`block py-2 px-2 md:px-3 text-center font-bold ${
                textColor === "black" ? "text-black" : "text-white"
              } hover:text-gray-200 text-sm md:text-base`}
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
