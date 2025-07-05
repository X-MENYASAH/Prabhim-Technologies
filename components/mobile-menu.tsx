"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t z-50">
          <div className="px-4 py-6 space-y-4">
            <Link href="#" className="block text-orange-500 font-semibold py-2">
              HOME
            </Link>
            <Link href="/services" className="block text-gray-600 font-medium py-2">
              SERVICES
            </Link>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600 font-medium">COURSES</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
            <Link href="#" className="block text-gray-600 font-medium py-2">
              ABOUT US
            </Link>
            <Link href="#" className="block text-gray-600 font-medium py-2">
              CONTACT
            </Link>
            <Link href="#" className="block text-gray-600 font-medium py-2">
              BLOGS
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
