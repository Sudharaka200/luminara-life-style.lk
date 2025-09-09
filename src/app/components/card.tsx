"use client";

import { FC } from "react";
import Image from "next/image";
import { MapPin, Bed, Bath } from "lucide-react"; 

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  link?: string;
}

const card: FC<PropertyCardProps> = ({
  title,
  location,
  price,
  image,
  beds,
  baths,
  link = "#",
}) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin size={14} className="mr-1" />
          {location}
        </div>
        <p className="text-gray-900 font-semibold">{price} LKR</p>
        <p className="text-xs text-gray-500 mb-3">PER UNIT UPWARDS</p>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-700 text-sm mb-4">
          <div className="flex items-center">
            <Bed size={16} className="mr-1" /> {beds}
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" /> {baths}
          </div>
        </div>

        {/* Link */}
        <a
          href={link}
          className="text-blue-600 font-medium hover:underline"
        >
          Explore More
        </a>
      </div>
    </div>
  );
};

export default card;
