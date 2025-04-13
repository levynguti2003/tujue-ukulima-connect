
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ExternalLink } from "lucide-react";

// Updated article data with LinkedIn links
const articles = [
  {
    id: 1,
    title: "The Science of Rotor-Induced Vortices: Revolutionizing Agricultural Spraying Efficiency",
    excerpt: "Learn how the physics of rotor-induced vortices is transforming agricultural spraying techniques for improved efficiency and coverage.",
    author: "Tujue Ukulima Team",
    date: "April 12, 2025",
    category: "Precision Agriculture",
    image: "https://images.unsplash.com/photo-1586818079715-22df28fee361",
    externalUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7275044559825371136"
  },
  {
    id: 2,
    title: "The Internet of Things (IoT) in Smart Farming",
    excerpt: "Discover how IoT sensors and connected devices are enabling data-driven decision making and automation in modern agriculture.",
    author: "Michael Ochieng",
    date: "April 8, 2025",
    category: "Smart Farming",
    image: "https://images.unsplash.com/photo-1520453803296-c39eabe2dab4",
    externalUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7266351263036960768"
  },
  {
    id: 3,
    title: "Why Innovation Requires Careful Consideration of the Broader Ecosystem",
    excerpt: "Exploring how successful agricultural innovation depends on understanding and adapting to the complete farming ecosystem.",
    author: "Grace Wanjiku",
    date: "April 5, 2025",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad",
    externalUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7265227993009049600"
  },
  {
    id: 4,
    title: "How Drones and AI Are Shaping the Future of Rice Farming",
    excerpt: "An in-depth look at how drone technology combined with artificial intelligence is transforming rice cultivation practices.",
    author: "Dr. Sarah Kamau",
    date: "April 2, 2025",
    category: "Drone Technology",
    image: "https://images.unsplash.com/photo-1602492225818-4056a71f6d5c",
    externalUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7262377464142692352"
  }
];

const RecentArticles = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">
            Recent Articles
          </h2>
          <Button asChild variant="outline">
            <Link to="/articles">View all articles</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden h-full flex flex-col card-hover">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-tu-green-600">
                  {article.category}
                </Badge>
              </div>
              
              <CardContent className="pt-6 flex-grow">
                <a href={article.externalUrl} target="_blank" rel="noopener noreferrer" className="group">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-tu-green-600 transition-colors flex items-start">
                    {article.title}
                    <ExternalLink className="h-4 w-4 ml-1 mt-1 inline opacity-70" />
                  </h3>
                </a>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
              </CardContent>
              
              <CardFooter className="pt-0 pb-6 px-6 border-t border-gray-100 text-sm text-gray-500 flex justify-between">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{article.date}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
