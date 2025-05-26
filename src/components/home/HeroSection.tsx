
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const [api, setApi] = useState<any>();
  
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "African farmer working in green crop fields with modern farming techniques"
    },
    {
      url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80", 
      alt: "Smart agriculture technology with drones and modern farming equipment"
    },
    {
      url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "African livestock farming with cattle grazing in agricultural fields"
    },
    {
      url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Modern greenhouse agriculture with advanced farming technology"
    }
  ];

  useEffect(() => {
    if (!api) return;

    // Clear any existing intervals to prevent conflicts
    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 8000); // Increased delay to ensure all images are visible

    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <div className="relative text-white overflow-hidden">
      <Carousel 
        setApi={setApi}
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
          duration: 30, // Slower transition duration
        }}
        plugins={[
          Autoplay({
            delay: 8000, // Increased delay to 8 seconds
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
      >
        <CarouselContent className="-ml-0">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="pl-0 min-w-0">
              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105"
                  style={{
                    backgroundImage: `url('${image.url}')`,
                  }}
                  onError={(e) => {
                    console.log(`Image failed to load: ${image.url}`);
                    // Fallback to a different image if the current one fails
                    const target = e.target as HTMLDivElement;
                    target.style.backgroundImage = `url('https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`;
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 z-10">
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-28 h-full flex items-center">
          <div className="max-w-3xl">
            <span className="bg-white/20 text-white px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 inline-block backdrop-blur-sm">
              Kenya's Premier Agricultural Knowledge Platform
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 animate-fade-in text-white drop-shadow-lg leading-tight">
              Empowering Farmers Through Knowledge, Innovation, and Community
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl animate-fade-in text-white drop-shadow-md leading-relaxed" style={{animationDelay: "0.1s"}}>
              Access farming expertise, connect with agricultural specialists, and discover the latest innovations in smart farming with Tujue Ukulima.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <Button asChild size="lg" className="bg-white text-tu-green-700 hover:bg-tu-green-100 w-full sm:w-auto">
                <Link to="/articles">Explore Resources</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                <Link to="/ask-expert">Ask an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 md:h-16 bg-gradient-to-t from-white to-transparent z-20"></div>
    </div>
  );
};

export default HeroSection;
