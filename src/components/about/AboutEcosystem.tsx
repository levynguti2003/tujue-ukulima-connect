
import { Plane, ShoppingCart, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutEcosystem = () => {
  return (
    <div 
      className="py-16 bg-cover bg-center relative" 
      style={{ 
        backgroundImage: `url('/lovable-uploads/430d9ca7-f90f-44e4-8ae6-8d5f330b17d7.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Ecosystem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Drone Services Card */}
          <Card className="border-t-4 border-tu-blue-500 overflow-hidden card-hover bg-white/80">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-tu-blue-100 rounded-full mb-4">
                  <Plane className="h-8 w-8 text-tu-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Drone Services</h3>
                <p className="text-gray-600">
                  Precision drone spraying for pesticides, fertilizers, and bird deterrence, 
                  reducing input costs and increasing yields.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Digital Marketplace Card */}
          <Card className="border-t-4 border-tu-green-500 overflow-hidden card-hover bg-white/80">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-tu-green-100 rounded-full mb-4">
                  <ShoppingCart className="h-8 w-8 text-tu-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Digital Marketplace</h3>
                <p className="text-gray-600">
                  A smart e-commerce platform where farmers sell their produce, buyers place bids, 
                  and both parties gain access to transparent, traceable transactions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Knowledge Hub Card */}
          <Card className="border-t-4 border-tu-brown-500 overflow-hidden card-hover bg-white/80">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-tu-brown-100 rounded-full mb-4">
                  <BookOpen className="h-8 w-8 text-tu-brown-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Tujue Ukulima Knowledge Hub</h3>
                <p className="text-gray-600">
                  A learning platform offering curated content, short courses, certifications, 
                  and real-time advisory support for both beginner and experienced farmers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutEcosystem;
