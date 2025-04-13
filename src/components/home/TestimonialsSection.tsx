
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "John Mwangi",
    role: "Rice Farmer, Mwea",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "The drone spraying techniques I learned from Tujue Ukulima increased my yield by 30% while reducing my pesticide costs. The knowledge hub has transformed my farming approach.",
    rating: 5
  },
  {
    id: 2,
    name: "Faith Wanjiru",
    role: "Vegetable Farmer, Nakuru",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    quote: "As a small-scale farmer, I never thought advanced farming technology was accessible to me. The expert advice from this platform helped me implement affordable smart farming solutions.",
    rating: 5
  },
  {
    id: 3,
    name: "David Ochieng",
    role: "Maize Farmer, Kakamega",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
    quote: "The climate-smart agriculture resources helped me adapt to changing weather patterns. My crops now withstand drought periods that previously would have devastated my harvest.",
    rating: 4
  },
  {
    id: 4,
    name: "Esther Kamau",
    role: "Agricultural Cooperative Leader",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    quote: "Our entire cooperative uses Tujue Ukulima's resources for training. The video tutorials are particularly helpful for members who prefer visual learning over written content.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-tu-blue-50 to-tu-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-tu-green-700 mb-4">
            What Farmers Are Saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from farmers across Kenya who have transformed their agricultural practices with knowledge from our platform.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full border border-tu-green-100 hover:border-tu-green-300 transition-colors">
                  <div className="flex items-center mb-6 gap-4">
                    <Avatar className="h-14 w-14 border-2 border-tu-green-300">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-tu-green-200 text-tu-green-700">
                        {testimonial.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-heading font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-tu-green-300 opacity-40" />
                    <p className="text-gray-700 italic pl-4">{testimonial.quote}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious className="relative static left-0 right-0 translate-y-0" />
            <CarouselNext className="relative static left-0 right-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
