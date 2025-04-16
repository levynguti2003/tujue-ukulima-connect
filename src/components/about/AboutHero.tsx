
import { GraduationCap } from "lucide-react";

const AboutHero = () => {
  return (
    <div 
      className="relative py-16 md:py-24" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/89a73814-5668-4e0b-8a36-5528e0a366d8.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <GraduationCap className="h-14 w-14 text-white mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Who We Are
          </h1>
          <div className="bg-white/90 p-6 md:p-8 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Skyfield Kenya is a forward-thinking agritech startup based in Mwea, Kenya, 
              revolutionizing agriculture through innovative technologies. We are committed 
              to transforming the agricultural landscape in Africa by leveraging drone technology, 
              smart farming techniques, and digital platforms to boost productivity, sustainability, 
              and market access for farmers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
