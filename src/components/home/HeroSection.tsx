
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
    <div className="relative text-white overflow-hidden h-[75vh]">
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
              <div className="relative h-[75vh] overflow-hidden">
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
        
        {/* Custom Navigation Buttons */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black w-12 h-12 rounded-full" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black w-12 h-12 rounded-full" />
      </Carousel>

      {/* White Border Design Elements - Left Side */}
      <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 border-l-8 border-t-8 border-white z-10"></div>
      <div className="absolute top-0 left-0 w-6 h-24 md:w-8 md:h-32 bg-white z-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-6 md:w-24 md:h-8 border-b-8 border-white z-10"></div>
      <div className="absolute bottom-0 left-0 w-6 h-24 md:w-8 md:h-32 bg-white z-10"></div>

      <div className="absolute inset-0 z-10">
        <div className="container mx-auto px-6 md:px-8 h-full flex flex-col justify-center">
          <div className="max-w-4xl space-y-6 md:space-y-8 pt-8 md:pt-0">
            <span className="bg-transparent text-white text-sm md:text-base font-medium inline-block animate-fade-in transform transition-all duration-700">
              SKYFIELD TUJUE UKULIMA
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white drop-shadow-lg leading-tight animate-fade-in transform transition-all duration-1000" style={{animationDelay: "0.2s"}}>
              <div className="space-y-2 md:space-y-3">
                <div>
                  <span className="inline-block animate-fade-in" style={{animationDelay: "0.3s"}}>Growing</span>{" "}
                  <span className="inline-block animate-fade-in" style={{animationDelay: "0.5s"}}>Smarter,</span>
                </div>
                <div>
                  <span className="inline-block animate-fade-in" style={{animationDelay: "0.7s"}}>Farming</span>{" "}
                  <span className="inline-block animate-fade-in" style={{animationDelay: "0.9s"}}>Better!</span>
                </div>
              </div>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl opacity-90 max-w-2xl text-white drop-shadow-md leading-relaxed animate-fade-in transform transition-all duration-1000" style={{animationDelay: "1.1s"}}>
              Your go-to hub for fun, easy, and expert farming tips straight from the field.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in transform transition-all duration-1000 justify-start" style={{animationDelay: "1.3s"}}>
              <Button asChild size="lg" className="bg-tu-green-600 text-white hover:bg-tu-green-700 w-auto text-base md:text-lg px-6 py-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold">
                <Link to="/articles">Browse Articles</Link>
              </Button>
              <Button asChild size="lg" className="bg-orange-600 text-white hover:bg-orange-700 w-auto text-base md:text-lg px-6 py-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold">
                <Link to="/ask-expert">Ask an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Arrow/Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center bg-tu-green-600/80 hover:bg-tu-green-600 transition-colors cursor-pointer">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-8 md:h-12 lg:h-16 bg-gradient-to-t from-white to-transparent z-20"></div>
    </div>
  );
};

export default HeroSection;
