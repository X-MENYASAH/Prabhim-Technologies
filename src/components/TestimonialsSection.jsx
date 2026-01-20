import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Yash Nagpure",
    role: "Marketing Manager",
    testimonial:
      "Working with this team was an absolute pleasure. They delivered exactly what we needed for our website design project. The attention to detail and creativity exceeded our expectations.",
    avatar: "man-3",
  },
  {
    id: 2,
    name: "Gajanan Hage",
    role: "Creative Director",
    testimonial:
      "If you need a logo design that truly represents your brand, this is the team to work with. Professional, creative, and delivered on time. Highly recommend their services!",
    avatar: "man-1",
  },
  {
    id: 3,
    name: "Suraj Dhanorkar",
    role: "Business Owner",
    testimonial:
      "Outstanding service from start to finish. The team understood our vision perfectly and brought it to life. We couldn't be happier with the final results.",
    avatar: "man-2",
  },
  {
    id: 4,
    name: "Sankalp Visphute",
    role: "Business Owner",
    testimonial:
      "From concept to completion, the service was exceptional. The team captured our ideas with precision and delivered beyond our expectations. We're thrilled with the outcome.",
    avatar: "man-2",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const visibleCount = 3;
  const total = testimonials.length;
  const [userRatings, setUserRatings] = useState({});

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 8000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  const getVisible = () => {
    const arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push((current + i) % total);
    }
    return arr;
  };

  const visible = getVisible();

  const handleDotClick = (idx) => {
    setCurrent(idx);
  };

  const handleStarClick = (testimonialId, rating) => {
    setUserRatings((prev) => ({ ...prev, [testimonialId]: rating }));
  };

  const renderAvatar = (avatar, name) => {
    const avatarImages = {
      "man-3": "/yash.jpg",
      "man-1": "/suraj.jpg",
      "man-2": name === "Sankalp Visphute" ? "/Sankalp.jpg" : "/gajanan.jpg",
    };

    return (
      <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden">
        <img
          src={avatarImages[avatar]}
          alt={`${avatar} profile`}
          width={112}
          height={112}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  return (
    <section className="py-20 px-4 lg:px-8 bg-gray-50 relative overflow-hidden">
      <img
        src="/assets/images/Ornament 2.png"
        alt="Ornament Left Bottom"
        width={141}
        height={155}
        className="absolute bottom-8 z-0 pointer-events-none select-none rotate-0 -translate-x-2/5"
        style={{ left: "12.25rem", width: 141, height: 155 }}
        aria-hidden="true"
      />
      <img
        src="/assets/images/Ornament 2.png"
        alt="Ornament Right Top"
        width={141}
        height={155}
        className="absolute top-20 z-0 pointer-events-none select-none -rotate-0 -translate-x-2/5"
        style={{ right: "12.25rem", width: 141, height: 155 }}
        aria-hidden="true"
      />

      {/* Background Dots */}
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

        {/* Dotted lines */}
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

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 font-syne">
            Our <span className="text-orange-500">Testimonial</span>
          </h2>
        </div>

        <div className="relative flex flex-col items-center group">
          <div className="flex space-x-8 transition-transform duration-700" style={{ minWidth: 0 }}>
            {visible.map((idx, i) => {
              const testimonial = testimonials[idx];
              const isCenter = i === 1;
              const rating = userRatings[testimonial.id] || 0;
              return (
                <div key={`${testimonial.id}-${idx}`} className="bg-white rounded-2xl z-20">
                  <Card
                    className={`bg-white shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden border-0 cursor-pointer min-w-[298px] w-[298px] h-[477.5px] ${
                      isCenter ? "scale-110 z-10 ring-4 ring-orange-200" : "opacity-70 scale-95"
                    } group`}
                    style={{ pointerEvents: isCenter ? "auto" : "none" }}
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 pt-6 pb-4 relative group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-500">
                      <div className="flex justify-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleStarClick(testimonial.id, star)}
                            className="focus:outline-none"
                            tabIndex={isCenter ? 0 : -1}
                            aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                          >
                            <Star
                              className={`w-5 h-5 ${
                                star <= rating ? "text-white fill-current" : "text-white/50"
                              } transition-colors`}
                              fill={star <= rating ? "currentColor" : "none"}
                            />
                          </button>
                        ))}
                      </div>
                      <div className="flex justify-center">
                        <div className="relative -mb-10 z-10 group-hover:scale-110 transition-transform duration-500 translate-y-7">
                          {renderAvatar(testimonial.avatar, testimonial.name)}
                        </div>
                      </div>
                    </div>

                    <CardContent className="pt-20 pb-6 px-6 text-center group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white transition-all duration-500 bg-white">
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm">"{testimonial.testimonial}"</p>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-orange-600 transition-colors duration-500">
                          {testimonial.name}
                        </h4>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-12 space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-4 h-4 rounded-full border-2 border-orange-400 transition-colors duration-300 ${
                  idx === current ? "bg-orange-500" : "bg-white hover:bg-orange-200"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
