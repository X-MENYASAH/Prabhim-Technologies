"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Users, Settings, Code, Database } from "lucide-react"

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
    title: "CAD Software Development",
    description:
      "Develop custom CAD solutions—2D/3D modeling engines, plugins, APIs, and visualization tools—enhancing workflows, precision, integration, automation, and collaboration.",
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
    title: "Software Testing Services",
    description:
      "Comprehensive testing solutions ensuring software quality, performance, and reliability through automated and manual testing processes.",
    icon: Code,
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    id: 5,
    title: "Technical Training Programs",
    description:
      "Expert-led training programs in programming, CAD software, and emerging technologies to enhance team capabilities and productivity.",
    icon: Users,
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
]

export function FeaturedServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(1)

  return (
    <section className="py-20 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
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

        {/* Services Cards */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 transition-transform duration-500 ease-in-out">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex-shrink-0 w-80 lg:w-96 ${
                  index === 0 ? "opacity-60 scale-95" : index === 2 ? "opacity-60 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                  {/* Card Image */}
                  <div className="h-64 relative flex items-center justify-center overflow-hidden">
                                        {service.id === 1 ? (
                      // PLM System Administration - Use h1.jpg image
                      <>
                        <Image
                          src="/h1.jpg"
                          alt="PLM System Administration"
                          fill
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        
 
  
                        {/* Learn More Button Overlay */}
                        <div className="absolute bottom-4 left-4 z-10">
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-lg">
                            Learn More
                          </Button>
                        </div>
                      </>
                    ) : service.id === 2 ? (
                      // CAD Software Development - Use h2.jpg image
                      <>
                        <Image
                          src="/h2.jpg"
                          alt="CAD Software Development"
                          fill
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        
                        {/* Learn More Button Overlay */}
                        <div className="absolute bottom-4 left-4 z-10">
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-lg">
                            Learn More
                          </Button>
                        </div>
                      </>
                    ) : service.id === 3 ? (
                      // CAD Software Customization - Use h3.jpg image
                      <>
                        <Image
                          src="/h3.jpg"
                          alt="CAD Software Customization"
                          fill
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        
                        {/* Learn More Button Overlay */}
                        <div className="absolute bottom-4 left-4 z-10">
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-lg">
                            Learn More
                          </Button>
                        </div>
                      </>
                    ) : (
                      // Other services - Use original design
                      <div className={`h-full w-full ${service.bgColor} relative flex items-center justify-center`}>
                        {/* Simulated Workspace Scene */}
                        <div className="relative w-full h-full p-6">
                          {/* Background Elements */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />

                          {/* Simulated Monitors/Screens */}
                          <div className="absolute top-8 left-8 w-24 h-16 bg-gray-800 rounded-lg shadow-lg">
                            <div className="w-full h-3 bg-gray-700 rounded-t-lg" />
                            <div className="p-2 space-y-1">
                              <div className="w-full h-1 bg-blue-400 rounded" />
                              <div className="w-3/4 h-1 bg-green-400 rounded" />
                              <div className="w-1/2 h-1 bg-orange-400 rounded" />
                            </div>
                          </div>

                          <div className="absolute top-6 right-8 w-20 h-14 bg-gray-800 rounded-lg shadow-lg">
                            <div className="w-full h-2 bg-gray-700 rounded-t-lg" />
                            <div className="p-1 space-y-1">
                              <div className="w-full h-1 bg-purple-400 rounded" />
                              <div className="w-2/3 h-1 bg-yellow-400 rounded" />
                            </div>
                          </div>

                          {/* Simulated People/Workspace */}
                          <div className="absolute bottom-8 left-6 w-8 h-8 bg-amber-200 rounded-full border-2 border-white shadow-md" />
                          <div className="absolute bottom-6 left-16 w-6 h-6 bg-rose-200 rounded-full border-2 border-white shadow-md" />

                          {/* Central Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}
                            >
                              <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                            </div>
                          </div>

                          {/* Floating Elements */}
                          <div className="absolute top-16 right-16 w-3 h-3 bg-orange-400 rounded-full opacity-60" />
                          <div className="absolute bottom-16 right-12 w-2 h-2 bg-blue-400 rounded-full opacity-50" />
                          <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full opacity-40" />
                        </div>

                        {/* Learn More Button Overlay */}
                        <div className="absolute bottom-4 left-4">
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-lg">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
