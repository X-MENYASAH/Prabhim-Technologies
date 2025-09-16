"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

export function Header() {
  return (
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
          <Link href="/" className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer">HOME</Link>
          <Link href="/services" className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer">SERVICES</Link>
          <Link href="/courses" className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer">COURSES</Link>
          <Link href="/about" className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer">ABOUT US</Link>
          <Link href="/contact" className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer">CONTACT</Link>
          <Link href="/blogs" className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer">BLOGS</Link>
        </div>

        {/* Right Side - Mobile Menu and Login Button */}
        <div className="flex items-center space-x-3 lg:space-x-0">
          <div className="lg:hidden">
            <MobileMenu />
          </div>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-4 md:px-6 py-2 md:py-2.5 flex items-center space-x-2 shadow-lg transition-all duration-200 hover:shadow-xl text-sm md:text-base">
            <span className="font-medium">Login</span>
            <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-black" />
            </div>
          </Button>
        </div>
      </nav>
    </header>
  )
}


