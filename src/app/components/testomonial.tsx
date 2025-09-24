"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";
import ProfilePic from "@/../public/images/Ellipse 17.png";
import { motion, useAnimation } from "framer-motion";

interface Testimonial {
  comment: string;
  name: string;
  profile: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    comment:
      "Luminara Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: ProfilePic,
  },
  {
    comment:
      "Taminore Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: ProfilePic,
  },
  {
    comment:
      "Luminara Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: ProfilePic,
  },
  {
    comment:
      "Taminore Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Somaratne, Colombo",
    profile: ProfilePic,
  },
  {
    comment:
      "Luminara Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: ProfilePic,
  },
  {
    comment:
      "Taminore Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: ProfilePic,
  },
  {
    comment:
      "Luminara Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: ProfilePic,
  },
  {
    comment:
      "Taminore Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: ProfilePic,
  },
  {
    comment:
      "Luminara Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: ProfilePic,
  },
  {
    comment:
      "Taminore Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: ProfilePic,
  },
  {
    comment:
      "Luminara Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: ProfilePic,
  },
  {
    comment:
      "Taminore Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: ProfilePic,
  },
  {
    comment:
      "Luminara Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: ProfilePic,
  },
  {
    comment:
      "Taminore Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: ProfilePic,
  },
  {
    comment:
      "Luminara Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: ProfilePic,
  },
];

function TestimonialSection() {
  const controls = useAnimation();
  const lastY = useRef<number | null>(null);
  const lastTime = useRef<number>(0);
  const scrollVelocity = useRef<number>(0);
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
      controls.start((i: number) => {
        const totalTestimonials = testimonials.length;
        const row = Math.floor(i / totalTestimonials);
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
    <div className="container-fluid mx-auto mt-0 py-10">
      {[0, 1, 2, 3, 4].map((row) => (
        <div key={row} className="flex justify-center gap-4 mb-4 overflow-x-hidden">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={`${row}-${i}`}
              custom={row * testimonials.length + i}
              animate={controls}
              className="flex-shrink-0 w-1/3 p-4 bg-blue-100 rounded-lg shadow-md min-w-[300px]"
            >
              <p className="text-gray-700 break-words">{testimonial.comment}</p>
              <div className="flex gap-2 items-center mt-2">
                <Image
                  src={testimonial.profile}
                  alt="Profile picture"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <h5 className="text-lg font-semibold">{testimonial.name}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TestimonialSection;