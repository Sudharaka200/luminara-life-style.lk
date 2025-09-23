"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import ProfilePic from '@/../public/images/Ellipse 17.png';
import { motion, useAnimation } from "framer-motion";


interface Testimonial {
  comment: string;
  name: string;
  profile: string; // or another type if needed
}

const testimonials: Testimonial[] = [
  {
    comment:
      "Luminara Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: "ProfilePic",
  },
  {
    comment:
      "Luminara Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.",
    name: "Nuwan Perera, Colombo",
    profile: "ProfilePic",
  },
  
]


function testomonial() {
  const controls = useAnimation();

  const lastY = useRef(window.scrollY);
  const lastTime = useRef(performance.now());
  const scrollVelocity = useRef(0);

  const offsetRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const now = performance.now();
      const dy = Math.abs(window.scrollY - lastTime.current);
      const dt = now - lastTime.current || 1;

      scrollVelocity.current = dy / dt;
      lastY.current = window.scrollY;
      lastTime.current = now;
    };

    window.addEventListener("scroll", onScroll);

    let raf: number;
    const tick = () => {
      const baseSpeed = 0.02;
      const boost = scrollVelocity.current * 2;
      offsetRef.current += baseSpeed + boost;

      controls.start((i) => {
        const totaltestomonials = testimonials.length;
        const row = Math.floor(i / totaltestomonials);
        const direction = row % 2 === 0 ? -1 : 1;
        const percent = (offsetRef.current * direction) % 100;
        return {
          x: `${percent}%`,
          transition: { ease: "linear", duration: 0.016 },
        };
      });

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
    <>
      <div className='w-full min-h-[600px] flex flex-col items-center gap-2 py-10 overflow-hidden'>
        {[0, 1, 2].map((row) => (
          <div key={row} className='w-full  justify-center gap-2'>
            {testimonials.map((src, i) => (
              <motion.div
                key={`${row}-${i}`}
                custom={row * testimonials.length + i}
                animate={controls}
                className="flex-shrink-0"
              >
                <p>{src.comment}</p>
                <div className='flex gap-2'>
                  <Image src={src.profile} alt='' width={100} height={100} />
                  <h5>{src.name}</h5>
                </div>
              </motion.div>
            ))}
          </div>
        ))}



        {/* <div className='w-full  justify-center gap-2'>
          <p>Luminara Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care.</p>
          <div className='flex gap-2'>
            <Image src={ProfilePic} alt='' />
            <h5>Nuwan Perera, Colombo</h5>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default testomonial
