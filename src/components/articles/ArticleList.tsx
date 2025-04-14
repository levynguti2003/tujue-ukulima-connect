import { useState } from "react";
import ArticleCard, { ArticleProps } from "./ArticleCard";
import ArticleFilters from "./ArticleFilters";
import { Button } from "@/components/ui/button";

// Mock article data with new images
const allArticles: ArticleProps[] = [
  {
    id: 1,
    title: "Modern Approaches to Pest Control in Rice Farming",
    excerpt: "Discover the latest techniques in managing pests that affect rice crops while minimizing environmental impact.",
    author: "Dr. Sarah Kamau",
    date: "April 8, 2025",
    category: "Pest Control",
    image: "/lovable-uploads/361f76f4-ed78-460a-85f2-af5956e07c61.png",
    slug: "/articles/modern-approaches-to-pest-control",
    externalUrl: "https://www.researchgate.net/publication/358090833_Rice_Pest_Management_Using_Modern_Techniques_and_Novel_Approaches"
  },
  {
    id: 2,
    title: "How Drone Technology is Revolutionizing Agriculture",
    excerpt: "Explore how drones are changing the way farmers monitor crops, apply treatments, and increase efficiency.",
    author: "Michael Ochieng",
    date: "April 5, 2025",
    category: "Smart Farming",
    image: "/lovable-uploads/65bf3cfd-f8df-49a0-8173-c3ef64e14202.png",
    slug: "/articles/drone-technology-in-agriculture",
    externalUrl: "https://www.croptracker.com/blog/drone-technology-in-agriculture.html"
  },
  {
    id: 3,
    title: "Improving Soil Health for Sustainable Crop Production",
    excerpt: "Learn essential practices for maintaining and enhancing soil fertility to ensure long-term agricultural productivity.",
    author: "Grace Wanjiku",
    date: "April 2, 2025",
    category: "Soil Health",
    image: "/lovable-uploads/0296408b-5aa4-46d9-ad93-6504368db417.png",
    slug: "/articles/improving-soil-health",
    externalUrl: "https://www.farmers.gov/conservation/soil-health"
  },
  {
    id: 4,
    title: "The Benefits of Precision Drone Spraying",
    excerpt: "How targeted drone spraying can reduce chemical usage, save costs, and improve crop yields.",
    author: "John Mwangi",
    date: "March 30, 2025",
    category: "Drone Spraying",
    image: "/lovable-uploads/8e762098-9784-4946-ba5a-edd23f41710f.png",
    slug: "/articles/benefits-of-precision-drone-spraying",
    externalUrl: "https://ohioline.osu.edu/factsheet/fabe-540"
  },
  {
    id: 5,
    title: "Adapting Rice Farming to Climate Change",
    excerpt: "Strategies for rice farmers to adapt to changing climate patterns and maintain productivity.",
    author: "Catherine Wambui",
    date: "March 27, 2025",
    category: "Climate-Smart Agriculture",
    image: "/lovable-uploads/04ecc3fb-2370-45cc-93d5-77e51b3c1f9a.png",
    slug: "/articles/adapting-rice-farming-to-climate-change",
    externalUrl: "https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2022.926059/full"
  },
  {
    id: 6,
    title: "Essential Rice Farming Techniques for Beginners",
    excerpt: "A comprehensive guide for those new to rice farming, covering all the basics you need to know.",
    author: "Peter Kariuki",
    date: "March 24, 2025",
    category: "Rice Farming",
    image: "/lovable-uploads/0fb0c8d3-4bbf-44d4-95f3-d59052807779.png",
    slug: "/articles/essential-rice-farming-techniques",
    externalUrl: "https://www.haifa-group.com/rice-fertilizer/crop-guide-rice-cultivation"
  },
  {
    id: 7,
    title: "IoT Applications in Modern Agriculture",
    excerpt: "How Internet of Things (IoT) devices are being used to monitor and optimize farming operations.",
    author: "Dr. James Oduor",
    date: "March 20, 2025",
    category: "Smart Farming",
    image: "/lovable-uploads/b8b7ef4a-5d02-4b91-bca8-1d3d332cd80b.png",
    slug: "/articles/iot-applications-in-agriculture",
    externalUrl: "https://www.iot-now.com/2024/10/30/147619-how-iot-is-transforming-yields-and-optimising-resources-in-agriculture/"
  },
  {
    id: 8,
    title: "Organic Methods for Pest Management",
    excerpt: "Natural and environmentally friendly approaches to manage pests in your crops.",
    author: "Rose Nyambura",
    date: "March 18, 2025",
    category: "Pest Control",
    image: "/lovable-uploads/e77946cd-a4f1-4004-8233-f98a4caeb674.png",
    slug: "/articles/organic-methods-for-pest-management",
    externalUrl: "https://www.ams.usda.gov/sites/default/files/media/Organic%20Pest%20Management_FINAL.pdf"
  },
  {
    id: 9,
    title: "Understanding Different Soil Types for Rice Production",
    excerpt: "A guide to identifying soil types and optimizing them for successful rice cultivation.",
    author: "David Mugo",
    date: "March 15, 2025",
    category: "Soil Health",
    image: "/lovable-uploads/db5ad088-4bd7-4d36-aa6f-57f01d31d43c.png",
    slug: "/articles/soil-types-for-rice-production",
    externalUrl: "https://www.qld.gov.au/environment/land/management/soil/soil-testing/types"
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
