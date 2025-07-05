"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  GraduationCap,
  ArrowUpRight,
  Search,
  Star,
  Clock,
  Users,
  Award,
  TrendingUp,
  Target,
  ArrowRight,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react"
import Link from "next/link"

const courseCategories = [
  "All Courses",
  "CAD Customization",
  "Programming Languages",
  "Software Development",
  "Software Testing",
]

const courses = [
  {
    id: 1,
    title: "AutoCAD Customization",
    instructor: "Determined-Poitras",
    duration: "2 Weeks",
    students: "156 Students",
    rating: 4.5,
    reviews: 124,
    category: "CAD Customization",
    description: "Master AutoCAD customization with hands-on projects and real-world applications.",
    bgGradient: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "LISP Customization",
    instructor: "Determined-Poitras",
    duration: "3 Weeks",
    students: "89 Students",
    rating: 4.3,
    reviews: 67,
    category: "CAD Customization",
    description: "Learn LISP programming for AutoCAD automation and customization.",
    bgGradient: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    title: "Special Offer on C, C++ & C#",
    instructor: "Determined-Poitras",
    duration: "4 Weeks",
    students: "234 Students",
    rating: 4.7,
    reviews: 189,
    category: "Programming Languages",
    description: "Complete programming bundle covering C, C++, and C# fundamentals.",
    bgGradient: "from-orange-500 to-red-600",
    isSpecialOffer: true,
  },
  {
    id: 4,
    title: "SolidWorks Customization",
    instructor: "Determined-Poitras",
    duration: "3 Weeks",
    students: "145 Students",
    rating: 4.6,
    reviews: 112,
    category: "CAD Customization",
    description: "Advanced SolidWorks customization techniques and API development.",
    bgGradient: "from-purple-500 to-pink-600",
  },
  {
    id: 5,
    title: "CATIA Customization",
    instructor: "Determined-Poitras",
    duration: "4 Weeks",
    students: "98 Students",
    rating: 4.4,
    reviews: 76,
    category: "CAD Customization",
    description: "Professional CATIA customization and macro development.",
    bgGradient: "from-indigo-500 to-blue-600",
  },
  {
    id: 6,
    title: "NX Customization",
    instructor: "Determined-Poitras",
    duration: "3 Weeks",
    students: "87 Students",
    rating: 4.5,
    reviews: 65,
    category: "CAD Customization",
    description: "NX/Unigraphics customization and automation programming.",
    bgGradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 7,
    title: "SolidEdge Customization",
    instructor: "Determined-Poitras",
    duration: "2 Weeks",
    students: "76 Students",
    rating: 4.3,
    reviews: 54,
    category: "CAD Customization",
    description: "SolidEdge API programming and customization techniques.",
    bgGradient: "from-teal-500 to-green-600",
  },
  {
    id: 8,
    title: "Revit Customization",
    instructor: "Determined-Poitras",
    duration: "3 Weeks",
    students: "123 Students",
    rating: 4.6,
    reviews: 98,
    category: "CAD Customization",
    description: "Revit API development and BIM customization solutions.",
    bgGradient: "from-yellow-500 to-orange-600",
  },
  {
    id: 9,
    title: "C, C++ With DSA",
    instructor: "Determined-Poitras",
    duration: "6 Weeks",
    students: "312 Students",
    rating: 4.8,
    reviews: 267,
    category: "Programming Languages",
    description: "Complete C/C++ programming with Data Structures and Algorithms.",
    bgGradient: "from-red-500 to-pink-600",
  },
  {
    id: 10,
    title: "Python With DSA",
    instructor: "Determined-Poitras",
    duration: "5 Weeks",
    students: "289 Students",
    rating: 4.7,
    reviews: 234,
    category: "Programming Languages",
    description: "Python programming fundamentals with advanced DSA concepts.",
    bgGradient: "from-green-500 to-blue-600",
  },
  {
    id: 11,
    title: "C# With DSA",
    instructor: "Determined-Poitras",
    duration: "5 Weeks",
    students: "198 Students",
    rating: 4.6,
    reviews: 156,
    category: "Programming Languages",
    description: "C# programming with comprehensive Data Structures coverage.",
    bgGradient: "from-purple-500 to-indigo-600",
  },
  {
    id: 12,
    title: "Java - JavaScript With DSA",
    instructor: "Determined-Poitras",
    duration: "6 Weeks",
    students: "345 Students",
    rating: 4.8,
    reviews: 298,
    category: "Programming Languages",
    description: "Dual language mastery: Java and JavaScript with DSA.",
    bgGradient: "from-orange-500 to-red-600",
  },
  {
    id: 13,
    title: "Full Stack Development",
    instructor: "Determined-Poitras",
    duration: "8 Weeks",
    students: "267 Students",
    rating: 4.9,
    reviews: 223,
    category: "Software Development",
    description: "Complete full-stack web development with modern frameworks.",
    bgGradient: "from-blue-500 to-purple-600",
  },
  {
    id: 14,
    title: "DevOps And Cloud Computing",
    instructor: "Determined-Poitras",
    duration: "6 Weeks",
    students: "189 Students",
    rating: 4.7,
    reviews: 145,
    category: "Software Development",
    description: "Modern DevOps practices and cloud computing fundamentals.",
    bgGradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 15,
    title: "Manual Testing",
    instructor: "Determined-Poitras",
    duration: "4 Weeks",
    students: "156 Students",
    rating: 4.5,
    reviews: 123,
    category: "Software Testing",
    description: "Comprehensive manual testing methodologies and best practices.",
    bgGradient: "from-green-500 to-teal-600",
  },
  {
    id: 16,
    title: "Automation Testing",
    instructor: "Determined-Poitras",
    duration: "5 Weeks",
    students: "134 Students",
    rating: 4.6,
    reviews: 108,
    category: "Software Testing",
    description: "Advanced automation testing with Selenium and modern tools.",
    bgGradient: "from-indigo-500 to-purple-600",
  },
]

export function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "All Courses" || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const renderCourseImage = (course: (typeof courses)[0]) => {
    return (
      <div className={`relative h-48 bg-gradient-to-br ${course.bgGradient} rounded-t-2xl overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

          {/* Course-specific illustrations */}
          {course.category === "CAD Customization" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="120" height="80" viewBox="0 0 120 80" className="text-white/40">
                <rect x="10" y="20" width="100" height="60" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect
                  x="15"
                  y="25"
                  width="90"
                  height="35"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="currentColor"
                  fillOpacity="0.1"
                />
                <circle cx="30" cy="45" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
                <rect x="45" y="37" width="20" height="16" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M70 37 L90 37 L85 45 L90 53 L70 53 Z" stroke="currentColor" strokeWidth="1" fill="none" />
                <line x1="20" y1="65" x2="100" y2="65" stroke="currentColor" strokeWidth="1" />
                <line x1="20" y1="70" x2="80" y2="70" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          )}

          {course.category === "Programming Languages" && (
            <div className="absolute inset-0 p-4 font-mono text-xs text-white/60">
              <div className="space-y-1">
                <div>{"function learn() {"}</div>
                <div className="ml-4">{"const skills = [];"}</div>
                <div className="ml-4">{"while(practicing) {"}</div>
                <div className="ml-8">{"skills.push('new_concept');"}</div>
                <div className="ml-4">{"}"}</div>
                <div className="ml-4">{"return skills;"}</div>
                <div>{"}"}</div>
                <div className="mt-2">{"// Keep coding!"}</div>
              </div>
            </div>
          )}

          {course.category === "Software Development" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2 opacity-40">
                <div className="w-8 h-8 bg-white/20 rounded border border-white/30" />
                <div className="w-8 h-8 bg-white/30 rounded border border-white/40" />
                <div className="w-8 h-8 bg-white/20 rounded border border-white/30" />
                <div className="w-8 h-8 bg-white/30 rounded border border-white/40" />
                <div className="w-8 h-8 bg-white/40 rounded border border-white/50" />
                <div className="w-8 h-8 bg-white/30 rounded border border-white/40" />
                <div className="w-8 h-8 bg-white/20 rounded border border-white/30" />
                <div className="w-8 h-8 bg-white/30 rounded border border-white/40" />
                <div className="w-8 h-8 bg-white/20 rounded border border-white/30" />
              </div>
            </div>
          )}

          {course.category === "Software Testing" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 border-2 border-white/40 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-400/60 rounded-full flex items-center justify-center">
                    <div className="w-3 h-2 border-l-2 border-b-2 border-white transform rotate-[-45deg] translate-y-[-1px]" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-400/60 rounded-full flex items-center justify-center">
                  <div className="w-3 h-0.5 bg-white" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Special Offer Badge */}
        {course.isSpecialOffer && (
          <div className="absolute top-4 left-4">
            <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">SPECIAL OFFER</div>
          </div>
        )}

        {/* Course Icon */}
        <div className="absolute bottom-4 right-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-10 px-4 py-6 lg:px-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="PRABHIM Logo"
              width={145.75}
              height={100}
              className="h-[100px] w-auto object-contain"
              priority
            />
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link
              href="/"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/services"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors"
            >
              SERVICES
            </Link>
            <Link
              href="/courses"
              className="text-orange-500 font-semibold text-sm tracking-wide hover:text-orange-600 transition-colors"
            >
              COURSES
            </Link>
            <Link
              href="/about"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors"
            >
              ABOUT US
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors"
            >
              CONTACT
            </Link>
            <Link
              href="#"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors"
            >
              BLOGS
            </Link>
          </div>

          {/* Login Button */}
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2.5 flex items-center space-x-2 shadow-lg transition-all duration-200 hover:shadow-xl">
            <span className="font-medium">Login</span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </div>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                Course
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The best online <span className="text-orange-500">course</span>
                <br />
                for your next big move.
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                Unlock transformation through hands-on learning and real-world projects.
              </p>

              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                Explore More
              </Button>
            </div>

            {/* Right Content - Workspace Illustration */}
            <div className="relative h-96 lg:h-[500px]">
              {/* Bookshelf Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden">
                {/* Books on shelf */}
                <div className="absolute top-8 left-8 right-8">
                  <div className="flex space-x-1 mb-2">
                    <div className="w-4 h-16 bg-red-400 rounded-t" />
                    <div className="w-4 h-16 bg-blue-400 rounded-t" />
                    <div className="w-4 h-16 bg-green-400 rounded-t" />
                    <div className="w-4 h-16 bg-yellow-400 rounded-t" />
                    <div className="w-4 h-16 bg-purple-400 rounded-t" />
                    <div className="w-4 h-16 bg-pink-400 rounded-t" />
                    <div className="w-4 h-16 bg-indigo-400 rounded-t" />
                    <div className="w-4 h-16 bg-orange-400 rounded-t" />
                  </div>
                  <div className="w-full h-2 bg-gray-300 rounded" />
                </div>

                {/* Desk */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-200 to-amber-100 rounded-b-3xl">
                  {/* Computer Monitor */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-16 bg-gray-800 rounded border-2 border-gray-700">
                      <div className="w-full h-full bg-blue-400 rounded p-1">
                        <div className="w-full h-2 bg-white/20 rounded mb-1" />
                        <div className="w-3/4 h-2 bg-white/20 rounded mb-1" />
                        <div className="w-1/2 h-2 bg-white/20 rounded" />
                      </div>
                    </div>
                    <div className="w-2 h-4 bg-gray-600 mx-auto" />
                    <div className="w-16 h-2 bg-gray-600 rounded-full mx-auto" />
                  </div>

                  {/* Person silhouette */}
                  <div className="absolute bottom-4 right-8">
                    <div className="w-8 h-8 bg-orange-400 rounded-full" />
                    <div className="w-12 h-16 bg-blue-500 rounded-t-lg mt-1" />
                    <div className="flex space-x-1 mt-1">
                      <div className="w-3 h-8 bg-blue-500 rounded" />
                      <div className="w-3 h-8 bg-blue-500 rounded" />
                    </div>
                  </div>

                  {/* Coffee cup */}
                  <div className="absolute bottom-12 left-8">
                    <div className="w-4 h-6 bg-white rounded-b-full border-2 border-gray-300">
                      <div className="w-full h-2 bg-amber-600 rounded-t" />
                    </div>
                  </div>

                  {/* Notebook */}
                  <div className="absolute bottom-8 right-16">
                    <div className="w-8 h-6 bg-white border border-gray-300 rounded">
                      <div className="space-y-1 p-1">
                        <div className="w-full h-0.5 bg-gray-300" />
                        <div className="w-3/4 h-0.5 bg-gray-300" />
                        <div className="w-1/2 h-0.5 bg-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80 animate-bounce" />
              <div className="absolute top-1/2 -left-4 w-12 h-12 bg-pink-400 rounded-full opacity-60" />
              <div className="absolute bottom-8 -right-8 w-20 h-20 bg-blue-400 rounded-full opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 px-4 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Popular Courses</h2>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search Something"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Course Categories */}
          <div className="flex flex-wrap gap-4 mb-12">
            {courseCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group hover:scale-105"
              >
                {/* Course Image */}
                {renderCourseImage(course)}

                {/* Course Content */}
                <CardContent className="p-6">
                  {/* Instructor */}
                  <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>

                  {/* Course Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{course.title}</h3>

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
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                  {/* Rating and View More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-bold text-gray-900">{course.rating}</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </div>
                      <span className="text-xs text-green-600 font-medium">({course.reviews})</span>
                    </div>
                    {course.id === 1 ? (
                      <Link href="/courses/autocad-customization">
                        <Button
                          variant="ghost"
                          className="text-orange-500 hover:text-orange-600 font-semibold text-sm p-0"
                        >
                          View More
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant="ghost"
                        className="text-orange-500 hover:text-orange-600 font-semibold text-sm p-0"
                      >
                        View More
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Earn Industry-Recognized
                <br />
                <span className="text-orange-500">Certificates</span>
              </h2>

              {/* Benefits */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Career Opportunities</h3>
                    <p className="text-gray-600">
                      Stand out from the crowd with industry-recognized certifications that validate your skills and
                      open doors to new career opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Credibility</h3>
                    <p className="text-gray-600">
                      Build trust with employers and clients by showcasing verified competencies through our
                      comprehensive certification program.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Demonstrable, Real-World Skills</h3>
                    <p className="text-gray-600">
                      Our certificates represent practical, hands-on experience that employers value, not just
                      theoretical knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Certificate Illustration */}
            <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
              <div className="relative">
                {/* Certificate */}
                <div className="w-80 h-60 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-2xl border-4 border-white relative overflow-hidden">
                  {/* Certificate Header */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-blue-600 to-indigo-600" />

                  {/* Certificate Content */}
                  <div className="p-8 pt-20 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">CERTIFICATE</h3>
                    <p className="text-lg text-gray-700 mb-4">of Achievement</p>

                    <div className="space-y-2">
                      <div className="w-32 h-1 bg-gray-300 rounded mx-auto" />
                      <div className="w-24 h-1 bg-gray-300 rounded mx-auto" />
                      <div className="w-28 h-1 bg-gray-300 rounded mx-auto" />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded" />
                </div>

                {/* Floating graduation cap */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-4 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            {/* Company Info - Left Side */}
            <div className="lg:col-span-4 space-y-6">
              {/* Logo */}
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="PRABHIM Logo"
                  width={216.56}
                  height={143}
                  className="h-[143px] w-auto object-contain"
                  priority
                />
              </div>

              {/* Company Description */}
              <p className="text-gray-600 leading-relaxed max-w-md">
                We provide full-cycle software development services to help businesses innovate and grow. Our team
                builds secure, high-quality applications using modern technologies and frameworks.
              </p>
            </div>

            {/* Navigation Links - Right Side */}
            <div className="lg:col-span-8 grid md:grid-cols-3 gap-8 mt-5">
              {/* Company */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Company</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Useful Links */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Useful Links</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Newsletter Text */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get the latest updates Subscribe us</h3>
                <p className="text-gray-600">Subscribe to PRABHIM</p>
              </div>

              {/* Newsletter Form */}
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Add your email*"
                    className="w-full px-6 py-4 bg-gray-800 text-white placeholder-gray-400 border-0 rounded-full focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
                  <span>SUBSCRIBE</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
            {/* Copyright */}
            <div className="text-gray-600 mb-4 md:mb-0">©2024 All rights reserved</div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
