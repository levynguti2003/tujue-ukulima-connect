
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, Filter } from "lucide-react";

const categories = [
  "All Categories",
  "Pest Control",
  "Smart Farming",
  "Drone Spraying",
  "Climate-Smart Agriculture",
  "Soil Health",
  "Rice Farming"
];

interface VideoFiltersProps {
  onFilterChange: (category: string) => void;
}

const VideoFilters = ({ onFilterChange }: VideoFiltersProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold flex items-center">
          <Filter className="h-4 w-4 mr-2" />
          Filter Videos
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden"
        >
          {showFilters ? "Hide" : "Show"} <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${showFilters ? "transform rotate-180" : ""}`} />
        </Button>
      </div>
      
      {/* Mobile filters */}
      <div className={`md:hidden ${showFilters ? "block" : "hidden"}`}>
        <div className="space-y-2 mt-2">
          {categories.map((category) => (
            <div
              key={category}
              className={`flex justify-between items-center px-3 py-2 rounded-md cursor-pointer ${
                selectedCategory === category ? "bg-tu-green-100 text-tu-green-700" : "hover:bg-gray-100"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <span>{category}</span>
              {selectedCategory === category && <Check className="h-4 w-4" />}
            </div>
          ))}
        </div>
      </div>
      
      {/* Desktop filters */}
      <div className="hidden md:flex flex-wrap gap-2 mt-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={`text-sm py-1.5 px-3 cursor-pointer ${
              selectedCategory === category
                ? "bg-tu-green-600 hover:bg-tu-green-700"
                : "hover:bg-tu-green-100 hover:text-tu-green-700"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default VideoFilters;
