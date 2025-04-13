
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface ArticleBannerProps {
  title: string;
  description: string;
}

const ArticleBanner = ({ title, description }: ArticleBannerProps) => {
  return (
    <div className="bg-gradient-to-r from-tu-green-700 to-tu-green-600 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 text-center">
          {title}
        </h1>
        <p className="text-tu-green-100 text-center mb-6 md:mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="max-w-md mx-auto relative">
          <Input 
            type="search" 
            placeholder="Search articles..." 
            className="pl-10 bg-white/90 backdrop-blur-sm border-transparent focus:bg-white"
          />
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Button className="absolute right-1 top-1 h-8" size="sm">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleBanner;
