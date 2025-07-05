"use client"

import { Layers, Zap, Settings, BarChart3, Compass, Wrench } from "lucide-react"

export function MasterCadSection() {
  return (
    <section className="relative w-[1240px] h-[324px] mx-auto overflow-hidden">
      {/* Pink Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-pink-200 to-rose-200" />
      <div className="absolute inset-0 bg-gradient-to-br from-rose-200/80 via-pink-200/60 to-pink-300/80" />

      <div className="relative z-10 h-full flex items-center">
        <div className="grid grid-cols-2 gap-8 items-center w-full px-8">
          {/* Left Content */}
          <div className="space-y-4">
            <p className="text-sm text-gray-600 font-medium">Top Picks In CAD Automation & Customization</p>

            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Master CAD Customization
            </h2>

            <p className="text-sm text-gray-700 leading-relaxed">
              "Level up your CAD skills with our curated courses—learn how to script, automate, and customize CAD
              software using tool palettes, macros, APIs, and AutoLISP."
            </p>
          </div>

          {/* Right Side - Floating CAD Software Icons */}
          <div className="relative h-[280px]">
            {/* CAD Design Tool (Purple with geometric design) */}
            <div className="absolute top-4 left-8 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300 floating-icon">
              <div className="relative">
                <div className="w-6 h-6 border-2 border-white rounded-lg relative">
                  <div className="absolute inset-1 border border-white rounded-sm" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              </div>
            </div>

            {/* Adobe/AutoCAD "A" */}
            <div className="absolute top-2 right-12 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300 floating-icon">
              <span className="text-xl font-bold text-white">A</span>
            </div>

            {/* SolidWorks (Cyan) */}
            <div className="absolute top-12 right-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl shadow-lg flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-300 floating-icon">
              <div className="text-center">
                <div className="text-xs font-bold text-white leading-tight">Solid</div>
                <div className="text-xs font-bold text-white leading-tight">Works</div>
              </div>
            </div>

            {/* SolidWorks SW (Red) */}
            <div className="absolute top-20 right-2 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-300 floating-icon">
              <span className="text-sm font-bold text-white">SW</span>
            </div>

            {/* Design Tools (Pink) */}
            <div className="absolute top-32 left-4 w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg shadow-lg flex items-center justify-center transform rotate-45 hover:rotate-0 transition-transform duration-300 floating-icon">
              <Compass className="w-5 h-5 text-white" />
            </div>

            {/* Green Design Tool */}
            <div className="absolute bottom-20 left-12 w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl shadow-lg flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300 floating-icon">
              <div className="relative">
                <Layers className="w-6 h-6 text-white" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full" />
              </div>
            </div>

            {/* SolidWorks SW (Hexagonal Red) */}
            <div className="absolute bottom-16 left-2 w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg shadow-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300 floating-icon clip-hexagon">
              <span className="text-xs font-bold text-white">SW</span>
            </div>

            {/* CAD (Purple) */}
            <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-300 floating-icon">
              <span className="text-xs font-bold text-white">CAD</span>
            </div>

            {/* Analytics/Charts (Red) */}
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-300 floating-icon">
              <div className="relative">
                <BarChart3 className="w-6 h-6 text-white" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-red-500 rounded-full" />
                </div>
              </div>
            </div>

            {/* Additional Floating Elements */}
            <div className="absolute top-16 left-20 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-lg flex items-center justify-center transform rotate-30 hover:rotate-0 transition-transform duration-300 floating-icon">
              <Settings className="w-5 h-5 text-white" />
            </div>

            <div className="absolute bottom-24 right-20 w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg shadow-lg flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300 floating-icon">
              <Wrench className="w-5 h-5 text-white" />
            </div>

            <div className="absolute top-24 left-2 w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg shadow-lg flex items-center justify-center transform rotate-45 hover:rotate-0 transition-transform duration-300 floating-icon">
              <Zap className="w-4 h-4 text-white" />
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
                --rotation: 12deg; 
              }
              .floating-icon:nth-child(8) { 
                animation-delay: 3.5s; 
                --rotation: 6deg; 
              }
              .floating-icon:nth-child(9) { 
                animation-delay: 4s; 
                --rotation: -6deg; 
              }
              .floating-icon:nth-child(10) { 
                animation-delay: 0.8s; 
                --rotation: 30deg; 
              }
              .floating-icon:nth-child(11) { 
                animation-delay: 1.2s; 
                --rotation: -12deg; 
              }
              .floating-icon:nth-child(12) { 
                animation-delay: 1.8s; 
                --rotation: 45deg; 
              }

              .clip-hexagon {
                clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Additional Background Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg" />
      <div className="absolute bottom-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
    </section>
  )
}
