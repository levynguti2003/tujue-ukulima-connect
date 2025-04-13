
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

// Mock data for videos
const videos = [
  {
    id: 1,
    title: "Getting Started with Drone Spraying",
    duration: "8:45",
    thumbnail: "https://images.unsplash.com/photo-1586818079715-22df28fee361",
    slug: "/videos/getting-started-with-drone-spraying"
  },
  {
    id: 2,
    title: "Soil Testing Techniques for Small-Scale Farmers",
    duration: "12:20",
    thumbnail: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad",
    slug: "/videos/soil-testing-techniques"
  },
  {
    id: 3,
    title: "Climate-Smart Rice Production Methods",
    duration: "15:05",
    thumbnail: "https://images.unsplash.com/photo-1473973266408-ed4e00bb0eb1",
    slug: "/videos/climate-smart-rice-production"
  },
  {
    id: 4,
    title: "Identifying and Managing Common Crop Pests",
    duration: "10:30",
    thumbnail: "https://images.unsplash.com/photo-1578520022316-fee8c584553a",
    slug: "/videos/managing-common-crop-pests"
  }
];

const FeaturedVideos = () => {
  return (
    <section className="py-12 bg-tu-green-100/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">
            Featured Videos
          </h2>
          <Button asChild variant="outline">
            <Link to="/videos">View all videos</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <Link key={video.id} to={video.slug}>
              <Card className="overflow-hidden h-full card-hover">
                <div className="relative h-48">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-70 hover:opacity-90 transition-opacity">
                    <div className="bg-white rounded-full p-3">
                      <Play className="h-6 w-6 text-tu-green-700 ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <CardContent className="pt-4 pb-5">
                  <h3 className="font-medium">{video.title}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
