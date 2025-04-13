
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

const AskExpertPromo = () => {
  return (
    <section className="py-16 px-4 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-tu-green-800 opacity-80"></div>
      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        <MessageSquare className="h-16 w-16 text-white mb-6" />
        <h2 className="text-white text-3xl md:text-4xl font-heading font-bold mb-4 max-w-2xl">
          Have Questions About Your Farm?
        </h2>
        <p className="text-tu-green-100 text-lg max-w-2xl mb-8">
          Connect with our agricultural experts who can answer your questions and provide personalized guidance for your farming challenges.
        </p>
        <Button asChild size="lg" className="bg-white text-tu-green-700 hover:bg-tu-green-100">
          <Link to="/ask-expert">Ask an Expert Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default AskExpertPromo;
