"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Play, Clock, BookOpen, Users, Award, CheckCircle, Star, Moon, Sun } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function CadCustomizationPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark")
    }
  }

  const courseFeatures = [
    { icon: Clock, text: "360+ high-quality recorded lessons" },
    { icon: BookOpen, text: "Lifetime access" },
    { icon: Users, text: "27 course modules" },
    { icon: Award, text: "Certificate of completion" },
  ]

  const learningOutcomes = [
    "Accelerated Command Input",
    "Tailored Tool Palettes",
    "Scripted and Macro Automation",
    "Ribbon & UI Customization",
    "Custom Desktop Icons & Workspaces",
    "Intro to AutoLISP Programming",
  ]

  return (
    <div className={`min-h-screen bg-background ${isDarkMode ? "dark" : ""}`}>
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>By Professional Drafting</span>
                <span>•</span>
                <span>Categories: CAD Customization</span>
              </div>
              <h1 className="text-4xl font-bold text-foreground font-sans">AutoCAD Customization Full Course</h1>
            </div>

            {/* Video Player */}
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎥</div>
                  <h3 className="text-xl font-semibold">AutoCAD Customization Course</h3>
                  <p className="text-blue-100">Professional Training Video</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-16 h-16">
                    <Play className="h-6 w-6 ml-1" />
                  </Button>
                </div>
                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white/20 h-1 rounded-full mx-4">
                    <div className="bg-primary h-full w-1/3 rounded-full"></div>
                  </div>
                  <span className="text-white text-sm">10:45 / 32:18</span>
                </div>
              </div>
            </Card>

            {/* Course Tabs */}
            <div className="border-b border-border">
              <nav className="flex space-x-8">
                <button className="py-2 px-1 border-b-2 border-primary text-primary font-medium">Course Info</button>
                <button className="py-2 px-1 text-muted-foreground hover:text-foreground">Reviews</button>
              </nav>
            </div>

            {/* About Course */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-sans">About Course</h2>
              <p className="text-muted-foreground leading-relaxed font-sans">
                If you have been using AutoCAD for a while, you may have thought to progress in life, because no matter
                how much we advance in the digital world, our skills are valued more than our certificates. Therefore, I
                put these courses together to help you build your career. If I can teach you to be more productive and
                efficient, then I have done my job.
              </p>

              <h3 className="text-xl font-semibold font-sans">What Will You Learn?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-sans">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-sans">Course Content</h2>

              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="workspace-basics" className="border border-border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <div className="flex items-center justify-between w-full">
                      <span className="font-medium">Workspace Basics & Domain Hosting Explained</span>
                      <span className="text-sm text-muted-foreground">26:30</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>How to install wordpress locally for free</span>
                        <span>03:04</span>
                      </div>
                      <div className="flex justify-between">
                        <span>How to create domain and install wordpress on it</span>
                        <span>14:04</span>
                      </div>
                      <div className="flex justify-between">
                        <span>wordpress basic (Dashboard) settings</span>
                        <span>09:22</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {Array.from({ length: 6 }, (_, i) => (
                  <AccordionItem key={i} value={`section-${i}`} className="border border-border rounded-lg">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium">Creating a Complete Portfolio website (start to finish)</span>
                        <span className="text-sm text-muted-foreground">45:30</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3">
                      <p className="text-sm text-muted-foreground">
                        Detailed content for this section will be revealed here.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Button className="w-full mt-4 bg-transparent" variant="outline">
                Download Curriculum ↓
              </Button>
            </div>
          </div>

          {/* Right Column - Course Info */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">$500.0</div>
                  <Button className="w-full" size="lg">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Add to Wishlist
                  </Button>
                  <p className="text-sm text-muted-foreground">Investment includes Lifetime Access</p>
                </div>
              </CardContent>
            </Card>

            {/* Course Features */}
            <Card>
              <CardHeader>
                <CardTitle>Material Includes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {courseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <feature.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm">Lifetime updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm">Support group</span>
                </div>
              </CardContent>
            </Card>

            {/* Course Stats */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold">A course by</h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">All levels</p>
                  <p className="text-sm text-muted-foreground">26 hours on-demand</p>
                  <p className="text-sm text-muted-foreground">March 18, 2024 Last Updated</p>
                  <p className="text-sm text-muted-foreground">Certificate of completion</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Book a Free Demo Section */}
        <section className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">BOOK A</Badge>
              <h2 className="text-4xl font-bold mb-4 font-sans">
                Book a Free <span className="text-primary">Demo *</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-sans">
                See how our integrated solution transforms workflows, quality, and collaboration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Custom demo tailored to your needs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Ask anything</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Validate before committing</span>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Enter subject" />
                    </div>
                    <Button className="w-full" size="lg">
                      Book a Demo →
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certificate Section */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-green-100 via-blue-50 to-pink-100 dark:from-green-950/20 dark:via-blue-950/20 dark:to-pink-950/20 rounded-2xl p-8 overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold font-sans">A Beautiful Certificate Is Waiting For You !</h2>
                <p className="text-muted-foreground font-sans">
                  Add this certificate to your resume to demonstrate your skills & increase your chances of getting
                  noticed.
                </p>
              </div>
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <Image
                    src="/cert.png"
                    alt="Certificate Preview"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
