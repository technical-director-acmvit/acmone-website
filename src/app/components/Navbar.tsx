import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/LogoBla.svg";
import LogoW from "@/app/assets/LogoW.svg";

interface NavbarProps {
    logoColor: "black" | "white";
    textColor: "black" | "white";
}

const Navbar: React.FC<NavbarProps> = ({ logoColor, textColor }) => {
    return (
        <nav className="bg-transparent py-4 md:py-5">
            <div className="flex flex-row justify-between mx-auto px-4 sm:px-6 md:px-8 items-center">
                <div className="flex-shrink-1">
                    {logoColor === "black" ? (
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={100}
                            height={70}
                            className="lg:w-[20%] md:w-[40%] w-[70%]"
                        />
                    ) : (
                        <Image
                            src={LogoW}
                            alt="Logo"
                            width={100}
                            height={70}
                            className="lg:w-[20%] md:w-[40%] w-[70%]"
                        />
                    )}
                </div>
                <ul className="flex gap-2 sm:gap-4 md:gap-6 list-none">
                    <li>
                        <a
                            href="/"
                            className={`block py-2 px-2 md:px-3 text-center font-bold ${
                                textColor === "black"
                                    ? "text-black"
                                    : "text-white"
                            } hover:text-gray-200 text-sm md:text-base`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className={`block py-2 px-2 md:px-3 text-center font-bold ${
                                textColor === "black"
                                    ? "text-black"
                                    : "text-white"
                            } hover:text-gray-200 text-sm md:text-base`}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/delete"
                            className={`block py-2 px-2 md:px-3 text-center font-bold ${
                                textColor === "black"
                                    ? "text-black"
                                    : "text-white"
                            } hover:text-gray-200 text-sm md:text-base`}
                        >
                            Delete
                        </a>
                    </li>
                    <li>
                        <a
                            href="/download"
                            className={`block py-2 px-2 md:px-3 text-center font-bold ${
                                textColor === "black"
                                    ? "text-black"
                                    : "text-white"
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
