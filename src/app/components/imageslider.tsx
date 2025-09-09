"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useCallback } from "react";

const logos = [
    "/images/Group 173.png",        
    "/images/Group 173.png",
    "/images/Group 173.png",
    "/images/Group 173.png",
    "/images/Group 173.png",
    "/images/Group 173.png",
    "/images/Group 173.png",
    "/images/Group 173.png",
    "/images/Group 173.png",
    "/images/Group 173.png",
    "/images/Group 173.png",
    "/images/Group 173.png",
    "/images/Group 173.png",
    "/images/Group 173.png",
    "/images/Group 173.png",
];

const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

const LogoSlider = () => {
    const controls = useAnimation();


    const handleScroll = useCallback(
        debounce(() => {
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollFraction = scrollY / maxScroll;

            controls.start((i) => {
                const totalLogos = logos.length;
                const offset = (scrollFraction * totalLogos * 100) % 100;

                const row = Math.floor(i / totalLogos);
                const direction = row % 3 === 1 ? -1 : 1;
                return {
                    x: `${direction * offset}%`,
                    transition: { type: "spring", stiffness: 30, damping: 15 },
                };
            });
        }, 16), // ~60fps
        [controls]
    );

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <div className="w-full min-h-[600px] flex flex-col items-center gap-10 py-10 overflow-hidden bg-white">
            {[0, 1, 2].map((row) => (
                <div key={row} className="w-full flex justify-center gap-10">
                    {logos.map((src, i) => (
                        <motion.div
                            key={`${row}-${i}`}
                            custom={row * logos.length + i}
                            animate={controls}
                            className="flex-shrink-0"
                        >
                            <Image
                                src={src}
                                alt={`logo-${row}-${i}`}
                                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
                                width={800} 
                                height={600} 
                                priority={i === 0 && row === 0} 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </motion.div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default LogoSlider;