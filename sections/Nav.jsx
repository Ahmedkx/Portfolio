"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "@/components/Background";
import NavLinks from "@/components/NavLinks";

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

    useEffect(() => {
        if (width >= 768) {
            setOpen(true);
        } else if (width <= 768) {
            setOpen(false);
        }
    }, [width >= 768]);

    let [open, setOpen] = useState(false);

    return (
        <div className="sticky top-0">
            <div
                className={`relative ${
                    scrollPosition > 50 && !open
                        ? "border-b border-[#ffffff26]"
                        : null
                }`}
            >
                <Background show={scrollPosition < 50 || open ? true : false} />
                <nav className="container mx-auto text-white z-30 flex items-center justify-between px-3 md:px-0 py-4 ">
                    <img
                        src="https://placehold.co/50x50"
                        alt="logo"
                        className="z-30"
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

                    {open && <NavLinks />}
                </nav>
            </div>
        </div>
    );
}
