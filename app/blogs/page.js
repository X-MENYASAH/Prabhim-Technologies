"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowUpRight } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import { FooterSection } from "@/components/footer-section"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header (same structure as homepage, BLOGS active) */}
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
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer"
            >
              HOME
            </Link>
            <Link
              href="/services"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer"
            >
              SERVICES
            </Link>
            <Link
              href="/courses"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer"
            >
              COURSES
            </Link>
            <Link
              href="/about"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer"
            >
              ABOUT US
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer"
            >
              CONTACT
            </Link>
            <Link
              href="/blogs"
              className="text-orange-500 font-semibold text-sm tracking-wide hover:text-orange-600 transition-colors cursor-pointer"
            >
              BLOGS
            </Link>
          </div>

          {/* Right Side - Mobile Menu and Login Button */}
          <div className="flex items-center space-x-3 lg:space-x-0">
            {/* Mobile Menu */}
            <div className="lg:hidden">
              <MobileMenu />
            </div>

            {/* Login Button */}
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-4 md:px-6 py-2 md:py-2.5 flex items-center space-x-2 shadow-lg transition-all duration-200 hover:shadow-xl text-sm md:text-base">
              <span className="font-medium">Login</span>
              <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-black" />
              </div>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                Our Blogs
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Discover What's New on the <span className="text-orange-500">Blog</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover fresh insights, tips, and updates from our CAD and PLM experts.
              </p>
            </div>

            {/* Right-side image */}
            <div className="relative w-full h-96 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg h-96">
                <Image
                  src="/Right.png"
                  alt="Blog hero illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Blog Post 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 w-[380px] h-[570px] flex flex-col group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/Encad.jpg"
                  alt="Enhance CAD Productivity Through Smart Customization"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded text-sm font-medium">DEVELOPMENT</span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />3 Years Ago
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-3 leading-tight">Enhance CAD Productivity Through Smart Customization</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Explore how CAD scripting, macros, and templating elevate engineering workflows—boosting precision,
                  consistency, and collaboration across design teams.
                </p>
                <Link href="/blogs/how-cad-is-transforming-product-design" className="text-orange-500 p-0 h-auto font-semibold text-sm hover:text-orange-600 transition-colors">
                  Read More...
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 w-[380px] h-[570px] flex flex-col group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/art1.jpg"
                  alt="Stay Ahead in IT: Emerging Tools And Skillsets"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded text-sm font-medium">DEVELOPMENT</span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />3 Years Ago
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-3 leading-tight">Stay Ahead in IT: Emerging Tools And Skillsets</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Stay current with AI, cloud, cybersecurity, and DevOps—skill areas essential for modern software
                  development and infrastructure management success.
                </p>
                <Link href="/blogs/how-cad-is-transforming-product-design" className="text-orange-500 p-0 h-auto font-semibold text-sm hover:text-orange-600 transition-colors">
                  Read More...
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 w-[380px] h-[570px] flex flex-col group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/fc1.jpg"
                  alt="ROI Of IT Training: Real Benefits For Your Organization"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded text-sm font-medium">DEVELOPMENT</span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />3 Years Ago
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-3 leading-tight">ROI Of IT Training: Real Benefits For Your Organization</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Discover how investing in IT training boosts efficiency, employee retention, risk reduction, customer
                  experience, and long-term organizational growth.
                </p>
                <Link href="/blogs/how-cad-is-transforming-product-design" className="text-orange-500 p-0 h-auto font-semibold text-sm hover:text-orange-600 transition-colors">
                  Read More...
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 4 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 w-[380px] h-[570px] flex flex-col group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/art3.jpg"
                  alt="Best Website to research for your next project"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded text-sm font-medium">DEVELOPMENT</span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />3 Years Ago
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-3 leading-tight">Best Website to research for your next project</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Cultivate the right helping fund to identify a ballpark value added activity to beta test override the
                  digital divide with additional clickthroughs.
                </p>
                <Link href="/blogs/how-cad-is-transforming-product-design" className="text-orange-500 p-0 h-auto font-semibold text-sm hover:text-orange-600 transition-colors">
                  Read More...
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 5 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 w-[380px] h-[570px] flex flex-col group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/art5.jpg"
                  alt="Boost Team Performance With Tailored IT Training"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded text-sm font-medium">DEVELOPMENT</span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />3 Years Ago
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-3 leading-tight">Boost Team Performance With Tailored IT Training</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Equip your team with customized IT courses covering software, testing, automation—to drive efficiency,
                  reduce errors, and accelerate innovation through hands-on, strategic learning.
                </p>
                <Link href="/blogs/how-cad-is-transforming-product-design" className="text-orange-500 p-0 h-auto font-semibold text-sm hover:text-orange-600 transition-colors">
                  Read More...
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 6 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 w-[380px] h-[570px] flex flex-col group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/fc2.jpg"
                  alt="Automate QA Processes With Industry-Leading Testing Tools"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded text-sm font-medium">DEVELOPMENT</span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />3 Years Ago
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-3 leading-tight">Automate QA Processes With Industry-Leading Testing Tools</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Learn to implement automated testing frameworks like Selenium and Cypress, ensuring faster delivery,
                  reduced manual effort, and high-quality, reliable software releases.
                </p>
                <Link href="/blogs/how-cad-is-transforming-product-design" className="text-orange-500 p-0 h-auto font-semibold text-sm hover:text-orange-600 transition-colors">
                  Read More...
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Second Row - Duplicate Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Duplicate Blog Posts */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 w-[380px] h-[570px] flex flex-col group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/Encad.jpg"
                  alt="Enhance CAD Productivity Through Smart Customization"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded text-sm font-medium">DEVELOPMENT</span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />3 Years Ago
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-3 leading-tight">Enhance CAD Productivity Through Smart Customization</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Explore how CAD scripting, macros, and templating elevate engineering workflows—boosting precision,
                  consistency, and collaboration across design teams.
                </p>
                <Link href="/blogs/how-cad-is-transforming-product-design" className="text-orange-500 p-0 h-auto font-semibold text-sm hover:text-orange-600 transition-colors">
                  Read More...
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 w-[380px] h-[570px] flex flex-col group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/art1.jpg"
                  alt="Stay Ahead in IT: Emerging Tools And Skillsets"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded text-sm font-medium">DEVELOPMENT</span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />3 Years Ago
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-3 leading-tight">Stay Ahead in IT: Emerging Tools And Skillsets</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Stay current with AI, cloud, cybersecurity, and DevOps—skill areas essential for modern software
                  development and infrastructure management success.
                </p>
                <Link href="/blogs/how-cad-is-transforming-product-design" className="text-orange-500 p-0 h-auto font-semibold text-sm hover:text-orange-600 transition-colors">
                  Read More...
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 w-[380px] h-[570px] flex flex-col group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/fc3.jpg"
                  alt="ROI Of IT Training: Real Benefits For Your Organization"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded text-sm font-medium">DEVELOPMENT</span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />3 Years Ago
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-3 leading-tight">ROI Of IT Training: Real Benefits For Your Organization</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Discover how investing in IT training boosts efficiency, employee retention, risk reduction, customer
                  experience, and long-term organizational growth.
                </p>
                <Link href="/blogs/how-cad-is-transforming-product-design" className="text-orange-500 p-0 h-auto font-semibold text-sm hover:text-orange-600 transition-colors">
                  Read More...
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg">Load More</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
