"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import LandIcon from '../images/location.png'
import HomeIcon from '../images/house.png'
import ApartmentIcon from '../images/residential.png'
import CabanaIcon from '../images/cabana 1.png'
import ShopsIcon from '../images/store 1.png'
import OtherIcon from '../images/real-estate 1.png'

const bgImages = [
    "https://www.reddottours.com/uploads/Accommodation/category/contemporary-properties-header.jpg",
    "https://luxenautilusrealty.com/wp-content/uploads/2024/07/Apartment-Building-Colombo.jpg.webp",
    "https://www.lankapropertyweb.com/property-news/wp-content/uploads/2021/02/07-14.jpg",
];

export default function HomeCarosal() {
    const [current, setCurrent] = useState(0);
    const [active, setActive] = useState("Lands");

    // Auto-slide every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
            {/* Background Carousel */}
            <div className="absolute inset-0">
                {bgImages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={img}
                            alt={`Background ${index}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Overlay content */}
            <div className="relative z-10 p-8 w-full max-w-4xl">
                <ul className="flex gap-5 flex-wrap justify-center">
                    <li>
                        <div
                            onClick={() => setActive("Lands")}
                            className={`border p-3 flex flex-col items-center w-30 h-30 cursor-pointer backdrop-blur-md transition-all duration-300
                            ${active === "Lands"
                                    ? "bg-[#086FB1] text-white scale-105 shadow-lg"   // active
                                    : "bg-white/60 hover:bg-[#086FB1] hover:text-white"}`} // default + hover
                        >
                            <p className="mb-2">Lands</p>
                            <Image src={LandIcon} alt="Land Icon" className="w-16 h-16 object-contain" />
                        </div>
                    </li>


                    <li>
                        <div
                            onClick={() => setActive("Homes")}
                            className={`border p-3 flex flex-col items-center w-30 h-30 cursor-pointer backdrop-blur-md transition-all duration-300
                            ${active === "Homes"
                                    ? "bg-[#086FB1] text-white scale-105 shadow-lg"   // active
                                    : "bg-white/60 hover:bg-[#086FB1] hover:text-white"}`} // default + hover
                        >
                            <p className="mb-2">Homes</p>
                            <Image src={HomeIcon} alt="Home Icon" className="w-16 h-16 object-contain" />
                        </div>
                    </li>

                    <li>
                        <div
                            onClick={() => setActive("Apartments")}
                            className={`border p-3 flex flex-col items-center w-30 h-30 cursor-pointer backdrop-blur-md transition-all duration-300
                            ${active === "Apartments"
                                    ? "bg-[#086FB1] text-white scale-105 shadow-lg"   // active
                                    : "bg-white/60 hover:bg-[#086FB1] hover:text-white"}`} // default + hover
                        >
                            <p className="mb-2">Apartments</p>
                            <Image src={ApartmentIcon} alt="Apartment Icon" className="w-16 h-16 object-contain" />
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => setActive("Cabanas")}
                            className={`border p-3 flex flex-col items-center w-30 h-30 cursor-pointer backdrop-blur-md transition-all duration-300
                            ${active === "Cabanas"
                                    ? "bg-[#086FB1] text-white scale-105 shadow-lg"   // active
                                    : "bg-white/60 hover:bg-[#086FB1] hover:text-white"}`} // default + hover
            >
                            <p className="mb-2">Cabana</p>
                            <Image src={CabanaIcon} alt="Cabana Icon" className="w-16 h-16 object-contain" />
                        </div>
                    </li>
                    <li>
                        <div onClick={() => setActive("Shops")}
                            className={`border p-3 flex flex-col items-center w-30 h-30 cursor-pointer backdrop-blur-md transition-all duration-300
                            ${active === "Shops"
                                    ? "bg-[#086FB1] text-white scale-105 shadow-lg"   // active
                                    : "bg-white/60 hover:bg-[#086FB1] hover:text-white"}`} // default + hover
            >
                            <p className="mb-2">Shops</p>
                            <Image src={ShopsIcon} alt="Shops Icon" className="w-16 h-16 object-contain" />
                        </div>
                    </li>
                    <li>
                        <div onClick={() => setActive("Others")}
                            className={`border p-3 flex flex-col items-center w-30 h-30 cursor-pointer backdrop-blur-md transition-all duration-300
                            ${active === "Others"
                                    ? "bg-[#086FB1] text-white scale-105 shadow-lg"   // active
                                    : "bg-white/60 hover:bg-[#086FB1] hover:text-white"}`} // default + hover
            >
                            <p className="mb-2">Others</p>
                            <Image src={OtherIcon} alt="Other Icon" className="w-16 h-16 object-contain" />
                        </div>
                    </li>

                </ul>

                {/* Search Form */}
                <div className="mt-6 bg-white/60 backdrop-blur-md border border-white/30 md:p-5 rounded">
                    <form>
                        <ul className="flex gap-5 flex-wrap justify-center">
                            <li>
                                <label>Property Type</label> <br />
                                <input type="text" className="bg-white border px-2 py-1 rounded" />
                            </li>
                            <li>
                                <label>Location</label> <br />
                                <input type="text" className="bg-white border px-2 py-1 rounded" />
                            </li>
                            <li>
                                <label>Price Range</label> <br />
                                <input type="text" className="bg-white border px-2 py-1 rounded" />
                            </li>
                            <li className="flex items-end">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                    Search
                                </button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
}
