"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import ImageSlider from '@/app/components/imageslider'
import TestimonialSection from "../components/testomonial"

export default function StoriesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in-view")
          }
        })
      },
      { threshold: 0.1 },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])



  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-24 px-4 md:px-8 overflow-hidden"
        style={{
          backgroundImage: `url('https://i.postimg.cc/MKKZRwFn/Rectangle-205.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-blue-600/60 animate-overlay-fade"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent animate-gradient-shift"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-float-1"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-float-2"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float-3"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mt-20 sm:mt-10 md:text-4xl text-white">
            Stories at Luminara
          </h1>
          <p className="lg:pr-30 text-white">
            Discover the journeys of our investors, residents, and community. From financial success to lifestyle
            experiences, these stories bring the Luminara vision to life.
          </p>
          
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-10 bg-gray-50">
        <div className="container-fluid mx-auto">
          <div className="text-center animate-section-header">
            <h2 className="text-2xl md:text-3xl font-bold">
              What Our Investors & Residents Say
            </h2>
            <p className="text-[#464545]">
              Our community is built on trust, growth, and lifestyle. Hear directly from the people who live and invest
              with Luminara.
            </p>
          </div>
          <TestimonialSection />
        </div>
      </section>

      {/* Explore the Lifestyle Section */}
      <section className=" bg-white">
        <div className="container-fluid mx-auto">
          <div className="text-center animate-section-header">
            <h2 className="text-2xl md:text-3xl font-bold mt-10">Explore the Lifestyle</h2>
            <p className="text-[#464545]">
              Step inside the Luminara lifestyle through our gallery of projects, community events, and everyday
              moments.
            </p>
          </div>
          <ImageSlider />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-10 px-4 md:px-8 bg-gray-50" ref={addToRefs}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-section-header">
            <h2 className="text-2xl md:text-3xl font-bold mt-10">Upcoming Event</h2>
            <p className="text-[#464545]">
              Join us for our next investor Open Day this fall—experience our premium cabanas, meet our team, and
              explore exclusive investment opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Investor Open Day - Beachfront Villas Tour",
                description:
                  "Join us for an exclusive tour of our different villa, where investors explored master plans, toured furnished show units, and discovered investment opportunities.",
                image: "https://i.postimg.cc/PfM39nrz/Rectangle-238.png",
              },
              {
                title: "Wellness Weekend - Clubhouse Spa Launch",
                description:
                  "Experience our new wellness facilities featuring wellness workshops, spa experiences, and community gatherings at our newly opened clubhouse.",
                image: "https://i.postimg.cc/0j5vpGZT/Rectangle-239.png",
              },
              {
                title: "Investor Networking Dinner - Resort Showcase",
                description:
                  "An elegant evening of fine dining and networking where investors connected with the Luminara team and previewed our upcoming resort developments.",
                image: "https://i.postimg.cc/RFL96p11/Rectangle-240.png",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white rounded overflow-hidden "
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover transition-all duration-1000 group-hover:scale-120 group-hover:brightness-110"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-sm group-hover:text-blue-600 transition-all duration-300 transform group-hover:translate-x-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed transform group-hover:translate-x-1 transition-transform duration-300">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}
