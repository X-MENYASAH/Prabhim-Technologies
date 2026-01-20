import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, ArrowRight, Linkedin, Github, Instagram } from "lucide-react";
import { SuccessMessage } from "@/components/ui/success-message";

import { useState } from "react";

export function FooterSection() {
  function getRightsReservedText() {
    return `©${new Date().getFullYear()} All rights reserved`;
  }

  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setEmail("");
      setShowSuccess(true);
      setIsSubmitting(false);
    }, 1000);
  };

  // Fix: specify the event type for TypeScript
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };
  

  return (
    <footer className="bg-white py-16 px-4 lg:px-8 border-t border-gray-100">
      {/* Success Message */}
      <SuccessMessage
        isVisible={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Subscribed Successfully!"
        message="Thank you for subscribing to PRABHIM. You'll now receive our latest updates and news directly in your inbox."
        buttonText="Got it!"
        autoClose={true}
        autoCloseDelay={4000}
      />

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Company Info - Left Side */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/assets/images/logo1.png"
                alt="PRABHIM Logo"
                width={216.56}
                height={143}
                className="h-[143px] w-auto object-contain"
              />
            </div>

            {/* Company Description */}
            <p className="text-gray-600 leading-relaxed max-w-md">
              We provide full-cycle software development services to help businesses innovate and grow. Our team builds
              secure, high-quality applications using modern technologies and frameworks.
            </p>
          </div>

          {/* Navigation Links - Right Side */}
          <div className="lg:col-span-8 grid md:grid-cols-3 gap-8 mt-5">
            {/* Our Services */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                    CAD Customization
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                    CAD Development
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                    PLM Administration
                  </Link>
                </li>
              </ul>
            </div>

            {/* Course */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Course</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Auto CAD Customization
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Programming Languages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Software Testing
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <Link to="/blogs" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Newsletter Text */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get the latest updates Subscribe us</h3>
              <p className="text-gray-600">Subscribe to PRABHIM</p>
            </div>

            {/* Newsletter Form */}
            <div className="relative w-full max-w-xl">
              <Input
                type="email"
                placeholder="Add your email*"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-6 py-4 bg-gray-800 text-white placeholder-gray-400 border-0 rounded-full focus:ring-2 focus:ring-orange-500 focus:outline-none pr-40"
                disabled={isSubmitting}
              />
              <Button
                className="absolute right-0 top-0 bottom-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleSubscribe}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )}
                <span>{isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          {/* Copyright */}
          <div className="text-gray-600 mb-4 md:mb-0">{getRightsReservedText()}</div>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/prabhimtechnologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.instagram.com/prabhimtech?igsh=MW5wYzh4MDBmb3d4OQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              {/* Twitter/X Icon */}
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
