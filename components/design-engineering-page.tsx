"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GraduationCap, ArrowUpRight, ArrowRight, Linkedin, Github, Instagram } from "lucide-react"
import Link from "next/link"

export function DesignEngineeringPage() {
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
              className="text-orange-500 font-semibold text-sm tracking-wide hover:text-orange-600 transition-colors"
            >
              SERVICES
            </Link>
            <Link
              href="/courses"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors"
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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                Design
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Design <span className="text-orange-500">Engineering</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                Our CAD experts excel in creating intricate 3D models using various software platforms, including
                Autodesk Inventor...
              </p>

              <Link href="/services">
                <Button className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2">
                  <span>See All Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Right Content - CAD Workstation Illustration */}
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden">
                {/* Desk Surface */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-200 to-gray-100">
                  {/* Monitor */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-20 bg-gray-800 rounded border-2 border-gray-700">
                      <div className="w-full h-full bg-blue-400 rounded p-2">
                        {/* CAD Interface */}
                        <div className="w-full h-2 bg-white/30 rounded mb-1" />
                        <div className="flex space-x-1 mb-2">
                          <div className="w-4 h-4 bg-white/20 rounded" />
                          <div className="w-4 h-4 bg-white/20 rounded" />
                          <div className="w-4 h-4 bg-white/20 rounded" />
                        </div>
                        {/* 3D Model */}
                        <div className="w-full h-8 bg-white/10 rounded flex items-center justify-center">
                          <div className="w-6 h-6 border-2 border-white/60 transform rotate-45 relative">
                            <div className="absolute inset-1 border border-white/40 transform -rotate-45" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-3 h-6 bg-gray-600 mx-auto" />
                    <div className="w-20 h-3 bg-gray-600 rounded-full mx-auto" />
                  </div>

                  {/* Person working */}
                  <div className="absolute bottom-4 right-8">
                    <div className="w-10 h-10 bg-orange-400 rounded-full" />
                    <div className="w-14 h-18 bg-blue-500 rounded-t-lg mt-1" />
                    <div className="flex space-x-1 mt-1">
                      <div className="w-4 h-10 bg-blue-500 rounded" />
                      <div className="w-4 h-10 bg-blue-500 rounded" />
                    </div>
                  </div>

                  {/* Coffee and supplies */}
                  <div className="absolute bottom-12 left-8">
                    <div className="w-5 h-7 bg-white rounded-b-full border-2 border-gray-300">
                      <div className="w-full h-3 bg-amber-600 rounded-t" />
                    </div>
                  </div>

                  {/* Notebook */}
                  <div className="absolute bottom-8 right-20">
                    <div className="w-10 h-8 bg-white border border-gray-300 rounded">
                      <div className="space-y-1 p-1">
                        <div className="w-full h-0.5 bg-gray-300" />
                        <div className="w-3/4 h-0.5 bg-gray-300" />
                        <div className="w-1/2 h-0.5 bg-gray-300" />
                      </div>
                    </div>
                  </div>

                  {/* Pencil holder */}
                  <div className="absolute bottom-10 left-16">
                    <div className="w-4 h-8 bg-gray-300 rounded-t-full">
                      <div className="w-1 h-10 bg-yellow-400 rounded mx-auto -mt-2" />
                      <div className="w-1 h-8 bg-red-400 rounded mx-auto -mt-8 ml-1" />
                      <div className="w-1 h-6 bg-blue-400 rounded mx-auto -mt-6 ml-2" />
                    </div>
                  </div>
                </div>

                {/* Background elements */}
                <div className="absolute top-8 left-8 w-16 h-12 bg-white/20 rounded border border-white/30" />
                <div className="absolute top-8 right-8 w-12 h-16 bg-white/20 rounded border border-white/30" />
                <div className="absolute top-32 left-12 w-20 h-8 bg-white/20 rounded border border-white/30" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full opacity-80 animate-bounce" />
              <div className="absolute top-1/2 -left-4 w-12 h-12 bg-blue-400 rounded-full opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Section Title */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Design Engineering</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our CAD team excels at creating intricate 3D models using a variety of CAD software, including Autodesk
                Inventor, Autodesk AutoCAD, SolidWorks, SolidEdge, NX, CATIA, and CREO. In addition to modeling, we
                provide the following services:
              </p>
            </div>

            {/* Service Details */}
            <div className="space-y-12">
              {/* 1. Precision 2D & 3D CAD Modeling */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-orange-500">1. Precision 2D & 3D CAD Modeling</h3>
                <p className="text-gray-700 leading-relaxed">
                  We expertly produce intricate 2D drawings and parametric 3D models in top-tier CAD tools—Inventor,
                  SolidWorks, CATIA, NX, Creo, and Solid Edge—with millimeter-level accuracy. Ideal for mechanical
                  components, assemblies, and industrial parts used in manufacturing, aerospace, and product
                  engineering.
                </p>
              </div>

              {/* 2. Mechanical Assemblies & Motion Analysis */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-orange-500">2. Mechanical Assemblies & Motion Analysis</h3>
                <p className="text-gray-700 leading-relaxed">
                  From single parts to complex assemblies, our team handles mechanism design, simulation, motion
                  studies, stress/fatigue analysis, and collision detection. Utilizing Inventor and Creo's CAE modules
                  ensures optimal performance and manufacturability.
                </p>
              </div>

              {/* 3. 3D Renderings & Visualizations */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-orange-500">3. 3D Renderings & Visualizations</h3>
                <p className="text-gray-700 leading-relaxed">
                  We elevate communication with photorealistic visuals—static renders, walkthroughs, exploded views, and
                  animations—leveraging rendering tools in SolidWorks, AutoCAD, and Inventor. These visuals support
                  marketing, pitches, and stakeholder alignment.
                </p>
              </div>

              {/* 4. CAD-to-CAM & Manufacturing Prep */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-orange-500">4. CAD-to-CAM & Manufacturing Prep</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our CAD models integrate seamlessly with CAM workflows. We prepare CNC-ready geometries, sheet-metal
                  unfoldings, and precise documentation that align with PLM or ERP systems to ensure smooth downstream
                  production.
                </p>
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
