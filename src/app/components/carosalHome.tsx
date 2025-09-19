"use client";
import { useState } from "react";
import Image from "next/image";

import Img1 from "@/../public/images/1.png";
import Img2 from "@/../public/images/2.png";
import Img3 from "@/../public/images/3.png";
import Img4 from "@/../public/images/4.png";
import Img5 from "@/../public/images/5.png";
import Img6 from "@/../public/images/6.png";
import Img7 from "@/../public/images/7.png";
import Img8 from "@/../public/images/8.png";
import Img9 from "@/../public/images/8.png";



const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, ,Img8, Img9, Img1, Img1, Img1, Img1, Img1];

export default function CarosalHome() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="">
      {/* Main Image */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
        <Image
          src={images[selected]}
          alt={`House ${selected + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`relative w-28 h-20 rounded-md overflow-hidden border-2 ${
              selected === index ? "border-blue-500" : "border-transparent"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
