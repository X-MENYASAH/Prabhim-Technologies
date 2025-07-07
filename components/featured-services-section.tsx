"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Settings, Database } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    id: 1,
    title: "PLM System Administration",
    description:
      "PLM systems—user access, permissions, licensing, performance, ensuring secure, efficient operations and data integrity",
    icon: Database,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "Web Deveopement",
    description:
      "Web development means creating websites that people can use online. It includes designing what users see (frontend) and making it work behind the scenes (backend). It uses languages like HTML, CSS, JavaScript, and more. ine web developement",
    icon: Monitor,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: 3,
    title: "CAD Software Customization",
    description:
      "Bespoke CAD customization tailors interfaces, and integrations—streamlining workflows, reducing errors, boosting efficiency, and automated design aligned with organizational needs.",
    icon: Settings,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    title: "CAD Software Development",
    description:
      "Web development means creating websites that people can use online. It includes designing what users see (frontend) and making it work behind the scenes (backend). It uses languages like HTML, CSS, JavaScript, and more. ine web developement",
    icon: Monitor,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
]

export function FeaturedServicesSection() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const visibleCount = 3
  const total = services.length

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 3000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [total])

  // Calculate visible indices (wrap around)
  const getVisible = () => {
    let arr = []
    for (let i = 0; i < visibleCount; i++) {
      arr.push((current + i) % total)
    }
    return arr
  }
  const visible = getVisible()

  const handleDotClick = (idx: number) => {
    setCurrent(idx)
  }

  return (
    <section className="py-20 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-[43px] font-bold text-gray-900 mb-4 font-exo">
              <span className="text-orange-500">Featured</span> Services
            </h2>
            <p className="text-lg text-gray-600">Explore our Services</p>
          </div>
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-2 rounded-full bg-transparent"
          >
            All Services
          </Button>
        </div>

        {/* Services Carousel */}
        <div className="relative flex flex-col items-center group">
          <div className="flex space-x-8 transition-transform duration-700" style={{ minWidth: 0 }}>
            {visible.map((idx, i) => {
              const service = services[idx]
              const isCenter = i === 1
              return (
                <Card
                  key={service.id + '-' + idx}
                  className={`bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden cursor-pointer min-w-[392px] w-[392px] h-[511px] ${isCenter ? 'scale-110 z-10 ring-4 ring-orange-200' : 'opacity-70 scale-95'} group`}
                  style={{ pointerEvents: isCenter ? 'auto' : 'none', height: 511 }}
                >
                  {/* Card Image */}
                  <div className="h-[320px] relative flex items-center justify-center overflow-hidden">
                    {service.id === 1 ? (
                      <Image src="/h1.jpg" alt="PLM System Administration" fill className="object-cover transition-transform duration-700 group-hover:scale-125" priority />
                    ) : service.id === 2 ? (
                      <Image src="/web.png" alt="Web Development" fill className="object-cover transition-transform duration-700 group-hover:scale-125" priority />
                    ) : service.id === 3 ? (
                      <Image src="/h3.jpg" alt="CAD Software Customization" fill className="object-cover transition-transform duration-700 group-hover:scale-125" priority />
                    ) : service.id === 4 ? (
                      <Image src="/h2.jpg" alt="Web Development" fill className="object-cover transition-transform duration-700 group-hover:scale-125" priority />
                    ) : null}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute bottom-4 left-4 z-10">
                      <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1">
                        Learn More
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4 group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white transition-all duration-500">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight font-syne group-hover:text-orange-600 transition-colors duration-500">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-snug group-hover:text-gray-700 transition-colors duration-500">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          {/* Slider Dots */}
          <div className="flex justify-center mt-12 space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-4 h-4 rounded-full border-2 border-orange-400 transition-colors duration-300 ${idx === current ? 'bg-orange-500' : 'bg-white hover:bg-orange-200'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
