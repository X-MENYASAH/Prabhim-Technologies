"use client"

import { Code, Atom, Zap, Layers, Database } from "lucide-react"

export function SharpenSkillsSection() {
  return (
    <section className="relative w-[1240px] h-[324px] mx-auto overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200" />
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/80 via-violet-100/60 to-cyan-100/80" />

      <div className="relative z-10 h-full flex items-center">
        <div className="grid grid-cols-2 gap-8 items-center w-full px-8">
          {/* Left Content */}
          <div className="space-y-4">
            <p className="text-sm text-gray-600 font-medium tracking-wide">GET MORE POWER FROM</p>

            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Sharpen Your Code Skills
            </h2>

            <p className="text-sm text-gray-700 leading-relaxed">
              "Boost your coding skills with top-rated programming courses: hands-on projects, expert-led lessons, and
              in-demand languages."
            </p>
          </div>

          {/* Right Side - Floating Technology Icons */}
          <div className="relative h-[280px]">
            {/* JavaScript (Red) */}
            <div className="absolute top-4 left-8 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300 floating-icon">
              <span className="text-sm font-bold text-white">JS</span>
            </div>

            {/* HTML5 (Orange) */}
            <div className="absolute top-2 right-12 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300 floating-icon">
              <span className="text-sm font-bold text-white">H5</span>
            </div>

            {/* C++ (Pink/Purple) */}
            <div className="absolute top-12 right-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl shadow-lg flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-300 floating-icon">
              <span className="text-xs font-bold text-white">C++</span>
            </div>

            {/* Wave/Design Icon (Purple) */}
            <div className="absolute top-20 right-2 w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl shadow-lg flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-300 floating-icon">
              <Layers className="w-6 h-6 text-white" />
            </div>

            {/* Python (Pink) */}
            <div className="absolute top-32 left-4 w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg shadow-lg flex items-center justify-center transform rotate-45 hover:rotate-0 transition-transform duration-300 floating-icon">
              <Code className="w-5 h-5 text-white" />
            </div>

            {/* JavaScript (Yellow) */}
            <div className="absolute bottom-20 left-12 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl shadow-lg flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300 floating-icon">
              <span className="text-sm font-bold text-black">JS</span>
            </div>

            {/* C++ (Cyan/Blue) */}
            <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-lg flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-300 floating-icon">
              <span className="text-xs font-bold text-white">C++</span>
            </div>

            {/* React (Purple) */}
            <div className="absolute bottom-16 left-2 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300 floating-icon">
              <Atom className="w-5 h-5 text-white" />
            </div>

            {/* CSS3 (Blue) */}
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-300 floating-icon">
              <span className="text-sm font-bold text-white">C3</span>
            </div>

            {/* Dark Circular Logo (Center) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-lg flex items-center justify-center floating-icon">
              <Zap className="w-4 h-4 text-white" />
            </div>

            {/* Additional Floating Elements */}
            <div className="absolute top-16 left-20 w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg shadow-lg flex items-center justify-center transform rotate-30 hover:rotate-0 transition-transform duration-300 floating-icon">
              <Database className="w-5 h-5 text-white" />
            </div>

            <div className="absolute bottom-24 right-20 w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg shadow-lg flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300 floating-icon">
              <span className="text-xs font-bold text-white">TS</span>
            </div>

            {/* Floating Animation Styles */}
            <style jsx>{`
              @keyframes float {
                0%, 100% { 
                  transform: translateY(0px) rotate(var(--rotation)); 
                }
                50% { 
                  transform: translateY(-15px) rotate(var(--rotation)); 
                }
              }
              
              .floating-icon {
                animation: float 4s ease-in-out infinite;
              }
              
              .floating-icon:nth-child(1) { 
                animation-delay: 0s; 
                --rotation: 12deg; 
              }
              .floating-icon:nth-child(2) { 
                animation-delay: 0.5s; 
                --rotation: -12deg; 
              }
              .floating-icon:nth-child(3) { 
                animation-delay: 1s; 
                --rotation: 6deg; 
              }
              .floating-icon:nth-child(4) { 
                animation-delay: 1.5s; 
                --rotation: -6deg; 
              }
              .floating-icon:nth-child(5) { 
                animation-delay: 2s; 
                --rotation: 45deg; 
              }
              .floating-icon:nth-child(6) { 
                animation-delay: 2.5s; 
                --rotation: -12deg; 
              }
              .floating-icon:nth-child(7) { 
                animation-delay: 3s; 
                --rotation: 6deg; 
              }
              .floating-icon:nth-child(8) { 
                animation-delay: 3.5s; 
                --rotation: 12deg; 
              }
              .floating-icon:nth-child(9) { 
                animation-delay: 4s; 
                --rotation: -6deg; 
              }
              .floating-icon:nth-child(10) { 
                animation-delay: 0.8s; 
                --rotation: 0deg; 
              }
              .floating-icon:nth-child(11) { 
                animation-delay: 1.2s; 
                --rotation: 30deg; 
              }
              .floating-icon:nth-child(12) { 
                animation-delay: 1.8s; 
                --rotation: -12deg; 
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Additional Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
    </section>
  )
}
