
import { useState } from "react";
import ArticleCard, { ArticleProps } from "./ArticleCard";
import ArticleFilters from "./ArticleFilters";
import { Button } from "@/components/ui/button";

// Mock article data
const allArticles: ArticleProps[] = [
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
  },
  {
    id: 4,
    title: "The Benefits of Precision Drone Spraying",
    excerpt: "How targeted drone spraying can reduce chemical usage, save costs, and improve crop yields.",
    author: "John Mwangi",
    date: "March 30, 2025",
    category: "Drone Spraying",
    image: "https://images.unsplash.com/photo-1586818079715-22df28fee361",
    slug: "/articles/benefits-of-precision-drone-spraying"
  },
  {
    id: 5,
    title: "Adapting Rice Farming to Climate Change",
    excerpt: "Strategies for rice farmers to adapt to changing climate patterns and maintain productivity.",
    author: "Catherine Wambui",
    date: "March 27, 2025",
    category: "Climate-Smart Agriculture",
    image: "https://images.unsplash.com/photo-1602492225818-4056a71f6d5c",
    slug: "/articles/adapting-rice-farming-to-climate-change"
  },
  {
    id: 6,
    title: "Essential Rice Farming Techniques for Beginners",
    excerpt: "A comprehensive guide for those new to rice farming, covering all the basics you need to know.",
    author: "Peter Kariuki",
    date: "March 24, 2025",
    category: "Rice Farming",
    image: "https://images.unsplash.com/photo-1455853828816-0c301a011711",
    slug: "/articles/essential-rice-farming-techniques"
  },
  {
    id: 7,
    title: "IoT Applications in Modern Agriculture",
    excerpt: "How Internet of Things (IoT) devices are being used to monitor and optimize farming operations.",
    author: "Dr. James Oduor",
    date: "March 20, 2025",
    category: "Smart Farming",
    image: "https://images.unsplash.com/photo-1520453803296-c39eabe2dab4",
    slug: "/articles/iot-applications-in-agriculture"
  },
  {
    id: 8,
    title: "Organic Methods for Pest Management",
    excerpt: "Natural and environmentally friendly approaches to manage pests in your crops.",
    author: "Rose Nyambura",
    date: "March 18, 2025",
    category: "Pest Control",
    image: "https://images.unsplash.com/photo-1535850452425-140ee4a8dbae",
    slug: "/articles/organic-methods-for-pest-management"
  },
  {
    id: 9,
    title: "Understanding Different Soil Types for Rice Production",
    excerpt: "A guide to identifying soil types and optimizing them for successful rice cultivation.",
    author: "David Mugo",
    date: "March 15, 2025",
    category: "Soil Health",
    image: "https://images.unsplash.com/photo-1621113519399-8cbd4dc620f9",
    slug: "/articles/soil-types-for-rice-production"
  }
];

const ArticleList = () => {
  const [filteredArticles, setFilteredArticles] = useState<ArticleProps[]>(allArticles);
  const [visibleArticles, setVisibleArticles] = useState<number>(6);

  const handleFilterChange = (category: string) => {
    if (category === "All Topics") {
      setFilteredArticles(allArticles);
    } else {
      const filtered = allArticles.filter(article => article.category === category);
      setFilteredArticles(filtered);
    }
    setVisibleArticles(6); // Reset visible articles when filter changes
  };

  const loadMoreArticles = () => {
    setVisibleArticles(prev => Math.min(prev + 3, filteredArticles.length));
  };

  return (
    <div>
      <ArticleFilters onFilterChange={handleFilterChange} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.slice(0, visibleArticles).map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      
      {visibleArticles < filteredArticles.length && (
        <div className="mt-10 text-center">
          <Button onClick={loadMoreArticles} variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      )}
      
      {filteredArticles.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">No articles found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default ArticleList;
