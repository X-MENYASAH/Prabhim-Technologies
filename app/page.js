"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { useState } from "react";
import { WorkingMessage } from "@/components/ui/working-message";
import { FeaturedServicesSection } from "@/components/featured-services-section";
import { CoursesHeroSection } from "@/components/courses-hero-section";
import { FeaturedCoursesSection } from "@/components/featured-courses-section";
// import { StatisticsSection } from "@/components/statistics-section";
import { ProgrammingTrainingSection } from "@/components/programming-training-section";
import { SharpenSkillsSection } from "@/components/sharpen-skills-section";
import { ProgrammingCoursesSection } from "@/components/programming-courses-section";
import { CadCustomizationSection } from "@/components/cad-customization-section";
import { MasterCadSection } from "@/components/master-cad-section";
import { CadCoursesSection } from "@/components/cad-courses-section";
import { LatestArticlesSection } from "@/components/latest-articles-section";
import { CertificatesSection } from "@/components/certificates-section";
import { FooterSection } from "@/components/footer-section";
import { CadSoftwareCustomizationSection } from "@/components/cad-software-customization-section";
import { MobileMenu } from "@/components/mobile-menu";

export default function PrabhimHomepage() {
  // Remove showWorkingMessage state and handleWorkingLinkClick
  return (
    <div className="min-h-screen bg-white">
      {/* Remove Working Message modal */}
      {/* Header */}
      <header className="relative z-10 px-4 py-6 lg:px-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo1.png"
              alt="PRABHIM Logo"
              width={145.75}
              height={100}
              className="h-[100px] w-auto object-contain"
              priority
            />
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link
              href="/"
              className="text-orange-500 font-semibold text-sm tracking-wide hover:text-orange-600 transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/services"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer"
            >
              SERVICES
            </Link>
            <Link
              href="/courses"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer"
            >
              COURSES
            </Link>
            <Link
              href="/about"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer"
            >
              ABOUT US
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer"
            >
              CONTACT
            </Link>
            <Link
              href="/blogs"
              className="text-gray-600 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors cursor-pointer"
            >
              BLOGS
            </Link>
          </div>

          {/* Right Side - Mobile Menu and Login Button */}
          <div className="flex items-center space-x-3 lg:space-x-0">
            {/* Mobile Menu */}
            <div className="lg:hidden">
              <MobileMenu />
            </div>

            {/* Login Button */}
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-4 md:px-6 py-2 md:py-2.5 flex items-center space-x-2 shadow-lg transition-all duration-200 hover:shadow-xl text-sm md:text-base">
              <span className="font-medium">Login</span>
              <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-black" />
              </div>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-4 py-8 lg:px-8 min-h-screen">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/background.png"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-200px)]">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-10 lg:pr-8">
              <div className="space-y-6 md:space-y-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-gray-900 leading-[1.1] tracking-tight font-syne">
                  Empowering{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                    Innovation
                  </span>
                  <br />
                  through Software &<br />
                  Training Excellence
                </h1>

                <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-2xl">
                  Custom Software Solutions | Expert-Led Training in Programming, CAD & Testing
                </p>
              </div>

              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Explore More
              </Button>
            </div>

            {/* Right Content - Brain Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl h-[500px] lg:h-[650px] animate-float-alt">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-orange-300/20 rounded-full blur-3xl scale-110" />
                <Image
                  src="/brain.png"
                  alt="AI Brain with Circuit Patterns and Glowing Neural Networks"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Featured Services Section */}
      <FeaturedServicesSection />

      {/* Courses Hero Section */}
      <CoursesHeroSection />

      {/* Featured Courses Section */}
      <FeaturedCoursesSection />

      {/* Statistics Section (disabled for now) */}
      {/** <StatisticsSection /> **/}

      {/* Programming Training Section */}
      <ProgrammingTrainingSection />

      {/* Sharpen Skills Section */}
      <SharpenSkillsSection />

      {/* Programming Courses Section */}
      <ProgrammingCoursesSection />

      {/* CAD Software Customization Section */}
      <CadSoftwareCustomizationSection />

      {/* Master CAD Section */}
      <MasterCadSection />

      {/* CAD Courses Section */}
      <CadCoursesSection />

      {/* Latest Articles Section */}
      <LatestArticlesSection />

      {/* Certificates Section */}
      <CertificatesSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
