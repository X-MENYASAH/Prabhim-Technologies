"use client"

import Image from "next/image"
import { Atom, RotateCcw, Code, Database, Zap, BarChart3, Settings } from "lucide-react"

export function CoursesHeroSection() {
  return (
    <section className="relative w-[1240px] h-[324px] mx-auto overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 via-cyan-200 to-pink-200" />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100/80 via-purple-100/40 to-rose-200/80" />

      <div className="relative z-10 h-full flex items-center px-8">
        <div className="grid grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-4">
            <p className="text-sm text-gray-700 font-medium">Top Picks For You</p>

            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Must-Explore Our Courses
            </h2>

            <p className="text-sm text-gray-700 leading-relaxed max-w-md">
              "Discover standout courses across coding, CAD customization, and software testing—perfect for advancing
              your career."
            </p>
          </div>

          {/* Right Side - Frame2.png Image */}
          <div className="relative h-[280px] w-[400px] mx-auto animate-float">
            <Image
              src="/Frame2.png"
              alt="Must-Explore Our Courses Frame"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Additional Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
    </section>
  )
}
