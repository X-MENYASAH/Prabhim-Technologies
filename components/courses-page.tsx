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
  Settings,
  Wrench,
} from "lucide-react"
import Link from "next/link"
import { FooterSection } from "@/components/footer-section"

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
    let imageUrl = "/placeholder.jpg";
    if (course.title === "AutoCAD Customization") imageUrl = "/h1.jpg";
    else if (course.title === "LISP Customization") imageUrl = "/h2.jpg";
    else if (course.title === "Special Offer on C, C++ & C#") imageUrl = "/h3.jpg";
    else if (course.title === "SolidWorks Customization") imageUrl = "/img.jpg";
    else if (course.title === "CATIA Customization") imageUrl = "/fc1.jpg";
    else if (course.title === "NX Customization") imageUrl = "/fc2.jpg";
    else if (course.title === "SolidEdge Customization") imageUrl = "/fc3.jpg";
    else if (course.title === "Revit Customization") imageUrl = "/des.jpg";
    else if (course.title === "C, C++ With DSA") imageUrl = "/cad.jpg";
    else if (course.title === "Python With DSA") imageUrl = "/cad soft.jpg";
    else if (course.title === "C# With DSA") imageUrl = "/cad plm.jpg";
    else if (course.title === "Java - JavaScript With DSA") imageUrl = "/pc2.jpg";
    else if (course.title === "Full Stack Development") imageUrl = "/Full.jpg";
    else if (course.title === "DevOps And Cloud Computing") imageUrl = "/dev.jpg";
    else if (course.title === "Manual Testing") imageUrl = "/testing.jpg";
    else if (course.title === "Automation Testing") imageUrl = "/A Testing.avif";
    // You can add more conditions for other courses if you want specific images
    return (
      <div className="relative h-48 rounded-t-2xl overflow-hidden" style={{ backgroundImage: `url('${imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-10 px-4 py-6 lg:px-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo1.png"
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
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block bg-yellow-400 text-black px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                Course
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The best online <span className="text-orange-500">course</span>
                <br />
                for your next big move.
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg">
                Unlock transformation through hands-on learning and real-world projects.
              </p>

              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                Explore More
              </Button>
            </div>

            {/* Right Content - Workspace Illustration */}
            <div className="relative h-96 lg:h-[500px]">
              {/* Only keep the background image, remove all children */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ backgroundImage: "url('/cor back.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 px-4 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 space-y-4 md:space-y-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Our Popular Courses</h2>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search Something"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-48 md:w-64 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
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
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group hover:scale-105 h-full flex flex-col"
              >
                {/* Course Image */}
                {renderCourseImage(course)}

                {/* Course Content */}
                <CardContent className="p-6 flex-1 flex flex-col">
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
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-bold text-gray-900">{course.rating}</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </div>
                      <span className="text-xs text-green-600 font-medium">({course.reviews})</span>
                    </div>
                    {course.id === 1 ? (
                      <Link href="/courses/cad-customization">
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
            <div className="space-y-12">
              {/* Section Title */}
              <h2 className="text-[50px] font-bold text-gray-900 leading-tight font-syne">
                Earn Industry-Recognized
                <br />
                <span className="text-orange-500">Certificates</span>
              </h2>

              {/* Benefits List */}
              <div className="space-y-8">
                {/* Career Opportunities */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-exo">Career Opportunities</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Earning recognized certifications in programming and CAD opens doors across industries—from tech
                      startups to engineering firms.
                    </p>
                  </div>
                </div>

                {/* Professional Credibility */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <Settings className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-exo">Professional Credibility</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Having a credential shows dedication to your craft—it boosts trust and credibility with employers,
                      clients, and peers. Plus, you'll gain confidence to tackle increasingly complex problems.
                    </p>
                  </div>
                </div>

                {/* Demonstrable, Real-World Skills */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-exo">Demonstrable, Real-World Skills</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Beyond theory, our certification confirms your ability to produce actual scripts, tools, CAD
                      designs, and automations. Employers and clients value practical competence—often more than common
                      "completion" certificates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Certificate Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg animate-float-alt">
                <Image
                  src="/cert.png"
                  alt="Industry-Recognized Certificate"
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </div>
  )
}
