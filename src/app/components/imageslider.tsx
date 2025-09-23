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

  // track scroll speed
  const lastY = useRef(window.scrollY);
  const lastTime = useRef(performance.now());
  const scrollVelocity = useRef(0);

  // track a continuously increasing offset
  const offsetRef = useRef(0);

  useEffect(() => {
    // update scrollVelocity on scroll
    const onScroll = () => {
      const now = performance.now();
      const dy = Math.abs(window.scrollY - lastY.current);
      const dt = now - lastTime.current || 1;
      // px per ms
      scrollVelocity.current = dy / dt;
      lastY.current = window.scrollY;
      lastTime.current = now;
    };
    window.addEventListener("scroll", onScroll);

    // animation loop
    let raf: number;
    const tick = () => {
      const baseSpeed = 0.02;              // slow automatic movement
      const boost = scrollVelocity.current * 2; // speed boost when scrolling
      offsetRef.current += baseSpeed + boost;

      controls.start((i) => {
        const totalLogos = logos.length;
        const row = Math.floor(i / totalLogos);
        const direction = row % 2 === 0 ? -1 : 1;
        const percent = (offsetRef.current * direction) % 100;
        return {
          x: `${percent}%`,
          transition: { ease: "linear", duration: 0.016 }, // ~60fps
        };
      });

      // decay the boost gradually so it slows down smoothly
      scrollVelocity.current *= 0.9;

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
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
