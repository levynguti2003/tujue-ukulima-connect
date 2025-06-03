
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CompanyVideoSection = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dalbjrgto/video/upload/v1748865602/Black_Elegant_and_Modern_Startup_Pitch_Deck_Presentation_tp59dz.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content overlay - Centered for mobile, bottom-left for larger screens */}
      <div className="absolute inset-0 flex items-center justify-center sm:items-end sm:justify-start p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="text-center sm:text-left max-w-sm sm:max-w-none">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
            Discover Agricultural Innovation
          </h2>
          <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
            Explore companies transforming agriculture across Africa
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-tu-green-600 hover:bg-tu-green-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <Link to="/companies">Browse Companies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompanyVideoSection;
