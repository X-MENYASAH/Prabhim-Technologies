import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  ArrowUpRight,
  Search,
  Star,
  Clock,
  Users,
  Settings,
  Wrench,
} from "lucide-react";

import { courses as allCourses } from "@/lib/courses";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const courseCategories = [
  "All Courses",
  "CAD Customization",
  "Programming Languages",
  "Software Development",
  "Software Testing",
  "Data Analysis",
];

const courses = allCourses;

export function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [searchQuery, setSearchQuery] = useState("");
  const popularSectionRef = useRef(null);

  const filteredCourses = courses.filter(
    (course) =>
      (selectedCategory === "All Courses" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderCourseImage = (course) => {
    let imageUrl = "/placeholder.jpg";
    if (course.title === "AutoCAD Customization") imageUrl = "/h1.jpg";
    else if (course.title === "Creo Customization") imageUrl = "/images.jpg";
    else if (course.title === "AutoDesk Inventor") imageUrl = "/h2.jpg";
    else if (course.title === "Special Offer on C, C++ & C#") imageUrl = "/h3.jpg";
    else if (course.title === "SolidWorks Customization") imageUrl = "/img.jpg";
    else if (course.title === "CATIA Customization") imageUrl = "/fc1.jpg";
    else if (course.title === "NX Customization") imageUrl = "/fc2.jpg";
    else if (course.title === "SolidEdge Customization") imageUrl = "/fc3.jpg";
    else if (course.title === "Revit Customization") imageUrl = "/des.jpg";
    else if (course.title === "C, C++ With DSA") imageUrl = "/cad.jpg";
    else if (course.title === "Python With DSA") imageUrl = "/cad soft.jpg";
    else if (course.title === "C# With DSA") imageUrl = "/cad plm.jpg";
    else if (course.title === "Java - JavaScript With DSA") imageUrl = "/pc2.jpg";
    else if (course.title === "Full Stack Development") imageUrl = "/Full.jpg";
    else if (course.title === "DevOps And Cloud Computing") imageUrl = "/dev.jpg";
    else if (course.title === "Manual Testing") imageUrl = "/testing.jpg";
    else if (course.title === "Automation Testing") imageUrl = "/A Testing.avif";
    else if (course.title === "Data Analyst") imageUrl = "/download.jpg";
    return (
      <div
        className="relative h-48 rounded-t-2xl overflow-hidden"
        style={{ backgroundImage: `url('${imageUrl}')`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block bg-yellow-400 text-black px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                Course
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The best online <span className="text-orange-500">course</span>
                <br />
                for your next big move.
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg">
                Unlock transformation through hands-on learning and real-world projects.
              </p>

              <Button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => {
                  popularSectionRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore More
              </Button>
            </div>

            {/* Right Content - Workspace Illustration */}
            <div className="relative h-96 lg:h-[500px]">
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden"
                style={{ backgroundImage: "url('/cor back.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 px-4 lg:px-8 bg-gray-50" ref={popularSectionRef}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 space-y-4 md:space-y-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Our Popular Courses</h2>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search Something"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-48 md:w-64 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Course Categories */}
          <div className="flex flex-wrap gap-4 mb-12">
            {courseCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group hover:scale-105 h-full flex flex-col"
              >
                {/* Course Image */}
                {renderCourseImage(course)}

                {/* Course Content */}
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{course.title}</h3>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1 text-orange-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-orange-500">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">{course.students}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                  <div className="flex items-center justify-between mt-auto pt-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-bold text-gray-900">{course.rating}</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </div>
                      <span className="text-xs text-green-600 font-medium">({course.reviews})</span>
                    </div>
                    <Link to={`/courses/${course.slug}`}>
                      <Button
                        variant="ghost"
                        className="text-orange-500 hover:text-orange-600 font-semibold text-sm p-0"
                      >
                        View More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="text-[50px] font-bold text-gray-900 leading-tight font-syne">
                Earn Industry-Recognized
                <br />
                <span className="text-orange-500">Certificates</span>
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-exo">Career Opportunities</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Earning recognized certifications in programming and CAD opens doors across industries—from tech startups to engineering firms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <Settings className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-exo">Professional Credibility</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Having a credential shows dedication to your craft—it boosts trust and credibility with employers, clients, and peers. Plus, you'll gain confidence to tackle increasingly complex problems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-exo">Demonstrable, Real-World Skills</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Beyond theory, our certification confirms your ability to produce actual scripts, tools, CAD designs, and automations. Employers and clients value practical competence—often more than common "completion" certificates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

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

      <Footer />
    </div>
  );
}
