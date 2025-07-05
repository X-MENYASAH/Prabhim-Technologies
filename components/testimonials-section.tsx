"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, User } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Fatima Asrafy",
    role: "Marketing Manager",
    rating: 5,
    testimonial:
      "Working with this team was an absolute pleasure. They delivered exactly what we needed for our website design project. The attention to detail and creativity exceeded our expectations.",
    avatar: "woman-1",
  },
  {
    id: 2,
    name: "John Mitchell",
    role: "Creative Director",
    rating: 5,
    testimonial:
      "If you need a logo design that truly represents your brand, this is the team to work with. Professional, creative, and delivered on time. Highly recommend their services!",
    avatar: "man-1",
  },
  {
    id: 3,
    name: "David Rodriguez",
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
      "woman-1": "/test1.png", // Fatima Asrafy
      "man-1": "/test2.png",   // John Mitchell
      "man-2": "/test3.png",   // David Rodriguez
    }

    return (
      <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden">
        <Image
          src={avatarImages[avatar as keyof typeof avatarImages]}
          alt={`${avatar} profile`}
          width={80}
          height={80}
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Our <span className="text-orange-500">Testimonial</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden border-0"
            >
              {/* Orange Header with Stars and Avatar */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 pt-6 pb-4 relative">
                {/* Star Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-white fill-current" />
                  ))}
                </div>

                {/* Avatar positioned to overlap */}
                <div className="flex justify-center">
                  <div className="relative -mb-10 z-10">{renderAvatar(testimonial.avatar)}</div>
                </div>
              </div>

              {/* White Content Section */}
              <CardContent className="pt-12 pb-6 px-6 text-center">
                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">"{testimonial.testimonial}"</p>

                {/* Name and Role */}
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dimensions Badge */}
        <div className="flex justify-center">
          <div className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
            942 Hug x 477.5 Hug
          </div>
        </div>
      </div>
    </section>
  )
}
