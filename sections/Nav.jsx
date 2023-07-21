"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "@/components/Background";

export default function Nav() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "PROJECTS", link: "/" },
        { name: "EXPERIANCE", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className="sticky top-0 z-10">
            <div
                className={`relative ${
                    scrollPosition > 50 ? "border-b border-[#ffffff26]" : null
                }`}
            >
                <Background show={scrollPosition < 50 || open ? true : false} />
                <nav className="container mx-auto text-white z-10 flex items-center justify-between px-3 md:px-0 py-4 ">
                    <img
                        src="https://placehold.co/50x50"
                        alt="logo"
                        className="z-10"
                    />

                    <div
                        onClick={() => setOpen(!open)}
                        className="relative right-0 cursor-pointer md:hidden"
                    >
                        <div className="w-6 h-6">
                            <div className="relative w-full h-0.5 bg-white"></div>
                            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-white"></div>
                            <div className="absolute bottom-0 w-full h-0.5 bg-white"></div>
                        </div>
                    </div>

                    <AnimatePresence></AnimatePresence>
                    <ul
                        className={`z-10 md:flex md:items-center absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 transition-all duration-500 top-20
                        }`}
                    >
                        <Background
                            show={scrollPosition < 50 || open ? true : false}
                            className="md:hidden"
                        />
                        {Links.map((link) => (
                            <li
                                key={link.name}
                                className="px-3 xl:px-0 md:pl-8 md:py-0 py-7 border-t border-[#ffffff26] md:border-none"
                            >
                                <a
                                    href={`#${link.link}`}
                                    className="hover:text-cyan-500 duration-500"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <div className="px-3 xl:px-0 md:pl-8 md:py-0 py-7 border-b border-t border-[#ffffff26] md:border-none">
                            <a
                                href="#contact"
                                className="gradient p-3 rounded-lg px-10 block w-full text-center"
                            >
                                Contact
                            </a>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
