
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TopicContentModal from "./TopicContentModal";
import { topicContents } from "@/utils/topicContentData";

const topics = [
  {
    title: "Crop Production",
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
                  <Link 
                    to={topic.link}
                    className="text-gray-500 hover:text-gray-700 text-sm"
                  >
                    View articles
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedTopic && (
          <TopicContentModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title={selectedTopic}
            content={topicContents[selectedTopic as keyof typeof topicContents] || ''}
          />
        )}
      </div>
    </section>
  );
};

export default FeaturedTopics;
