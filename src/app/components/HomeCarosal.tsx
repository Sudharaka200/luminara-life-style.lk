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
                <form action="">
                    <ul className="flex gap-5 flex-wrap justify-center">
                        <li>
                            <div
                                onClick={() => setActive("Lands")}
                                className={`border p-3 flex flex-col items-center w-30 h-30 cursor-pointer backdrop-blur-md transition-all duration-300 text-[#464545]
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
                                className={`border p-3 flex flex-col items-center w-30 h-30 cursor-pointer backdrop-blur-md transition-all duration-300 text-[#464545]
                            ${active === "Homes"
                                        ? "bg-[#086FB1] text-white scale-105 shadow-lg"   // active
                                        : "bg-white/60 hover:bg-[#086FB1] hover:text-white"}`} // default + hover
                            >
                                <p className="mb-2 ">Homes</p>
                                <Image src={HomeIcon} alt="Home Icon" className="w-16 h-16 object-contain" />
                            </div>
                        </li>

                        <li>
                            <div
                                onClick={() => setActive("Apartments")}
                                className={`border p-3 flex flex-col items-center w-30 h-30 cursor-pointer backdrop-blur-md transition-all duration-300 text-[#464545]
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
                                className={`border p-3 flex flex-col items-center w-30 h-30 cursor-pointer backdrop-blur-md transition-all duration-300 text-[#464545]
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
                                className={`border p-3 flex flex-col items-center w-30 h-30 cursor-pointer backdrop-blur-md transition-all duration-300 text-[#464545]
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
                                className={`border p-3 flex flex-col items-center w-30 h-30 cursor-pointer backdrop-blur-md transition-all duration-300 text-[#464545]
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
                    <div className="mt-6 bg-white/60 backdrop-blur-md border border-white/30 p-5 rounded">
                        <ul className="flex gap-5 flex-wrap justify-center">
                            <li>
                                <label
                                    htmlFor="district"
                                    className="block text-sm font-medium text-[#464545] mb-1 text-center"
                                >
                                    Location
                                </label>
                                <select
                                    id="district"
                                    name="district"
                                    className="w-75 rounded-lg border border-[#464545]/40 bg-white px-3 py-2 text-[#464545] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#464545] focus:border-[#464545] transition-colors duration-200 hover:border-[#464545] appearance-none"
                                >
                                    <option value="">Select District</option>
                                    <option>Ampara</option>
                                    <option>Anuradhapura</option>
                                    <option>Badulla</option>
                                    <option>Batticaloa</option>
                                    <option>Colombo</option>
                                    <option>Galle</option>
                                    <option>Gampaha</option>
                                    <option>Hambantota</option>
                                    <option>Jaffna</option>
                                    <option>Kalutara</option>
                                    <option>Kandy</option>
                                    <option>Kegalle</option>
                                    <option>Kilinochchi</option>
                                    <option>Kurunegala</option>
                                    <option>Mannar</option>
                                    <option>Matale</option>
                                    <option>Matara</option>
                                    <option>Monaragala</option>
                                    <option>Mullaitivu</option>
                                    <option>Nuwara Eliya</option>
                                    <option>Polonnaruwa</option>
                                    <option>Puttalam</option>
                                    <option>Ratnapura</option>
                                    <option>Trincomalee</option>
                                    <option>Vavuniya</option>
                                </select>
                            </li>


                            <li>
                                <label
                                    htmlFor="priceRange"
                                    className="block text-sm font-medium text-[#464545] mb-1 text-center"
                                >
                                    Price Range
                                </label>
                                <select
                                    id="priceRange"
                                    name="priceRange"
                                    className="w-full rounded-lg border border-[#464545]/40 bg-white px-3 py-2 text-[#464545] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#464545] focus:border-[#464545] transition-colors duration-200 hover:border-[#464545] appearance-none"
                                >
                                    <option value="">Select Price Range</option>
                                    <option value="0-5m">Under Rs. 5 Million</option>
                                    <option value="5m-10m">Rs. 5 – 10 Million</option>
                                    <option value="10m-20m">Rs. 10 – 20 Million</option>
                                    <option value="20m-50m">Rs. 20 – 50 Million</option>
                                    <option value="50m-100m">Rs. 50 – 100 Million</option>
                                    <option value="100m+">Over Rs. 100 Million</option>
                                </select>
                            </li>

                            <li className="flex items-end">
                                <button className="bg-blue-500 text-white py-1.5 px-10 rounded hover:bg-blue-600 transition ">
                                    Search
                                </button>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    );
}
