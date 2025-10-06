"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Bed, Bath } from "lucide-react";
import CarosalHome from "../../components/carosalHome";
import Propertycard from "../../components/card";
import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  params: Promise<{ id: string }>;
}

type RealEstate = {
  _id: string;
  title: string;
  category: string;
  coverImg: string;
  companyLogo: string;
  price: number;
  description: string;
  location: string;
  video: string;
  images: string[];
  landMap: string[];
  googleMap: string;
  beds: number;
  baths: number;
};

export default function Page({ params }: Props) {
  // ✅ unwrap params Promise
  const { id } = React.use(params);

  const [post, setPost] = useState<RealEstate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get(`${API_URL}/post/${id}`);
        setPost(res.data.realestate);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPost();
  }, [id, API_URL]);

  if (loading)
    return <p className="text-center py-10 text-gray-500">Loading...</p>;

  if (error)
    return <p className="text-center py-10 text-red-500">Error: {error}</p>;

  if (!post)
    return <p className="text-center py-10">No post found.</p>;

  return (
    <>
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src={post.coverImg}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto py-6 px-4">
        <div className="flex items-center gap-3 mb-4">
          {post.companyLogo && (
            <Image
              src={post.companyLogo}
              alt="Company Logo"
              width={60}
              height={60}
              className="rounded-full object-contain"
            />
          )}
          <div>
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-1" />
              <p>{post.location}</p>
            </div>
          </div>
        </div>

        {post.images && post.images.length > 0 && (
          <div className="w-full mb-6">
            <CarosalHome images={post.images} />
          </div>
        )}

        <div className="flex items-center gap-2 text-red-600 font-bold text-2xl mb-1">
          <p>{post.price.toLocaleString()}</p>
          <span>LKR</span>
        </div>
        <p className="italic text-sm text-gray-500 mb-3">
          PER UNIT UPWARDS
        </p>

        <div className="flex gap-3 mb-4 text-gray-700">
          <div className="flex items-center gap-1">
            <Bed size={16} /> {post.beds} Beds
          </div>
          <div className="flex items-center gap-1">
            <Bath size={16} /> {post.baths} Baths
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-5">
          {post.description}
        </p>

        <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
          Schedule Free Consultation
        </button>
      </div>

      {post.video && (
        <div className="container mx-auto mt-10 px-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={post.video}
              title="Property Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[400px] rounded-xl"
            ></iframe>
          </div>
        </div>
      )}

      {post.landMap && post.landMap.length > 0 && (
        <div className="container mx-auto mt-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {post.landMap.map((mapUrl, index) => (
              <Image
                key={index}
                src={mapUrl}
                alt={`Land Map ${index + 1}`}
                width={800}
                height={500}
                className="w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      )}

      {post.googleMap && (
        <div className="container mx-auto mt-10 px-4">
          <div className="w-full h-[400px] rounded-xl overflow-hidden">
            <iframe
              src={post.googleMap}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
