
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, ArrowRight } from "lucide-react";

const AskExpertPromo = () => {
  return (
    <section className="py-20 px-4 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center relative overflow-hidden">
      <div className="absolute inset-0 bg-tu-green-800 opacity-90"></div>
      <div 
        className="absolute inset-0 bg-gradient-to-br from-tu-blue-900/30 to-tu-green-800/50"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)"
        }}
      ></div>
      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm mb-6">
          <MessageSquare className="h-10 w-10 text-white" />
        </div>
        <h2 className="text-white text-3xl md:text-4xl font-heading font-bold mb-4 max-w-2xl">
          Have Questions About Your Farm?
        </h2>
        <p className="text-tu-green-100 text-lg max-w-2xl mb-8">
          Connect with our agricultural experts who can answer your questions and provide personalized guidance for your farming challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-white text-tu-green-700 hover:bg-tu-green-100 group">
            <Link to="/ask-expert">
              Ask an Expert Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Link to="/articles">Browse FAQs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AskExpertPromo;
