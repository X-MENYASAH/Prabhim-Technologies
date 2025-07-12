"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { WorkingMessage } from "@/components/ui/working-message"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [showWorkingMessage, setShowWorkingMessage] = useState(false)

  const handleWorkingLinkClick = (e: React.MouseEvent, linkName: string) => {
    e.preventDefault()
    setIsOpen(false)
    setShowWorkingMessage(true)
  }

  return (
    <div className="relative">
      {/* Working Message */}
      <WorkingMessage
        isVisible={showWorkingMessage}
        onClose={() => setShowWorkingMessage(false)}
        title="Working on it!"
        message="This feature is currently under development. We're working hard to bring you something amazing!"
        buttonText="Got it!"
        autoClose={true}
        autoCloseDelay={4000}
      />

      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 h-auto w-auto hover:bg-gray-100 rounded-lg transition-colors"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white shadow-xl border border-gray-200 rounded-lg z-50 min-w-[200px]">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" className="block text-orange-500 font-semibold py-2 px-2 rounded hover:bg-orange-50 transition-colors">
              HOME
            </Link>
            <button
              onClick={(e) => handleWorkingLinkClick(e, 'Services')}
              className="block text-gray-600 font-medium py-2 px-2 rounded hover:bg-gray-50 transition-colors cursor-pointer w-full text-left"
            >
              SERVICES
            </button>
            <button
              onClick={(e) => handleWorkingLinkClick(e, 'Courses')}
              className="block text-gray-600 font-medium py-2 px-2 rounded hover:bg-gray-50 transition-colors cursor-pointer w-full text-left"
            >
              COURSES
            </button>
            <button
              onClick={(e) => handleWorkingLinkClick(e, 'About Us')}
              className="block text-gray-600 font-medium py-2 px-2 rounded hover:bg-gray-50 transition-colors cursor-pointer w-full text-left"
            >
              ABOUT US
            </button>
            <button
              onClick={(e) => handleWorkingLinkClick(e, 'Contact')}
              className="block text-gray-600 font-medium py-2 px-2 rounded hover:bg-gray-50 transition-colors cursor-pointer w-full text-left"
            >
              CONTACT
            </button>
            <button
              onClick={(e) => handleWorkingLinkClick(e, 'Blogs')}
              className="block text-gray-600 font-medium py-2 px-2 rounded hover:bg-gray-50 transition-colors cursor-pointer w-full text-left"
            >
              BLOGS
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
