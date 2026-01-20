import { Layers, Zap, Settings, BarChart3, Compass, Wrench } from "lucide-react"

export function MasterCadSection() {
  return (
    <section className="relative w-full max-w-[1290px] min-h-[250px] md:h-[324px] mx-auto overflow-hidden rounded-3xl border-2 border-orange-200/50 transition-all duration-500">
      {/* Pink Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-pink-200 to-rose-200" />
      <div className="absolute inset-0 bg-gradient-to-br from-rose-200/80 via-pink-200/60 to-pink-300/80" />

      <div className="relative z-10 h-full flex items-center py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full px-4 md:px-6 lg:px-8">
          {/* Left Content */}
          <div className="space-y-3 md:space-y-4 text-center md:text-left">
            <p className="text-xs md:text-sm text-gray-600 font-medium">Top Picks In CAD Automation & Customization</p>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight font-exo transition-colors duration-500">
              Master CAD Customization
            </h2>

            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              "Level up your CAD skills with our curated courses—learn how to script, automate, and customize CAD
              software using tool palettes, macros, APIs, and AutoLISP."
            </p>
          </div>

          {/* Right Side - Floating CAD Software Icons */}
          <div className="relative w-full h-full">
            {/* CAD Design Tool (Purple with geometric design) */}
            <div className="absolute top-6 left-10 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-lg flex items-center justify-center transform rotate-12 floating-icon">
              <div className="relative">
                <div className="w-6 h-6 border-2 border-white rounded-lg relative">
                  <div className="absolute inset-1 border border-white rounded-sm" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              </div>
            </div>
            {/* Adobe/AutoCAD "A" */}
            <div className="absolute top-10 left-1/3 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center transform -rotate-12 floating-icon">
              <span className="text-xl font-bold text-white">A</span>
            </div>
            {/* SolidWorks (Cyan) */}
            <div className="absolute top-8 right-10 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl shadow-lg flex items-center justify-center transform rotate-6 floating-icon">
              <div className="text-center">
                <div className="text-xs font-bold text-white leading-tight">Solid</div>
                <div className="text-xs font-bold text-white leading-tight">Works</div>
              </div>
            </div>
            {/* SolidWorks SW (Red) */}
            <div className="absolute top-32 left-1/2 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg flex items-center justify-center transform -rotate-6 floating-icon">
              <span className="text-sm font-bold text-white">SW</span>
            </div>
            {/* Design Tools (Pink) */}
            <div className="absolute bottom-10 left-1/4 w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg shadow-lg flex items-center justify-center transform rotate-45 floating-icon">
              <Compass className="w-5 h-5 text-white" />
            </div>
            {/* Green Design Tool */}
            <div className="absolute bottom-24 right-1/5 w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl shadow-lg flex items-center justify-center transform -rotate-12 floating-icon">
              <div className="relative">
                <Layers className="w-6 h-6 text-white" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full" />
              </div>
            </div>
            {/* SolidWorks SW (Hexagonal Red) */}
            <div className="absolute bottom-8 left-1/2 w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg shadow-lg flex items-center justify-center transform rotate-12 floating-icon clip-hexagon">
              <span className="text-xs font-bold text-white">SW</span>
            </div>
            {/* CAD (Purple) */}
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center transform rotate-6 floating-icon">
              <span className="text-xs font-bold text-white">CAD</span>
            </div>
            {/* Analytics/Charts (Red) */}
            <div className="absolute bottom-1/4 right-32 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg flex items-center justify-center transform -rotate-6 floating-icon">
              <div className="relative">
                <BarChart3 className="w-6 h-6 text-white" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-red-500 rounded-full" />
                </div>
              </div>
            </div>
            {/* Additional Floating Elements */}
            <div className="absolute top-1/4 left-2/3 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-lg flex items-center justify-center transform rotate-30 floating-icon">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <div className="absolute bottom-1/3 right-1/2 w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg shadow-lg flex items-center justify-center transform -rotate-12 floating-icon">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div className="absolute top-2/3 left-1/5 w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg shadow-lg flex items-center justify-center transform rotate-45 floating-icon">
              <Zap className="w-4 h-4 text-white" />
            </div>
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
