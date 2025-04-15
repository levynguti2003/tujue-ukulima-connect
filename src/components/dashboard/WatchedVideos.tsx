
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { allVideos } from "@/utils/videoData";
import { Video, Play, CheckCircle, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface VideoItem {
  id: number;
  title: string;
  topic: string;
  duration: string;
  thumbnail: string;
}

const WatchedVideos = () => {
  const { currentUser } = useAuth();
  const [filter, setFilter] = useState("all");
  
  // Initialize videos from user's watched videos
  const watchedVideoIds = currentUser?.watchedVideos || [];
  
  // Convert watchedVideoIds to strings for comparison
  const stringWatchedIds = watchedVideoIds.map(id => String(id));
  
  // Get all unique topics from videos
  const allTopics = [...new Set(allVideos.map(video => video.category))];
  
  // Filter videos based on selected topic
  const filteredVideos = allVideos.filter(video => {
    if (!stringWatchedIds.includes(String(video.id))) return false;
    if (filter === "all") return true;
    return video.category === filter;
  });

  if (!currentUser) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <Video className="h-5 w-5 mr-2 text-tu-green-600" />
            Watched Videos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <p>Please log in to track watched videos.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl flex items-center">
          <Video className="h-5 w-5 mr-2 text-tu-green-600" />
          Watched Videos
        </CardTitle>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="ml-auto">
              <Filter className="h-4 w-4 mr-2" />
              Filter: {filter === 'all' ? 'All Topics' : filter}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
              <DropdownMenuRadioItem value="all">All Topics</DropdownMenuRadioItem>
              {allTopics.map(topic => (
                <DropdownMenuRadioItem key={topic} value={topic}>
                  {topic}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      
      <CardContent>
        {watchedVideoIds.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>You haven't watched any videos yet.</p>
            <Link to="/videos" className="block mt-4">
              <Button variant="outline" size="sm">
                <Play className="h-4 w-4 mr-2" />
                Browse Videos
              </Button>
            </Link>
          </div>
        ) : filteredVideos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No videos matching the selected filter.</p>
            <Button variant="outline" size="sm" onClick={() => setFilter("all")} className="mt-4">
              Show All Videos
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredVideos.map((video) => (
              <Link 
                key={video.id} 
                to={`/videos#${video.id}`}
                className="flex items-start p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <div className="relative mr-3">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="h-20 w-32 object-cover rounded"
                  />
                  <div className="absolute top-1 right-1">
                    <CheckCircle className="h-4 w-4 text-green-500 bg-white rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="font-medium">{video.title}</div>
                  <div className="text-sm text-gray-500">{video.category}</div>
                  <div className="text-xs text-gray-400 mt-1">Duration: {video.duration}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WatchedVideos;
