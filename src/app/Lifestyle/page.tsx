"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

function Page() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="container mx-auto bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Image
                src="https://i.postimg.cc/J7qF307N/Rectangle-199.png"
                alt="Luminara Buildings"
                width={100}
                height={100}
                className="w-full h-auto rounded-md"
              />
            </div>

            {/* Right Image */}
            <div className="">
              <h1 className="text-3xl font-bold mt-10 md:text-4xl">
                Effortless Living with <span className="text-[#086FB1]">Luminara</span>
              </h1>
              <p className="lg:pr-30 text-[#464545]">
                Owning a property with Luminara is more than just investment its a lifestyle. Our comprehensive
                services ensure worry-free ownership, letting you enjoy your home while we handle the details, from
                maintenance to wellness.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50 container-fluid">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center"
          >
            Our Lifestyle & Maintenance Services
          </h2>
          <p className="text-[#464545] drop-shadow-sm mb-10 text-center">
            Choose from tailored service plans designed to keep your property secure, maintained, and enjoyable—so you
            can focus on living while we handle the rest.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Management */}
            <div
              className="bg-white border-0">
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src="https://i.postimg.cc/ncSw5WDM/system-1.png"
                    alt="Property Management"
                    width={100}
                    height={100}
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-bold mt-2">
                  Property Management
                </h3>
                <p className="text-[#464545] leading-relaxed drop-shadow-sm">
                  Comprehensive property management including regular cleaning, repairs, and maintenance, ensuring your
                  home stays in pristine condition year-round.
                </p>
              </div>
            </div>

            {/* Gardening & Landscaping */}
            <div
              className="bg-white border-0">
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src="https://i.postimg.cc/VkSHcFqg/gardening-1.png"
                    alt="Gardening & Landscaping"
                    width={100}
                    height={100}
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-bold mt-2">
                  Gardening & Landscaping
                </h3>
                <p className="text-[#464545] leading-relaxed drop-shadow-sm">
                  Professional landscaping and garden care, keeping your outdoor spaces beautiful and inviting without
                  you lifting a finger.
                </p>
              </div>
            </div>

            {/* 24/7 Security & Smart Access */}
            <div
              className="bg-white border-0">
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src="https://i.postimg.cc/sgtHfZKr/helpline-1.png"
                    alt="24/7 Security & Smart Access"
                    width={100}
                    height={100}
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-bold mt-2">
                  24/7 Security & Smart Access
                </h3>
                <p className="text-[#464545] leading-relaxed drop-shadow-sm">
                  Round-the-clock security with smart access systems, CCTV monitoring, and trained personnel to ensure
                  safety for you and your guests.
                </p>
              </div>
            </div>

            {/* Wellness & Recreation */}
            <div
              className="bg-white border-0" >
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src="https://i.postimg.cc/d1FWrPzN/heart-1.png"
                    alt="Wellness & Recreation"
                    width={100}
                    height={100}
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-bold mt-2">
                  Wellness & Recreation
                </h3>
                <p className="text-[#464545] leading-relaxed drop-shadow-sm">
                  Access to exclusive clubhouses, pools, spas, and fitness facilities—designed to enhance your health
                  and relaxation.
                </p>
              </div>
            </div>

            {/* Resort Operations / Rental Management */}
            <div
              className="bg-white border-0" >
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src="https://i.postimg.cc/HnsBv0WQ/rental-service-1.png"
                    alt="Resort Operations / Rental Management"
                    width={100}
                    height={100}
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-bold mt-2">
                  Resort Operations / Rental Management
                </h3>
                <p className="text-[#464545] leading-relaxed drop-shadow-sm">
                  Full-service cabana and property rental management, including guest handling, bookings, payments, and
                  housekeeping, maximizing your returns.
                </p>
              </div>
            </div>

            {/* Customization & Furnishing Services */}
            <div
              className="bg-white border-0">
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src="https://i.postimg.cc/x1HyRpGw/handyman-1.png"
                    alt="Customization & Furnishing Services"
                    width={100}
                    height={100}
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-bold mt-2">
                  Customization & Furnishing Services
                </h3>
                <p className="text-[#464545] leading-relaxed drop-shadow-sm">
                  Tailor your property to your taste with bespoke furnishing, upgrades, and interior customization
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Lifestyle Service Packages
            </h2>
            <p className="text-[#464545] leading-relaxed drop-shadow-sm">
              Choose from tailored service plans designed to keep your property secure, maintained, and enjoyable—so you
              can focus on living while we handle the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div
              className="border-2 border-gray-200"

            >
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Image
                      src="https://i.postimg.cc/HxLyf65s/verify-1.png"
                      alt="Essential Care Package"
                      width={100}
                      height={100}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-xl font-bold mt-2">
                    Essential Care Package
                  </h3>
                  <p className="text-[#464545] leading-relaxed drop-shadow-sm">
                    Perfect for owners who want peace of mind with the basics covered.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#086FB1] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#464545] leading-relaxed drop-shadow-sm">Property Management (cleaning, repairs, inspections)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#086FB1] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#464545] leading-relaxed drop-shadow-sm">24/7 Security & Smart Access</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#086FB1] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#464545] leading-relaxed drop-shadow-sm">Gardening & Landscaping</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 mb-2 drop-shadow-sm">Starting From:</p>
                  <p className="text-2xl font-bold text-gray-900 drop-shadow-md ">
                    $150/month
                  </p>
                </div>

                <button className="w-full bg-[#086FB1] text-white py-3 px-4 rounded">
                  Schedule Free Consultation
                </button>
              </div>
            </div>

            {/* Package 2 */}
            <div
              className="border-2 border-gray-200"
            >
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Image
                      src="https://i.postimg.cc/HxLyf65s/verify-1.png"
                      alt="Essential Care Package"
                      width={100}
                      height={100}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-xl font-bold mt-2">
                    Essential Care Package
                  </h3>
                  <p className="text-[#464545] leading-relaxed drop-shadow-sm">
                    Perfect for owners who want peace of mind with the basics covered.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#086FB1] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#464545] leading-relaxed drop-shadow-sm">Property Management (cleaning, repairs, inspections)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#086FB1] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#464545] leading-relaxed drop-shadow-sm">24/7 Security & Smart Access</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#086FB1] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#464545] leading-relaxed drop-shadow-sm">Gardening & Landscaping</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 mb-2 drop-shadow-sm">Starting From:</p>
                  <p className="text-2xl font-bold text-gray-900 drop-shadow-md">
                    $150/month
                  </p>
                </div>

                <button className="w-full bg-[#086FB1] text-white py-3 px-4 rounded">
                  Schedule Free Consultation
                </button>
              </div>
            </div>

            {/* Package 3 */}
            <div
              className="border-2 border-gray-200">
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Image
                      src="https://i.postimg.cc/HxLyf65s/verify-1.png"
                      alt="Essential Care Package"
                      width={100}
                      height={100}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-xl font-bold mt-2">
                    Essential Care Package
                  </h3>
                  <p className="text-[#464545] leading-relaxed drop-shadow-sm">
                    Perfect for owners who want peace of mind with the basics covered.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#086FB1] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#464545] leading-relaxed drop-shadow-sm">Property Management (cleaning, repairs, inspections)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#086FB1] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#464545] leading-relaxed drop-shadow-sm">24/7 Security & Smart Access</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#086FB1] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#464545] leading-relaxed drop-shadow-sm">Gardening & Landscaping</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 mb-2 drop-shadow-sm">Starting From:</p>
                  <p className="text-2xl font-bold text-gray-900 drop-shadow-md">
                    $150/month
                  </p>
                </div>

                <button className="w-full bg-[#086FB1] text-white py-3 px-4 rounded">
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
