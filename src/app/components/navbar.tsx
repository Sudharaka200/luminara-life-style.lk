/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import Menulinks from './MenuLinks'
import Logo from '../images/main-logo.png'
import Image from 'next/image'

function Navbar() {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
            <div className='h-full flex items-center justify-between'>

                {/* Mobile */}
                <div className="flex items-center justify-between w-full md:hidden">
                    <Image src={Logo} alt='Main-logo' />
                    <Menulinks />
                </div>

                {/* Desktop*/}
                <div className='hidden md:flex items-center justify-between gap-8 h-full w-full'>
                    <div className='w-1/3'>
                        <Link href="/">
                            <Image src={Logo} alt='Main-logo' className='' />
                        </Link>
                    </div>
                    <div className='w-2/3'>
                        <div className="absolute text-black w-full">
                            <Link className='ml-10' href="/">Home</Link>
                            <Link className='ml-10' href="/About">About</Link>
                            <Link className='ml-10' href="/Opportunities">Opportunities</Link>
                            <Link className='ml-10' href="/Lifestyle">Lifestyle</Link>
                            <Link className='ml-10' href="/Stories">Stories</Link>
                            <Link className='ml-10' href="/Guide">Guide</Link>
                            <Link className='ml-10' href="/Connect">Connect</Link>
                            <Link className='ml-10' href="/Connect">Resources</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
