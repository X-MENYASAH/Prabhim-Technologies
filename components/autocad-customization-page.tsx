"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  ArrowUpRight,
  Play,
  Users,
  Award,
  Download,
  Globe,
  Smartphone,
  Trophy,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  User,
  Linkedin,
  Github,
  Instagram,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const courseModules = [
  {
    title: "WordPress Basic & Domain Hosting explained",
    lessons: [
      { title: "How to buy domain hosting (Hostgator, Godaddy or any hosting)", duration: "15:30" },
      { title: "How to install wordpress locally for free", duration: "12:45" },
      { title: "How to create sub domains and install wordpress on it", duration: "18:20" },
      { title: "wordpress basic dashboard settings", duration: "10:15" },
      { title: "Join our new support group", duration: "05:30" },
    ],
  },
  {
    title: "Creating a Complete Portfolio website (start to finish)",
    lessons: [],
  },
  {
    title: "Creating a Complete Blogging website (start to finish)",
    lessons: [],
  },
  {
    title: "E-commerce Product creation, managing and delivery (complete module)",
    lessons: [],
  },
  {
    title: "Creating a Complete E-commerce website (start to finish)",
    lessons: [],
  },
  {
    title: "(Bonus) WordPress Backup, Migration, Reset and more",
    lessons: [],
  },
  {
    title: "Website security and protection from hackers",
    lessons: [],
  },
  {
    title: "Learn setting up website for client and delivering it properly",
    lessons: [],
  },
  {
    title: "Ways to monetize and make money using this skills",
    lessons: [],
  },
  {
    title: "Event Maintenance 101",
    lessons: [],
  },
  {
    title: "E-commerce website (Course Update 2.0)",
    lessons: [],
  },
  {
    title: "Creating a Complete Restaurant website (Course update 2.0)",
    lessons: [],
  },
  {
    title: "Agency website (Course update 2.0)",
    lessons: [],
  },
  {
    title: "Join Our affiliate Program",
    lessons: [],
  },
  {
    title: "Creating a Complete Newspaper website (Course update 2.0)",
    lessons: [],
  },
  {
    title: "Creating a Complete LMS website (Update 3.0)",
    lessons: [],
  },
  {
    title: "Creating a Complete Clothing Business Website (Update 3.0)",
    lessons: [],
  },
  {
    title: "Introduction to Confluent and sales funnel (Update 3.0)",
    lessons: [],
  },
  {
    title: "Creating a Complete Landing Page Using Confluent (Update 3.0)",
    lessons: [],
  },
  {
    title: "Introduction to Elementor Pro (Update 3.0)",
    lessons: [],
  },
  {
    title: "Creating a Complete Website Using Elementor Pro (Update 3.0)",
    lessons: [],
  },
  {
    title: "Search Engine Optimization SEO (Update 3.0)",
    lessons: [],
  },
  {
    title: "Chat Integration (Update 3.0)",
    lessons: [],
  },
  {
    title: "Ecommerce and analytics (Update 3.0)",
    lessons: [],
  },
  {
    title: "Website Speed Optimization (Update 3.0)",
    lessons: [],
  },
]

export function CadCustomizationPage() {
  const [expandedModules, setExpandedModules] = useState<number[]>([0])

  const toggleModule = (index: number) => {
    setExpandedModules((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-10 px-4 py-6 lg:px-8 border-b border-gray-100">
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

          {/* Dark Mode Toggle & Login */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Light</span>
              <div className="w-12 h-6 bg-gray-800 rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform" />
              </div>
            </div>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2.5 flex items-center space-x-2 shadow-lg transition-all duration-200 hover:shadow-xl">
              <span className="font-medium">Login</span>
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
              </div>
            </Button>
          </div>
        </nav>
      </header>

      {/* Course Header */}
      <section className="py-8 px-4 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <Link href="/courses" className="hover:text-orange-500">
              Courses
            </Link>
            <span>/</span>
            <span className="text-orange-500">NX</span> Customization
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-orange-500">AutoCAD</span> Customization Full Course
          </h1>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Instructor</p>
                <p className="font-semibold text-gray-900">Expert Instructor</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Categories:</span> NX Customization
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Video Player */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl overflow-hidden relative">
                  {/* Video Background Illustration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-purple-800">
                    {/* Room Background */}
                    <div className="absolute inset-0">
                      {/* Ceiling beams */}
                      <div className="absolute top-0 left-0 right-0 h-16">
                        <div className="flex space-x-4 h-full">
                          <div className="w-8 bg-amber-700 opacity-60" />
                          <div className="w-8 bg-amber-600 opacity-50" />
                          <div className="w-8 bg-amber-700 opacity-60" />
                          <div className="w-8 bg-amber-600 opacity-50" />
                          <div className="w-8 bg-amber-700 opacity-60" />
                          <div className="flex-1" />
                        </div>
                      </div>

                      {/* Desk and Computer Setup */}
                      <div className="absolute bottom-0 left-0 right-0 h-2/3">
                        {/* Desk */}
                        <div className="absolute bottom-0 left-1/4 right-1/4 h-32 bg-gradient-to-t from-amber-200 to-amber-100 rounded-t-lg">
                          {/* Monitor */}
                          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                            <div className="w-32 h-20 bg-gray-900 rounded border-2 border-gray-700">
                              {/* AutoCAD Interface */}
                              <div className="w-full h-full bg-gray-800 rounded p-1">
                                <div className="w-full h-3 bg-gray-700 rounded mb-1" />
                                <div className="flex space-x-1 mb-1">
                                  <div className="w-8 h-2 bg-blue-500 rounded" />
                                  <div className="w-6 h-2 bg-green-500 rounded" />
                                  <div className="w-4 h-2 bg-red-500 rounded" />
                                </div>
                                <div className="w-full h-8 bg-black rounded flex items-center justify-center">
                                  <div className="w-6 h-6 border border-blue-400 rounded-full" />
                                  <div className="w-4 h-4 bg-yellow-400 rounded ml-2" />
                                </div>
                              </div>
                            </div>
                            <div className="w-2 h-4 bg-gray-600 mx-auto" />
                            <div className="w-16 h-2 bg-gray-600 rounded-full mx-auto" />
                          </div>

                          {/* Person */}
                          <div className="absolute bottom-4 right-8">
                            <div className="w-8 h-8 bg-orange-400 rounded-full" />
                            <div className="w-12 h-16 bg-gradient-to-b from-amber-600 to-amber-700 rounded-t-lg mt-1 relative">
                              {/* Checkered pattern for shirt */}
                              <div className="absolute inset-0 opacity-30">
                                <div className="grid grid-cols-4 grid-rows-4 h-full">
                                  <div className="bg-white" />
                                  <div className="bg-amber-800" />
                                  <div className="bg-white" />
                                  <div className="bg-amber-800" />
                                  <div className="bg-amber-800" />
                                  <div className="bg-white" />
                                  <div className="bg-amber-800" />
                                  <div className="bg-white" />
                                  <div className="bg-white" />
                                  <div className="bg-amber-800" />
                                  <div className="bg-white" />
                                  <div className="bg-amber-800" />
                                  <div className="bg-amber-800" />
                                  <div className="bg-white" />
                                  <div className="bg-amber-800" />
                                  <div className="bg-white" />
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-1 mt-1">
                              <div className="w-3 h-8 bg-blue-600 rounded" />
                              <div className="w-3 h-8 bg-blue-600 rounded" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors cursor-pointer">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-4 text-white">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <div className="flex-1 h-1 bg-white/30 rounded">
                        <div className="w-1/3 h-full bg-white rounded" />
                      </div>
                      <span className="text-sm">15:30 / 45:20</span>
                    </div>
                  </div>
                </div>

                {/* Course Navigation */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                      <span>Course Info</span>
                    </Button>
                    <Button variant="ghost" className="flex items-center space-x-2 text-gray-600">
                      <span>Overview</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* About Course */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">About Course</h2>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p>
                    Welcome to NX customization learning in this present era, you may struggle to progress in life.
                    Because of the lack of proper skills and knowledge. But with this course, you can build your career
                    in NX customization. Therefore, this course which will help you can build your career if you
                    haven't different technical skills. they can help you to build your career and understand the future
                    of NX customization.
                  </p>
                </div>
              </div>

              {/* What Will You Learn */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">What Will You Learn?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      You will learn NX customization in a different way. You will learn how to create custom
                      commands, menus, toolbars, and dialog boxes. You will also learn how to use NX's built-in
                      programming tools from basic level to advanced level with practical examples.
                    </p>
                    <p className="text-gray-700">
                      After completing this course, you'll be taught how to use NX's built-in programming tools
                      from basic level to advanced level with practical examples.
                    </p>
                    <p className="text-gray-700">
                      You will learn how to bring it to everyone's attention on it. You will learn how to use everything
                      that has been taught in this course. You will learn how to use everything that has been taught in
                      this course. You will learn how to use everything that has been taught in this course.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      The complete beginner with specializing about on programming is possible, and from each section is
                      completely different from the previous section. All resources are provided along with each
                      section.
                    </p>
                    <p className="text-gray-700">
                      Each element of a website, starting from the header to the footer, including navigation, buttons,
                      forms, and more, will be covered in detail. You will learn how to create a complete website from
                      scratch.
                    </p>
                    <p className="text-gray-700">
                      The steps to secure a website from hackers and viruses to protect it at all times are demonstrated
                      in detail. You will learn how to secure your website from hackers and viruses to protect it at all
                      times are demonstrated in detail.
                    </p>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Course Content</h2>
                <div className="space-y-4">
                  {courseModules.map((module, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleModule(index)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="font-semibold text-gray-900">{module.title}</h3>
                        {expandedModules.includes(index) ? (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      {expandedModules.includes(index) && module.lessons.length > 0 && (
                        <div className="border-t border-gray-200 bg-gray-50">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="px-8 py-3 flex items-center justify-between hover:bg-gray-100 transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <Play className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-700">{lesson.title}</span>
                              </div>
                              <span className="text-sm text-gray-500">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Course Pricing Card */}
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">$99.99</div>
                    <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-100">Course</Badge>
                  </div>

                  <div className="relative mb-4">
                    <Image
                      src="/autocad.jpg"
                      alt="CAD Customization Background"
                      width={400}
                      height={60}
                      className="w-full h-[60px] rounded-lg object-cover"
                    />
                    <Button className="absolute inset-0 bg-transparent hover:bg-black/20 text-white py-3 rounded-lg font-semibold transition-all duration-200">
                      Enroll Now
                    </Button>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Difficulty Level</span>
                      <span className="font-medium">Beginner</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium">2 Weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Lessons</span>
                      <span className="font-medium">25 Lessons</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Students</span>
                      <span className="font-medium">156 Students</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Assessments</span>
                      <span className="font-medium">Self Assessment</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Certificate of completion</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Course Instructor */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">A COURSE BY</h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Instructor</h4>
                      <p className="text-sm text-gray-600">CAD Expert & Instructor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Material Includes */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Material Includes</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Play className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">25+ hours quality videos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Download className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">Downloadable resources</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">Full lifetime access</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">Access on mobile and TV</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">Certificate of completion</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">Support group</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-20 px-4 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">A beautiful Certificate is waiting for you!</h2>
              <p className="text-xl text-gray-700">
                Get this certificate to show everyone to demonstrate your skills & increase your chances of getting
                selected.
              </p>
            </div>
            <div className="relative h-64 flex items-center justify-center">
              <div className="w-80 h-56 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-2xl border-4 border-white relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-600 to-indigo-600" />
                <div className="p-6 pt-16 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">CERTIFICATE</h3>
                  <p className="text-sm text-gray-700 mb-3">of Achievement</p>
                  <div className="space-y-1">
                    <div className="w-24 h-0.5 bg-gray-300 rounded mx-auto" />
                    <div className="w-20 h-0.5 bg-gray-300 rounded mx-auto" />
                    <div className="w-22 h-0.5 bg-gray-300 rounded mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-4 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center">
                <Image
                  src="/logo1.png"
                  alt="PRABHIM Logo"
                  width={216.56}
                  height={143}
                  className="h-[143px] w-auto object-contain"
                  priority
                />
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md">
                We provide full-cycle software development services to help businesses innovate and grow. Our team
                builds secure, high-quality applications using modern technologies and frameworks.
              </p>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-3 gap-8 mt-5">
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
                </ul>
              </div>

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
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get the latest updates Subscribe us</h3>
                <p className="text-gray-600">Subscribe to PRABHIM</p>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <input
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

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
            <div className="text-gray-600 mb-4 md:mb-0">©2024 All rights reserved</div>
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
