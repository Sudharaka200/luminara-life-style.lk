"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
interface Category {
  name: string;
  img: string;
}

const categories: Category[] = [
  { name: "Lands", img: "https://ensia.com/wp-content/uploads/2023/02/Land-sector-notable-main-image-e1676653229778.jpg" },
  { name: "Homes", img: "https://coralhomes.com.au/wp-content/uploads/Atlanta-Series-1190x680.png" },
  { name: "Apartments", img: "https://www.pridegroup.net/uploads/images/full/64ab552afb2f90cff8c14e5ea452c0c0.jpg" },
  { name: "Cabana", img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/676934233.jpg?k=cdeee5fcfafd79f74b1db9f7b310ab3cbdc9acade8d82895de87153b414ca59e&o=&hp=1" },
  { name: "Shops", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2F82zy8wq0HQKWwmVCqfhu3jEU2G6MZlkfg&s" },
  { name: "Others", img: "https://hurghadiansproperty.com/wp-content/uploads/2024/08/hurghadiansproperty_A_stunning_contemporary_villa_in_Marbella_S_a1848e18-b163-47ee-881c-d7b473fe7e49.webp" },
];

const CategorySwiper: FC = () => {
  return (
    <div className="container mx-auto px-4 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
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
                <span>{cat.name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySwiper;
