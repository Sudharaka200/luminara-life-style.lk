"use client";

import React from 'react';
import Image from "next/image";
import Logo from '../../../public/images/image 2.png';
import Section1Img from '../../../public/images/Rectangle 141.png';
import Icon from '@/app/images/Rating.png';
import Section3Img from '@/app/images/Rectangle 146.png';
import Certificate1 from '@/app/images/—Pngtree—gold best award medal with_9015057.png';
import Certificate2 from '@/app/images/—Pngtree—vector certified professional badge_2069356.png';
import Certificate3 from '@/app/images/—Pngtree—vector certified professional badge_s2069356.png';
import CEOImg from '@/app/images/Rectangle 147.png';
import LinkedinLogo from '@/app/images/linkedin 1.png';
import ManagerImg from '@/app/images/Rectangle 150.png';

function Page() {
  return (
    <>
      <div className='bg-[#C5C9D5]'>
        <div className='container mx-auto '>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-1 pt-20 pb-20'>
            <div className='items-center justify-center '>
              <Image src={Logo} alt='dad' className='mt-5 ' />
              <h1 className='text-5xl font-bold mt-5'>Your Trusted Partner in  <br /> <span className="text-[#086FB1]">Real Estate</span></h1>
              <p className='lg:pr-30'>The real estate landscape is shifting toward greater transparency in agent commissions following a landmark settlement in August 2024. Buyers and sellers now frequently negotiate flat-fee models or opt for rebate services, allowing for significant cost savings—one Seattle couple saved nearly $97,000, and another seller in Arizona saved around $19,000 by listing on their own.MarketWatchWhy it matters: When crafting testimonials, consider highlighting value-focused stories—client</p>
            </div>
            <div>
              <Image src={Section1Img} alt='dad' className='rounded-md' />
            </div>
          </div>
        </div>
      </div>

      {/* area 2 */}
      <div className='bg-[#086FB1]'>
        <div className='container mx-auto py-20'>
          <div className='text-center'>
            <h1 className='text-4xl text-white font-bold'>Keys To your New Begining</h1>
            <p className='lg:px-60 text-white py-2'>The real estate landscape is shifting toward greater transparency in agent commissions following a landmark settlement in August 2024. Buyers and sellers now frequently negotiate flat-fee models or opt for rebate services, allowing for significant cost savings—one Seattle couple saved nearly $97,000, and another seller in Arizona saved around $19,000 by</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 py-10'>
            <div className='bg-[#fff] flex flex-col justify-center text-center items-center py-20 rounded-sm'>
              <Image src={Icon} alt='icon' />
              <h1 className='text-2xl font-bold mt-2'>Evaluate Property</h1>
              <p className='px-15'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever </p>
            </div>

            <div className='bg-[#fff] flex flex-col justify-center text-center items-center py-20 rounded-sm'>
              <Image src={Icon} alt='icon' />
              <h1 className='text-2xl font-bold mt-2'>Evaluate Property</h1>
              <p className='px-15'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever </p>
            </div>

            <div className='bg-[#fff] flex flex-col justify-center text-center items-center py-20 rounded-sm'>
              <Image src={Icon} alt='icon' />
              <h1 className='text-2xl font-bold mt-2'>Evaluate Property</h1>
              <p className='px-15'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever </p>
            </div>
          </div>
        </div>
      </div>
      {/* area 2 */}

      {/* area 3 */}
      <div className=''>
        <Image src={Section3Img} alt="section3" className="w-full h-auto" />
      </div>
      {/* area 3 */}

      {/* area 4 */}
      <div className='container mx-auto py-30'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>Our Popular Residence</h1>
          <p className='lg:px-30 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-4 gap-1 mt-10 text-center'>
            <div>
              <h1 className='text-5xl font-bold text-[#0249A3]'>5+</h1>
              <p className=''>Years of Excellence</p>
            </div>
            <div>
              <h1 className='text-5xl font-bold text-[#0249A3]'>120+</h1>
              <p className=''>Projects Completed</p>
            </div>
            <div>

              {/* section 2 */}
              <h1 className='text-5xl font-bold text-[#0249A3]'>5K+</h1>
              <p className=''>Happy Investors</p>
            </div>
            <div>
              <h1 className='text-5xl font-bold text-[#0249A3]'>10+</h1>
              <p className=''>Premium Locations Covered</p>
            </div>
          </div>
        </div>
      </div>
      {/* area 4 */}

      {/* area 5 */}
      <div className='container mx-auto py-20'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>Our Trusted Partners</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-1 mt-5 text-center justify-center '>
          <div>
            <Image src={Certificate1} alt='certificate1' className='mx-auto' />
            <p className='lg:px-20'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
          </div>

          <div>
            <Image src={Certificate2} alt='certificate1' className='mx-auto' />
            <p className='lg:px-20'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
          </div>

          <div>
            <Image src={Certificate3} alt='certificate1' className='mx-auto' />
            <p className='lg:px-20'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
          </div>
        </div>
      </div>
      {/* area 5 */}

      {/* area 6 */}
      <div className='container mx-auto py-20'>
        <div>
          <h1>The Faces Behind Our Success</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
            <div>
              <Image src={CEOImg} alt='CEO' />
            </div>
            <div>
              <div className='flex gap-1'>
                <Image src={LinkedinLogo} alt='linkedin' />
                <h1>CEO</h1>
              </div>
              <p>The real estate landscape is shifting toward greater transparency in agent commissions following a landmark settlement in August 2024. Buyers and sellers now frequently negotiate flat-fee models or opt for rebate services, allowing for significant cost savings—one Seattle couple saved nearly $97,000, and another seller in Arizona saved around $19,000 by listing on their own.MarketWatchWhy it matters: When crafting testimonials, consider highlighting value-focused stories—clients who appreciated transparency or benefited from cost savings are compelling and relatable</p>
              <p>The real estate landscape is shifting toward greater transparency in agent commissions following a landmark settlement in August 2024. Buyers and sellers now frequently negotiate flat-fee models or opt for rebate services, allowing for significant cost savings—one Seattle couple saved nearly $97,000, and another seller in Arizona saved around $19,000 by listing on their own.MarketWatchWhy it matters: When crafting testimonials, consider highlighting value-focused stories—clients who appreciated transparency or benefited from cost savings are compelling and relatable</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-4 gap-1'>
          <div>
            <Image src={ManagerImg} alt='Manager' />
            <div className='flex gap-1'>
              <Image src={LinkedinLogo} alt='linkedin' />
              <h1>CEO</h1>
            </div>
            <p>Luminara Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care</p>
          </div>

          <div>
            <Image src={ManagerImg} alt='Manager' />
            <div className='flex gap-1'>
              <Image src={LinkedinLogo} alt='linkedin' />
              <h1>CEO</h1>
            </div>
            <p>Luminara Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care</p>
          </div>

          <div>
            <Image src={ManagerImg} alt='Manager' />
            <div className='flex gap-1'>
              <Image src={LinkedinLogo} alt='linkedin' />
              <h1>CEO</h1>
            </div>
            <p>Luminara Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care</p>
          </div>

          <div>
            <Image src={ManagerImg} alt='Manager' />
            <div className='flex gap-1'>
              <Image src={LinkedinLogo} alt='linkedin' />
              <h1>CEO</h1>
            </div>
            <p>Luminara Lifestyle made buying our dream home so easy! From the first viewing to the final paperwork, everything was handled professionally and with genuine care</p>
          </div>
        </div>
      </div>
      {/* area 6 */}

    </>
  )
}

export default Page;
