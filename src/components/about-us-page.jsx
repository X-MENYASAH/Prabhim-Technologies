import { Link } from "react-router-dom";
import {
  ChevronDown,
  GraduationCap,
  Monitor,
  Coffee,
  Laptop,
  Users,
  Award,
  BookOpen,
  Star,
  ArrowRight,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function AboutUsPage() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    mission: false,
    values: false,
    team: false,
    teaching: false,
    learning: false,
  });

  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const teachingRef = useRef(null);
  const learningRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            if (target === heroRef.current) setIsVisible(prev => ({ ...prev, hero: true }));
            if (target === missionRef.current) setIsVisible(prev => ({ ...prev, mission: true }));
            if (target === valuesRef.current) setIsVisible(prev => ({ ...prev, values: true }));
            if (target === teamRef.current) setIsVisible(prev => ({ ...prev, team: true }));
            if (target === teachingRef.current) setIsVisible(prev => ({ ...prev, teaching: true }));
            if (target === learningRef.current) setIsVisible(prev => ({ ...prev, learning: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const refs = [heroRef, missionRef, valuesRef, teamRef, teachingRef, learningRef];
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main>
        {/* About Us Hero Section */}
        <section className="px-4 py-12 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={heroRef}
              className={`transition-all duration-1000 ease-out ${
                isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    About <span className="text-orange-500">Us</span>
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Delivering complete CAD solutions, tailored software, and expert training designed to help businesses and organizations excel in CAD technology and programming languages.
                  </p>
                </div>

                {/* Right Side - About Us Image */}
                <div className="relative h-80 lg:h-96 flex items-center justify-center">
                  <img
                    src="/assets/images/abtus.png"
                    alt="About Us - CAD Solutions and Training"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Powerful Solutions Section */}
        <section className="px-4 py-16 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div
              ref={missionRef}
              className={`text-center space-y-12 transition-all duration-1000 ease-out ${
                isVisible.mission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Our <span className="text-orange-500">Mission</span>
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                We are committed to delivering innovative software solutions and comprehensive CAD training that empowers businesses to achieve operational excellence and competitive advantage in today's technology-driven marketplace.
              </p>
            </div>
          </div>
        </section>

        {/* Leading Software Excellence Section */}
        <section className="px-4 py-16 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={valuesRef}
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
                isVisible.values ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {/* Left Side - LED Image */}
              <div className="relative h-96 flex items-center justify-center">
                <img
                  src="/assets/images/led.jpg"
                  alt="Leading Software and CAD Excellence"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Right Content */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="text-sm font-semibold tracking-wide">OUR VISION</div>
                  <h3 className="text-3xl lg:text-4xl font-bold">Leading Software and CAD Excellence</h3>
                  <p className="text-orange-100 leading-relaxed">
                    We are committed to delivering innovative software solutions and comprehensive CAD training that empowers businesses to achieve operational excellence and competitive advantage in today's technology-driven marketplace.
                  </p>
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching CAD Section */}
        <section className="px-4 py-16 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div
              ref={teachingRef}
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
                isVisible.teaching ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              {/* Left Content */}
              <div className="space-y-6">
                <div className="text-sm font-semibold text-orange-500 tracking-wide">OUR VISION</div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Teaching CAD, Programming & Real Solutions
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our mission is to provide practical education and programming skills that translate directly into real-world applications. We bridge the gap between theoretical knowledge and industry requirements through hands-on training and mentorship.
                </p>
              </div>

              {/* Right Side - Text Image */}
              <div className="relative h-96 flex items-center justify-center">
                <img
                  src="/assets/images/Text (2) 1.png"
                  alt="Teaching CAD, Programming & Real Solutions"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Talented People Section */}
        <section className="px-4 py-16 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={teamRef}
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
                isVisible.team ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Left Content */}
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Work around very <span className="text-orange-500">talented people</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Join a community of skilled professionals, innovative thinkers, and industry experts who are passionate about technology and committed to excellence.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold">
                  Join Our Team
                </Button>
              </div>

              {/* Right Side - Talented People Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48">
                  <img src="/assets/images/im1.png"
                    alt="Talented People - Professional Development"
                     
                    className="object-cover rounded-2xl absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="relative h-48">
                  <img src="/assets/images/im2.png"
                    alt="Talented People - Team Collaboration"
                     
                    className="object-cover rounded-2xl absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="col-span-2 bg-orange-50 rounded-2xl p-6 border-l-4 border-orange-500">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl text-orange-500">"</div>
                    <div>
                      <p className="text-gray-700 italic">
                        "Working with talented individuals has been the most rewarding experience of my career. The collaborative environment fosters innovation and personal growth."
                      </p>
                      <div className="mt-4 text-sm text-gray-600">- Team Member</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Features Section */}
        <section className="px-4 py-16 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible.learning ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Our <span className="text-orange-500">Features</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Learn Online</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Access comprehensive online courses with interactive content, video tutorials, and hands-on projects from anywhere in the world.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Expert & Certified Trainers</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Learn from industry professionals with years of experience and recognized certifications in their respective fields.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Learning</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Engage with visual content including diagrams, animations, and interactive simulations for better understanding.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Communicate With Peers</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Connect with fellow learners through forums, group projects, and collaborative learning environments.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted Certifications</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Earn industry-recognized certificates that validate your skills and enhance your professional credibility.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Courses</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Access professionally designed curriculum that meets current industry standards and market demands.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Join a World of Learning Section */}
        <section className="px-4 py-16 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={learningRef}
              className={`bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-12 relative overflow-hidden transition-all duration-1000 ease-out ${
                isVisible.learning ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {/* Floating Profile Avatars */}
              <div className="absolute top-8 left-8 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">A</span>
              </div>
              <div className="absolute top-16 right-16 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <div className="absolute bottom-16 left-16 w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">C</span>
              </div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">D</span>
              </div>
              <div className="absolute top-1/2 left-8 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <div className="absolute top-1/3 right-8 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">F</span>
              </div>

              {/* Central Content */}
              <div className="text-center space-y-6 relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Join a world of learning</h2>
                <p className="text-xl text-gray-800 max-w-2xl mx-auto">
                  Connecting learners worldwide with cutting-edge educational content, expert instructors, and a supportive community dedicated to your success.
                </p>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
