
import { Book, Leaf, Users, Award } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-tu-green-700 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Tujue Ukulima, we are dedicated to revolutionizing agriculture through education,
            innovation, and community. We believe that empowered farmers create sustainable futures,
            and we&apos;re committed to providing the knowledge and resources needed to thrive in modern
            agriculture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Expert Knowledge */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-tu-green-100 text-tu-green-600 mb-4">
              <Book className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Knowledge</h3>
            <p className="text-gray-600">
              Access agricultural expertise from leading professionals and researchers
            </p>
          </div>
          
          {/* Sustainable Practices */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-tu-green-100 text-tu-green-600 mb-4">
              <Leaf className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainable Practices</h3>
            <p className="text-gray-600">
              Learn environmentally friendly farming techniques that preserve resources
            </p>
          </div>
          
          {/* Community Support */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-tu-green-100 text-tu-green-600 mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Support</h3>
            <p className="text-gray-600">
              Join a network of farmers sharing insights and supporting each other
            </p>
          </div>
          
          {/* Quality Resources */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-tu-green-100 text-tu-green-600 mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Resources</h3>
            <p className="text-gray-600">
              Premium educational content curated for African agricultural conditions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
