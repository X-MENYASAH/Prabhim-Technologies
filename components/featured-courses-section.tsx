"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, Users, Code, Laptop, TestTube, ArrowRight } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Programming Languages",
    duration: "2Weeks",
    students: "156 Students",
    description: "Master essential coding languages for modern software development and innovation.",
    topics: [
      "Master basic syntax, data types, and control structures",
      "Understand pointers, memory management, and dynamic allocation",
      "Learn Object-Oriented Programming (OOP)"
    ],
    rating: 4.5,
    reviews: 124,
    icon: Code,
    bgGradient: "from-blue-500 to-purple-600",
    imageTheme: "coding",
  },
  {
    id: 2,
    title: "CAD Customization",
    duration: "2Weeks",
    students: "156 Students",
    description: "Learn to customize CAD tools for precise engineering and product design.",
    topics: [
      "Parametric modeling in AutoCAD and SolidWorks",
      "Custom tool palettes and macros",
      "Scripting using VBA or Python APIs",
    ],
    rating: 4.5,
    reviews: 124,
    icon: Laptop,
    bgGradient: "from-gray-700 to-blue-900",
    imageTheme: "cad",
  },
  {
    id: 3,
    title: "Software Testing",
    duration: "2Weeks",
    students: "156 Students",
    description: "Acquire hands-on testing skills for quality assurance in software.",
    topics: [
      "Manual test case design & execution",
      "Automated testing with Selenium and Cypress",
      "API testing using Postman or REST",
    ],
    rating: 4.5,
    reviews: 124,
    icon: TestTube,
    bgGradient: "from-orange-500 to-teal-500",
    imageTheme: "testing",
  },
]

export function FeaturedCoursesSection() {
  const renderCourseImage = (course: (typeof courses)[0]) => {
    return (
      <div className="relative h-48 rounded-t-2xl overflow-hidden group">
        {/* Background Image */}
        {course.id === 1 && (
          <Image
            src="/fc1.jpg"
            alt="Programming Languages"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-125"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {course.id === 2 && (
          <Image
            src="/fc2.jpg"
            alt="CAD Customization"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-125"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {course.id === 3 && (
          <Image
            src="/fc3.jpg"
            alt="Software Testing"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-125"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

        {/* Enhanced Enroll Now Button */}
        <div className="absolute top-4 left-4 z-10">
          <Button 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1 flex items-center space-x-2 border-2 border-white/20 backdrop-blur-sm"
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Floating Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            Featured
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[43px] font-bold text-gray-900 mb-3 md:mb-4 font-exo">
              <span className="text-orange-500">Featured</span> Courses
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">Explore our Popular Courses</p>
          </div>
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100 px-4 md:px-6 py-2 rounded-full bg-transparent text-sm md:text-base"
          >
            All Courses
          </Button>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-2 cursor-pointer h-[600px] flex flex-col w-[393.33px] mx-auto"
            >
              {/* Course Image */}
              {renderCourseImage(course)}

              {/* Course Content */}
              <CardContent className="p-4 group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white transition-all duration-500 flex flex-col flex-1">
                {/* Course Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-500">{course.title}</h3>

                {/* Course Meta */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="flex items-center space-x-1 text-orange-500">
                    <Clock className="w-5 h-5" />
                    <span className="text-base font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-orange-500">
                    <Users className="w-5 h-5" />
                    <span className="text-base font-medium">{course.students}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed text-lg">"{course.description}"</p>

                {/* Topics */}
                <ul className="gap-y-2 flex flex-col">
                  {course.topics.map((topic, index) => (
                    <li key={index} className="flex items-start space-x-3 text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-lg">{topic}</span>
                    </li>
                  ))}
                </ul>

                {/* Rating and View More */}
                <div className="flex items-center justify-between mt-auto pt-3">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <span className="text-lg font-bold text-gray-900">{course.rating}</span>
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                    <span className="text-base text-green-600 font-medium">({course.reviews})</span>
                  </div>
                  <Button variant="ghost" className="text-xl text-gray-900 group-hover:text-orange-500 font-semibold transition-all duration-300 group-hover:scale-105">
                    View More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
