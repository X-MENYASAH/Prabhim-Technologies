import { Button } from "@/components/ui/button"

export function ProgrammingTrainingSection() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Programming Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-96 h-96 animate-float-alt">
              <img src="/assets/images/img1.png"
                alt="Programming Language Training"
                 
                className="object-cover rounded-2xl absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-syne">
                <span className="text-orange-500">Programming</span>
                <br />
                <span className="text-gray-900">Language Training</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                "Learn essential programming languages—from Python and JavaScript to Java and C#—through hands-on
                projects, real-world best practices, and modern tools to build scalable, robust software solutions."
              </p>
            </div>

            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Explore Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
