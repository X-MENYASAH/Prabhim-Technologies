import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Users, MessageCircle, Code, Laptop, TrendingUp } from "lucide-react";

// Your articles data
const articles = [
  {
    id: 1,
    title: "Best Website to research for your next project",
    category: "DEVELOPMENT",
    date: "13 March 2023",
    excerpt:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
    icon: Monitor,
    bgGradient: "from-blue-500 to-purple-600",
    imageTheme: "laptop-desk",
  },
  {
    id: 2,
    title: "Boost Team Performance With Tailored IT Training",
    category: "DEVELOPMENT",
    date: "13 March 2023",
    excerpt:
      "Equip your team with customized IT courses—covering software, testing, automation—to increase productivity, reduce errors, and foster innovation through hands-on, strategic learning.",
    icon: Users,
    bgGradient: "from-gray-600 to-gray-800",
    imageTheme: "workspace",
  },
  {
    id: 3,
    title: "Automate QA Processes With Industry-Leading Testing Tools",
    category: "DEVELOPMENT",
    date: "13 March 2023",
    excerpt:
      "Learn to implement automated testing frameworks like Selenium and Cypress, integrating CI/CD pipelines to ensure high-quality, reliable software releases.",
    icon: MessageCircle,
    bgGradient: "from-blue-400 to-blue-600",
    imageTheme: "qa-chat",
  },
  {
    id: 4,
    title: "Enhance CAD Productivity Through Smart Customization",
    category: "DEVELOPMENT",
    date: "13 March 2023",
    excerpt:
      "Explore how CAD scripting, macros, and templating elevate engineering workflows—boosting precision, consistency, and collaboration across design teams.",
    icon: Code,
    bgGradient: "from-gray-500 to-gray-700",
    imageTheme: "cad-coding",
  },
  {
    id: 5,
    title: "Stay Ahead In IT: Emerging Tools And Skillsets",
    category: "DEVELOPMENT",
    date: "13 March 2023",
    excerpt:
      "Stay current with AI, cloud, cybersecurity, and DevOps—skill areas essential for modern software development and infrastructure management success.",
    icon: Laptop,
    bgGradient: "from-cyan-500 to-blue-600",
    imageTheme: "tech-coding",
  },
  {
    id: 6,
    title: "ROI of IT Training: Real Benefits For Your Organization",
    category: "DEVELOPMENT",
    date: "13 March 2023",
    excerpt:
      "Discover how investing in IT training boosts efficiency, employee retention, risk reduction, customer experience, and long-term organizational growth.",
    icon: TrendingUp,
    bgGradient: "from-amber-500 to-orange-600",
    imageTheme: "business-meeting",
  },
];

export function LatestArticlesSection() {
  // Remove the TypeScript type, just use plain article parameter
  const renderArticleImage = (article) => {
    const articleImages = {
      1: "/art1.jpg",
      2: "/art2.png",
      3: "/art3.jpg",
      4: "/art4.jpg",
      5: "/art5.jpg",
      6: "/art6.png",
    };

    return (
      <div className="relative h-48 rounded-t-2xl overflow-hidden group">
        {/* Background Image */}
        <img src={articleImages[article.id]}
          alt={article.title}
           
          className="object-cover transition-transform duration-700 group-hover:scale-125 absolute inset-0 w-full h-full"
        />
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
        {/* Date Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            {article.date}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 font-exo">
              Latest <span className="text-orange-500">Articles</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">Explore our Blogs</p>
          </div>
          <a
            href="/blogs"
            className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-4 md:px-6 py-2 rounded-full bg-transparent text-sm md:text-base"
          >
            All Blogs
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-2 cursor-pointer"
            >
              {/* Article Image */}
              {renderArticleImage(article)}
              {/* Article Content */}
              <CardContent className="p-6 group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white transition-all duration-500">
                {/* Category and Date */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm font-semibold text-gray-900">{article.category}</span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                {/* Article Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight font-raleway group-hover:text-orange-600 transition-colors duration-500">{article.title}</h3>
                {/* Article Excerpt */}
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{article.excerpt}</p>
                {/* Read More Link */}
                <button className="text-orange-500 group-hover:text-orange-600 font-semibold text-sm transition-all duration-300 group-hover:scale-105">
                  Read More...
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
