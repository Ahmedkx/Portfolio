"use client";
import Background from "@/components/Background";
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
        <div className="sticky top-0 z-10">
            <div className="relative ">
                <Background />
                <nav className="container mx-auto text-white z-10">
                    <div className="md:flex items-center justify-between py-4 md:px-0 px-7">
                        <div className="relative font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
                            <img
                                src="https://placehold.co/50x50"
                                alt="logo"
                                className="z-10"
                            />
                            <div
                                onClick={() => setOpen(!open)}
                                className="absolute right-0 cursor-pointer md:hidden"
                            >
                                {/* <div name={open ? "close" : "menu"}>aaa</div> */}
                                <div
                                    className="w-6 h-6"
                                    name={open ? "close" : "menu"}
                                >
                                    <div className="relative w-full h-0.5 bg-white"></div>
                                    <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-white"></div>
                                    <div className="absolute bottom-0 w-full h-0.5 bg-white"></div>
                                </div>
                            </div>
                        </div>

                        <ul
                            className={`z-10 md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in ${
                                open ? "top-20 " : "top-[-490px]"
                            }`}
                        >
                            {open ? <Background /> : ""}

                            {Links.map((link) => (
                                <li
                                    key={link.name}
                                    className="md:ml-8 md:my-0 my-7 text-center"
                                >
                                    <a
                                        href={`#${link.link}`}
                                        className="hover:text-cyan-500 duration-500"
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
            </div>
        </div>
    );
}
