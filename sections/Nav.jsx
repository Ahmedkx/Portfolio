"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "@/components/Background";
import NavLinks from "@/components/NavLinks";

export default function Nav() {
    let Links = [
        { name: "HOME", link: "home" },
        { name: "ABOUT", link: "about" },
        { name: "EXPERIANCE", link: "experience" },
        { name: "PROJECTS", link: "projects" },
    ];

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

    const [width, setWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setWidth]);

    // useEffect(() => {
    //     if (width >= 768) {
    //         setOpen(true);
    //     } else if (width <= 768) {
    //         setOpen(false);
    //     }
    // }, [width >= 768]);

    let [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 bg-[#101630] z-20">
            <div
                className={`relative ${
                    scrollPosition > 50 && !open
                        ? "border-b border-[#ffffff26]"
                        : null
                }`}
            >
                <nav className="container mx-auto text-white z-20 flex items-center justify-between px-3 md:px-0 py-4">
                    <img
                        src="https://placehold.co/50x50"
                        alt="logo"
                        className="z-30"
                    />
                    {/* Burger Icon */}
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

                    {/* Menu Links */}
                    <ul
                        className={`${
                            open ? "block" : "hidden"
                        } md:flex md:items-center absolute md:static left-0 w-full md:w-auto md:pl-0 transition-all duration-500 top-[82px] bg-[#101630]`}
                    >
                        {/* <Background
                            show={scrollPosition < 50 || open ? true : false}
                            className=""
                        /> */}
                        {Links.map((link) => (
                            <li
                                key={link.name}
                                className="z-30 md:pl-8 md:py-0 py-7 border-t border-[#ffffff26] md:border-none"
                            >
                                <a
                                    href={`#${link.link}`}
                                    className="block px-3 md:px-0 container mx-auto hover:text-cyan-500 duration-500"
                                    onClick={() => setOpen((p) => !p)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <div className="px-3 md:pl-8 md:py-0 py-7 border-b border-t border-[#ffffff26] md:border-none">
                            <a
                                href="#contact"
                                className="gradient p-3 rounded-lg px-10 block w-full text-center"
                                onClick={() => setOpen((p) => !p)}
                            >
                                Contact
                            </a>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
