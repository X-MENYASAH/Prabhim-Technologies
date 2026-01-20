import { GraduationCap, Settings, Wrench } from "lucide-react"

export function CertificatesSection() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            {/* Section Title */}
            <h2 className="text-[50px] font-bold text-gray-900 leading-tight font-syne">
              Earn Industry-Recognized
              <br />
              <span className="text-orange-500">Certificates</span>
            </h2>

            {/* Benefits List */}
            <div className="space-y-8">
              {/* Career Opportunities */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-exo">Career Opportunities</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Earning recognized certifications in programming and CAD opens doors across industries—from tech
                    startups to engineering firms.
                  </p>
                </div>
              </div>

              {/* Professional Credibility */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Settings className="w-8 h-8 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-exo">Professional Credibility</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Having a credential shows dedication to your craft—it boosts trust and credibility with employers,
                    clients, and peers. Plus, you'll gain confidence to tackle increasingly complex problems.
                  </p>
                </div>
              </div>

              {/* Demonstrable, Real-World Skills */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Wrench className="w-8 h-8 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-exo">Demonstrable, Real-World Skills</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Beyond theory, our certification confirms your ability to produce actual scripts, tools, CAD
                    designs, and automations. Employers and clients value practical competence—often more than common
                    "completion" certificates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Certificate Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg animate-float-alt">
              <img
                src="/assets/images/cert.png"
                alt="Industry-Recognized Certificate"
                width={400}
                height={500}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
