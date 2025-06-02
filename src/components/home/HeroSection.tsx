
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const [api, setApi] = useState<any>();
  
  const heroImages = [
    {
      url: "https://res.cloudinary.com/dalbjrgto/image/upload/v1748529254/WhatsApp_Image_2025-05-29_at_17.32.56_ea67fa29_ykt8q4.jpg",
      alt: "Agricultural farming scene with farmers working in the field"
    },
    {
      url: "https://res.cloudinary.com/dalbjrgto/image/upload/v1748529255/WhatsApp_Image_2025-05-29_at_17.32.56_c089a9da_f7rbqr.jpg", 
      alt: "Modern farming techniques and agricultural practices"
    },
    {
      url: "https://res.cloudinary.com/dalbjrgto/image/upload/v1748529254/WhatsApp_Image_2025-05-29_at_17.32.55_e9734a57_kex9ed.jpg",
      alt: "Agricultural innovation and smart farming technology"
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
    <div className="relative text-white overflow-hidden h-screen">
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
              <div className="relative h-screen overflow-hidden">
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
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 h-full flex items-center">
          <div className="max-w-3xl">
            <span className="bg-white/20 text-white px-2 sm:px-3 md:px-4 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6 inline-block backdrop-blur-sm">
              Kenya's Premier Agricultural Knowledge Platform
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-heading font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in text-white drop-shadow-lg leading-tight">
              Empowering Farmers Through Knowledge, Innovation, and Community
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 mb-4 sm:mb-6 md:mb-8 max-w-2xl animate-fade-in text-white drop-shadow-md leading-relaxed" style={{animationDelay: "0.1s"}}>
              Access farming expertise, connect with agricultural specialists, and discover the latest innovations in smart farming with Tujue Ukulima.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <Button asChild size="lg" className="bg-white text-tu-green-700 hover:bg-tu-green-100 w-full sm:w-auto text-sm sm:text-base">
                <Link to="/articles">Explore Resources</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-tu-green-700 w-full sm:w-auto text-sm sm:text-base transition-all duration-300">
                <Link to="/ask-expert">Ask an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-8 md:h-12 lg:h-16 bg-gradient-to-t from-white to-transparent z-20"></div>
    </div>
  );
};

export default HeroSection;
