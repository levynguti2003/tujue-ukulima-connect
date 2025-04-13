
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Bookmark, Trash2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data
const savedArticles = [
  {
    id: 1,
    title: "Modern Approaches to Pest Control in Rice Farming",
    excerpt: "Discover the latest techniques in managing pests that affect rice crops while minimizing environmental impact.",
    category: "Pest Control",
    date: "April 8, 2025",
    slug: "/articles/modern-approaches-to-pest-control"
  },
  {
    id: 2,
    title: "How Drone Technology is Revolutionizing Agriculture",
    excerpt: "Explore how drones are changing the way farmers monitor crops, apply treatments, and increase efficiency.",
    category: "Smart Farming",
    date: "April 5, 2025",
    slug: "/articles/drone-technology-in-agriculture"
  },
  {
    id: 3,
    title: "Improving Soil Health for Sustainable Crop Production",
    excerpt: "Learn essential practices for maintaining and enhancing soil fertility to ensure long-term agricultural productivity.",
    category: "Soil Health",
    date: "April 2, 2025",
    slug: "/articles/improving-soil-health"
  }
];

const savedVideos = [
  {
    id: 1,
    title: "Getting Started with Drone Spraying",
    duration: "8:45",
    category: "Drone Spraying",
    date: "April 10, 2025",
    slug: "/videos/getting-started-with-drone-spraying"
  },
  {
    id: 2,
    title: "Soil Testing Techniques for Small-Scale Farmers",
    duration: "12:20",
    category: "Soil Health",
    date: "April 7, 2025",
    slug: "/videos/soil-testing-techniques"
  }
];

const BookmarkedContent = () => {
  const [articles, setArticles] = useState(savedArticles);
  const [videos, setVideos] = useState(savedVideos);
  
  const removeArticle = (id: number) => {
    setArticles(articles.filter(article => article.id !== id));
  };
  
  const removeVideo = (id: number) => {
    setVideos(videos.filter(video => video.id !== id));
  };
  
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Saved Content</h2>
      
      <Tabs defaultValue="articles">
        <TabsList className="mb-4">
          <TabsTrigger value="articles">Articles ({articles.length})</TabsTrigger>
          <TabsTrigger value="videos">Videos ({videos.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="articles">
          {articles.length > 0 ? (
            <div className="space-y-3">
              {articles.map((article) => (
                <Card key={article.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge className="bg-tu-green-600 self-start mb-2">{article.category}</Badge>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-red-600 hover:text-red-800 hover:bg-red-50 -mt-1 -mr-2"
                        onClick={() => removeArticle(article.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove bookmark</span>
                      </Button>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0 flex justify-between">
                    <div className="text-sm text-gray-500 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={article.slug} className="flex items-center">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Read
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed">
              <Bookmark className="h-10 w-10 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">No saved articles yet</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="videos">
          {videos.length > 0 ? (
            <div className="space-y-3">
              {videos.map((video) => (
                <Card key={video.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge className="bg-tu-green-600 self-start mb-2">{video.category}</Badge>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-red-600 hover:text-red-800 hover:bg-red-50 -mt-1 -mr-2"
                        onClick={() => removeVideo(video.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove bookmark</span>
                      </Button>
                    </div>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                  </CardHeader>
                  <CardFooter className="pt-0 flex justify-between">
                    <div className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={video.slug} className="flex items-center">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Watch
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed">
              <Bookmark className="h-10 w-10 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">No saved videos yet</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookmarkedContent;
