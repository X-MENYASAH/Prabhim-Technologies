import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Users, Code, TestTube, User, ArrowRight } from "lucide-react";

const programmingCourses = [
  {
    id: 1,
    title: "C++ Programming Languages",
    duration: "2Weeks",
    students: "156 Students",
    description: "Master essential coding languages for modern software development and innovation.",
    topics: [
      "Master basic syntax, data types, and control structures",
      "Understand pointers, memory management, and dynamic allocation",
      "Learn Object-Oriented Programming (OOP): classes, inheritance, polymorphism",
      "Practice using the Standard Template Library (STL) for efficient code reuse",
    ],
    rating: 4.5,
    reviews: 124,
    icon: Code,
    bgGradient: "from-blue-600 to-blue-800",
    imageTheme: "coding",
  },
  {
    id: 2,
    title: "Python Programming Languages",
    duration: "2Weeks",
    students: "156 Students",
    description: "Learn to code with Python for powerful automation, data analysis, and real-world problem solving.",
    topics: [
      "Python has simple, readable code that's great for beginners.",
      "It's used in web development, data science, AI, and automation.",
      "Comes with powerful libraries like NumPy, Pandas, and Tkinter.",
      "Supports OOP concepts like classes, inheritance, and polymorphism.",
    ],
    rating: 4.5,
    reviews: 124,
    icon: User,
    bgGradient: "from-gray-600 to-gray-800",
    imageTheme: "developer",
  },
  {
    id: 3,
    title: "Java Programming Languages",
    duration: "2Weeks",
    students: "156 Students",
    description: "Acquire practical Java coding skills for building robust and scalable applications.",
    topics: [
      "Learn how to write Java programs using classes and methods",
      "Understand variables, data types, and conditional logic",
      "Practice loops, functions, and error handling in real code",
      "Build real-world projects like e-commerce systems and library management apps for hands-on learning",
    ],
    rating: 4.5,
    reviews: 124,
    icon: TestTube,
    bgGradient: "from-orange-500 to-teal-600",
    imageTheme: "testing",
  },
];

export function ProgrammingCoursesSection() {
  const renderCourseImage = (course) => {
    return (
      <div className="relative w-[394px] h-[250px] rounded-t-2xl overflow-hidden group mx-auto">
        {course.id === 1 && (
          <img src="/assets/images/fc1.jpg"
            alt="C++ Programming Languages Background"
             
            className="object-cover object-center transition-transform duration-700 group-hover:scale-125 absolute inset-0 w-full h-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {course.id === 2 && (
          <img src="/assets/images/pc2.jpg"
            alt="Python Programming Languages Background"
             
            className="object-cover object-center transition-transform duration-700 group-hover:scale-125 absolute inset-0 w-full h-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {course.id === 3 && (
          <img src="/assets/images/fc3.jpg"
            alt="Java Programming Languages Background"
             
            className="object-cover object-center transition-transform duration-700 group-hover:scale-125 absolute inset-0 w-full h-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
        <div className="absolute top-4 left-4 z-10">
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1 flex items-center space-x-2 border-2 border-white/20 backdrop-blur-sm">
            <span>Enroll Now</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            Popular
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[43px] font-bold text-gray-900 mb-3 md:mb-4 font-exo">
              <span className="text-orange-500">Programming</span> Courses
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Explore our Popular Courses
            </p>
          </div>
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100 px-4 md:px-6 py-2 rounded-full bg-transparent text-sm md:text-base"
          >
            All Courses
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {programmingCourses.map((course) => (
            <Card
              key={course.id}
              className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-2 cursor-pointer h-[711px] flex flex-col w-[393.33px] mx-auto"
            >
              {renderCourseImage(course)}
              <CardContent className="p-3 group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white transition-all duration-500 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins group-hover:text-orange-600 transition-colors duration-500">
                  {course.title}
                </h3>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center space-x-1 text-orange-500">
                    <Clock className="w-5 h-5" />
                    <span className="text-base font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-orange-500">
                    <Users className="w-5 h-5" />
                    <span className="text-base font-medium">{course.students}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3 leading-relaxed text-base">
                  "{course.description}"
                </p>
                <ul className="gap-y-1 flex flex-col">
                  {course.topics.map((topic, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-1 flex-shrink-0" />
                      <span className="text-base">{topic}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center space-x-1">
                      <span className="text-base font-bold text-gray-900">{course.rating}</span>
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                    <span className="text-sm text-green-600 font-medium">
                      ({course.reviews})
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-lg text-gray-900 group-hover:text-orange-500 font-semibold transition-all duration-300 group-hover:scale-105"
                  >
                    ₹799
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
