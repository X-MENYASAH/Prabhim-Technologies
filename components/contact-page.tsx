import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

const ContactPage = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">We'd love to hear from you</h2>
          <p className="mt-4 text-gray-600">Our friendly team is always here to help.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
            </div>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-700">Email</h3>
            </div>
            <p className="text-gray-600">info@example.com</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-700">Address</h3>
            </div>
            <p className="text-gray-600">123 Main Street, Anytown USA</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-6">Send us a message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Navigation Menu (Example - to show the update) */}
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">Your Logo</div>
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/services"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors"
            >
              SERVICES
            </Link>
            <Link
              href="/about"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default ContactPage
