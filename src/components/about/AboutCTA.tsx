
import { Mail, Users, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-tu-green-100 to-tu-blue-100 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-tu-green-700 mb-8">
            Join the Tujue Ukulima Community Today
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                <Mail className="h-5 w-5" />
                Contact Us
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="bg-white gap-2">
              <Link to="/auth">
                <Users className="h-5 w-5" />
                Join the Community
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link to="/marketplace">
                <Compass className="h-5 w-5" />
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCTA;
