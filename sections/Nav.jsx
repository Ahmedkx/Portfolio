"use client";
import { useState } from "react";

export default function Nav() {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "PROJECTS", link: "/" },
        { name: "EXPERIANCE", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <>
            <nav className="text-white sticky">
                <div className="md:flex items-center justify-between py-4 md:px-0 px-7">
                    <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                        <img src="https://placehold.co/50x50" alt="logo" />
                    </div>

                    <div
                        onClick={() => setOpen(!open)}
                        className="absolute right-8 top-6 cursor-pointer md:hidden"
                    >
                        {/* <div name={open ? "close" : "menu"}>aaa</div> */}
                        <div className="w-6 h-6" name={open ? "close" : "menu"}>
                            <div className="relative w-full h-0.5 bg-gray-600"></div>
                            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-gray-600"></div>
                            <div className="absolute bottom-0 w-full h-0.5 bg-gray-600"></div>
                        </div>
                    </div>

                    <ul
                        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                            open ? "top-20 " : "top-[-490px]"
                        }`}
                    >
                        {Links.map((link) => (
                            <li
                                key={link.name}
                                className="md:ml-8 md:my-0 my-7 text-center"
                            >
                                <a
                                    href={`#${link.link}`}
                                    className="hover:text-gray-400 duration-500"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <a
                            href="#contact"
                            className="gradient p-3 rounded-lg px-10 ml-8"
                        >
                            Contact
                        </a>
                    </ul>
                </div>
            </nav>
        </>
    );
}
