
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

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 8000);

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
          duration: 30,
        }}
        plugins={[
          Autoplay({
            delay: 8000,
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
                    const target = e.target as HTMLDivElement;
                    target.style.backgroundImage = `url('https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`;
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 z-10">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center sm:items-start sm:text-left sm:justify-center">
          <div className="max-w-4xl mx-auto sm:mx-0 space-y-4 sm:space-y-6">
            <span className="bg-white/20 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium inline-block backdrop-blur-sm animate-fade-in transform transition-all duration-700 hover:scale-105">
              Kenya's Premier Agricultural Knowledge Platform
            </span>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white drop-shadow-lg leading-tight animate-fade-in transform transition-all duration-1000 hover:text-tu-green-100" style={{animationDelay: "0.2s"}}>
              <div className="space-y-1 sm:space-y-2">
                <div>
                  <span className="inline-block animate-fade-in" style={{animationDelay: "0.3s"}}>Empowering</span>{" "}
                  <span className="inline-block animate-fade-in text-tu-green-200" style={{animationDelay: "0.5s"}}>Farmers</span>
                </div>
                <div>
                  <span className="inline-block animate-fade-in" style={{animationDelay: "0.7s"}}>Through</span>{" "}
                  <span className="inline-block animate-fade-in text-tu-green-200" style={{animationDelay: "0.9s"}}>Knowledge</span>
                </div>
                <div>
                  <span className="inline-block animate-fade-in text-tu-green-200" style={{animationDelay: "1.1s"}}>Innovation</span>{" "}
                  <span className="inline-block animate-fade-in" style={{animationDelay: "1.3s"}}>and</span>{" "}
                  <span className="inline-block animate-fade-in text-tu-green-200" style={{animationDelay: "1.5s"}}>Community</span>
                </div>
              </div>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-2xl text-white drop-shadow-md leading-relaxed animate-fade-in transform transition-all duration-1000" style={{animationDelay: "1.7s"}}>
              Access farming expertise, connect with agricultural specialists, and discover the latest innovations in smart farming with Tujue Ukulima.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 animate-fade-in transform transition-all duration-1000" style={{animationDelay: "1.9s"}}>
              <Button asChild size="default" className="bg-white text-tu-green-700 hover:bg-tu-green-100 w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link to="/articles">Explore Resources</Link>
              </Button>
              <Button asChild size="default" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-tu-green-700 w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
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
