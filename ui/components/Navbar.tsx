import React from "react";
import Image from "next/image";

interface NavbarProps {
  logoColor: "black" | "white"; // Assuming two possible logo colors
}

const Navbar: React.FC<NavbarProps> = ({ logoColor }) => {
  return (
    <nav className="bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {logoColor === "black" ? (
          <Image src="/Logo.svg" alt="Logo" width={100} height={100} />
        ) : (
          <Image src="/LogoB.svg" alt="Logo" width={100} height={100} />
        )}
        <ul className="flex gap-6 list-none">
          <li>
            <a
              href="/"
              className="text-dark-blue font-bold hover:text-gray-200 block py-2 px-4 text-center"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-dark-blue font-bold hover:text-gray-200 block py-2 px-4 text-center"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-dark-blue font-bold hover:text-gray-200 block py-2 px-4 text-center"
            >
              Delete
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-dark-blue font-bold hover:text-gray-200 block py-2 px-4 text-center"
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
