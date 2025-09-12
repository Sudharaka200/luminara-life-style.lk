"use client";

import { FC } from "react";
import Image from "next/image";


interface PropertyCardProps {
  title: string;
  description: string;
  image: string;
}

const newsCard: FC<PropertyCardProps> = ({
  title,
  description,
  image,
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
          <p>{description}</p>
        </div>

      </div>
    </div>
  );
};

export default newsCard;
