
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import VisionMission from "@/components/home/VisionMission";
import FeaturedTopics from "@/components/home/FeaturedTopics";
import RecentArticles from "@/components/home/RecentArticles";
import FeaturedVideos from "@/components/home/FeaturedVideos";
import AskExpertPromo from "@/components/home/AskExpertPromo";
import StatisticsSection from "@/components/home/StatisticsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <VisionMission />
      <FeaturedTopics />
      <RecentArticles />
      <FeaturedVideos />
      <StatisticsSection />
      <TestimonialsSection />
      <AskExpertPromo />
    </Layout>
  );
};

export default Index;
