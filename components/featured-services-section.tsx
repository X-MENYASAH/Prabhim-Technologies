"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Settings, Database } from "lucide-react"

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
]

export function FeaturedServicesSection() {
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

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
              {/* Card Image */}
              <div className="h-96 relative flex items-center justify-center overflow-hidden">
                {service.id === 1 ? (
                  // PLM System Administration - Use h1.jpg image
                  <>
                    <Image
                      src="/h1.jpg"
                      alt="PLM System Administration"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* Learn More Button Overlay */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* Learn More Button Overlay */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* Learn More Button Overlay */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        Learn More
                      </Button>
                    </div>
                  </>
                ) : null}
              </div>

              {/* Card Content */}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">{service.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
