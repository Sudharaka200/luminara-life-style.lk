"use client";

import { createContext, useEffect, useState } from "react";
import LogoSlider from "../components/imageslider";
import TestimonialSection from "../components/testomonial";

// Context to track homepage mount status
const MountContext = createContext({ isMounted: false });

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <MountContext.Provider value={{ isMounted }}>
      <div>
        {/* Other homepage content */}
        <LogoSlider />
        <TestimonialSection />
      </div>
    </MountContext.Provider>
  );
}