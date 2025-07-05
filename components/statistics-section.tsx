"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const statistics = [
  {
    number: "25K+",
    label: "Active Students",
  },
  {
    number: "899",
    label: "Total Courses",
  },
  {
    number: "158",
    label: "Instructor",
  },
  {
    number: "100%",
    label: "Satisfaction Rate",
  },
]

export function StatisticsSection() {
  return (
    <section className="relative py-20 px-4 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-[1440px] h-[381px] mx-auto">
        <Image
          src="/img.jpg"
          alt="Statistics Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Statistics Cards */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl border-0"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-4">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
