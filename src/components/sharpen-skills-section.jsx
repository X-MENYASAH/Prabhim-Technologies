import { Code, Atom, Zap, Layers, Database } from "lucide-react"

export function SharpenSkillsSection() {
  return (
    <section className="relative w-full max-w-[1290px] min-h-[250px] md:h-[324px] mx-auto overflow-hidden rounded-3xl border-2 border-orange-200/50 transition-all duration-500">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200" />
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/80 via-violet-100/60 to-cyan-100/80" />

      <div className="relative z-10 h-full flex items-center py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center w-full px-4 md:px-6 lg:px-8">
          {/* Left Content */}
          <div className="space-y-3 md:space-y-4 text-center md:text-left">
            <p className="text-xs md:text-sm text-gray-600 font-medium tracking-wide">GET MORE POWER FROM</p>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight font-exo transition-colors duration-500">
              Sharpen Your Code Skills
            </h2>

            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              "Boost your coding skills with top-rated programming courses: hands-on projects, expert-led lessons, and
              in-demand languages."
            </p>
          </div>

          {/* Right Side - Floating Technology Icons */}
          <div className="relative h-full">
            {/* JavaScript (Red) */}
            <div className="absolute top-2 left-6 w-9 h-9 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg flex items-center justify-center transform rotate-12 floating-icon">
              <span className="text-sm font-bold text-white">JS</span>
            </div>

            {/* HTML5 (Orange) */}
            <div className="absolute top-1 right-8 w-9 h-9 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center transform -rotate-12 floating-icon">
              <span className="text-sm font-bold text-white">H5</span>
            </div>

            {/* C++ (Pink/Purple) */}
            <div className="absolute top-8 right-2 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl shadow-lg flex items-center justify-center transform rotate-6 floating-icon">
              <span className="text-xs font-bold text-white">C++</span>
            </div>

            {/* Wave/Design Icon (Purple) */}
            <div className="absolute top-16 right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl shadow-lg flex items-center justify-center transform -rotate-6 floating-icon">
              <Layers className="w-6 h-6 text-white" />
            </div>

            {/* Python (Pink) */}
            <div className="absolute top-24 left-2 w-7 h-7 bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg shadow-lg flex items-center justify-center transform rotate-45 floating-icon">
              <Code className="w-5 h-5 text-white" />
            </div>

            {/* JavaScript (Yellow) */}
            <div className="absolute bottom-16 left-8 w-9 h-9 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl shadow-lg flex items-center justify-center transform -rotate-12 floating-icon">
              <span className="text-sm font-bold text-black">JS</span>
            </div>

            {/* C++ (Cyan/Blue) */}
            <div className="absolute bottom-4 right-6 w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-lg flex items-center justify-center transform rotate-6 floating-icon">
              <span className="text-xs font-bold text-white">C++</span>
            </div>

            {/* React (Purple) */}
            <div className="absolute bottom-10 left-2 w-7 h-7 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-lg flex items-center justify-center transform rotate-12 floating-icon">
              <Atom className="w-5 h-5 text-white" />
            </div>

            {/* CSS3 (Blue) */}
            <div className="absolute bottom-2 right-2 w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center transform -rotate-6 floating-icon">
              <span className="text-sm font-bold text-white">C3</span>
            </div>

            {/* Dark Circular Logo (Center) */}
            <div className="absolute top-1/2 left-[48%] w-7 h-7 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-lg flex items-center justify-center floating-icon">
              <Zap className="w-4 h-4 text-white" />
            </div>

            {/* Additional Floating Elements */}
            <div className="absolute top-10 left-1/2 w-7 h-7 bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg shadow-lg flex items-center justify-center transform rotate-30 floating-icon">
              <Database className="w-5 h-5 text-white" />
            </div>

            <div className="absolute bottom-20 right-1/2 w-7 h-7 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg shadow-lg flex items-center justify-center floating-icon">
              <span className="text-xs font-bold text-white">TS</span>
            </div>

            {/* Floating Animation Styles */}
            <style jsx>{`
              @keyframes float {
                0%, 100% { 
                  transform: translateY(0px) rotate(var(--rotation)); 
                }
                50% { 
                  transform: translateY(-7px) rotate(var(--rotation)); 
                }
              }
              
              .floating-icon {
                animation: float 4s ease-in-out infinite;
                transition: all 0.5s ease;
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
