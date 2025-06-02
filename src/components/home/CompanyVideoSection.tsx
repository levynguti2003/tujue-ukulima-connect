
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CompanyVideoSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
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
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-end justify-start p-6 sm:p-8 md:p-12">
        <Button 
          asChild 
          size="lg" 
          className="bg-tu-green-600 hover:bg-tu-green-700 text-white px-8 py-4 text-base font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          <Link to="/companies">Browse Companies</Link>
        </Button>
      </div>
    </section>
  );
};

export default CompanyVideoSection;
