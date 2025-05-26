
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const [api, setApi] = useState<any>();
  
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "African farmers working in green agricultural fields"
    },
    {
      url: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d", 
      alt: "African livestock grazing in natural farmland"
    },
    {
      url: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
      alt: "Traditional African farming with cattle in mountainous terrain"
    },
    {
      url: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
      alt: "African cattle farming in forest agricultural setting"
    }
  ];

  useEffect(() => {
    if (!api) return;

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 5000);

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
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="-ml-0">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="pl-0 min-w-0">
              <div className="relative bg-gradient-to-r from-tu-green-700 via-tu-green-600 to-tu-green-500 h-[500px] md:h-[600px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                  style={{
                    backgroundImage: `url('${image.url}')`,
                    opacity: 0.99
                  }}
                ></div>
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-tu-green-900/80 to-transparent"
                  style={{
                    maskImage: "radial-gradient(circle at 30% 50%, black 0%, transparent 70%)"
                  }}
                ></div>
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
