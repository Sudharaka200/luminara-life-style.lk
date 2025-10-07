"use client"
import type React from "react"
import { useState, useEffect } from "react"

// Custom SVG components
const Download = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)

const Calculator = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth={2} />
    <rect x="8" y="6" width="8" height="2" strokeWidth={2} />
    <rect x="8" y="10" width="2" height="2" strokeWidth={2} />
    <rect x="12" y="10" width="2" height="2" strokeWidth={2} />
    <rect x="8" y="14" width="2" height="2" strokeWidth={2} />
    <rect x="12" y="14" width="2" height="2" strokeWidth={2} />
  </svg>
)

const DollarSign = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="12" y1="1" x2="12" y2="23" strokeWidth={2} />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeWidth={2} />
  </svg>
)

interface ResourceItem {
  title: string
  description: string
  filename: string
  size: string
}

interface ResourceSection {
  title: string
  description: string
  icon: React.ReactNode
  items: ResourceItem[]
}

export default function ResourcesPage() {
  const [downloadingItem, setDownloadingItem] = useState<string | null>(null)
  const [downloadCounts, setDownloadCounts] = useState<Record<string, number>>({})
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [totalDownloads, setTotalDownloads] = useState(0)

  useEffect(() => {
    const initialCounts = {
      "cabanas-resorts-brochure.pdf": 1247,
      "assemble-homes-brochure.pdf": 892,
      "apartments-brochure.pdf": 1156,
      "cabanas-roi-calculator.pdf": 734,
      "assemble-homes-calculator.pdf": 623,
      "apartments-calculator.pdf": 567,
      "cabanas-pricing.pdf": 1089,
      "assemble-homes-pricing.pdf": 845,
      "apartments-pricing.pdf": 978,
    }
    setDownloadCounts(initialCounts)
    setTotalDownloads(Object.values(initialCounts).reduce((sum, count) => sum + count, 0))
  }, [])

  const resourceSections: ResourceSection[] = [
    {
      title: "Brochures (PDF)",
      description: "Explore detailed brochures for our diverse property offerings.",
      icon: <FileText className="w-6 h-6" />,
      items: [
        {
          title: "Cabanas & Resorts – Overview, amenities, investment benefits, lifestyle features.",
          description: "Complete guide to luxury cabana and resort properties",
          filename: "cabanas-resorts-brochure.pdf",
          size: "2.4 MB",
        },
        {
          title: "Assemble Homes – Modern homes, layouts, and customization options.",
          description: "Detailed information about modern home designs",
          filename: "assemble-homes-brochure.pdf",
          size: "3.1 MB",
        },
        {
          title: "Apartments – Floor plans, designs, and key project highlights.",
          description: "Comprehensive apartment project details",
          filename: "apartments-brochure.pdf",
          size: "2.8 MB",
        },
      ],
    },
    {
      title: "Floor plans, ROI calculators",
      description: "Access detailed floor plans and ROI calculation tools for our diverse property offerings.",
      icon: <Calculator className="w-6 h-6" />,
      items: [
        {
          title: "Cabanas & Resorts – Floor plans, ROI calculator, investment analysis.",
          description: "Interactive tools for cabana investments",
          filename: "cabanas-roi-calculator.pdf",
          size: "1.9 MB",
        },
        {
          title: "Assemble Homes – Layout options, cost calculator, customization guide.",
          description: "Planning tools for modern homes",
          filename: "assemble-homes-calculator.pdf",
          size: "2.2 MB",
        },
        {
          title: "Apartments – Unit layouts, investment calculator, project timeline.",
          description: "Comprehensive apartment planning tools",
          filename: "apartments-calculator.pdf",
          size: "2.0 MB",
        },
      ],
    },
    {
      title: "Pricing sheets",
      description: "Get detailed pricing information for our diverse property offerings.",
      icon: <DollarSign className="w-6 h-6" />,
      items: [
        {
          title: "Cabanas & Resorts – Current pricing, payment plans, special offers.",
          description: "Complete pricing breakdown for resort properties",
          filename: "cabanas-pricing.pdf",
          size: "1.5 MB",
        },
        {
          title: "Assemble Homes – Base prices, upgrade costs, financing options.",
          description: "Transparent pricing for modern homes",
          filename: "assemble-homes-pricing.pdf",
          size: "1.7 MB",
        },
        {
          title: "Apartments – Unit prices, payment schedules, early bird discounts.",
          description: "Detailed apartment pricing information",
          filename: "apartments-pricing.pdf",
          size: "1.6 MB",
        },
      ],
    },
  ]

  const handleDownload = async (filename: string, title: string) => {
    setDownloadingItem(filename)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setDownloadCounts((prev) => ({
        ...prev,
        [filename]: (prev[filename] || 0) + 1,
      }))
      setTotalDownloads((prev) => prev + 1)
      setShowSuccessMessage(true)
      setTimeout(() => setShowSuccessMessage(false), 3000)

      const link = document.createElement("a")
      link.href = `/pdfs/${filename}`
      link.download = filename
      link.target = "_blank"

      alert(
        `Download started: ${title}\n\nNote: In production, place your PDF files in the /public/pdfs/ folder with the filename: ${filename}`,
      )

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Download failed:", error)
      alert("Download failed. Please try again.")
    } finally {
      setDownloadingItem(null)
    }
  }

  const getMostPopular = (items: ResourceItem[]) => {
    return items.sort((a, b) => (downloadCounts[b.filename] || 0) - (downloadCounts[a.filename] || 0))[0]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in-right">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            Download completed successfully!
          </div>
        </div>
      )}

      <section className="relative py-20 px-4 overflow-hidden">

        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              {totalDownloads.toLocaleString()}+ Downloads This Month
            </div>
            <h1 className="text-3xl font-bold mt-10 md:text-4xl">
              Download Center
            </h1>
            <p className="text-[#464545] drop-shadow-sm mb-10 text-center">
              Access all the essential resources you need to make informed investment decisions with Luminara.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          {resourceSections.map((section, sectionIndex) => {
            return (
              <div
                key={section.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${sectionIndex * 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-primary/10 rounded text-primary mb-10">{section.icon}</div>
                  <div>
                    <h2 className="text-xl font-bold mt-2">{section.title}</h2>
                    <p className="text-[#464545] drop-shadow-sm mb-10 text-center">{section.description}</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {section.items.map((item, itemIndex) => {
                    const downloadCount = downloadCounts[item.filename] || 0
                    return (
                      <div
                        key={item.filename}
                        className="group relative flex items-center justify-between p-6 bg-card/50 backdrop-blur-sm rounded border border-border"
                        style={{ animationDelay: `${sectionIndex * 200 + itemIndex * 100}ms` }}
                      >

                        <div className="flex-1">
                          <h3 className="text-xl font-bold mt-2">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <FileText className="w-4 h-4" />
                              PDF Document
                            </span>
                            <span>{item.size}</span>
                            <span className="flex items-center gap-1 text-primary">
                              <Download className="w-3 h-3" />
                              {downloadCount.toLocaleString()} downloads
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out"
                              style={{
                                width: `${Math.min((downloadCount / Math.max(...Object.values(downloadCounts))) * 100, 100)}%`,
                              }}
                            ></div>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDownload(item.filename, item.title)}
                          disabled={downloadingItem === item.filename}
                          className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary hover:to-primary/90 hover:text-primary-foreground text-primary rounded-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group-hover:shadow-lg overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          {downloadingItem === item.filename ? (
                            <div className="relative">
                              <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin" />
                              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                            </div>
                          ) : (
                            <Download className="w-6 h-6 relative z-10" />
                          )}
                        </button>
                      </div>
                    )
                  })}
                </div>

                {sectionIndex < resourceSections.length - 1 && (
                  <div className="mt-12 border-t border-gradient-to-r from-transparent via-border to-transparent" />
                )}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
