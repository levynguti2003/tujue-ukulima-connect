
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedTopics from "@/components/home/FeaturedTopics";
import RecentArticles from "@/components/home/RecentArticles";
import FeaturedVideos from "@/components/home/FeaturedVideos";
import AskExpertPromo from "@/components/home/AskExpertPromo";
import StatisticsSection from "@/components/home/StatisticsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedTopics />
      <RecentArticles />
      <FeaturedVideos />
      <AskExpertPromo />
      <StatisticsSection />
    </Layout>
  );
};

export default Index;
