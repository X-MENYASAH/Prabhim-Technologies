"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, Users, Monitor, User, TestTube } from "lucide-react"

const cadCourses = [
  {
    id: 1,
    title: "AutoCAD Customization",
    instructor: "Determined-Poitras",
    duration: "2Weeks",
    students: "156 Students",
    description: "Master essential coding languages for modern software development and innovation.",
    topics: [
      "Python fundamentals",
      "Java and C#",
      "SQL and NoSQL database integration",
      "JavaScript ES6+ and frameworks",
    ],
    rating: 4.5,
    reviews: 124,
    icon: Monitor,
    bgGradient: "from-blue-600 to-gray-800",
    imageTheme: "cad-design",
  },
  {
    id: 2,
    title: "AutoCAD Customization",
    instructor: "Determined-Poitras",
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
    icon: User,
    bgGradient: "from-amber-600 to-brown-800",
    imageTheme: "workspace",
  },
  {
    id: 3,
    title: "Software Testing",
    instructor: "Determined-Poitras",
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
    bgGradient: "from-orange-500 to-teal-600",
    imageTheme: "testing",
  },
]

export function CadCoursesSection() {
  const renderCourseImage = (course: (typeof cadCourses)[0]) => {
    return (
      <div className="relative h-64 rounded-t-2xl overflow-hidden group">
        {/* Course Background Image */}
        {course.id === 1 && (
          <Image
            src="/autocad.jpg"
            alt="AutoCAD Customization Background"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {course.id === 2 && (
          <Image
            src="/h1.jpg"
            alt="CAD Customization Background"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {course.id === 3 && (
          <Image
            src="/fc3.jpg"
            alt="Software Testing Background"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

        {/* Enhanced Enroll Now Button */}
        <div className="absolute top-4 left-4 z-10">
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2 border-2 border-white/20 backdrop-blur-sm">
            <span>Enroll Now</span>
          </Button>
        </div>

        {/* Floating Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            Popular
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-orange-500">CAD</span> Customization Courses
            </h2>
            <p className="text-lg text-gray-600">Explore our Popular Courses</p>
          </div>
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-2 rounded-full bg-transparent"
          >
            All Courses
          </Button>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cadCourses.map((course) => (
            <Card
              key={course.id}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden"
            >
              {/* Course Image */}
              {renderCourseImage(course)}

              {/* Course Content */}
              <CardContent className="p-6">
                {/* Instructor */}
                <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{course.title}</h3>

                {/* Course Meta */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 text-orange-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-orange-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">{course.students}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">"{course.description}"</p>

                {/* Topics */}
                <ul className="space-y-2 mb-6">
                  {course.topics.map((topic, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>

                {/* Rating and View More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <span className="text-lg font-bold text-gray-900">{course.rating}</span>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <span className="text-sm text-green-600 font-medium">({course.reviews})</span>
                  </div>
                  <Button variant="ghost" className="text-gray-900 hover:text-orange-500 font-semibold">
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
