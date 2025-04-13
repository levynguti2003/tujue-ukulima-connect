
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";

// Mock data for articles
const articles = [
  {
    id: 1,
    title: "Modern Approaches to Pest Control in Rice Farming",
    excerpt: "Discover the latest techniques in managing pests that affect rice crops while minimizing environmental impact.",
    author: "Dr. Sarah Kamau",
    date: "April 8, 2025",
    category: "Pest Control",
    image: "https://images.unsplash.com/photo-1473973266408-ed4e00bb0eb1",
    slug: "/articles/modern-approaches-to-pest-control"
  },
  {
    id: 2,
    title: "How Drone Technology is Revolutionizing Agriculture",
    excerpt: "Explore how drones are changing the way farmers monitor crops, apply treatments, and increase efficiency.",
    author: "Michael Ochieng",
    date: "April 5, 2025",
    category: "Smart Farming",
    image: "https://images.unsplash.com/photo-1586818079715-22df28fee361",
    slug: "/articles/drone-technology-in-agriculture"
  },
  {
    id: 3,
    title: "Improving Soil Health for Sustainable Crop Production",
    excerpt: "Learn essential practices for maintaining and enhancing soil fertility to ensure long-term agricultural productivity.",
    author: "Grace Wanjiku",
    date: "April 2, 2025",
    category: "Soil Health",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad",
    slug: "/articles/improving-soil-health"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Link to={article.slug}>
                  <h3 className="text-xl font-semibold mb-3 hover:text-tu-green-600 transition-colors">
                    {article.title}
                  </h3>
                </Link>
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
