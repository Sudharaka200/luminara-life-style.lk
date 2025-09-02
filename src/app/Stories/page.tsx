"use client"

export default function StoriesPage() {
   return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-24 px-4 md:px-8 overflow-hidden"
        style={{
          backgroundImage: `url('https://i.postimg.cc/MKKZRwFn/Rectangle-205.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-blue-600/60"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent animate-pulse"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl animate-slide-in-down hover:scale-105 transition-transform duration-300">
            Stories at Luminara
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in-up animation-delay-300 hover:text-white transition-colors duration-300">
            Discover the journeys of our investors, residents, and community. From financial success to lifestyle experiences, these stories bring the Luminara vision to life.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 drop-shadow-sm">
              What Our Investors & Residents Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
             Our community is built on trust, growth, and lifestyle. Hear directly from the people who live and invest with Luminara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      MR
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 drop-shadow-sm group-hover:text-blue-600 transition-colors duration-300">
                      Michael R. - Investor, Dubai
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
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
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 drop-shadow-sm">Explore the Lifestyle</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Step inside the Luminara lifestyle through our gallery of projects, community events, and everyday
              moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={`Lifestyle image ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-sm font-medium drop-shadow-lg">Luxury Living Experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
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
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-sm group-hover:text-blue-600 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-down {
          animation: slide-in-down 0.8s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  )
}
