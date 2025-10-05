import { Building, Mail, Phone } from 'lucide-react'
import React from 'react'

function Page() {
  return (
    <>
      <div className="relative">
        {/* Background image */}
        <div
          className="bg-cover bg-center flex items-center justify-center lg:pt-40 pb-40 relative"
          style={{ backgroundImage: "url('./images/Rectangle 212.png')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-900/50"></div>

          {/* Content */}
          <div className="container relative z-10">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white">
                Your Trusted Partner in <br />
                <span className="text-[#086FB1]">Real Estate</span>
              </h1>
              <p className="mt-3 text-white">
                The real estate landscape is shifting toward greater transparency in
                agent commissions following a landmark settlement in August 2024.
                Buyers and sellers now frequently negotiate flat-fee models or opt for
                rebate services, allowing for significant cost savings—one Seattle
                couple saved nearly $97,000, and another seller in Arizona saved
                around $19,000 by listing on their own.MarketWatchWhy it matters: When
                crafting testimonials, consider highlighting value-focused
                stories—client
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto bg-[#086FB1] mt-5 rounded-sm py-5 px-10'>
        <h1 className='text-2xl md:text-3xl font-bold mt-10 text-white '>Contact Information</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 '>
          <div>
            <Building className='text-white ' size={30} />
            <p className='text-xl font-bold mt-2 text-white'>Office Address</p>
            <p className='text-white'>JobLink Solution (PVT) Ltd <br />
              No.12, Galle Road, <br />
              Colombo 03, <br />
              Sri Lanka</p>
          </div>

          <div>
            <Phone className='text-white' size={30} />
            <p className='text-xl font-bold mt-2 text-white'>Phone Number</p>
            <p className='text-white'>+9471876763 </p>
          </div>

          <div>
            <Mail className='text-white' size={30} />
            <p className='text-xl font-bold mt-2 text-white'>Office Address</p>
            <p className='text-white'>Luminara@gmailk.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
