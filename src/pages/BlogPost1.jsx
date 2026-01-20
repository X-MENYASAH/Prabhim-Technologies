import React from "react";
import { Header } from "@/components/header"
import { AuthorCard } from "@/components/author-card"
import { BlogSidebar } from "@/components/blog-sidebar"
import { Footer } from "@/components/footer"

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        How CAD is Transforming Product Design in the <span className="text-orange-500">Modern Era</span>
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <AuthorCard />
                        <BlogSidebar />
                    </div>

                    {/* Main Article */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            {/* Featured Image */}
                            <div className="relative h-96 w-full">
                                <img
                                    src="/assets/images/pla.jpg"
                                    alt="CAD workspace with computer monitor showing technical drawings"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>

                            {/* Article Content */}
                            <div className="p-8">
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    Computer-Aided Design (CAD) has come a long way from the early days of 2D drafting. Today, CAD is the
                                    backbone of innovation across industries, empowering engineers and designers to create, test, and
                                    refine products with unprecedented speed and accuracy. In this article, we explore how modern CAD
                                    tools are reshaping product design, improving collaboration, and reducing time to market.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    The Evolution of <span className="text-orange-500">CAD</span>
                                </h2>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Traditional drafting methods required hours of manual effort, physical prototypes, and repetitive
                                    revisions. With CAD, designers can now:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                                    <li>Build highly detailed 3D models</li>
                                    <li>Simulate real-world conditions</li>
                                    <li>Detect and resolve design issues early</li>
                                </ul>

                                <p className="text-gray-700 leading-relaxed mb-8">
                                    Advanced software platforms such as Autodesk Inventor, SolidWorks, and CATIA have made it easier to
                                    visualize concepts and optimize performance before production even begins.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits That Drive Innovation</h2>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-5 h-5 bg-green-500 rounded-sm flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-white m-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Improved Accuracy and Consistency</h3>
                                            <p className="text-gray-700">
                                                CAD eliminates many human errors inherent in manual drafting. Features like parametric modeling
                                                ensure every part fits together exactly as intended.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-5 h-5 bg-green-500 rounded-sm flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-white m-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Faster Iteration</h3>
                                            <p className="text-gray-700">
                                                Changes to a design can be made in minutes instead of days. This accelerates product development
                                                cycles and helps businesses respond quickly to market demands.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-5 h-5 bg-green-500 rounded-sm flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-white m-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Better Collaboration</h3>
                                            <p className="text-gray-700">
                                                Cloud-based CAD systems allow teams to work together in real time, sharing designs, feedback,
                                                and revisions across locations.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-5 h-5 bg-green-500 rounded-sm flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-white m-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Cost Savings</h3>
                                            <p className="text-gray-700">
                                                By catching errors early and reducing the need for multiple physical prototypes, companies save
                                                significant time and money.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Emerging Trends in CAD</h2>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The future of CAD promises even more powerful capabilities:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                                    <li>
                                        <strong>Generative Design:</strong> Algorithms that automatically explore design alternatives based
                                        on defined goals and constraints.
                                    </li>
                                    <li>
                                        <strong>AI Integration:</strong> Smart suggestions to optimize performance and manufacturability.
                                    </li>
                                    <li>
                                        <strong>Virtual and Augmented Reality:</strong> Immersive visualization of 3D models to improve
                                        decision-making and client presentations.
                                    </li>
                                </ul>

                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>

                                <p className="text-gray-700 leading-relaxed">
                                    CAD technology is no longer just a tool—it's a catalyst for creativity and efficiency. Whether you're
                                    designing consumer products, complex machinery, or architectural structures, investing in modern CAD
                                    solutions can give your business a competitive edge.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
