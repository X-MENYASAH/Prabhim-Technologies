import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Send, MessageSquare, ArrowUpRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-orange-500">Us</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Reach out to discuss CAD, programming courses, or custom software projects. Fill in your name, email, and
              message below — or choose a preferred contact method. Our team typically responds within 24 hours. We're
              here to help accelerate your skills and solutions.
            </p>
          </div>

          {/* Contact Us Image */}
          <div className="relative">
            <Image
              src="/bro1.png"
              alt="Contact Us - Professional Team"
              width={523}
              height={500}
              className="w-full h-80 object-contain rounded-3xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              GET IN <span className="text-orange-500">TOUCH</span>
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <Input placeholder="John" className="border-gray-200" />
                  <p className="text-xs text-gray-500 mt-1">What should we call you?</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <Input placeholder="Statham" className="border-gray-200" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="john123@gmail.com" className="border-gray-200" />
                  <p className="text-xs text-gray-500 mt-1">We'll never share your email with anyone else.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <div className="flex">
                    <div className="flex items-center px-3 border border-r-0 border-gray-200 bg-gray-50 rounded-l-md">
                      <span className="text-sm">🇮🇳</span>
                    </div>
                    <Input placeholder="Your Phone Number" className="border-gray-200 rounded-l-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <Textarea placeholder="Message" className="border-gray-200 min-h-32" />
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-blue-100 to-blue-200 relative flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">620 North LaSalle Office Space</h3>
                <p className="text-gray-600">Chicago, IL 60654</p>
                <div className="flex items-center justify-center mt-2">
                  <div className="flex text-orange-400">{"★".repeat(5)}</div>
                  <span className="ml-2 text-sm text-gray-600">29 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 border-0 shadow-sm">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Location</h3>
              <p className="text-gray-600 leading-relaxed">
                Office No. 8 First Floor, Jubilation Society, Avishawadi Road Wagholi
                <br />
                Pune 412207
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-0 shadow-sm">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Let's Talk</h3>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> +91 6542686962
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-0 shadow-sm">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">E-mail</h3>
              <p className="text-gray-600">info@prabhimtechnologies.in</p>
            </CardContent>
          </Card>
        </div>
      </section>

            {/* Footer */}
      <Footer />
    </div>
  )
}
