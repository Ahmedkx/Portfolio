"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();

    console.log(isVisible);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        controls.start({ x: 100 });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        controls.start({ x: isVisible ? 0 : 100 });
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className="scroll-to-top-button group rounded-full w-[60px] h-[60px]"
                    onClick={scrollToTop}
                    initial={{ x: 100 }}
                    animate={controls}
                    exit={{ x: 100 }}
                    style={{
                        position: "fixed",
                        bottom: "30px",
                        right: "30px",
                        zIndex: 999,
                        background:
                            "linear-gradient(326.6deg, #13ADC7 21.25%, #6978D1 58.73%, #945DD6 77.47%)",
                        boxShadow: "0px 10px 30px 0px rgba(0, 178, 255, 0.35)",
                    }}
                >
                    <div className="group-hover:-translate-y-2 center transition-all">
                        <Image
                            src="/arrow.png"
                            width={40}
                            height={40}
                            alt="arrow"
                            className="rotate-180"
                        ></Image>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
