
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import VideoModal from "../videos/VideoModal";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  description: string;
  category: string;
  slug: string;
  youtubeId: string;
  author: string;
}

// Expanded list with videos from all the major categories
const allVideos = [
  // Precision Agriculture
  {
    id: "pa-1",
    title: "Precision Agriculture Technologies",
    thumbnail: "https://img.youtube.com/vi/0XfFNPedsxE/maxresdefault.jpg",
    duration: "5:23",
    description: "Introduction to precision agriculture technologies",
    category: "Precision Agriculture",
    slug: "/videos/precision-agriculture-technologies",
    youtubeId: "0XfFNPedsxE",
    author: "AgTech Expert"
  },
  {
    id: "pa-2",
    title: "Drones in Agriculture",
    thumbnail: "https://img.youtube.com/vi/nXD5QRdgyCg/maxresdefault.jpg",
    duration: "7:12",
    description: "How drones are revolutionizing farming",
    category: "Precision Agriculture",
    slug: "/videos/drones-in-agriculture",
    youtubeId: "nXD5QRdgyCg",
    author: "Tech Farm"
  },
  // Crop Production
  {
    id: "cp-1",
    title: "Modern Maize Production",
    thumbnail: "https://img.youtube.com/vi/mZgSeChDyaY/maxresdefault.jpg", 
    duration: "6:45",
    description: "Best practices for maize production",
    category: "Crop Production",
    slug: "/videos/maize-production",
    youtubeId: "mZgSeChDyaY",
    author: "Crop Expert"
  },
  {
    id: "cp-2",
    title: "Rice Farming Techniques",
    thumbnail: "https://img.youtube.com/vi/J_mMS3EkHok/maxresdefault.jpg",
    duration: "8:27",
    description: "Modern rice cultivation methods",
    category: "Crop Production",
    slug: "/videos/rice-farming-techniques",
    youtubeId: "J_mMS3EkHok",
    author: "Rice Institute"
  },
  // Animal Production
  {
    id: "ap-1",
    title: "Modern Cattle Management",
    thumbnail: "https://img.youtube.com/vi/OwNCbkIHBs4/maxresdefault.jpg",
    duration: "10:15",
    description: "Best practices in cattle management",
    category: "Animal Production",
    slug: "/videos/cattle-management",
    youtubeId: "OwNCbkIHBs4",
    author: "Livestock Pro"
  },
  {
    id: "ap-2",
    title: "Poultry Farming Guide",
    thumbnail: "https://img.youtube.com/vi/pMbS8h1b5nY/maxresdefault.jpg",
    duration: "9:32",
    description: "Complete guide to modern poultry farming",
    category: "Animal Production",
    slug: "/videos/poultry-farming",
    youtubeId: "pMbS8h1b5nY",
    author: "Poultry Expert"
  },
  // Big Data in Farming
  {
    id: "bd-1",
    title: "Big Data Revolution in Agriculture",
    thumbnail: "https://img.youtube.com/vi/_tijHjup-gM/maxresdefault.jpg",
    duration: "7:44",
    description: "How big data is transforming agriculture",
    category: "Precision Agriculture",
    slug: "/videos/big-data-agriculture",
    youtubeId: "_tijHjup-gM",
    author: "Data Farm"
  },
  // Vertical Farming
  {
    id: "vf-1",
    title: "Vertical Hydroponics Systems",
    thumbnail: "https://img.youtube.com/vi/hCQHwimJFGM/maxresdefault.jpg",
    duration: "6:22",
    description: "Introduction to vertical hydroponic farming",
    category: "Smart Farming",
    slug: "/videos/vertical-hydroponics",
    youtubeId: "hCQHwimJFGM",
    author: "Hydro Expert"
  }
];

const FeaturedVideos = () => {
  const [featuredVideos, setFeaturedVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to shuffle videos
  const shuffleVideos = () => {
    const shuffled = [...allVideos].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4); // Show only 4 videos
  };

  useEffect(() => {
    // Initially shuffle videos
    setFeaturedVideos(shuffleVideos());

    // Shuffle every 30 minutes
    const interval = setInterval(() => {
      setFeaturedVideos(shuffleVideos());
    }, 30 * 60 * 1000); // 30 minutes in milliseconds

    return () => clearInterval(interval);
  }, []);

  const openVideoModal = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

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
          {featuredVideos.map((video) => (
            <div key={video.id} onClick={() => openVideoModal(video)}>
              <Card className="overflow-hidden h-full card-hover cursor-pointer">
                <div className="relative h-48">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
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
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <VideoModal 
          isOpen={isModalOpen} 
          onClose={closeVideoModal} 
          videoId={selectedVideo.youtubeId}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
};

export default FeaturedVideos;
