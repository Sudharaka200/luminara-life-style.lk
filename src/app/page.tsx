"use client";
import Image from 'next/image';
import LandIcon from './images/location.png'
import HomeIcon from './images/house.png'
import ApartmentIcon from './images/residential.png'
import CabanaIcon from './images/cabana 1.png'
import ShopsIcon from './images/store 1.png'
import OtherIcon from './images/real-estate 1.png'
import section1Img from './images/Group 172.png'
import CategorySwiper from './components/categorySwiper';
import Propertycard from './components/card';
import NewsImg from '../../public/images/Rectangle 136.png';
import NewsCard from './components/newsCard';
import HomeCarosal from './components/HomeCarosal';
import { useState } from 'react';
import dynamic from "next/dynamic";


export default function Home() {
  const [active, setActive] = useState("Lands");
  const ImageSlider = dynamic(() => import("./components/imageslider"), { ssr: false });
  const TestimonialSlider = dynamic(() => import("./components/testomonial"), { ssr: false });

  return (
    <>
      <HomeCarosal />
      {/* section 1 */}
      <div className='container mx-auto p-4 '>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center ">
            <div className="">
              <h1 className='text-3xl font-bold mt-10 sm:text-3xl md:text-5xl'>Why Investors Choose <br /> Luminara <span className="text-[#086FB1]">First ?</span></h1>
              <p className='text-[#464545]'>At Luminara, we go beyond traditional real estate — we create lifestyle-driven investments that combine lasting value with everyday luxury. With over 15 years of experience and more than 120 successfully completed projects, we’ve earned the trust of investors, homeowners, and communities alike. From stunning cabanas to premium apartments and curated land packages, every project is designed to deliver exceptional returns while enriching the way you live.</p>
              <div className='bg-[#086FB1] rounded-md mt-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-5'>
                  <div>
                    <h1 className='text-5xl font-bold text-white'>5+</h1>
                    <p className='text-white'>Years of Excellence</p>
                  </div>
                  <div>
                    <h1 className='text-5xl font-bold text-white'>120+</h1>
                    <p className='text-white'>Projects Completed</p>
                  </div>
                  <div>

                    {/* section 2 */}
                    <h1 className='text-5xl font-bold text-white'>5K+</h1>
                    <p className='text-white'>Happy Investors</p>
                  </div>
                  <div>
                    <h1 className='text-5xl font-bold text-white'>10+</h1>
                    <p className='text-white'>Premium Locations Covered</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="flex justify-center p-6">
              <Image src={section1Img} alt='' className='mt-10'/>
          </div>
        </div>
      </div>
      {/* section 1 */}

      {/* section 2 */}
      <div className='container mx-auto p-4'>
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mt-10">Featured Residences</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever </p>
      </div>
      <CategorySwiper />

      {/* Section 3 */}
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mt-10'>Our Popular Residence</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever </p>
        <div className="relative z-10 mt-5 w-full max-w-4xl">
          <ul className="flex gap-5 flex-wrap sm:justify-center">
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
        </div>
      </div>
      <div className='container mx-auto p-4 mb-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
          <Propertycard
            title="EXPRESS FIVE - MATTEGODA"
            location="Borella"
            price="39,500,000"
            image="/images/Rectangle 103.png"
            beds={3}
            baths={1}
            link="/property/express-five"
          />
          <Propertycard
            title="EXPRESS FIVE - MATTEGODA"
            location="Borella"
            price="39,500,000"
            image="/images/Rectangle 103.png"
            beds={3}
            baths={1}
            link="/property/express-five"
          />
          <Propertycard
            title="EXPRESS FIVE - MATTEGODA"
            location="Borella"
            price="39,500,000"
            image="/images/Rectangle 103.png"
            beds={3}
            baths={1}
            link="/property/express-five"
          />
          <Propertycard
            title="EXPRESS FIVE - MATTEGODA"
            location="Borella"
            price="39,500,000"
            image="/images/Rectangle 103.png"
            beds={3}
            baths={1}
            link="/property/express-five"
          />
        </div>
      </div>
      {/* Section 3 */}

      {/* Section 5 */}
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('./images/Group 173.png')" }}>
        {/* Desktop */}
        <div className=' container text-center text-white md:p-40 p-10'>
          <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mt-10'>Why Investors Choose Luminara First ?</h1>
          <p>At Luminara, we go beyond traditional real estate — we create lifestyle-driven investments that combine lasting value with everyday luxury. With over 15 years of experience and more than 120 successfully completed projects, we’ve earned the trust of investors, homeowners, and communities alike. From stunning cabanas to premium apartments and curated land packages, every project is designed to deliver exceptional returns while enriching the way you live.</p>
        </div>
      </div>
      {/* Section 5 */}

      {/* Section 6 */}
      <div className='container mx-auto p-4'>
        <div>
          <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mt-10'>Our Portfolio</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
          <Propertycard
            title="EXPRESS FIVE - MATTEGODA"
            location="Borella"
            price="39,500,000"
            image="/images/Rectangle 103.png"
            beds={3}
            baths={1}
            link="/property/express-five"
          />
          <Propertycard
            title="EXPRESS FIVE - MATTEGODA"
            location="Borella"
            price="39,500,000"
            image="/images/Rectangle 103.png"
            beds={3}
            baths={1}
            link="/property/express-five"
          />
          <Propertycard
            title="EXPRESS FIVE - MATTEGODA"
            location="Borella"
            price="39,500,000"
            image="/images/Rectangle 103.png"
            beds={3}
            baths={1}
            link="/property/express-five"
          />
          <Propertycard
            title="EXPRESS FIVE - MATTEGODA"
            location="Borella"
            price="39,500,000"
            image="/images/Rectangle 103.png"
            beds={3}
            baths={1}
            link="/property/express-five"
          />
        </div>
      </div>
      {/* Section 6 */}

      {/* Section 7 */}
      <div>
        <div className='text-center container mx-auto'>
          <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mt-10'>Discover Luxury Living With Luminara Lifestyle; One of the Leading name in Sri Lanka Real Estate!</h1>
        </div>
        <ImageSlider />
      </div>
      {/* Section 7 */}

      {/* Section 8 */}
      <div className='container-fluid'>
        <div className='container mx-auto '>
          <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold '>Testimonials</h1>
          <p>At Luminara, we go beyond traditional real estate — we create lifestyle-driven investments that combine lasting value with everyday luxury. With over 15 years of experience and more than 120 successfully completed projects, we’ve earned the trust of investors, homeowners, and communities alike. From stunning cabanas to premium apartments and curated land packages, every project is designed to deliver exceptional returns while enriching the way you live.</p>
        </div>
        <TestimonialSlider />
      </div>
      {/* Section 8 */}

      {/* Section 9 */}
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mt-10'>News</h1>
        <p>At Luminara, we go beyond traditional real estate — we create lifestyle-driven investments that combine lasting value with everyday luxury. With over 15 years of experience and more than 120 successfully completed projects, we’ve earned the trust of investors, homeowners, and communities alike. From stunning cabanas to premium apartments and curated land packages, every project is designed to deliver exceptional returns while enriching the way you live.</p>

        {/* News */}
        <div className='container mt-5'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <Image src={NewsImg} alt='News Image' className='object-cover w-full' />
            </div>

            <div className='justify-center'>
              <h1 className='text-2xl font-bold mt-2'>Commission Flexibility and Savings</h1>
              <p>The real estate landscape is shifting toward greater transparency in agent commissions following a landmark settlement in August 2024. Buyers and sellers now frequently negotiate flat-fee models or opt for rebate services, allowing for significant cost savings—one Seattle couple saved nearly $97,000, and another seller in Arizona saved around $19,000 by listing on their own.MarketWatchWhy it matters: When crafting testimonials, consider highlighting value-focused stories—clients who appreciated transparency or benefited from cost savings are compelling and relatable</p>
              <br />
              <p>The real estate landscape is shifting toward greater transparency in agent commissions following a landmark settlement in August 2024. Buyers and sellers now frequently negotiate flat-fee models or opt for rebate services, allowing for significant cost savings—one Seattle couple saved nearly $97,000, and another seller in Arizona saved around $19,000 by listing on their own.MarketWatchWhy it matters: When crafting testimonials, consider highlighting value-focused stories—clients who appreciated transparency or benefited from cost savings are compelling and relatable</p>

            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-4 gap-5 mt-5'>
          <NewsCard
            title="Commission Flexibility and Savings"
            description="The real estate landscape is shifting toward greater transparency in agent commissions following a landmark settlement in August 2024. Buyers and sellers now frequently negotiate flat-fee models or opt for rebate services, allowing for significant cost savings—one Seattle couple saved nearly $97,000, and another seller in "
            image="/images/Rectangle 137.png"
          />

          <NewsCard
            title="Commission Flexibility and Savings"
            description="The real estate landscape is shifting toward greater transparency in agent commissions following a landmark settlement in August 2024. Buyers and sellers now frequently negotiate flat-fee models or opt for rebate services, allowing for significant cost savings—one Seattle couple saved nearly $97,000, and another seller in "
            image="/images/Rectangle 137.png"
          />

          <NewsCard
            title="Commission Flexibility and Savings"
            description="The real estate landscape is shifting toward greater transparency in agent commissions following a landmark settlement in August 2024. Buyers and sellers now frequently negotiate flat-fee models or opt for rebate services, allowing for significant cost savings—one Seattle couple saved nearly $97,000, and another seller in "
            image="/images/Rectangle 137.png"
          />

          <NewsCard
            title="Commission Flexibility and Savings"
            description="The real estate landscape is shifting toward greater transparency in agent commissions following a landmark settlement in August 2024. Buyers and sellers now frequently negotiate flat-fee models or opt for rebate services, allowing for significant cost savings—one Seattle couple saved nearly $97,000, and another seller in "
            image="/images/Rectangle 137.png"
          />
        </div>
        {/* News */}
      </div>
      {/* Section 9 */}



    </>
  );
}
