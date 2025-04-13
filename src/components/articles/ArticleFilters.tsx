
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronDown } from "lucide-react";

const categories = [
  "All Topics",
  "Pest Control",
  "Smart Farming",
  "Drone Spraying",
  "Climate-Smart Agriculture",
  "Soil Health",
  "Rice Farming"
];

interface ArticleFiltersProps {
  onFilterChange: (category: string) => void;
}

const ArticleFilters = ({ onFilterChange }: ArticleFiltersProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="mb-8">
      {/* Mobile filter dropdown */}
      <div className="md:hidden mb-4">
        <Button 
          variant="outline" 
          className="w-full flex justify-between items-center"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <span>Filter by: {selectedCategory}</span>
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
        
        {showMobileFilters && (
          <div className="mt-2 bg-white border rounded-md shadow-lg p-2">
            {categories.map((category) => (
              <div
                key={category}
                className={`flex justify-between items-center px-3 py-2 rounded-md cursor-pointer ${
                  selectedCategory === category ? "bg-tu-green-100 text-tu-green-700" : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  handleCategoryClick(category);
                  setShowMobileFilters(false);
                }}
              >
                <span>{category}</span>
                {selectedCategory === category && <Check className="h-4 w-4" />}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Desktop filters */}
      <div className="hidden md:flex flex-wrap gap-2">
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

export default ArticleFilters;
