"use client";
import { motion } from "framer-motion";

export default function Title({ text, className }) {
    return (
        <div
            className={`relative mx-auto text-center text-5xl font-bold my-20 text-white w-fit ${className}`}
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <div className="absolute gradient-background w-full h-1 bottom-[-15px] rounded-3xl"></div>
            </motion.div>
            {text}
        </div>
    );
}
