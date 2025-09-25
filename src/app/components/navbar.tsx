import Link from 'next/link'
import React from 'react'
import Menulinks from './MenuLinks'
import Logo from '../images/main-logo.png'
import Image from 'next/image'

function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="h-full flex items-center justify-between">

        {/* Mobile */}
        <div className="flex items-center justify-between w-full md:hidden z-50">
          <Image src={Logo} alt="Main-logo" className="h-10 w-auto" />
          <Menulinks />
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between gap-8 h-full w-full">
          <div className="w-1/3">
            <Link href="/">
              <Image src={Logo} alt="Main-logo" className="h-12 w-auto" />
            </Link>
          </div>
          <div className="w-2/3">
            {/* Use flex so links wrap nicely instead of absolute positioning */}
            <div className="flex flex-wrap justify-end text-black">
              <Link className="ml-10" href="/">Home</Link>
              <Link className="ml-10" href="/About">About</Link>
              <Link className="ml-10" href="/Opportunities">Opportunities</Link>
              <Link className="ml-10" href="/Lifestyle">Lifestyle</Link>
              <Link className="ml-10" href="/Stories">Stories</Link>
              <Link className="ml-10" href="/Guide">Guide</Link>
              <Link className="ml-10" href="/Connect">Connect</Link>
              <Link className="ml-10" href="/Resources">Resources</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
