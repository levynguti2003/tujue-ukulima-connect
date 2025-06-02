
import { Book, Leaf, Users, Award } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white to-green-50 mt-4 sm:mt-6 md:mt-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-tu-green-700 mb-3 sm:mb-4">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-2">
            At Tujue Ukulima, we are dedicated to revolutionizing agriculture through education,
            innovation, and community. We believe that empowered farmers create sustainable futures,
            and we&apos;re committed to providing the knowledge and resources needed to thrive in modern
            agriculture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Expert Knowledge */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
            <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-tu-green-100 text-tu-green-600 mb-3 sm:mb-4">
              <Book className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Expert Knowledge</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Access agricultural expertise from leading professionals and researchers
            </p>
          </div>
          
          {/* Sustainable Practices */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
            <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-tu-green-100 text-tu-green-600 mb-3 sm:mb-4">
              <Leaf className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Sustainable Practices</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Learn environmentally friendly farming techniques that preserve resources
            </p>
          </div>
          
          {/* Community Support */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
            <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-tu-green-100 text-tu-green-600 mb-3 sm:mb-4">
              <Users className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Community Support</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Join a network of farmers sharing insights and supporting each other
            </p>
          </div>
          
          {/* Quality Resources */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
            <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-tu-green-100 text-tu-green-600 mb-3 sm:mb-4">
              <Award className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Quality Resources</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Premium educational content curated for African agricultural conditions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
