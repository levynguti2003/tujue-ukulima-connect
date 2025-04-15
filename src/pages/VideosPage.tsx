
import Layout from "@/components/layout/Layout";
import ArticleBanner from "@/components/articles/ArticleBanner";
import VideoList from "@/components/videos/VideoList";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const VideosPage = () => {
  const { addWatchedVideo, isAuthenticated } = useAuth();
  const location = useLocation();
  
  // Check for video ID in the hash
  useEffect(() => {
    if (isAuthenticated && location.hash) {
      const videoId = location.hash.substring(1);
      if (videoId) {
        addWatchedVideo(videoId);
      }
    }
  }, [location.hash, addWatchedVideo, isAuthenticated]);
  
  return (
    <Layout>
      <ArticleBanner 
        title="Video Tutorials" 
        description="Watch practical farming demonstrations, tutorials, and expert advice to improve your agricultural skills."
      />
      <div className="container mx-auto px-4 py-8">
        <VideoList />
      </div>
    </Layout>
  );
};

export default VideosPage;
