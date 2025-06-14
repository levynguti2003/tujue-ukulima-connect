
import { GraduationCap } from "lucide-react";

const AboutHero = () => {
  return (
    <div 
      className="relative py-16 md:py-24" 
      style={{ 
        backgroundImage: `url('/lovable-uploads/296425d2-d7ab-4a26-8bd7-7e7e2097a858.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <GraduationCap className="h-14 w-14 text-white mb-4" />
          <div className="bg-white/90 p-6 md:p-8 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Skyfield Aerotech is a forward-thinking agritech startup based in Mwea, Kenya, 
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
