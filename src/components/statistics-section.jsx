import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const statistics = [
  {
    number: "25K+",
    label: "Active Students",
  },
  {
    number: "899",
    label: "Total Courses",
  },
  {
    number: "158",
    label: "Instructor",
  },
  {
    number: "100%",
    label: "Satisfaction Rate",
  },
]

function StatisticsCard({ number, label }: { number: string; label: string }) {
  const display = useCountUp(number)
  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl border-0 group hover:-translate-y-2 cursor-pointer">
      <CardContent className="p-8 text-center group-hover:bg-gradient-to-br group-hover:from-orange-50 group-hover:to-white transition-all duration-500">
        <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-500">{display}</div>
        <div className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-500">{label}</div>
      </CardContent>
    </Card>
  )
}

function useCountUp(target: string, duration = 1500) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const ref = useRef<number | undefined>(undefined)

  // Extract numeric part and suffix
  const match = target.match(/([\d,.]+)([\w%+]*)/)
  const number = match ? parseFloat(match[1].replace(/,/g, '')) : 0
  const suffix = match ? match[2] : ''

  useEffect(() => {
    if (done) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const value = Math.floor(progress * number)
      setCount(value)
      if (progress < 1) {
        ref.current = requestAnimationFrame(step)
      } else {
        setCount(number)
        setDone(true)
      }
    }
    ref.current = requestAnimationFrame(step)
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current)
    }
  }, [number, duration, done])

  // Format with K+ if needed
  let display = count.toLocaleString()
  if (suffix.includes('K')) {
    display = (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  if (done) display = target
  if (suffix.includes('%') && !display.trim().endsWith('%')) display += '%'
  if (suffix.includes('+') && !display.endsWith('+')) display += '+'
  return display
}

export function StatisticsSection() {
  return (
    <section className="relative max-w-[1440px] w-full h-[400px] md:h-[381px] mx-auto overflow-hidden rounded-3xl border-2 border-orange-200/50 hover:border-orange-300/70 transition-all duration-500 flex items-center justify-center">
      <div className="absolute inset-0">
        <img src="/assets/images/img.jpg"
          alt="Statistics Background"
           
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 w-full max-w-5xl mx-auto px-4 md:px-6">
          {statistics.map((stat, index) => (
            <Card key={index} className="bg-white/90 shadow-md rounded-xl border-0 group transition-all duration-300 hover:scale-105 hover:border-orange-400 hover:bg-orange-50 cursor-pointer">
              <CardContent className="p-4 md:p-6 lg:p-8 text-center">
                <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-orange-500 mb-2 md:mb-3 lg:mb-4 group-hover:text-orange-600 transition-colors duration-300">{stat.number}</div>
                <div className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
