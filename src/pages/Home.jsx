import React from "react";
import { Button } from "@/components/ui/button";
import { FeaturedServicesSection } from "@/components/featured-services-section";
import { CoursesHeroSection } from "@/components/courses-hero-section";
import { FeaturedCoursesSection } from "@/components/featured-courses-section";
import { ProgrammingTrainingSection } from "@/components/programming-training-section";
import { SharpenSkillsSection } from "@/components/sharpen-skills-section";
import { ProgrammingCoursesSection } from "@/components/programming-courses-section";
import { CadCustomizationSection } from "@/components/cad-customization-section";
import { MasterCadSection } from "@/components/master-cad-section";
import { CadCoursesSection } from "@/components/cad-courses-section";
import { LatestArticlesSection } from "@/components/latest-articles-section";
import { CertificatesSection } from "@/components/certificates-section";
import { CadSoftwareCustomizationSection } from "@/components/cad-software-customization-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <main className="relative z-10 px-4 py-8 lg:px-8 min-h-screen">
                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        src="/assets/images/background.png"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover object-center"
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
                                <img
                                    src="/assets/images/brain.png"
                                    alt="AI Brain with Circuit Patterns and Glowing Neural Networks"
                                    className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
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

            <Footer />
        </div>
    );
}
