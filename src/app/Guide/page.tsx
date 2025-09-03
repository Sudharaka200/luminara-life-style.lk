"use client"

import { useState, useEffect } from "react"

export default function GuidePage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState({
    hero: false,
    process: false,
    financing: false,
    faq: false,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute("data-section")
            if (section) {
              setIsVisible((prev) => ({ ...prev, [section]: true }))
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const toggleFaq = (faqId: string) => {
    setOpenFaq(openFaq === faqId ? null : faqId)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center justify-center text-center text-white overflow-hidden"
        data-section="hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://i.postimg.cc/52bWCWNX/Rectangle-241.png')`,
            transform: isVisible.hero ? "scale(1)" : "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

        <div
          className={`relative z-10 max-w-4xl mx-auto px-4 transform transition-all duration-1000 delay-300 ${
            isVisible.hero ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-white to-gray-200 bg-clip-text">
            Investment Guidance
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto text-balance leading-relaxed">
            A clear, transparent, and trusted path to secure your future with Luminara
          </p>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="py-20 px-4" data-section="process">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transform transition-all duration-800 ${
                isVisible.process ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Investment Process</h2>
              <p className="text-muted-foreground mb-12 text-xl leading-relaxed">
                We make investing in real estate simple and straightforward. Here's how it works
              </p>

              <div className="space-y-10">
                {[
                  {
                    step: 1,
                    title: "Choose Your Property",
                    description:
                      "Browse our portfolio of villas, apartments, and cabanas to find the investment that matches your goals.",
                    delay: "delay-100",
                  },
                  {
                    step: 2,
                    title: "Book a Site Visit",
                    description:
                      "Schedule an in-person or virtual tour to experience the project, location, and lifestyle firsthand.",
                    delay: "delay-200",
                  },
                  {
                    step: 3,
                    title: "ROI & Legal Review",
                    description:
                      "Our advisors provide a full financial and legal review, including ROI projections, property documents, and ownership details.",
                    delay: "delay-300",
                  },
                  {
                    step: 4,
                    title: "Payment & Ownership",
                    description:
                      "Select from flexible payment plans or financing options. Once complete, your ownership is registered and your property is ready to own/rent.",
                    delay: "delay-500",
                  },
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className={`flex gap-6 group transform transition-all duration-700 ${item.delay} ${
                      isVisible.process ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <div className="group-hover:translate-x-2 transition-transform duration-300">
                      <h3 className="text-2xl font-semibold mb-3">
                        Step {item.step}: {item.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`lg:order-last transform transition-all duration-800 delay-200 ${
                isVisible.process ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://i.postimg.cc/cHMQ63Dg/Rectangle-242.png"
                  alt="Luxury property with pool"
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-2">Luxury Villa Collection</h3>
                  <p className="text-gray-200">Premium properties with world-class amenities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/20 to-muted/40" data-section="financing">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transform transition-all duration-800 ${
                isVisible.financing ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
            >
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://i.postimg.cc/HsLQsVbn/Rectangle-243.png"
                  alt="Modern villa with pool"
                  className="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-sm font-semibold text-primary">Premium Location</span>
                </div>
              </div>
            </div>

            <div
              className={`transform transition-all duration-800 delay-200 ${
                isVisible.financing ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Financing Options</h2>
              <p className="text-muted-foreground mb-12 text-xl leading-relaxed">
                Flexible financing designed to suit your investment journey
              </p>

              <div className="space-y-8">
                {[
                  {
                    title: "Partner Banks",
                    description: "Collaborations with trusted banks offering home loan and investment financing.",
                    delay: "delay-100",
                  },
                  {
                    title: "Competitive Interest Rates",
                    description: "Attractive rates tailored for property investors.",
                    delay: "delay-200",
                  },
                  {
                    title: "Eligibility Support",
                    description: "Assistance with documentation, approvals, and eligibility checks.",
                    delay: "delay-300",
                  },
                  {
                    title: "Loan Calculators",
                    description: "Easy-to-use tools to help estimate monthly installments and ROI.",
                    delay: "delay-400",
                  },
                ].map((option, index) => (
                  <div
                    key={index}
                    className={`group transform transition-all duration-600 ${option.delay} ${
                      isVisible.financing ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                  >
                    <div className="flex items-start gap-4 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-background/80 transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]">
                      <div className="w-3 h-3 bg-gradient-to-br from-primary to-primary/60 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                          {option.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{option.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4" data-section="faq">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-800 ${
              isVisible.faq ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about investing with Luminara</p>
          </div>

          <div className="space-y-6">
            {[
              {
                id: "item-1",
                question: "What ownership structures are available?",
                answer: "Luminara offers freehold and leasehold options, depending on location and project type.",
                delay: "delay-100",
              },
              {
                id: "item-2",
                question: "How does the legal process work?",
                answer:
                  "Our legal team handles all documentation, title transfers, and regulatory compliance to ensure a smooth ownership transition.",
                delay: "delay-200",
              },
              {
                id: "item-3",
                question: "What are the expected returns on investment?",
                answer:
                  "Returns vary by property type and location, but our portfolio typically generates 8-12% annual returns through rental income and capital appreciation.",
                delay: "delay-300",
              },
              {
                id: "item-4",
                question: "Can I visit the properties before investing?",
                answer:
                  "We encourage site visits and offer both in-person tours and virtual walkthroughs to help you make informed decisions.",
                delay: "delay-400",
              },
            ].map((faq, index) => (
              <div
                key={faq.id}
                className={`border border-border rounded-xl overflow-hidden bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 transform ${faq.delay} ${
                  isVisible.faq ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-8 py-6 text-left font-semibold text-lg flex justify-between items-center hover:bg-muted/30 transition-all duration-300 group"
                >
                  <span className="group-hover:text-primary transition-colors duration-300">{faq.question}</span>
                  <span
                    className={`transform transition-all duration-300 text-primary ${
                      openFaq === faq.id ? "rotate-180 scale-110" : "group-hover:scale-110"
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === faq.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6 text-muted-foreground text-lg leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
