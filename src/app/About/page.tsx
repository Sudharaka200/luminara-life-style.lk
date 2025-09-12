"use client";

import React from 'react';
import Image from "next/image";
import Logo from '../../../public/images/image 2.png'




function Page() {
  return (
    <>
      <div className='bg-[#C5C9D5]'>
        <div className='container mx-auto '>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
            <div className='items-center justify-center'>
              <Image src={Logo}  alt='dad'/>
              <h1>Your Trusted Partner in  <br /> Real Estate</h1>
              <p>The real estate landscape is shifting toward greater transparency in agent commissions following a landmark settlement in August 2024. Buyers and sellers now frequently negotiate flat-fee models or opt for rebate services, allowing for significant cost savings—one Seattle couple saved nearly $97,000, and another seller in Arizona saved around $19,000 by listing on their own.MarketWatchWhy it matters: When crafting testimonials, consider highlighting value-focused stories—client</p>
            </div>
            <div>
              <Image src={Logo}  alt='dad'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page;
