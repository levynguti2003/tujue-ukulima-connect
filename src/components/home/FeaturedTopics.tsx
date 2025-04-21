
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import TopicContentModal from "./TopicContentModal";
import { topicContents } from "@/utils/topicContentData";
import CropVideosModal from "./CropVideosModal";
import AnimalVideosModal from "./AnimalVideosModal";
import TopicVideosModal from "./TopicVideosModal";

// Video lists per topic (rest omitted for brevity, see below for usage)
const cropProductionVideos = [
  { title: "Cattle", url: "https://youtu.be/OwNCbkIHBs4?si=xvu-qv53rZ56d5-E" },
  { title: "Cattle 2", url: "https://youtu.be/l0H5sVWt_dA?si=6LCIxonmXuELHlh2" },
  { title: "Cattle 3", url: "https://youtu.be/GMyj6rM00qY?si=yGqgiFRumKUEzgtv" },
  { title: "Cattle 4", url: "https://youtu.be/I0QGe3JK134?si=jmPBDyrWL0TEM4Eq" },
  { title: "Cattle 5", url: "https://youtu.be/cskOSWUx6h8?si=c4XPHB33l4gnV-LZ" },
  { title: "Cattle 6", url: "https://youtu.be/_7m28Q2ucEQ?si=Er-77GihHG1J7DP_" },
  // ... rest of animal videos (for this topic use as per animal production set originally)
];

const pestControlVideos = [
  { title: "Integrated Pest Management for Crops", url: "https://youtu.be/TwxfqD73WYo?si=hSHOe4JZdHZLacJR" },
  { title: "Common Crop Pests and Natural Controls 1", url: "https://youtu.be/0D--ltYWKXI?si=kUZMFN3K236Js-D3" },
  { title: "Pest Control 1", url: "https://youtu.be/A_JsWGhjjbA?si=PdWlJpv2enYUNoSK" },
  { title: "Pest Control 2", url: "https://youtu.be/cBQhSgAs0g8?si=4V-q5S9NY_Jhsoaz" },
  { title: "Pest Control 3", url: "https://youtu.be/J-EAhXER82I?si=cK1mUD6lbcvJC2ZC" },
  { title: "Pest Control 4", url: "https://youtu.be/EiEObwJVrpM?si=UBc9D6rX31rp7ERh" },
  { title: "Pest Control 5", url: "https://youtu.be/T3fbvN7vIm8?si=7iZeKKXj7MAODHFQ" },
  { title: "Pest Control 6", url: "https://youtu.be/GNjYBRgKVRg?si=4k9C0dd1_A4uSwYT" },
  { title: "Pest Control 7", url: "https://youtu.be/AVSs-EkYTCo?si=GYrsP6luibhryL3O" },
];

const precisionAgVideos = [
  { title: "Modern Drone Spraying Techniques", url: "https://youtu.be/0XfFNPedsxE?si=8CXNpYYtx-sRE6JQ" },
  { title: "Precision Agriculture Technology", url: "https://youtu.be/nXD5QRdgyCg?si=EI7zRLyYKb3MP6EA" },
  { title: "Sensors and IoT in Modern Farming", url: "https://youtu.be/GXq1FfH9byM?si=mMM2wDwRHFDSH4qm" },
  { title: "Mobile Apps for Farm Management", url: "https://youtu.be/Qmla9NLFBvU?si=ketHnqqslbQKdasa" },
  { title: "Precision Ag 1", url: "https://youtu.be/xKcC_ePJfi8?si=pPoJ-Go2rLgtpQSu" },
  { title: "Precision Ag 2", url: "https://youtu.be/I3cGXhgelms?si=dJmWlsD2uS7AzRb9" },
  { title: "Precision Ag 3", url: "https://youtu.be/Ulf8E1XnhgI?si=JkkzoU4_dkAhOGyB" },
  { title: "Precision Ag Short 1", url: "https://youtube.com/shorts/v8soeX3iWNA?si=VXlpBYV51bdKUn8y" },
  { title: "Precision Ag Short 2", url: "https://youtube.com/shorts/K7m29A7Gmic?si=LXDzMWoG6BOinNKQ" },
  { title: "Precision Ag Short 3", url: "https://youtube.com/shorts/Hzv9ahzWd6Y?si=7Vz82I1HthX880l_" },
  { title: "Precision Ag Short 4", url: "https://youtube.com/shorts/Q0W5NQyrvYw?si=NTRFvNw26N-M3d7N" },
  { title: "Precision Ag 4", url: "https://youtu.be/NSdPgLVpLCc?si=6DSgOFzyzJw3JOS9" },
  { title: "Precision Ag 5", url: "https://youtu.be/VA3zPuXt3Bw?si=HoWDxJ8sxrDPDeOy" },
];

const climateSmartVideos = [
  { title: "Adapting to Climate Change in Farming", url: "https://youtu.be/q7JnJ0oBa94?si=0I0saEynpoGr_wl4" },
  { title: "Water Conservation in Changing Climate", url: "https://youtu.be/KYeFNnPJVEg?si=TZ0AW2fepFhCjvOC" },
  { title: "Carbon Sequestration in Agricultural Soils", url: "https://youtu.be/y1bhpy4volc?si=zKQ9Bffevzf2xtpk" },
  { title: "Climate-Smart Video 1", url: "https://youtu.be/g0wkT3mf80U?si=KQJ8B_GLjwfdii7Z" },
  { title: "Climate-Smart Video 2", url: "https://youtu.be/ykJOXcHJ6sw?si=NjQ3cqMwuaqykdZn" },
  { title: "Climate-Smart Video 3", url: "https://youtu.be/i0V2xzEw44Y?si=Pb-D7i2V4DQjpDo6" },
  { title: "Climate-Smart Video 4", url: "https://youtu.be/DArDb2tCl0Y?si=RNSujz57iOvLF6xF" },
  { title: "Climate-Smart Video 5", url: "https://youtu.be/F9_nH7_O8Ys?si=luMrKNxZRYZjbtHH" },
  { title: "Climate-Smart Video 6", url: "https://youtu.be/CLn18JpVb9o?si=0EZx8Aqj1mgh0J63" },
  { title: "Climate-Smart Video 7", url: "https://youtu.be/z3ewl7MhRXY?si=fkNuNadVTkzQ2JKm" },
  { title: "Climate-Smart Video 8", url: "https://youtu.be/BMVyQfqof4I?si=zF5JggJhaq1HhrbN" },
];

const smartFarmingVideos = [
  { title: "Smart Farming 1", url: "https://youtu.be/5SzJkL7czI0?si=xtAJ_15B9wfXWh7f" },
  { title: "Smart Farming 2", url: "https://youtu.be/lRyXlvIJFWI?si=tbe4aON7lU-mcmt2" },
  { title: "Smart Farming 3", url: "https://youtu.be/mD5jnxhne7o?si=JCq1Wbz2T42vMQzJ" },
  { title: "Smart Farming 4", url: "https://youtu.be/gO-eYYJogL4?si=ITFMwQxmzFs3o8WU" },
  { title: "Smart Farming 5", url: "https://youtu.be/pFsPqGudHgI?si=-hATS91zmTSW4mZY" },
  { title: "Smart Farming 6", url: "https://youtu.be/hWkYtZxpQUo?si=ThSa8kG1PcUODvMg" },
  { title: "Smart Farming 7", url: "https://youtu.be/iloAQmroRK0?si=OpPTjztYaTEJXO2Q" },
  { title: "Smart Farming 8", url: "https://youtu.be/ScsUT07eMPs?si=ag326xp2iW5Y3ViD" },
  { title: "Smart Farming 9", url: "https://youtu.be/-PnIwzxZWLY?si=rso3zjUVajkUIwYw" },
];

const soilHealthVideos = [
  { title: "Understanding Soil Testing Results", url: "https://youtu.be/wNKmHk-L2N0?si=MGxDJ-IIjEAszFbx" },
  { title: "Natural Methods for Improving Soil Fertility", url: "https://youtu.be/SxJoOh4a0wM?si=gK5ekPR47lNugH1I" },
  { title: "Soil Fertility 1", url: "https://youtu.be/soIjHHOgvvQ?si=8FXU1gZnPSUmpzof" },
  { title: "Soil Fertility 2", url: "https://youtu.be/o6LP6MdWgvY?si=3krmcP-Xky1LjON1" },
  { title: "Soil Fertility 3", url: "https://youtu.be/7BaomVuhxxE?si=BjzexUfwC6Hmoxjm" },
  { title: "Soil Fertility 4", url: "https://youtu.be/A8qTRBc8Bws?si=7UajP5hfef_YkhTs" },
  { title: "Soil Fertility 5", url: "https://youtu.be/WpKwlkXA8zA?si=4Dtqhg7qjEKoyqn_" },
  { title: "Soil Fertility 6", url: "https://youtu.be/5I1_BdO8MsY?si=Hk2MKg5nbgb_NSHS" },
  { title: "Soil Fertility 7", url: "https://www.youtube.com/live/NVkwGDj-nyw?si=r2F8xj4vEd2OcXED" },
  { title: "Soil Fertility 8", url: "https://youtu.be/iKIob_Rg4RY?si=L5d_0fy4k7JUvX9S" },
  { title: "Soil Fertility 9", url: "https://youtu.be/6EibW37us-g?si=PX5l0fkrZiH-nWph" },
  { title: "Soil Fertility 10", url: "https://youtu.be/L14woJZEJnk?si=yR926riwu4PKU5xG" },
];

// ... original topics array
const topics = [
  {
    title: "Crop Production",
    // ... rest omitted for brevity
    description: "Essential techniques for successful crop cultivation from planting to harvest",
    icon: "🌽",
    link: "/articles/crop-production",
    color: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-100"
  },
  {
    title: "Animal Production",
    description: "Best practices for livestock and poultry farming for optimal yields",
    icon: "🐄",
    link: "/articles/animal-production",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100"
  },
  {
    title: "Precision Agriculture",
    description: "Modern technology for data-driven farming decisions",
    icon: "📡",
    link: "/articles/precision-agriculture",
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100"
  },
  {
    title: "Pest Control",
    description: "Learn effective strategies to manage pests and protect your crops",
    icon: "🐛",
    link: "/articles/pest-control",
    color: "bg-red-50 border-red-200",
    iconBg: "bg-red-100"
  },
  {
    title: "Smart Farming",
    description: "Discover how technology can improve your farming practices",
    icon: "🌱",
    link: "/articles/smart-farming",
    color: "bg-teal-50 border-teal-200",
    iconBg: "bg-teal-100"
  },
  {
    title: "Drone Spraying",
    description: "Explore the benefits of using drones for crop spraying",
    icon: "🚁",
    link: "/articles/drone-spraying",
    color: "bg-indigo-50 border-indigo-200",
    iconBg: "bg-indigo-100"
  },
  {
    title: "Climate-Smart Agriculture",
    description: "Adapt your farming to changing climate conditions",
    icon: "☁️",
    link: "/articles/climate-smart-agriculture",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100"
  },
  {
    title: "Soil Health",
    description: "Maintain soil fertility for sustainable crop production",
    icon: "🌿",
    link: "/articles/soil-health",
    color: "bg-yellow-50 border-yellow-200",
    iconBg: "bg-yellow-100"
  },
  {
    title: "Rice Farming",
    description: "Best practices for successful rice cultivation",
    icon: "🌾",
    link: "/articles/rice-farming",
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100"
  }
];

const FeaturedTopics = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // video modal state for all topics
  const [videosModal, setVideosModal] = useState<{ topic: string, open: boolean }>({ topic: '', open: false });

  // Animal modal is handled by existing AnimalVideosModal

  // Maps topic title to relevant videos for new modal
  const topicVideosMap: Record<string, { title: string, url: string }[]> = {
    "Crop Production": cropProductionVideos,
    "Pest Control": pestControlVideos,
    "Precision Agriculture": precisionAgVideos,
    "Climate-Smart Agriculture": climateSmartVideos,
    "Smart Farming": smartFarmingVideos,
    "Soil Health": soilHealthVideos,
    // Add others as needed
  };

  const handleLearnMore = (topicTitle: string) => {
    setSelectedTopic(topicTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-3">
          Featured Topics
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Explore our comprehensive knowledge base on these important agricultural topics
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <Card key={index} className={`h-full border ${topic.color} hover:shadow-md transition-shadow`}>
              <CardContent className="p-6">
                <div className={`${topic.iconBg} w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4`}>
                  {topic.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => handleLearnMore(topic.title)}
                    className="flex items-center text-tu-green-600 font-medium hover:text-tu-green-800 transition-colors cursor-pointer"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  {/* Watch Videos button for relevant topics */}
                  {(topic.title === "Crop Production" ||
                    topic.title === "Pest Control" ||
                    topic.title === "Precision Agriculture" ||
                    topic.title === "Climate-Smart Agriculture" ||
                    topic.title === "Smart Farming" ||
                    topic.title === "Soil Health"
                  ) ? (
                    <button
                      onClick={() => setVideosModal({ topic: topic.title, open: true })}
                      className="text-gray-500 hover:text-tu-green-700 text-sm font-semibold transition-colors"
                    >
                      Watch videos
                    </button>
                  ) : topic.title === "Animal Production" ? (
                    <button
                      onClick={() => setVideosModal({ topic: topic.title, open: true })}
                      className="text-gray-500 hover:text-tu-green-700 text-sm font-semibold transition-colors"
                    >
                      Watch videos
                    </button>
                  ) : (
                    <button
                      disabled
                      className="text-gray-300 text-sm font-semibold cursor-not-allowed"
                    >
                      Watch videos
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Topic Content Modal */}
        {selectedTopic && (
          <TopicContentModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title={selectedTopic}
            content={topicContents[selectedTopic as keyof typeof topicContents] || ''}
          />
        )}

        {/* General topic videos modal */}
        {videosModal.open && topicVideosMap[videosModal.topic] && videosModal.topic !== "Animal Production" && (
          <TopicVideosModal
            open={videosModal.open}
            onClose={() => setVideosModal({ topic: '', open: false })}
            topic={videosModal.topic}
            videos={topicVideosMap[videosModal.topic]}
          />
        )}

        {/* Animal production handled by existing AnimalVideosModal */}
        {videosModal.open && videosModal.topic === "Animal Production" && (
          <AnimalVideosModal
            open={videosModal.open}
            onClose={() => setVideosModal({ topic: '', open: false })}
          />
        )}

      </div>
    </section>
  );
};

export default FeaturedTopics;
