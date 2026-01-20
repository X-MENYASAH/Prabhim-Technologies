import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { servicesData } from "@/lib/services-data";

const iconMap = {
  "design-engineering": Laptop,
  "cad-customization": Code,
  "cad-development": Shield,
  "plm-administration": Database,
  "plm-implementation": Settings,
  "plm-customization": Workflow,
};

const services = servicesData.map((service) => ({
  ...service,
  icon: iconMap[service.slug] ?? Laptop,
  link: `/services/${service.slug}`,
}));

const companyLogos = [
  { name: "SIEMENS", subtitle: "Digital Industries Software" },
  { name: "SolidWorks", subtitle: "" },
  { name: "AUTOCAD", subtitle: "" },
  { name: "AUTODESK INVENTOR", subtitle: "" },
  { name: "DASSAULT SYSTEMES", subtitle: "" },
  { name: "Fusion", subtitle: "" },
];

export function ServicesPage() {
  const renderServiceImage = (service) => {
    if (service.cardImage) {
      return (
        <div className="relative h-64 rounded-2xl overflow-hidden flex items-center justify-center group transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <img src={service.cardImage}
            alt={service.title}
             
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110 absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
      );
    }
    return (
      <div className={`relative h-64 bg-gradient-to-br ${service.bgGradient} rounded-2xl overflow-hidden`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

          {/* service-specific illustration code omitted for brevity */}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
            <service.icon className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 lg:px-8 overflow-hidden min-h-screen">
        {/* Background */}
        <div className="absolute inset-0 flex justify-end items-center" style={{ minHeight: 507 }}>
          <img
            src="/assets/images/Ser back.jpg"
            alt="Background"
            width={1014}
            height={507}
            className="object-cover object-center"
            style={{ width: 1014, height: 507, maxWidth: "100%", maxHeight: "100%" }}
          />
          <div className="absolute inset-0 animated-gradient-overlay rounded-xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block bg-yellow-400 text-black px-4 md:px-6 py-3 rounded-full text-sm md:text-base font-bold">
                Our Services
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight">
                Our <span className="text-orange-500">Specialized</span> CAD & PLM
                <br />
                Solutions
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed max-w-2xl">
                Empowering innovation with full-cycle CAD Design, Development, and Lifecycle Management Services.
              </p>
            </div>

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
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Service Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  {renderServiceImage(service)}
                </div>

                {/* Service Content */}
                <div className={`space-y-4 md:space-y-6${index % 2 === 1 ? " lg:col-start-1" : ""}`}>
                  <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                    {(service.badgeLabel || service.title).toUpperCase()}
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-500">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">{service.summary}</p>
                  <Link to={service.link}>
                    <Button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-1 flex items-center space-x-2">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rolling Company Logos after PLM Customization */}
      <section className="py-8 px-4 lg:px-8">
        <div className="overflow-hidden w-full">
          <div className="flex space-x-12 animate-logo-scroll items-center" style={{ minHeight: 100 }}>
            <img src="/assets/images/Group 1.png" alt="Group 1" width={200} height={70} className="w-[200px] h-[70px] object-contain" />
            <img src="/assets/images/Group 2.png" alt="Group 2" width={200} height={70} className="w-[200px] h-[70px] object-contain" />
            <img src="/assets/images/Group 3.png" alt="Group 3" width={200} height={70} className="w-[200px] h-[70px] object-contain" />
            <img src="/assets/images/Group 5.png" alt="Group 5" width={200} height={70} className="w-[200px] h-[70px] object-contain" />
            {/* Duplicate for seamless loop */}
            <img src="/assets/images/Group 1.png" alt="Group 1" width={200} height={70} className="w-[200px] h-[70px] object-contain" />
            <img src="/assets/images/Group 2.png" alt="Group 2" width={200} height={70} className="w-[200px] h-[70px] object-contain" />
            <img src="/assets/images/Group 3.png" alt="Group 3" width={200} height={70} className="w-[200px] h-[70px] object-contain" />
            <img src="/assets/images/Group 5.png" alt="Group 5" width={200} height={70} className="w-[200px] h-[70px] object-contain" />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
