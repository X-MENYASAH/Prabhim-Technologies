"use client"

import Image from "next/image"
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
    <Card className="bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl border-0">
      <CardContent className="p-8 text-center">
        <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-4">{display}</div>
        <div className="text-lg font-semibold text-gray-900">{label}</div>
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
    <section className="relative py-20 px-4 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-[1440px] h-[381px] mx-auto">
        <Image
          src="/img.jpg"
          alt="Statistics Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Statistics Cards */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <StatisticsCard key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
