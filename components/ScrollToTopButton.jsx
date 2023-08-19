"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        controls.start({ opacity: 0 });
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
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

    const buttonStyles = {
        boxShadow: "0px 10px 30px 0px rgba(0, 178, 255, 0.35)",
        background:
            "linear-gradient(326.6deg, #13ADC7 21.25%, #6978D1 58.73%, #945DD6 77.47%)",
    };

    return (
        <motion.button
            className="scroll-to-top-button"
            onClick={scrollToTop}
            initial={{ x: 100 }}
            animate={controls}
            style={{
                display: isVisible ? "block" : "none",
                position: "fixed",
                bottom: "30px",
                right: "30px",
                zIndex: 999,
            }}
        >
            <div style={buttonStyles} className="rounded-full w-10 h-10">
                H
            </div>
        </motion.button>
    );
};

export default ScrollToTopButton;
