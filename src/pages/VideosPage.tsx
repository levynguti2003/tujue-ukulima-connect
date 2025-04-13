
import Layout from "@/components/layout/Layout";
import ArticleBanner from "@/components/articles/ArticleBanner";
import VideoList from "@/components/videos/VideoList";

const VideosPage = () => {
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
