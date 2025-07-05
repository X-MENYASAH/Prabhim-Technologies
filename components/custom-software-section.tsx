import { Lightbulb, Rocket, User, Target, Users, Zap } from "lucide-react"

export function CustomSoftwareSection() {
  return (
    <section className="relative py-20 px-4 lg:px-8 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-8 bg-yellow-200 opacity-60 transform -rotate-12 rounded-sm" />
      <div className="absolute top-20 left-20 w-16 h-2 bg-yellow-300 opacity-50 transform -rotate-45" />
      <div className="absolute top-32 left-5 w-8 h-2 bg-yellow-400 opacity-40 transform rotate-12" />

      <div className="absolute top-16 right-16 w-40 h-10 bg-yellow-200 opacity-50 transform rotate-12 rounded-sm" />
      <div className="absolute top-40 right-10 w-24 h-3 bg-yellow-300 opacity-60 transform -rotate-12" />
      <div className="absolute top-60 right-32 w-12 h-2 bg-yellow-400 opacity-40 transform rotate-45" />

      <div className="absolute bottom-20 left-16 w-36 h-8 bg-yellow-200 opacity-50 transform rotate-6 rounded-sm" />
      <div className="absolute bottom-32 left-8 w-20 h-3 bg-yellow-300 opacity-40 transform -rotate-12" />
      <div className="absolute bottom-10 left-40 w-8 h-2 bg-yellow-400 opacity-50 transform rotate-30" />

      <div className="absolute bottom-24 right-20 w-44 h-10 bg-yellow-200 opacity-60 transform -rotate-6 rounded-sm" />
      <div className="absolute bottom-40 right-8 w-28 h-4 bg-yellow-300 opacity-50 transform rotate-12" />
      <div className="absolute bottom-8 right-36 w-16 h-2 bg-yellow-400 opacity-40 transform -rotate-45" />

      {/* Diagonal Stripe Elements */}
      <div className="absolute top-1/4 left-1/4">
        <div className="w-16 h-1 bg-yellow-400 opacity-60 transform rotate-45" />
        <div className="w-16 h-1 bg-yellow-400 opacity-60 transform rotate-45 translate-x-1 translate-y-1" />
        <div className="w-16 h-1 bg-yellow-400 opacity-60 transform rotate-45 translate-x-2 translate-y-2" />
        <div className="w-16 h-1 bg-yellow-400 opacity-60 transform rotate-45 translate-x-3 translate-y-3" />
      </div>

      <div className="absolute bottom-1/3 right-1/3">
        <div className="w-20 h-1 bg-yellow-400 opacity-50 transform -rotate-45" />
        <div className="w-20 h-1 bg-yellow-400 opacity-50 transform -rotate-45 translate-x-1 translate-y-1" />
        <div className="w-20 h-1 bg-yellow-400 opacity-50 transform -rotate-45 translate-x-2 translate-y-2" />
        <div className="w-20 h-1 bg-yellow-400 opacity-50 transform -rotate-45 translate-x-3 translate-y-3" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Custom Software
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Development
            </span>
          </h2>

          {/* Yellow Decorative Lines */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-1">
              <div className="w-12 h-1 bg-yellow-400 transform rotate-12" />
              <div className="w-12 h-1 bg-yellow-400 transform rotate-12" />
              <div className="w-12 h-1 bg-yellow-400 transform rotate-12" />
              <div className="w-12 h-1 bg-yellow-400 transform rotate-12" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              At Prabhim Technologies, we specialize in designing and developing scalable, secure, and user-friendly
              software applications that solve real business challenges. From startups to enterprises, we create
              solutions that streamline operations, enhance productivity, and deliver measurable results.
            </p>
          </div>

          {/* Lady Image */}
          <div className="flex justify-center mt-12">
            <div className="relative w-[1440px] h-[453.15px]">
              <img 
                src="/lady.png" 
                alt="Lady illustration for custom software development" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
