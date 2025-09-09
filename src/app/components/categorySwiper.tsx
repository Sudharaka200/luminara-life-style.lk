"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

interface Category {
  name: string;
  img: string;
  icon: string;
}

const categories: Category[] = [
  { name: "Lands", img: "/images/house.png", icon: "/images/house.png" },
  { name: "Homes", img: "/images/house.png", icon: "/images/house.png" },
  { name: "Apartments", img: "/images/house.png", icon: "/images/house.png" },
  { name: "Cabana", img: "/images/house.png", icon: "/images/house.png" },
  { name: "Shops", img: "/images/house.png", icon: "/images/house.png" },
  { name: "Apartments", img: "/images/house.png", icon: "/images/house.png" },
  { name: "Cabana", img: "/images/house.png", icon: "/images/house.png" },
  { name: "Shops", img: "/images/house.png", icon: "/images/house.png" },
];

const categorySwiper: FC = () => {
  return (
    <div className="container mx-auto px-4  overflow-hidden">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative rounded-lg overflow-hidden shadow-lg h-60 flex items-center justify-center text-white text-lg font-semibold"
              style={{
                backgroundImage: cat.img ? `url(${cat.img})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-blue-600/50"></div>
              <div className="relative flex flex-col items-center">
                <Image src={cat.icon} alt={cat.name} className="w-100 h-12 mb-3 " width={100} height={100} />
                <span>{cat.name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default categorySwiper;
