"use client"
import { Building, Mail, Phone } from 'lucide-react'
import React from 'react'
import { useState } from "react";


function Page() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    coverLetter: "",
    qualifications: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can later integrate with API or email service here
  };
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
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-3xl font-bold mt-20 sm:mt-10 md:text-4xl text-white">
                Your Trusted Partner in <br />
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
      <div className='container mx-auto px-4'>
        <div className='bg-[#086FB1] mt-5 rounded-sm py-5 px-10'>
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
      </div>

      <div className='container mx-auto mt-5 px-4'>
        <div className="w-full h-100  overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.062271056263!2d79.86456467425947!3d6.914682018516194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2595975ebc6b1%3A0x7f49ed5e17a6a3c8!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1692345678901!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* form */}
      <div className="container mx-auto mt-10 px-4">
        <h2 className="text-xl font-bold mt-2">Send Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-1/2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phonenumber"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-1/2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            name="coverLetter"
            placeholder="Message"
            value={formData.coverLetter}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-[#086FB1] text-white py-1.5 px-10 rounded hover:bg-[#087cc7] transition"
          >
            Connect with US
          </button>
        </form>
      </div>
    </>
  )
}

export default Page
