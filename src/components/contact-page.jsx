import { Link } from "react-router-dom";

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Send, MessageSquare, ArrowUpRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function ContactPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const targetWhatsappNumber = "9886001412"
    const baseText = "Hii I am interested"
    const composed = `${baseText}\nName: ${firstName} ${lastName}`.trim() +
      (phone ? `\nPhone: ${phone}` : "") +
      (email ? `\nEmail: ${email}` : "") +
      (message ? `\nMessage: ${message}` : "")
    const url = `https://wa.me/${targetWhatsappNumber}?text=${encodeURIComponent(composed)}`
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }, [firstName, lastName, email, phone, message])

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
            <img
              src="/assets/images/bro1.png"
              alt="Contact Us - Professional Team"
              width={523}
              height={500}
              className="w-full h-80 object-contain rounded-3xl"
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

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <Input placeholder="John" className="border-gray-200" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  <p className="text-xs text-gray-500 mt-1">What should we call you?</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <Input placeholder="Statham" className="border-gray-200" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="john123@gmail.com" className="border-gray-200" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <p className="text-xs text-gray-500 mt-1">We'll never share your email with anyone else.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <div className="flex">
                    <div className="flex items-center px-3 border border-r-0 border-gray-200 bg-gray-50 rounded-l-md">
                      <span className="text-sm">🇮🇳</span>
                    </div>
                    <Input placeholder="Your Phone Number" className="border-gray-200 rounded-l-none" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <Textarea placeholder="Message" className="border-gray-200 min-h-32" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Location Map */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="h-96 relative">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps?q=Office%20No.%208%20First%20Floor%2C%20Jubilation%20Society%2C%20Avishawadi%20Road%20Wagholi%20Pune%20412207&z=15&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
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
