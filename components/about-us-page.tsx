"use client"
import Image from "next/image"
import {
  ChevronDown,
  GraduationCap,
  Monitor,
  Coffee,
  Laptop,
  Users,
  Award,
  BookOpen,
  Star,
  ArrowRight,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function AboutUsPage() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    solutions: false,
    excellence: false,
    teaching: false,
    talented: false,
    features: false,
    testimonials: false,
    learning: false,
  })

  const heroRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)
  const excellenceRef = useRef<HTMLDivElement>(null)
  const teachingRef = useRef<HTMLDivElement>(null)
  const talentedRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const learningRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target
          if (target === heroRef.current) setIsVisible((prev) => ({ ...prev, hero: true }))
          if (target === solutionsRef.current) setIsVisible((prev) => ({ ...prev, solutions: true }))
          if (target === excellenceRef.current) setIsVisible((prev) => ({ ...prev, excellence: true }))
          if (target === teachingRef.current) setIsVisible((prev) => ({ ...prev, teaching: true }))
          if (target === talentedRef.current) setIsVisible((prev) => ({ ...prev, talented: true }))
          if (target === featuresRef.current) setIsVisible((prev) => ({ ...prev, features: true }))
          if (target === testimonialsRef.current) setIsVisible((prev) => ({ ...prev, testimonials: true }))
          if (target === learningRef.current) setIsVisible((prev) => ({ ...prev, learning: true }))
        }
      })
    }, observerOptions)

    const refs = [
      heroRef,
      solutionsRef,
      excellenceRef,
      teachingRef,
      talentedRef,
      featuresRef,
      testimonialsRef,
      learningRef,
    ]
    refs.forEach((ref) => ref.current && observer.observe(ref.current))

    return () => observer.disconnect()
  }, [])

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
            <div className="flex items-center space-x-1 group cursor-pointer">
              <span className="text-gray-600 font-medium text-sm tracking-wide group-hover:text-gray-900 transition-colors">
                COURSES
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
            </div>
            <Link
              href="/about"
              className="text-orange-500 font-semibold text-sm tracking-wide hover:text-orange-600 transition-colors"
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

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Light</span>
              <div className="relative">
                <div className="w-12 h-6 bg-gray-800 rounded-full shadow-inner">
                  <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* About Us Hero Section */}
        <section className="px-4 py-12 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={heroRef}
              className={`transition-all duration-1000 ease-out ${
                isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    About <span className="text-orange-500">Us</span>
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Delivering complete CAD solutions, tailored software, and expert training designed to help
                    businesses and organizations excel in CAD technology and programming languages.
                  </p>
                </div>

                {/* Right Side - Workspace Illustration */}
                <div className="relative h-80 lg:h-96">
                  {/* Desk Surface */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-amber-100 to-amber-200 rounded-lg" />

                  {/* Main Monitor */}
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gray-900 rounded-lg shadow-lg">
                    <div className="w-full h-16 bg-gray-100 rounded-t-lg border border-gray-300 relative overflow-hidden">
                      <div className="absolute inset-2 bg-white rounded flex items-center justify-center">
                        <div className="space-y-1">
                          <div className="w-16 h-1 bg-blue-400 rounded" />
                          <div className="w-12 h-1 bg-green-400 rounded" />
                          <div className="w-20 h-1 bg-orange-400 rounded" />
                          <div className="w-8 h-1 bg-purple-400 rounded" />
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-4 bg-gray-800 rounded-b-lg" />
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-gray-700" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gray-700 rounded" />
                  </div>

                  {/* Secondary Monitor */}
                  <div className="absolute bottom-20 right-8 w-24 h-16 bg-gray-900 rounded-lg shadow-lg">
                    <div className="w-full h-12 bg-gray-100 rounded-t-lg border border-gray-300 relative">
                      <div className="absolute inset-1 bg-white rounded flex items-center justify-center">
                        <Monitor className="w-6 h-6 text-gray-400" />
                      </div>
                    </div>
                    <div className="w-full h-4 bg-gray-800 rounded-b-lg" />
                  </div>

                  {/* Laptop */}
                  <div className="absolute bottom-16 left-8 w-20 h-12 bg-gray-800 rounded-lg shadow-lg">
                    <div className="w-full h-8 bg-gray-100 rounded-t-lg border border-gray-300 relative">
                      <div className="absolute inset-1 bg-white rounded flex items-center justify-center">
                        <Laptop className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                    <div className="w-full h-4 bg-gray-700 rounded-b-lg" />
                  </div>

                  {/* Desk Items */}
                  <div className="absolute bottom-20 right-16 w-4 h-6 bg-white rounded shadow-md" />
                  <div className="absolute bottom-20 left-20 w-3 h-3 bg-orange-400 rounded-full" />
                  <div className="absolute bottom-18 right-20 w-2 h-4 bg-gray-600 rounded" />

                  {/* Coffee Cup */}
                  <div className="absolute bottom-20 left-16 w-3 h-4 bg-amber-600 rounded-b-full">
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-700 rounded-full" />
                    <Coffee className="absolute -top-2 -right-1 w-2 h-2 text-amber-800" />
                  </div>

                  {/* Papers/Documents */}
                  <div className="absolute bottom-16 right-4 w-8 h-10 bg-white rounded shadow-md transform rotate-12" />
                  <div className="absolute bottom-18 right-6 w-8 h-10 bg-gray-100 rounded shadow-md transform rotate-6" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Powerful Solutions Section */}
        <section className="px-4 py-16 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div
              ref={solutionsRef}
              className={`text-center space-y-12 transition-all duration-1000 ease-out ${
                isVisible.solutions ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Powerful <span className="text-orange-500">Solutions</span>
              </h2>

              {/* Company Logos */}
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                {/* SIEMENS */}
                <div className="flex items-center justify-center h-16 w-24 bg-white rounded-lg shadow-sm">
                  <span className="text-lg font-bold text-gray-700">SIEMENS</span>
                </div>

                {/* SolidWorks */}
                <div className="flex items-center justify-center h-16 w-24 bg-white rounded-lg shadow-sm">
                  <span className="text-sm font-bold text-red-600">SolidWorks</span>
                </div>

                {/* AUTOCAD */}
                <div className="flex items-center justify-center h-16 w-24 bg-white rounded-lg shadow-sm">
                  <span className="text-sm font-bold text-red-500">AUTOCAD</span>
                </div>

                {/* AUTODESK INVENTOR */}
                <div className="flex items-center justify-center h-16 w-24 bg-white rounded-lg shadow-sm">
                  <div className="text-center">
                    <div className="text-xs font-bold text-orange-500">AUTODESK</div>
                    <div className="text-xs font-bold text-orange-500">INVENTOR</div>
                  </div>
                </div>

                {/* DASSAULT SYSTEMES */}
                <div className="flex items-center justify-center h-16 w-24 bg-white rounded-lg shadow-sm">
                  <div className="text-center">
                    <div className="text-xs font-bold text-blue-600">DASSAULT</div>
                    <div className="text-xs font-bold text-blue-600">SYSTEMES</div>
                  </div>
                </div>

                {/* Fusion */}
                <div className="flex items-center justify-center h-16 w-24 bg-white rounded-lg shadow-sm">
                  <span className="text-sm font-bold text-orange-500">Fusion</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leading Software Excellence Section */}
        <section className="px-4 py-16 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={excellenceRef}
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
                isVisible.excellence ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {/* Left Side - Office Workspace Illustration */}
              <div className="relative h-96">
                {/* Main Office Scene */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden">
                  {/* Windows */}
                  <div className="absolute top-4 left-4 right-4 h-32 bg-gradient-to-b from-blue-300 to-blue-400 rounded-lg">
                    <div className="absolute inset-2 bg-white/20 rounded grid grid-cols-2 gap-1 p-2">
                      <div className="bg-white/30 rounded" />
                      <div className="bg-white/30 rounded" />
                      <div className="bg-white/30 rounded" />
                      <div className="bg-white/30 rounded" />
                    </div>
                  </div>

                  {/* Desk and People */}
                  <div className="absolute bottom-8 left-8 right-8 h-24 bg-amber-100 rounded-lg">
                    {/* Person 1 */}
                    <div className="absolute bottom-4 left-8">
                      <div className="w-6 h-6 bg-amber-200 rounded-full mb-1" />
                      <div className="w-4 h-8 bg-blue-600 rounded-t-lg mx-1" />
                    </div>

                    {/* Person 2 */}
                    <div className="absolute bottom-4 right-12">
                      <div className="w-6 h-6 bg-amber-200 rounded-full mb-1" />
                      <div className="w-4 h-8 bg-gray-600 rounded-t-lg mx-1" />
                    </div>

                    {/* Laptop */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gray-800 rounded">
                      <div className="w-full h-6 bg-gray-100 rounded-t border border-gray-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="text-sm font-semibold tracking-wide">OUR VISION</div>
                  <h3 className="text-3xl lg:text-4xl font-bold">Leading Software and CAD Excellence</h3>
                  <p className="text-orange-100 leading-relaxed">
                    We are committed to delivering innovative software solutions and comprehensive CAD training that
                    empowers businesses to achieve operational excellence and competitive advantage in today's
                    technology-driven marketplace.
                  </p>
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching CAD Section */}
        <section className="px-4 py-16 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div
              ref={teachingRef}
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
                isVisible.teaching ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              {/* Left Content */}
              <div className="space-y-6">
                <div className="text-sm font-semibold text-orange-500 tracking-wide">OUR VISION</div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Teaching CAD, Programming & Real Solutions
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our mission is to provide practical education and programming skills that translate directly into
                  real-world applications. We bridge the gap between theoretical knowledge and industry requirements
                  through hands-on training and mentorship.
                </p>
              </div>

              {/* Right Side - Lightbulb Illustration */}
              <div className="relative h-96 flex items-center justify-center">
                {/* Colorful Lightbulb */}
                <div className="relative">
                  {/* Bulb Shape */}
                  <div className="w-32 h-40 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400 rounded-full relative">
                    {/* Filament Lines */}
                    <div className="absolute inset-8 flex flex-col justify-center space-y-2">
                      <div className="w-full h-1 bg-yellow-600 rounded opacity-60" />
                      <div className="w-3/4 h-1 bg-yellow-600 rounded opacity-60 mx-auto" />
                      <div className="w-full h-1 bg-yellow-600 rounded opacity-60" />
                      <div className="w-2/3 h-1 bg-yellow-600 rounded opacity-60 mx-auto" />
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-yellow-200 rounded-full opacity-30 blur-xl" />
                  </div>

                  {/* Base */}
                  <div className="w-24 h-8 bg-gray-600 rounded-b-lg mx-auto -mt-2" />
                  <div className="w-20 h-2 bg-gray-700 rounded mx-auto" />

                  {/* Colorful Rays */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-12 bg-gradient-to-t from-yellow-400 to-transparent transform -rotate-12" />
                    <div className="w-1 h-12 bg-gradient-to-t from-orange-400 to-transparent transform rotate-12 -mt-12 ml-4" />
                    <div className="w-1 h-12 bg-gradient-to-t from-red-400 to-transparent -mt-12 ml-2" />
                  </div>

                  {/* Side Rays */}
                  <div className="absolute top-8 -left-8">
                    <div className="w-12 h-1 bg-gradient-to-l from-pink-400 to-transparent transform -rotate-12" />
                    <div className="w-12 h-1 bg-gradient-to-l from-purple-400 to-transparent transform rotate-12 mt-2" />
                  </div>

                  <div className="absolute top-8 -right-8">
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-transparent transform rotate-12" />
                    <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-transparent transform -rotate-12 mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Talented People Section */}
        <section className="px-4 py-16 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={talentedRef}
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
                isVisible.talented ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Left Content */}
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Work around very <span className="text-orange-500">talented people</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Join a community of skilled professionals, innovative thinkers, and industry experts who are
                  passionate about technology and committed to excellence.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold">
                  Join Our Team
                </Button>
              </div>

              {/* Right Side - Office Collaboration Scene */}
              <div className="grid grid-cols-2 gap-4">
                {/* Top Left - Person at Desk */}
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 h-48 relative">
                  <div className="absolute bottom-4 left-4">
                    <div className="w-8 h-8 bg-amber-200 rounded-full mb-2" />
                    <div className="w-6 h-12 bg-gray-700 rounded-t-lg mx-1" />
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-8 bg-gray-800 rounded">
                    <div className="w-full h-6 bg-gray-100 rounded-t" />
                  </div>
                </div>

                {/* Top Right - Meeting Scene */}
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 h-48 relative">
                  <div className="absolute bottom-4 left-2">
                    <div className="w-6 h-6 bg-amber-200 rounded-full mb-1" />
                    <div className="w-4 h-8 bg-blue-600 rounded-t-lg mx-1" />
                  </div>
                  <div className="absolute bottom-4 right-2">
                    <div className="w-6 h-6 bg-amber-200 rounded-full mb-1" />
                    <div className="w-4 h-8 bg-red-600 rounded-t-lg mx-1" />
                  </div>
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-white rounded shadow" />
                </div>

                {/* Bottom - Quote */}
                <div className="col-span-2 bg-orange-50 rounded-2xl p-6 border-l-4 border-orange-500">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl text-orange-500">"</div>
                    <div>
                      <p className="text-gray-700 italic">
                        "Working with talented individuals has been the most rewarding experience of my career. The
                        collaborative environment fosters innovation and personal growth."
                      </p>
                      <div className="mt-4 text-sm text-gray-600">- Team Member</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Features Section */}
        <section className="px-4 py-16 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div
              ref={featuresRef}
              className={`transition-all duration-1000 ease-out ${
                isVisible.features ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Our <span className="text-orange-500">Features</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Learn Online */}
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Learn Online</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Access comprehensive online courses with interactive content, video tutorials, and hands-on
                      projects from anywhere in the world.
                    </p>
                  </CardContent>
                </Card>

                {/* Expert & Certified Trainers */}
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Expert & Certified Trainers</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Learn from industry professionals with years of experience and recognized certifications in their
                      respective fields.
                    </p>
                  </CardContent>
                </Card>

                {/* Visual Learning */}
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Learning</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Engage with visual content including diagrams, animations, and interactive simulations for better
                      understanding.
                    </p>
                  </CardContent>
                </Card>

                {/* Communicate With Peers */}
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Communicate With Peers</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Connect with fellow learners through forums, group projects, and collaborative learning
                      environments.
                    </p>
                  </CardContent>
                </Card>

                {/* Trusted Certifications */}
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted Certifications</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Earn industry-recognized certificates that validate your skills and enhance your professional
                      credibility.
                    </p>
                  </CardContent>
                </Card>

                {/* Professional Courses */}
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Courses</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Access professionally designed curriculum that meets current industry standards and market
                      demands.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Testimonials Section */}
        <section className="px-4 py-16 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={testimonialsRef}
              className={`transition-all duration-1000 ease-out ${
                isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Our <span className="text-orange-500">Testimonial</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden border-0">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 pt-6 pb-4 relative">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-white fill-current" />
                      ))}
                    </div>
                    <div className="flex justify-center">
                      <div className="relative -mb-10 z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                          <span className="text-2xl font-bold text-white">JD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-12 pb-6 px-6 text-center">
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      "The CAD customization course exceeded my expectations. The hands-on approach and expert guidance
                      helped me advance my career significantly."
                    </p>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">John Doe</h4>
                      <p className="text-gray-500 text-sm">CAD Engineer</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Testimonial 2 */}
                <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden border-0">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 pt-6 pb-4 relative">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-white fill-current" />
                      ))}
                    </div>
                    <div className="flex justify-center">
                      <div className="relative -mb-10 z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                          <span className="text-2xl font-bold text-white">JS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-12 pb-6 px-6 text-center">
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      "Excellent programming courses with practical projects. The instructors are knowledgeable and
                      always ready to help students succeed."
                    </p>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">Jane Smith</h4>
                      <p className="text-gray-500 text-sm">Software Developer</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Testimonial 3 */}
                <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden border-0">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 pt-6 pb-4 relative">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-white fill-current" />
                      ))}
                    </div>
                    <div className="flex justify-center">
                      <div className="relative -mb-10 z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                          <span className="text-2xl font-bold text-white">MJ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-12 pb-6 px-6 text-center">
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      "The software testing course provided comprehensive knowledge and practical skills. I'm now
                      confident in my testing abilities."
                    </p>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">Mike Johnson</h4>
                      <p className="text-gray-500 text-sm">QA Engineer</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {[...Array(5)].map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === 1 ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join a World of Learning Section */}
        <section className="px-4 py-16 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={learningRef}
              className={`bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-12 relative overflow-hidden transition-all duration-1000 ease-out ${
                isVisible.learning ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {/* Floating Profile Avatars */}
              <div className="absolute top-8 left-8 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">A</span>
              </div>
              <div className="absolute top-16 right-16 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <div className="absolute bottom-16 left-16 w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">C</span>
              </div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">D</span>
              </div>
              <div className="absolute top-1/2 left-8 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <div className="absolute top-1/3 right-8 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">F</span>
              </div>

              {/* Central Content */}
              <div className="text-center space-y-6 relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Join a world of learning</h2>
                <p className="text-xl text-gray-800 max-w-2xl mx-auto">
                  Connecting learners worldwide with cutting-edge educational content, expert instructors, and a
                  supportive community dedicated to your success.
                </p>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-16 px-4 lg:px-8 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              {/* Company Info */}
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

              {/* Navigation Links */}
              <div className="lg:col-span-8 grid md:grid-cols-3 gap-8 mt-5">
                {/* Company */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Company</h3>
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Useful Links */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Useful Links</h3>
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                        Courses
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Newsletter */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Newsletter</h3>
                  <p className="text-gray-600 mb-4">Subscribe to get updates</p>
                  <div className="flex space-x-2">
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
              <div className="text-gray-600 mb-4 md:mb-0">©2024 All rights reserved</div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
