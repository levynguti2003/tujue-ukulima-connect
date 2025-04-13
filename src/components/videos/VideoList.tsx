
import { useState } from "react";
import VideoCard from "./VideoCard";
import VideoFilters from "./VideoFilters";
import { Button } from "@/components/ui/button";
import { allVideos } from "@/utils/videoData";

const VideoList = () => {
  const [filteredVideos, setFilteredVideos] = useState(allVideos);
  const [visibleVideos, setVisibleVideos] = useState<number>(12);

  const handleFilterChange = (category: string) => {
    if (category === "All Categories") {
      setFilteredVideos(allVideos);
    } else {
      const filtered = allVideos.filter(video => video.category === category);
      setFilteredVideos(filtered);
    }
    setVisibleVideos(12); // Reset visible videos when filter changes
  };

  const loadMoreVideos = () => {
    setVisibleVideos(prev => Math.min(prev + 6, filteredVideos.length));
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
