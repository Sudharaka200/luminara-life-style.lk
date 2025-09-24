"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

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
  "/images/Group 173.png",
  "/images/Group 173.png",
];

export default function LogoSlider() {
  const controls = useAnimation();
  const lastY = useRef<number | null>(null);
  const lastTime = useRef<number>(0);
  const scrollVelocity = useRef(0);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    lastY.current = window.scrollY;

    const onScroll = () => {
      if (!isMounted.current) return;
      const now = performance.now();
      const dy = lastY.current !== null ? Math.abs(window.scrollY - lastY.current) : 0;
      const dt = now - lastTime.current || 1;
      scrollVelocity.current = dy / dt;
      lastY.current = window.scrollY;
      lastTime.current = now;
    };

    window.addEventListener("scroll", onScroll);

    // Start animation only after mount
    const startAnimation = async () => {
      if (!isMounted.current) return;

      await controls.start({ x: 0 }); // Initialize controls safely

      // Continuous animation with scroll velocity
      controls.start((i) => {
        const totalLogos = logos.length;
        const row = Math.floor(i / totalLogos);
        const direction = row % 2 === 0 ? -1 : 1;
        const baseSpeed = 20; // Base duration in seconds
        const speed = baseSpeed / (1 + scrollVelocity.current * 2); // Adjust speed based on scroll
        return {
          x: `${direction * 100}%`,
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: speed,
            },
          },
        };
      });
    };

    startAnimation();

    return () => {
      isMounted.current = false;
      window.removeEventListener("scroll", onScroll);
      controls.stop(); // Stop all animations on unmount
    };
  }, [controls]);

  return (
    <div className="w-full min-h-[600px] flex flex-col items-center gap-2 py-10 overflow-hidden">
      {[0, 1, 2].map((row) => (
        <div key={row} className="w-full flex justify-center gap-2">
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
}