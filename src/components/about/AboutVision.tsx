
import { Target, Flag } from "lucide-react";

const AboutVision = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div className="bg-tu-green-50 rounded-xl p-8 shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-tu-green-600 rounded-full">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-tu-green-700 ml-4">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the leading provider of integrated agricultural solutions that enhance
              food security and economic prosperity for farmers in Africa.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-tu-brown-100 rounded-xl p-8 shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-tu-brown-600 rounded-full">
                <Flag className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-tu-brown-700 ml-4">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To empower farmers through cutting-edge drone spraying services, a digital 
              agricultural marketplace, and an educational hub—Tujue Ukulima—where they can 
              access practical knowledge, expert guidance, and community support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
