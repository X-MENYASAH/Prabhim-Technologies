"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  ArrowUpRight,
  Laptop,
  Code,
  Settings,
  Database,
  Shield,
  Workflow,
  ArrowRight,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react"
import Link from "next/link"
import { FooterSection } from "@/components/footer-section"

const services = [
  {
    id: 1,
    title: "Design Engineering",
    description:
      "Our CAD experts excel in creating intricate 3D models using various software platforms, including Autodesk Inventor...",
    icon: Laptop,
    bgGradient: "from-blue-500 to-purple-600",
    link: "/services/design-engineering",
  },
  {
    id: 2,
    title: "CAD Software Customization",
    description:
      "Tailoring CAD applications, software altering and adapting existing software to address specific requirements and functionalities.",
    icon: Code,
    bgGradient: "from-gray-700 to-blue-900",
    link: "/services/cad-customization",
  },
  {
    id: 3,
    title: "CAD Software Development",
    description:
      "Developing CAD software entails building and maintaining programs that support engineers in their work.",
    icon: Shield,
    bgGradient: "from-green-500 to-teal-600",
    link: "/services/cad-development",
  },
  {
    id: 4,
    title: "CAD PLM Administration",
    description:
      "It managing and maintaining CAD and Product Lifecycle Management (PLM) systems to ensure smooth operations.",
    icon: Database,
    bgGradient: "from-orange-500 to-red-600",
    link: "/services/plm-administration",
  },
  {
    id: 5,
    title: "PLM Implementation",
    description:
      "PLM systems are essential for managing product information across its complete lifecycle, from inception to completion.",
    icon: Settings,
    bgGradient: "from-purple-500 to-pink-600",
    link: "/services/plm-implementation",
  },
  {
    id: 6,
    title: "PLM Customization",
    description:
      "Customizing Product Lifecycle Management (PLM) systems involves configuring and fine-tuning them to fit unique organizational needs.",
    icon: Workflow,
    bgGradient: "from-indigo-500 to-blue-600",
    link: "/services/plm-customization",
  },
]

const companyLogos = [
  { name: "SIEMENS", subtitle: "Digital Industries Software" },
  { name: "SolidWorks", subtitle: "" },
  { name: "AUTOCAD", subtitle: "" },
  { name: "AUTODESK INVENTOR", subtitle: "" },
  { name: "DASSAULT SYSTEMES", subtitle: "" },
  { name: "Fusion", subtitle: "" },
]

export function ServicesPage() {
  const renderServiceImage = (service: (typeof services)[0]) => {
    if (service.title === "Design Engineering") {
      return (
        <div className="relative h-64 rounded-2xl overflow-hidden flex items-center justify-center group transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <Image
            src="/des.jpg"
            alt="Design Engineering"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
      )
    }
    if (service.title === "CAD Software Customization") {
      return (
        <div className="relative h-64 rounded-2xl overflow-hidden flex items-center justify-center group transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <Image
            src="/cad.jpg"
            alt="CAD Software Customization"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
      )
    }
    if (service.title === "CAD Software Development") {
      return (
        <div className="relative h-64 rounded-2xl overflow-hidden flex items-center justify-center group transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <Image
            src="/cad soft.jpg"
            alt="CAD Software Development"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
      )
    }
    if (service.title === "CAD PLM Administration") {
      return (
        <div className="relative h-64 rounded-2xl overflow-hidden flex items-center justify-center group transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <Image
            src="/cad plm.jpg"
            alt="CAD PLM Administration"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
      )
    }
    if (service.title === "PLM Implementation") {
      return (
        <div className="relative h-64 rounded-2xl overflow-hidden flex items-center justify-center group transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <Image
            src="/plm.jpg"
            alt="PLM Implementation"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
      )
    }
    if (service.title === "PLM Customization") {
      return (
        <div className="relative h-64 rounded-2xl overflow-hidden flex items-center justify-center group transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <Image
            src="/plm cust.jpg"
            alt="PLM Customization"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
      )
    }
    return (
      <div className={`relative h-64 bg-gradient-to-br ${service.bgGradient} rounded-2xl overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

          {/* Service-specific illustrations */}
          {service.title === "Design Engineering" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Computer Monitor */}
                <div className="w-32 h-20 bg-gray-800/80 rounded border-2 border-gray-600">
                  <div className="w-full h-full bg-blue-400/60 rounded p-2">
                    {/* CAD Interface */}
                    <div className="w-full h-2 bg-white/30 rounded mb-1" />
                    <div className="flex space-x-1 mb-2">
                      <div className="w-4 h-4 bg-white/20 rounded" />
                      <div className="w-4 h-4 bg-white/20 rounded" />
                      <div className="w-4 h-4 bg-white/20 rounded" />
                    </div>
                    {/* 3D Model representation */}
                    <div className="w-full h-6 bg-white/10 rounded flex items-center justify-center">
                      <div className="w-4 h-4 border border-white/40 transform rotate-45" />
                    </div>
                  </div>
                </div>
                {/* Person silhouette */}
                <div className="absolute -bottom-2 -right-4">
                  <div className="w-6 h-6 bg-orange-400/80 rounded-full" />
                  <div className="w-8 h-10 bg-blue-500/80 rounded-t-lg mt-1" />
                </div>
              </div>
            </div>
          )}

          {service.title === "CAD Software Customization" && (
            <div className="absolute inset-0 p-4 font-mono text-xs text-white/60">
              <div className="space-y-1">
                <div>{"// CAD Customization"}</div>
                <div>{"function customizeCAD() {"}</div>
                <div className="ml-4">{"const tools = loadTools();"}</div>
                <div className="ml-4">{"tools.customize({"}</div>
                <div className="ml-8">{"interface: 'modern',"}</div>
                <div className="ml-8">{"workflow: 'optimized'"}</div>
                <div className="ml-4">{"});"}</div>
                <div>{"}"}</div>
              </div>
            </div>
          )}

          {service.title === "CAD Software Development" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white/80" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400/60 rounded-full" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400/60 rounded-full" />
                <div className="absolute top-0 left-8 w-4 h-4 bg-yellow-400/60 rounded" />
              </div>
            </div>
          )}

          {service.title === "CAD PLM Administration" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2">
                <div className="w-6 h-6 bg-white/20 rounded border border-white/30" />
                <div className="w-6 h-6 bg-white/30 rounded border border-white/40" />
                <div className="w-6 h-6 bg-white/20 rounded border border-white/30" />
                <div className="w-6 h-6 bg-white/30 rounded border border-white/40" />
                <div className="w-6 h-6 bg-white/40 rounded border border-white/50" />
                <div className="w-6 h-6 bg-white/30 rounded border border-white/40" />
                <div className="w-6 h-6 bg-white/20 rounded border border-white/30" />
                <div className="w-6 h-6 bg-white/30 rounded border border-white/40" />
                <div className="w-6 h-6 bg-white/20 rounded border border-white/30" />
              </div>
            </div>
          )}

          {service.title === "PLM Implementation" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full" />
                  <div className="w-4 h-0.5 bg-white/40" />
                  <div className="w-8 h-8 bg-white/30 rounded-full" />
                  <div className="w-4 h-0.5 bg-white/40" />
                  <div className="w-8 h-8 bg-white/40 rounded-full" />
                </div>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white/15 rounded" />
                  <div className="w-6 h-6 bg-white/25 rounded" />
                  <div className="w-6 h-6 bg-white/35 rounded" />
                </div>
              </div>
            </div>
          )}

          {service.title === "PLM Customization" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-16 bg-white/10 rounded border border-white/30 p-2">
                  <div className="grid grid-cols-4 gap-1">
                    <div className="w-2 h-2 bg-white/30 rounded" />
                    <div className="w-2 h-2 bg-white/40 rounded" />
                    <div className="w-2 h-2 bg-white/30 rounded" />
                    <div className="w-2 h-2 bg-white/20 rounded" />
                    <div className="w-2 h-2 bg-white/40 rounded" />
                    <div className="w-2 h-2 bg-white/50 rounded" />
                    <div className="w-2 h-2 bg-white/40 rounded" />
                    <div className="w-2 h-2 bg-white/30 rounded" />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400/60 rounded-full" />
              </div>
            </div>
          )}
        </div>

        {/* Central Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
            <service.icon className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-10 px-4 py-6 lg:px-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo1.png"
              alt="PRABHIM Logo"
              width={145.75}
              height={100}
              className="h-[100px] w-auto object-contain"
              priority
            />
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link
              href="/"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/services"
              className="text-orange-500 font-semibold text-sm tracking-wide hover:text-orange-600 transition-colors"
            >
              SERVICES
            </Link>
            <Link
              href="/courses"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors"
            >
              COURSES
            </Link>
            <Link
              href="/about"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors"
            >
              ABOUT US
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors"
            >
              CONTACT
            </Link>
            <Link
              href="#"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors"
            >
              BLOGS
            </Link>
          </div>

          {/* Login Button */}
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2.5 flex items-center space-x-2 shadow-lg transition-all duration-200 hover:shadow-xl">
            <span className="font-medium">Login</span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </div>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 lg:px-8 overflow-hidden min-h-screen">
        {/* Background */}
        <div className="absolute inset-0 flex justify-end items-center" style={{ minHeight: 507 }}>
          <Image
            src="/Ser back.jpg"
            alt="Background"
            width={1014}
            height={507}
            className="object-cover object-center"
            priority
            style={{ width: 1014, height: 507, maxWidth: '100%', maxHeight: '100%' }}
          />
          <div className="absolute inset-0 animated-gradient-overlay rounded-xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block bg-yellow-400 text-black px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                Our Services
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Our <span className="text-orange-500">Specialized</span> CAD & PLM
                <br />
                Solutions
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg">
                Empowering innovation with full-cycle CAD Design, Development, and Lifecycle Management Services.
              </p>
            </div>

            {/* Right Content - Network Illustration */}
            <div className="relative h-96 lg:h-[500px]">
              {/* Colorful Network Connections */}
              <div className="absolute inset-0">
                {/* Nodes */}
                <div className="absolute top-8 left-8 w-4 h-4 bg-red-400 rounded-full shadow-lg" />
                <div className="absolute top-16 right-12 w-6 h-6 bg-blue-400 rounded-full shadow-lg" />
                <div className="absolute top-32 left-16 w-5 h-5 bg-green-400 rounded-full shadow-lg" />
                <div className="absolute top-24 right-8 w-4 h-4 bg-yellow-400 rounded-full shadow-lg" />
                <div className="absolute bottom-32 left-12 w-6 h-6 bg-purple-400 rounded-full shadow-lg" />
                <div className="absolute bottom-24 right-16 w-5 h-5 bg-pink-400 rounded-full shadow-lg" />
                <div className="absolute bottom-16 left-24 w-4 h-4 bg-cyan-400 rounded-full shadow-lg" />
                <div className="absolute top-48 left-32 w-5 h-5 bg-orange-400 rounded-full shadow-lg" />
                <div className="absolute bottom-48 right-24 w-4 h-4 bg-indigo-400 rounded-full shadow-lg" />
                <div className="absolute top-40 right-32 w-6 h-6 bg-teal-400 rounded-full shadow-lg" />

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f87171" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34d399" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#f472b6" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>

                  <path d="M32 32 Q200 100 368 64" stroke="url(#grad1)" strokeWidth="2" fill="none" />
                  <path d="M64 128 Q200 200 320 96" stroke="url(#grad2)" strokeWidth="2" fill="none" />
                  <path d="M48 368 Q200 300 384 384" stroke="url(#grad3)" strokeWidth="2" fill="none" />
                  <path d="M96 464 Q200 400 320 320" stroke="url(#grad1)" strokeWidth="2" fill="none" />
                  <path d="M128 192 Q250 250 368 192" stroke="url(#grad2)" strokeWidth="2" fill="none" />
                  <path d="M32 96 Q150 200 256 160" stroke="url(#grad3)" strokeWidth="2" fill="none" />
                </svg>

                {/* Floating particles */}
                <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse" />
                <div
                  className="absolute top-60 right-20 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute bottom-40 left-32 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="py-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center space-x-8 text-white font-semibold text-sm tracking-wide overflow-x-auto">
            <span className="whitespace-nowrap">PLM CUSTOMIZATION</span>
            <span className="text-white/60">•</span>
            <span className="whitespace-nowrap">DESIGN</span>
            <span className="text-white/60">•</span>
            <span className="whitespace-nowrap">CAD SOFTWARE</span>
            <span className="text-white/60">•</span>
            <span className="whitespace-nowrap">CAD DEVELOPMENT</span>
            <span className="text-white/60">•</span>
            <span className="whitespace-nowrap">PLM ADMINISTRATION</span>
            <span className="text-white/60">•</span>
            <span className="whitespace-nowrap">PLM IMPLEMENTATION</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16 md:space-y-20">
            {services.map((service, index) => {
              if (service.title === "CAD Software Customization") {
                return (
                  <div
                    key={service.id}
                    className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center${index % 2 === 1 ? " lg:grid-flow-col-dense" : ""}`}
                  >
                    {/* Service Image */}
                    <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>{renderServiceImage(service)}</div>
                    {/* Service Content */}
                    <div className={`space-y-4 md:space-y-6${index % 2 === 1 ? " lg:col-start-1" : ""}`}>
                      <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                        {service.title.replace(/CAD |PLM /, "").toUpperCase()}
                      </div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-500">{service.title}</h2>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">{service.description}</p>
                      <Link href={service.link}>
                        <Button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-1 flex items-center space-x-2">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                )
              }
              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Service Image */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>{renderServiceImage(service)}</div>
                  {/* Service Content */}
                  <div className={`space-y-4 md:space-y-6${index % 2 === 1 ? " lg:col-start-1" : ""}`}>
                    <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                      {service.title.replace(/CAD |PLM /, "").toUpperCase()}
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-500">{service.title}</h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">{service.description}</p>
                    <Link href={service.link}>
                      <Button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-1 flex items-center space-x-2">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}