
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Play, User } from "lucide-react";
import { VideoItem } from "@/utils/videoData";
import { useState } from "react";
import VideoModal from "./VideoModal";

interface VideoCardProps {
  video: VideoItem;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWatchVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col card-hover">
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div 
          className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          onClick={handleWatchVideo}
        >
          <div className="bg-white rounded-full p-3 transform hover:scale-110 transition-transform cursor-pointer">
            <Play className="h-8 w-8 text-tu-green-700 ml-0.5" />
          </div>
        </div>
        <Badge className="absolute top-3 left-3 bg-tu-green-600">
          {video.category}
        </Badge>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      
      <CardContent className="py-4 flex-grow">
        <Link to={video.slug}>
          <h3 className="text-lg font-semibold mb-2 hover:text-tu-green-600 transition-colors">
            {video.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm">{video.description}</p>
      </CardContent>
      
      <CardFooter className="pt-0 pb-4 px-6 border-t border-gray-100 text-sm text-gray-500 flex justify-between">
        <div className="flex items-center">
          <User className="h-4 w-4 mr-1" />
          <span>{video.author}</span>
        </div>
        <button 
          className="flex items-center text-tu-green-600 hover:text-tu-green-700"
          onClick={handleWatchVideo}
          aria-label="Watch video"
        >
          <Play className="h-4 w-4 mr-1" />
          <span>Watch</span>
        </button>
      </CardFooter>

      <VideoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        videoId={video.youtubeId}
        title={video.title}
      />
    </Card>
  );
};

export default VideoCard;
