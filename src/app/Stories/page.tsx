"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function StoriesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
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
          transform: `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 5}px, 0)`,
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl animate-hero-title-enhanced">
            <span className="inline-block animate-char-1">S</span>
            <span className="inline-block animate-char-2">t</span>
            <span className="inline-block animate-char-3">o</span>
            <span className="inline-block animate-char-4">r</span>
            <span className="inline-block animate-char-5">i</span>
            <span className="inline-block animate-char-6">e</span>
            <span className="inline-block animate-char-7">s</span>
            <span className="inline-block animate-char-8 mx-4">a</span>
            <span className="inline-block animate-char-9">t</span>
            <span className="inline-block animate-char-10 mx-4">L</span>
            <span className="inline-block animate-char-11">u</span>
            <span className="inline-block animate-char-12">m</span>
            <span className="inline-block animate-char-13">i</span>
            <span className="inline-block animate-char-14">n</span>
            <span className="inline-block animate-char-15">a</span>
            <span className="inline-block animate-char-16">r</span>
            <span className="inline-block animate-char-17">a</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg animate-hero-subtitle-enhanced">
            Discover the journeys of our investors, residents, and community. From financial success to lifestyle
            experiences, these stories bring the Luminara vision to life.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" ref={addToRefs}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-section-header">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 drop-shadow-sm">
              What Our Investors & Residents Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our community is built on trust, growth, and lifestyle. Hear directly from the people who live and invest
              with Luminara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-card-entrance-enhanced group relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-shimmer"></div>
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-avatar-bounce-enhanced">
                      MR
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 drop-shadow-sm group-hover:text-blue-600 transition-colors duration-300 animate-text-reveal">
                      Michael R. - Investor, Dubai
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed animate-text-reveal-delayed">
                      I was searching for a solid international property investment. With Luminara, not only has my
                      property value increased, but I also receive steady rental income without managing anything
                      myself.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore the Lifestyle Section */}
      <section className="py-16 px-4 md:px-8 bg-white" ref={addToRefs}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-section-header">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 drop-shadow-sm">Explore the Lifestyle</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Step inside the Luminara lifestyle through our gallery of projects, community events, and everyday
              moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 photo-gallery">
            {[
              "https://i.postimg.cc/1XM9T7fR/Rectangle-228.png",
              "https://i.postimg.cc/MKKZRwFn/Rectangle-205.png",
              "https://i.postimg.cc/y827wZYR/Rectangle-229.png",
              "https://i.postimg.cc/bvQfWV5X/Rectangle-230.png",
              "https://i.postimg.cc/ZqkhfzVF/Rectangle-231.png",
              "https://i.postimg.cc/4xHgbxbx/Rectangle-232.png",
              "https://i.postimg.cc/RVDmHHtY/Rectangle-233.png",
              "https://i.postimg.cc/QxtsCbF5/Rectangle-235.png",
              "https://i.postimg.cc/0jtsZ6Bb/Rectangle-236.png",
            ].map((imageUrl, index) => (
              <div
                key={index}
                className={`photo-item photo-item-${index + 1} relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-1000 transform cursor-pointer`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  transform: `translateY(${index % 2 === 0 ? "0px" : "20px"})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-all duration-700 photo-overlay-1"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500 photo-overlay-2"></div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 photo-border animate-rotate-gradient"></div>

                <div className="aspect-w-16 aspect-h-12 bg-gray-200 relative overflow-hidden m-1 rounded-lg">
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={`Lifestyle image ${index + 1}`}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover transition-all duration-1200 group-hover:scale-110 group-hover:rotate-1 photo-image animate-photo-entrance"
                    style={{
                      filter: "brightness(0.9) contrast(1.1)",
                      animationDelay: `${index * 100}ms`,
                    }}
                    priority={index < 3}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 photo-gradient"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 photo-color-overlay"></div>

                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-180 photo-shape-1"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-teal-400 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:rotate-45 photo-shape-2"></div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 photo-shine"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0 photo-text">
                  <div className="transform transition-all duration-500 group-hover:scale-105">
                    <p className="text-lg font-bold drop-shadow-lg mb-2 animate-text-slide-up">
                      Luxury Living Experience
                    </p>
                    <p className="text-sm opacity-90 drop-shadow-md animate-text-slide-up-delayed">
                      Discover premium lifestyle moments
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 mt-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300 cursor-pointer photo-action-btn">
                      <span className="text-xs">♡</span>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300 cursor-pointer photo-action-btn">
                      <span className="text-xs">⚡</span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-float-particle-1"></div>
                  <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400/60 rounded-full animate-float-particle-2"></div>
                  <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-teal-400/50 rounded-full animate-float-particle-3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" ref={addToRefs}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-section-header">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 drop-shadow-sm">Upcoming Event</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 animate-event-card group"
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

      <style jsx>{`
        @keyframes hero-title {
          0% {
            opacity: 0;
            transform: translateY(-50px) scale(0.8);
          }
          50% {
            opacity: 0.7;
            transform: translateY(-10px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes hero-subtitle {
          0% {
            opacity: 0;
            transform: translateY(30px) translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) translateX(0);
          }
        }

        @keyframes overlay-fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes gradient-shift {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes card-entrance {
          0% {
            opacity: 0;
            transform: translateY(50px) rotateX(15deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        @keyframes gallery-item {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes event-card {
          0% {
            opacity: 0;
            transform: translateY(60px) rotateY(10deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateY(0deg);
          }
        }

        @keyframes avatar-bounce {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes section-header {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes text-slide {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Enhanced character-by-character animations */
        @keyframes char-entrance {
          0% {
            opacity: 0;
            transform: translateY(-50px) rotateX(90deg) scale(0.5);
          }
          50% {
            opacity: 0.7;
            transform: translateY(-10px) rotateX(45deg) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
          }
        }

        /* Floating animations for background elements */
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }

        /* Shimmer effect for cards */
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Border glow animation */
        @keyframes border-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        /* Color wash effect */
        @keyframes color-wash {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(100%) skewX(-15deg); }
        }

        /* Enhanced image reveal */
        @keyframes image-reveal {
          0% {
            opacity: 0;
            transform: scale(1.2) rotate(-5deg);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
            filter: blur(0px);
          }
        }

        /* Text reveal animations */
        @keyframes text-reveal {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float-particle-1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-30px) translateX(20px) rotate(180deg);
            opacity: 0.8;
          }
        }

        @keyframes float-particle-2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) translateX(-15px) rotate(-180deg);
            opacity: 0.7;
          }
        }

        @keyframes float-particle-3 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-25px) translateX(10px) rotate(90deg);
            opacity: 0.9;
          }
        }

        @keyframes masonry-reveal {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.5) rotate(10deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }

        /* Photo gallery specific classes */
        .photo-gallery {
          perspective: 1000px;
        }

        .photo-item {
          animation: masonry-reveal 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
          will-change: transform, opacity;
        }

        .photo-item-1 { animation-delay: 0.1s; }
        .photo-item-2 { animation-delay: 0.25s; }
        .photo-item-3 { animation-delay: 0.4s; }
        .photo-item-4 { animation-delay: 0.15s; }
        .photo-item-5 { animation-delay: 0.3s; }
        .photo-item-6 { animation-delay: 0.45s; }
        .photo-item-7 { animation-delay: 0.2s; }
        .photo-item-8 { animation-delay: 0.35s; }
        .photo-item-9 { animation-delay: 0.5s; }

        .photo-item:hover {
          transform: translateY(-15px) scale(1.02) rotateY(5deg) !important;
          z-index: 10;
        }

        .photo-image {
          animation: image-reveal 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .photo-border {
          animation: rotate-gradient 3s linear infinite;
        }

        .photo-item:hover .photo-image {
          filter: brightness(1.1) contrast(1.2) saturate(1.1) !important;
          transform: scale(1.15) rotate(2deg) !important;
        }

        .photo-text p:first-child {
          animation: text-slide-up 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .photo-text p:last-child {
          animation: text-slide-up 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-text-slide-up {
          animation: text-slide-up 0.6s ease-out forwards;
        }

        .animate-text-slide-up-delayed {
          animation: text-slide-up 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-float-particle-1 {
          animation: float-particle-1 4s ease-in-out infinite;
        }

        .animate-float-particle-2 {
          animation: float-particle-2 5s ease-in-out infinite 1s;
        }

        .animate-float-particle-3 {
          animation: float-particle-3 6s ease-in-out infinite 2s;
        }

        .photo-action-btn:hover {
          transform: scale(1.2) rotate(10deg);
          background: rgba(255, 255, 255, 0.4);
        }

        .photo-shine {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        }

        /* Enhanced hover states for different photo positions */
        .photo-item:nth-child(odd):hover {
          transform: translateY(-20px) scale(1.03) rotateY(-3deg) rotateX(2deg) !important;
        }

        .photo-item:nth-child(even):hover {
          transform: translateY(-15px) scale(1.02) rotateY(3deg) rotateX(-2deg) !important;
        }

        .photo-item:nth-child(3n):hover {
          transform: translateY(-25px) scale(1.04) rotateZ(1deg) !important;
        }

        .animate-in-view .animate-section-header {
          animation: section-header 0.8s ease-out forwards;
        }

        .animate-in-view .animate-card-entrance {
          animation: card-entrance 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-in-view .animate-gallery-item {
          animation: gallery-item 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-in-view .animate-event-card {
          animation: event-card 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  )
}
