"use client"
import CoverImg from '@/../public/images/Rectangle 109.png'
import Image from 'next/image'
import ProfileImg from '@/../public/images/Rectangle 183.png'
import { MapPin, Bed, Bath } from "lucide-react"; 


function page() {
    return (
        <>
            <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px]">
                <Image
                    src={CoverImg}
                    alt="section3"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className='container mx-auto'>
                <Image src={ProfileImg} alt='' />
                <h1>GAMPAHA - ELEMINT SUITES</h1>
                <div className='flex gap2'>
                    <MapPin size={16} className="mr-1" />
                    <p>Gampaha</p>
                </div>
            </div>
        </>
    )
}

export default page
