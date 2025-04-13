
import { useState } from "react";
import VideoCard, { VideoProps } from "./VideoCard";
import VideoFilters from "./VideoFilters";
import { Button } from "@/components/ui/button";

// Mock video data
const allVideos: VideoProps[] = [
  {
    id: 1,
    title: "Getting Started with Drone Spraying",
    description: "A comprehensive guide for beginners on how to effectively use drones for agricultural spraying.",
    author: "Michael Ochieng",
    category: "Drone Spraying",
    duration: "8:45",
    thumbnail: "https://images.unsplash.com/photo-1586818079715-22df28fee361",
    slug: "/videos/getting-started-with-drone-spraying"
  },
  {
    id: 2,
    title: "Soil Testing Techniques for Small-Scale Farmers",
    description: "Learn simple and affordable methods to test your soil quality and understand the results.",
    author: "Grace Wanjiku",
    category: "Soil Health",
    duration: "12:20",
    thumbnail: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad",
    slug: "/videos/soil-testing-techniques"
  },
  {
    id: 3,
    title: "Climate-Smart Rice Production Methods",
    description: "Adapt your rice farming practices to changing climate conditions with these proven techniques.",
    author: "Catherine Wambui",
    category: "Climate-Smart Agriculture",
    duration: "15:05",
    thumbnail: "https://images.unsplash.com/photo-1473973266408-ed4e00bb0eb1",
    slug: "/videos/climate-smart-rice-production"
  },
  {
    id: 4,
    title: "Identifying and Managing Common Crop Pests",
    description: "Learn how to identify the most common pests affecting crops and effective management strategies.",
    author: "Dr. Sarah Kamau",
    category: "Pest Control",
    duration: "10:30",
    thumbnail: "https://images.unsplash.com/photo-1578520022316-fee8c584553a",
    slug: "/videos/managing-common-crop-pests"
  },
  {
    id: 5,
    title: "Introduction to Smart Irrigation Systems",
    description: "Discover how to implement water-efficient irrigation using smart technology and sensors.",
    author: "James Oduor",
    category: "Smart Farming",
    duration: "9:15",
    thumbnail: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6",
    slug: "/videos/smart-irrigation-systems"
  },
  {
    id: 6,
    title: "Rice Planting Best Practices",
    description: "Step-by-step guide to planting rice for optimal growth and yield.",
    author: "Peter Kariuki",
    category: "Rice Farming",
    duration: "13:50",
    thumbnail: "https://images.unsplash.com/photo-1455853828816-0c301a011711",
    slug: "/videos/rice-planting-best-practices"
  },
  {
    id: 7,
    title: "Advanced Drone Mapping for Farm Management",
    description: "Use drone technology to create detailed maps of your farm for better planning and management.",
    author: "John Mwangi",
    category: "Drone Spraying",
    duration: "18:30",
    thumbnail: "https://images.unsplash.com/photo-1579829366248-204fe8413f31",
    slug: "/videos/drone-mapping-for-farm-management"
  },
  {
    id: 8,
    title: "Natural Methods for Improving Soil Fertility",
    description: "Learn how to enhance your soil naturally without relying on chemical fertilizers.",
    author: "Grace Wanjiku",
    category: "Soil Health",
    duration: "11:45",
    thumbnail: "https://images.unsplash.com/photo-1621113519399-8cbd4dc620f9",
    slug: "/videos/natural-soil-fertility-methods"
  },
  {
    id: 9,
    title: "Using Weather Data for Farming Decisions",
    description: "How to interpret weather forecasts and historical data to make better farming decisions.",
    author: "Catherine Wambui",
    category: "Climate-Smart Agriculture",
    duration: "14:20",
    thumbnail: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe",
    slug: "/videos/using-weather-data"
  }
];

const VideoList = () => {
  const [filteredVideos, setFilteredVideos] = useState<VideoProps[]>(allVideos);
  const [visibleVideos, setVisibleVideos] = useState<number>(6);

  const handleFilterChange = (category: string) => {
    if (category === "All Categories") {
      setFilteredVideos(allVideos);
    } else {
      const filtered = allVideos.filter(video => video.category === category);
      setFilteredVideos(filtered);
    }
    setVisibleVideos(6); // Reset visible videos when filter changes
  };

  const loadMoreVideos = () => {
    setVisibleVideos(prev => Math.min(prev + 3, filteredVideos.length));
  };

  return (
    <div>
      <VideoFilters onFilterChange={handleFilterChange} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.slice(0, visibleVideos).map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      
      {visibleVideos < filteredVideos.length && (
        <div className="mt-10 text-center">
          <Button onClick={loadMoreVideos} variant="outline" size="lg">
            Load More Videos
          </Button>
        </div>
      )}
      
      {filteredVideos.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">No videos found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default VideoList;
