"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, User } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Yash Nagpure",
    role: "Marketing Manager",
    rating: 5,
    testimonial:
      "Working with this team was an absolute pleasure. They delivered exactly what we needed for our website design project. The attention to detail and creativity exceeded our expectations.",
    avatar: "woman-1",
  },
  {
    id: 2,
    name: "Suraj Dhanorkar",
    role: "Creative Director",
    rating: 5,
    testimonial:
      "If you need a logo design that truly represents your brand, this is the team to work with. Professional, creative, and delivered on time. Highly recommend their services!",
    avatar: "man-1",
  },
  {
    id: 3,
    name: "Gajanan Hage",
    role: "Business Owner",
    rating: 5,
    testimonial:
      "Outstanding service from start to finish. The team understood our vision perfectly and brought it to life. We couldn't be happier with the final results.",
    avatar: "man-2",
  },
  {
    id: 4,
    name: "Gajanan Hage",
    role: "Business Owner",
    rating: 5,
    testimonial:
      "Outstanding service from start to finish. The team understood our vision perfectly and brought it to life. We couldn't be happier with the final results.",
    avatar: "man-2",
  },
]

export function TestimonialsSection() {
  const renderAvatar = (avatar: string) => {
    const avatarImages = {
      "woman-1": "/yash.jpg", // Yash Nagpure
      "man-1": "/suraj.jpg",   // Suraj Dhanorkar
      "man-2": "/gajanan.jpg",   // Gajanan Hage
    }

    return (
      <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden">
        <Image
          src={avatarImages[avatar as keyof typeof avatarImages]}
          alt={`${avatar} profile`}
          width={112}
          height={112}
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  return (
    <section className="py-20 px-4 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background Dotted Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32">
          <div className="grid grid-cols-8 gap-1">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-orange-300 rounded-full opacity-60" />
            ))}
          </div>
        </div>

        <div className="absolute top-20 right-16 w-24 h-24">
          <div className="grid grid-cols-6 gap-1">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-orange-300 rounded-full opacity-40" />
            ))}
          </div>
        </div>

        <div className="absolute bottom-16 left-20 w-20 h-20">
          <div className="grid grid-cols-5 gap-1">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-orange-300 rounded-full opacity-50" />
            ))}
          </div>
        </div>

        {/* Dotted Lines */}
        <div className="absolute top-1/2 left-8 w-32 h-px">
          <div className="flex space-x-1">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-1 h-px bg-gray-400 opacity-60" />
            ))}
          </div>
        </div>

        <div className="absolute bottom-1/3 right-8 w-24 h-px">
          <div className="flex space-x-1">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1 h-px bg-gray-400 opacity-60" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 font-syne">
            Our <span className="text-orange-500">Testimonial</span>
          </h2>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative overflow-x-hidden">
          <div className="flex space-x-8 animate-marquee">
            {testimonials.concat(testimonials).map((testimonial, idx) => (
              <Card
                key={testimonial.id + '-' + idx}
                className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden border-0 group hover:-translate-y-3 cursor-pointer min-w-[340px] w-[340px]"
              >
                {/* Orange Header with Stars and Avatar */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 pt-6 pb-4 relative group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-500">
                  {/* Star Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-white fill-current" />
                    ))}
                  </div>
                  {/* Avatar positioned to overlap */}
                  <div className="flex justify-center">
                    <div className="relative -mb-10 z-10 group-hover:scale-110 transition-transform duration-500">{renderAvatar(testimonial.avatar)}</div>
                  </div>
                </div>
                {/* White Content Section */}
                <CardContent className="pt-12 pb-6 px-6 text-center group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white transition-all duration-500">
                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">"{testimonial.testimonial}"</p>
                  {/* Name and Role */}
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-orange-600 transition-colors duration-500">{testimonial.name}</h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: marquee 30s linear infinite;
            }
          `}</style>
        </div>

        {/* Dimensions Badge */}
        <div >
          <div >
            
          </div>
        </div>
      </div>
    </section>
  )
}
