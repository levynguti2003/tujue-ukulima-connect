import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const [api, setApi] = useState<any>();
  
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b",
      alt: "African farmer working in green crop fields with modern farming techniques"
    },
    {
      url: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff", 
      alt: "Modern agricultural technology and smart farming equipment in African agriculture"
    },
    {
      url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30",
      alt: "African livestock farming with cattle grazing in agricultural fields"
    },
    {
      url: "https://images.unsplash.com/photo-1592839708495-5c5b48c76d3d",
      alt: "Traditional African farming with diverse crops and sustainable agriculture practices"
    }
  ];

  useEffect(() => {
    if (!api) return;

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 6000);

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
        }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className="-ml-0">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="pl-0 min-w-0">
              <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105"
                  style={{
                    backgroundImage: `url('${image.url}')`,
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
        <div className="container mx-auto px-4 py-20 md:py-28 h-full flex items-center">
          <div className="max-w-3xl">
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block backdrop-blur-sm">
              Kenya's Premier Agricultural Knowledge Platform
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in text-white drop-shadow-lg">
              Empowering Farmers Through Knowledge, Innovation, and Community
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl animate-fade-in text-white drop-shadow-md" style={{animationDelay: "0.1s"}}>
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
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-20"></div>
    </div>
  );
};

export default HeroSection;
