import {  Link , useLocation } from "react-router-dom";
import { useState } from "react"


import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import SignInModal from "@/components/sign-in-modal"
import SignUpModal from "@/components/sign-up-modal"

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/courses", label: "COURSES" },
  { href: "/about", label: "ABOUT US" },
  { href: "/contact", label: "CONTACT" },
]

export function Header() {
  const location = useLocation(); const pathname = location.pathname
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  const openSignIn = () => {
    setIsSignUpOpen(false)
    setIsSignInOpen(true)
  }

  const openSignUp = () => {
    setIsSignInOpen(false)
    setIsSignUpOpen(true)
  }

  const closeModals = () => {
    setIsSignInOpen(false)
    setIsSignUpOpen(false)
  }

  return (
    <>
      <header className="relative z-10 px-4 py-6 lg:px-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/images/logo1.png"
              alt="PRABHIM Logo"
              width={145.75}
              height={100}
              className="h-[100px] w-auto object-contain"
            />
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href}
                  to={item.href}
                  className={`text-sm tracking-wide transition-colors cursor-pointer ${
                    isActive
                      ? "text-orange-500 font-semibold"
                      : "text-gray-600 font-medium hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Right Side - Mobile Menu and Login Button */}
          <div className="flex items-center space-x-3 lg:space-x-0">
            <div className="lg:hidden">
              <MobileMenu />
            </div>
            <Button
              onClick={openSignIn}
              className="bg-black text-white hover:bg-gray-800 rounded-full px-4 md:px-6 py-2 md:py-2.5 flex items-center space-x-2 shadow-lg transition-all duration-200 hover:shadow-xl text-sm md:text-base"
            >
              <span className="font-medium">Login</span>
              <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-black" />
              </div>
            </Button>
          </div>
        </nav>
      </header>

      <SignInModal
        isOpen={isSignInOpen}
        onClose={closeModals}
        onSwitchToSignUp={openSignUp}
      />
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={closeModals}
        onSwitchToSignIn={openSignIn}
      />
    </>
  )
}


