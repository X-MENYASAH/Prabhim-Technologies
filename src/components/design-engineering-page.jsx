import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { servicesData } from "@/lib/services-data"

const fallbackService = servicesData[0]

export function ServiceDetailPage({ service }) {
  const data = service ?? fallbackService

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                    {data.heroTag || "Services"}
                  </span>
                </div>

                <div>
                  <h1 className="text-5xl font-bold leading-tight">
                    <span className="text-orange-500">{data.heroHighlight || data.title}</span>
                    {data.heroRest ? <span className="text-black"> {data.heroRest}</span> : null}
                  </h1>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  {data.heroDescription}
                </p>

                <Link to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition-all"
                >
                  See All Services
                  <ArrowRight size={20} />
                </Link>
              </div>

              {/* Right Visual */}
              <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-slate-800/40" />
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                  <rect x="200" y="80" width="200" height="150" rx="8" fill="#e5e7eb" stroke="#1e3a8a" strokeWidth="2" />
                  <rect x="210" y="90" width="180" height="130" fill="#0f172a" />
                  <rect x="280" y="240" width="40" height="40" fill="#6b7280" />
                  <rect x="50" y="320" width="400" height="60" rx="4" fill="#e5e7eb" stroke="#1e3a8a" strokeWidth="2" />
                  <rect x="100" y="280" width="150" height="35" rx="4" fill="#4b5563" stroke="#1e3a8a" strokeWidth="1" />
                  <ellipse cx="320" cy="295" rx="20" ry="25" fill="#4b5563" stroke="#1e3a8a" strokeWidth="1" />
                  <g>
                    <rect x="380" y="270" width="35" height="45" rx="4" fill="#f5f5f5" stroke="#1e3a8a" strokeWidth="1" />
                    <rect x="420" y="280" width="20" height="25" rx="10" fill="none" stroke="#1e3a8a" strokeWidth="2" />
                  </g>
                  <g opacity="0.8">
                    <circle cx="120" cy="120" r="25" fill="#d1d5db" stroke="#1e3a8a" strokeWidth="2" />
                    <rect x="105" y="150" width="30" height="90" rx="6" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="2" />
                    <rect
                      x="75"
                      y="160"
                      width="30"
                      height="15"
                      rx="8"
                      fill="#d1d5db"
                      stroke="#1e3a8a"
                      strokeWidth="1"
                      transform="rotate(-30 90 167)"
                    />
                  </g>
                  <line x1="220" y1="110" x2="360" y2="110" stroke="#ef4444" strokeWidth="2" opacity="0.6" />
                  <line x1="220" y1="125" x2="360" y2="125" stroke="#fbbf24" strokeWidth="2" opacity="0.6" />
                  <line x1="220" y1="140" x2="340" y2="140" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
                  <line x1="220" y1="155" x2="350" y2="155" stroke="#10b981" strokeWidth="2" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-black">{data.detailIntroTitle}</h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">{data.detailIntroDescription}</p>
            </div>

            <div className="space-y-12">
              {data.detailItems?.map((item, index) => (
                <div key={`${data.slug}-detail-${index}`} className="space-y-3">
                  <h3 className="text-2xl font-bold">
                    <span className="text-orange-500">{index + 1}. </span>
                    <span className="text-orange-500">{item.title}</span>
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed max-w-3xl">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export function DesignEngineeringPage(props) {
  return <ServiceDetailPage {...props} />
}
