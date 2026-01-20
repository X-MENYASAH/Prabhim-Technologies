import { Button } from "@/components/ui/button"

export function CadCustomizationSection() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-syne">
                <span className="text-orange-500">NX</span>
                <span className="text-gray-900"> Customization</span>
                <br />
                <span className="text-gray-900">Training</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                "Learn to tailor CAD tools—automate repetitive tasks, build custom scripts/macros, and integrate
                systems—to boost precision, efficiency, and team collaboration in engineering and design workflows."
              </p>
            </div>

            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Explore More
            </Button>
          </div>

          {/* Right Side - CAD Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-2xl h-[400px] lg:h-[500px] animate-float-alt">
              <img src="/assets/images/cad.png"
                alt="NX Customization Training"
                 
                className="object-cover rounded-2xl absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
