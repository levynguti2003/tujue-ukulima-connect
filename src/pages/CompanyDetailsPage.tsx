import Layout from "@/components/layout/Layout";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Play, ExternalLink, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/videos/VideoModal";
import ContactForm from "@/components/companies/ContactForm";

const companyData = {
  "skyfield-aerotech": {
    name: "Skyfield Aerotech",
    tagline: "Revolutionizing Agriculture Through Advanced Drone Technology",
    description: "At Skyfield Aerotech, we're pioneering the future of precision agriculture through cutting-edge drone technology. Our innovative solutions help farmers optimize crop yields, reduce costs, and promote sustainable farming practices.",
    logo: "https://res.cloudinary.com/dalbjrgto/image/upload/v1737550678/WhatsApp_Image_2024-09-15_at_02.14.00_c07c6102_a4qllk.jpg",
    coverImage: "https://res.cloudinary.com/dalbjrgto/image/upload/v1748529254/WhatsApp_Image_2025-05-29_at_17.32.56_ea67fa29_ykt8q4.jpg",
    established: "2020",
    location: "Nairobi, Kenya",
    contact: {
      phone: "+254 700 123 456",
      email: "skyfield.kenya@gmail.com"
    },
    videos: [
      {
        id: "9Xgd47PJTa8",
        title: "Precision Agriculture with Drones",
        description: "Discover how our drones are transforming modern farming practices",
        thumbnail: `https://img.youtube.com/vi/9Xgd47PJTa8/maxresdefault.jpg`
      },
      {
        id: "SJ0TysUEyic",
        title: "Crop Monitoring Solutions",
        description: "Advanced crop monitoring and analysis using drone technology",
        thumbnail: `https://img.youtube.com/vi/SJ0TysUEyic/maxresdefault.jpg`
      },
      {
        id: "a76KdORXA6M",
        title: "Smart Farming Innovation",
        description: "The future of smart farming with AI-powered drones",
        thumbnail: `https://img.youtube.com/vi/a76KdORXA6M/maxresdefault.jpg`
      },
      {
        id: "5nC2eyrpUDk",
        title: "Sustainable Agriculture Technology",
        description: "How drone technology promotes sustainable farming practices",
        thumbnail: `https://img.youtube.com/vi/5nC2eyrpUDk/maxresdefault.jpg`
      },
      {
        id: "DTg2fU9I2DM",
        title: "Agricultural Drone Services",
        description: "Comprehensive drone services for modern agriculture",
        thumbnail: `https://img.youtube.com/vi/DTg2fU9I2DM/maxresdefault.jpg`
      }
    ],
    blogs: [
      {
        id: 1,
        title: "The Future of Precision Agriculture: How Drones Are Changing Farming",
        excerpt: "Explore how drone technology is revolutionizing precision agriculture and helping farmers make data-driven decisions for better crop yields.",
        author: "Dr. Sarah Kimani",
        date: "January 15, 2025",
        category: "Technology",
        readTime: "8 min read"
      },
      {
        id: 2,
        title: "Sustainable Farming Practices with Drone Technology",
        excerpt: "Learn how our drone solutions promote environmental sustainability while maximizing agricultural productivity and resource efficiency.",
        author: "Michael Ochieng",
        date: "January 10, 2025",
        category: "Sustainability",
        readTime: "6 min read"
      },
      {
        id: 3,
        title: "Crop Health Monitoring: Early Detection Saves Harvests",
        excerpt: "Discover how advanced drone sensors can detect crop diseases and pest infestations before they become visible to the naked eye.",
        author: "Grace Wanjiku",
        date: "January 5, 2025",
        category: "Crop Management",
        readTime: "7 min read"
      },
      {
        id: 4,
        title: "ROI Analysis: Why Farmers Are Investing in Drone Technology",
        excerpt: "A comprehensive analysis of the return on investment that farmers experience when implementing drone technology in their operations.",
        author: "James Mutua",
        date: "December 28, 2024",
        category: "Business",
        readTime: "10 min read"
      }
    ]
  },
  "smachs-foundation": {
    name: "Smachs Foundation",
    tagline: "Empowering Agricultural Communities Through Education and Innovation",
    description: "Smachs Foundation is dedicated to transforming agricultural communities through comprehensive education programs, sustainable farming practices, and innovative solutions. We believe in empowering farmers with knowledge and tools to create lasting positive change in their communities.",
    logo: "https://res.cloudinary.com/dalbjrgto/image/upload/v1748920724/smachs_logo_uw03kp.png",
    coverImage: "https://res.cloudinary.com/dalbjrgto/image/upload/v1748920724/smachs_foundation_bskd3k.jpg",
    established: "2023",
    location: "Nairobi, Kenya",
    contact: {
      phone: "(+254) 700 090 999",
      email: "info@smachs.foundation"
    },
    videos: [
      {
        id: "uzn84Zjnd94",
        title: "Community Agricultural Development",
        description: "Empowering farming communities through education and sustainable practices",
        thumbnail: `https://img.youtube.com/vi/uzn84Zjnd94/maxresdefault.jpg`
      },
      {
        id: "tBiRbPlHbJI",
        title: "Sustainable Farming Education",
        description: "Training programs for modern agricultural techniques",
        thumbnail: `https://img.youtube.com/vi/tBiRbPlHbJI/maxresdefault.jpg`
      },
      {
        id: "bIn2rRiCEHM",
        title: "Agricultural Innovation Programs",
        description: "Innovative solutions for smallholder farmers",
        thumbnail: `https://img.youtube.com/vi/bIn2rRiCEHM/maxresdefault.jpg`
      },
      {
        id: "5oVvetZm5Oo",
        title: "Community Impact Stories",
        description: "Real stories of transformation in agricultural communities",
        thumbnail: `https://img.youtube.com/vi/5oVvetZm5Oo/maxresdefault.jpg`
      },
      {
        id: "n562ieDtTyU",
        title: "Live Agricultural Workshop",
        description: "Interactive learning sessions with farming communities",
        thumbnail: `https://img.youtube.com/vi/n562ieDtTyU/maxresdefault.jpg`
      },
      {
        id: "sTRlgdZEizI",
        title: "Organic Farming Techniques",
        description: "Sustainable organic farming methods and practices",
        thumbnail: `https://img.youtube.com/vi/sTRlgdZEizI/maxresdefault.jpg`
      },
      {
        id: "Lv7wylrazfw",
        title: "Water Conservation in Agriculture",
        description: "Efficient water management for sustainable farming",
        thumbnail: `https://img.youtube.com/vi/Lv7wylrazfw/maxresdefault.jpg`
      },
      {
        id: "qgaSmCXcfvY",
        title: "Crop Diversification Strategies",
        description: "Building resilient farming systems through crop diversity",
        thumbnail: `https://img.youtube.com/vi/qgaSmCXcfvY/maxresdefault.jpg`
      },
      {
        id: "xXmWDX9KTCM",
        title: "Agricultural Finance and Support",
        description: "Financial literacy and support systems for farmers",
        thumbnail: `https://img.youtube.com/vi/xXmWDX9KTCM/maxresdefault.jpg`
      },
      {
        id: "pt48gO-y9W4",
        title: "Quick Farming Tips",
        description: "Essential farming tips for better yields",
        thumbnail: `https://img.youtube.com/vi/pt48gO-y9W4/maxresdefault.jpg`
      },
      {
        id: "R-YjuMhAVMk",
        title: "Soil Health Management",
        description: "Maintaining and improving soil fertility naturally",
        thumbnail: `https://img.youtube.com/vi/R-YjuMhAVMk/maxresdefault.jpg`
      },
      {
        id: "roZtOXpGA8s",
        title: "Climate-Smart Agriculture",
        description: "Adapting farming to climate change challenges",
        thumbnail: `https://img.youtube.com/vi/roZtOXpGA8s/maxresdefault.jpg`
      },
      {
        id: "dS6HP8N8vzs",
        title: "Pest Management Solutions",
        description: "Natural and effective pest control methods",
        thumbnail: `https://img.youtube.com/vi/dS6HP8N8vzs/maxresdefault.jpg`
      },
      {
        id: "UZt2wqIksQU",
        title: "Harvest Optimization",
        description: "Maximizing harvest quality and quantity",
        thumbnail: `https://img.youtube.com/vi/UZt2wqIksQU/maxresdefault.jpg`
      },
      {
        id: "dts1jVPEszM",
        title: "Agricultural Technology Adoption",
        description: "Integrating modern technology in traditional farming",
        thumbnail: `https://img.youtube.com/vi/dts1jVPEszM/maxresdefault.jpg`
      }
    ],
    blogs: [
      {
        id: 1,
        title: "Building Resilient Agricultural Communities Through Education",
        excerpt: "Discover how comprehensive education programs are transforming farming communities and creating sustainable agricultural practices across East Africa.",
        author: "Dr. Alice Nambi",
        date: "January 20, 2025",
        category: "Education",
        readTime: "9 min read"
      },
      {
        id: 2,
        title: "Sustainable Farming: A Path to Food Security",
        excerpt: "Explore sustainable farming practices that not only protect the environment but also ensure long-term food security for growing populations.",
        author: "Samuel Kiprotich",
        date: "January 18, 2025",
        category: "Sustainability",
        readTime: "7 min read"
      },
      {
        id: 3,
        title: "Empowering Women in Agriculture: Stories of Change",
        excerpt: "Learn about the remarkable women who are leading agricultural transformation in their communities and inspiring the next generation of farmers.",
        author: "Margaret Achieng",
        date: "January 15, 2025",
        category: "Community",
        readTime: "8 min read"
      },
      {
        id: 4,
        title: "Climate-Smart Agriculture: Adapting to Change",
        excerpt: "Understanding how farmers can adapt their practices to climate change while maintaining productivity and supporting their livelihoods.",
        author: "Dr. Joseph Mukasa",
        date: "January 12, 2025",
        category: "Climate",
        readTime: "10 min read"
      },
      {
        id: 5,
        title: "Organic Farming: Benefits and Best Practices",
        excerpt: "A comprehensive guide to organic farming methods, their environmental benefits, and how they contribute to healthier food systems.",
        author: "Grace Nakato",
        date: "January 8, 2025",
        category: "Organic Farming",
        readTime: "6 min read"
      },
      {
        id: 6,
        title: "Water Conservation Techniques for Small-Scale Farmers",
        excerpt: "Practical water conservation strategies that help farmers maximize their yields while preserving this precious resource for future generations.",
        author: "Peter Wanyama",
        date: "January 5, 2025",
        category: "Water Management",
        readTime: "8 min read"
      }
    ]
  },
  "pula-advisors": {
    name: "Pula Advisors",
    tagline: "Protecting Agricultural Investments Through Innovative Insurance Solutions",
    description: "Pula Advisors is a leading agricultural insurance and advisory company dedicated to protecting farmers and agricultural investments across Africa. We provide innovative insurance products, risk management solutions, and advisory services to help farmers mitigate risks and build resilient agricultural businesses.",
    logo: "https://res.cloudinary.com/dalbjrgto/image/upload/v1748928908/pula_pgpec3.png",
    coverImage: "https://res.cloudinary.com/dalbjrgto/image/upload/v1748928909/poula_ylmznu.png",
    established: "2015",
    location: "Nairobi, Kenya",
    contact: {
      phone: "+254 700 789 012",
      email: "info@pula.io"
    },
    videos: [
      {
        id: "ZBloTs2jEgA",
        title: "Agricultural Insurance Solutions",
        description: "Comprehensive insurance coverage for agricultural investments",
        thumbnail: `https://img.youtube.com/vi/ZBloTs2jEgA/maxresdefault.jpg`
      },
      {
        id: "CKcs7xpbW9U",
        title: "Risk Management for Farmers",
        description: "Effective risk management strategies for agricultural businesses",
        thumbnail: `https://img.youtube.com/vi/CKcs7xpbW9U/maxresdefault.jpg`
      },
      {
        id: "JwVeSMiRuFw",
        title: "Agricultural Advisory Services",
        description: "Expert advisory services for sustainable farming practices",
        thumbnail: `https://img.youtube.com/vi/JwVeSMiRuFw/maxresdefault.jpg`
      },
      {
        id: "cMMZEWLlL0c",
        title: "Insurance Technology Innovation",
        description: "Innovative technology solutions in agricultural insurance",
        thumbnail: `https://img.youtube.com/vi/cMMZEWLlL0c/maxresdefault.jpg`
      },
      {
        id: "-vHF1HAsfrQ",
        title: "Farmer Protection Programs",
        description: "Comprehensive protection programs for smallholder farmers",
        thumbnail: `https://img.youtube.com/vi/-vHF1HAsfrQ/maxresdefault.jpg`
      },
      {
        id: "tKP0Wf2-_hg",
        title: "Agricultural Investment Security",
        description: "Securing agricultural investments through innovative solutions",
        thumbnail: `https://img.youtube.com/vi/tKP0Wf2-_hg/maxresdefault.jpg`
      }
    ],
    blogs: [
      {
        id: 1,
        title: "The Importance of Agricultural Insurance in Modern Farming",
        excerpt: "Understanding how agricultural insurance protects farmers from unexpected losses and helps build resilient farming businesses across Africa.",
        author: "Dr. Rose Gichuru",
        date: "January 22, 2025",
        category: "Insurance",
        readTime: "7 min read"
      },
      {
        id: 2,
        title: "Climate Risk Management for Agricultural Investments",
        excerpt: "Comprehensive strategies for managing climate-related risks in agriculture and protecting investments from weather uncertainties.",
        author: "Samuel Njoroge",
        date: "January 19, 2025",
        category: "Risk Management",
        readTime: "9 min read"
      },
      {
        id: 3,
        title: "Technology-Driven Insurance Solutions for Smallholder Farmers",
        excerpt: "How innovative technology is making agricultural insurance more accessible and affordable for smallholder farmers across the continent.",
        author: "Mary Wanjiku",
        date: "January 16, 2025",
        category: "Technology",
        readTime: "8 min read"
      },
      {
        id: 4,
        title: "Building Resilient Agricultural Value Chains",
        excerpt: "Strategies for creating robust agricultural value chains that can withstand market volatility and climate challenges.",
        author: "James Kamau",
        date: "January 13, 2025",
        category: "Value Chains",
        readTime: "10 min read"
      }
    ]
  }
};

const CompanyDetailsPage = () => {
  const { companyId } = useParams();
  const [selectedVideo, setSelectedVideo] = useState<{id: string, title: string} | null>(null);
  
  const company = companyData[companyId as keyof typeof companyData];

  if (!company) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Company Not Found</h1>
            <p className="text-gray-600">The company you're looking for doesn't exist.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <img
            src={company.coverImage}
            alt={company.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-6 text-white">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                />
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-2">
                    {company.name}
                  </h1>
                  <p className="text-lg sm:text-xl opacity-90 mb-4">{company.tagline}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {company.location}
                    </span>
                    <span>Est. {company.established}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About {company.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">{company.description}</p>
                
                {/* Contact Form */}
                <ContactForm 
                  companyName={company.name}
                  companyEmail={company.contact.email}
                />
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-tu-green-600" />
                      <span>{company.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-tu-green-600" />
                      <span>{company.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-tu-green-600" />
                      <span>{company.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Educational Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {company.videos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedVideo(video)}>
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Latest Insights & Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {company.blogs.map((blog) => (
                <Card key={blog.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-tu-green-100 text-tu-green-700">{blog.category}</Badge>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-tu-green-600 transition-colors cursor-pointer">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {blog.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {blog.date}
                        </span>
                      </div>
                      <span>{blog.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoId={selectedVideo.id}
          title={selectedVideo.title}
        />
      )}
    </Layout>
  );
};

export default CompanyDetailsPage;
