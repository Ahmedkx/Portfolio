"use client";
import { motion } from "framer-motion";

export default function Border() {
    return (
        <motion.div
        // initial={{ x: 0, y: 0 }}
        // animate={{ x: 5, y: 5 }}
        // transition={{ duration: 1 }}
        // className="w-[200px]"
        >
            <div className="border-cyan-500 border-8 rounded-lg absolute h-full w-full left-7 top-7 -z-10"></div>
        </motion.div>
    );
}
