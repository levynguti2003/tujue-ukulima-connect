
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-tu-green-700 via-tu-green-600 to-tu-green-500 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
      <div 
        className="absolute inset-0 bg-gradient-to-r from-tu-green-900/80 to-transparent"
        style={{
          maskImage: "radial-gradient(circle at 30% 50%, black 0%, transparent 70%)"
        }}
      ></div>
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl">
          <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block backdrop-blur-sm">
            Kenya's Premier Agricultural Knowledge Platform
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Empowering Farmers Through Knowledge, Innovation, and Community
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl animate-fade-in" style={{animationDelay: "0.1s"}}>
            Access farming expertise, connect with agricultural specialists, and discover the latest innovations in smart farming with Tujue Ukulima.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <Button asChild size="lg" className="bg-white text-tu-green-700 hover:bg-tu-green-100">
              <Link to="/articles">Explore Resources</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/ask-expert">Ask an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
