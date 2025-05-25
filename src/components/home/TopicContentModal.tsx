
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopicContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const topicImages: Record<string, string[]> = {
  "Crop Production": [
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  "Animal Production": [
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  "Precision Agriculture": [
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1591696331111-ef9586a5b33a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  "Pest Control": [
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1592492135673-55966d3b541a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  "Smart Farming": [
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  "Drone Spraying": [
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1591696331111-ef9586a5b33a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  "Climate-Smart Agriculture": [
    "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1592283062643-55a6c37b3a95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  "Soil Health": [
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1615671524827-c1fe3973b648?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  "Rice Farming": [
    "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ]
};

const TopicContentModal = ({ isOpen, onClose, title, content }: TopicContentModalProps) => {
  const images = topicImages[title] || topicImages["Crop Production"];
  
  // Process content into sections for better layout
  const sections = content.split(/(?=\d+\.|What is|Benefits of|Key|Steps|Challenges|Real-World|Final|Conclusion)/);
  
  const renderContentWithImages = () => {
    return sections.map((section, index) => {
      // Skip empty sections
      if (!section.trim()) return null;
      
      const isMainSection = section.includes('What is') || section.includes('Benefits of') || section.includes('Key') || section.includes('Steps') || section.includes('Final') || section.includes('Conclusion');
      const shouldShowImage = index > 0 && index % 2 === 0 && images[Math.floor(index / 2)];
      
      return (
        <div key={index} className="mb-8">
          {shouldShowImage && (
            <div className="mb-6">
              <img 
                src={images[Math.floor(index / 2) - 1]} 
                alt={`${title} illustration`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          )}
          <div 
            className="prose prose-green prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: section
                .replace(/\n/g, '<br/>')
                .replace(/●/g, '• ')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-tu-green-700 font-semibold">$1</strong>')
                .replace(/✅/g, '<span class="text-green-600 font-semibold">✓</span> ')
                .replace(/Pro tip:|Tip:|Note:|Remember:|Fun fact:|Did You Know?:/g, '<span class="inline-block bg-tu-green-100 text-tu-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">💡 Tip</span><br/>')
            }}
          />
        </div>
      );
    }).filter(Boolean);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] p-0 gap-0 max-h-[90vh]">
        <div className="flex flex-col w-full">
          {/* Header with Hero Image */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={images[0]} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-6 right-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
              <p className="text-white/90 text-sm">Comprehensive guide to modern agricultural practices</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose} 
              className="absolute top-4 right-4 h-8 w-8 bg-white/20 hover:bg-white/30 text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Content */}
          <ScrollArea className="h-[calc(90vh-12rem)]">
            <div className="p-8">
              {/* Introduction */}
              <div className="mb-8 p-6 bg-gradient-to-r from-tu-green-50 to-tu-green-100 rounded-lg border-l-4 border-tu-green-500">
                <p className="text-lg text-gray-700 font-medium leading-relaxed">
                  Discover the essential knowledge and best practices that will transform your agricultural journey.
                </p>
              </div>

              {/* Main Content with Images */}
              {renderContentWithImages()}

              {/* Call to Action */}
              <div className="mt-12 p-6 bg-gradient-to-r from-tu-green-600 to-tu-green-700 rounded-lg text-white text-center">
                <h3 className="text-xl font-bold mb-3">Ready to Implement These Practices?</h3>
                <p className="mb-4 opacity-90">
                  Join thousands of farmers who are already transforming their agricultural practices with modern techniques.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="secondary" className="bg-white text-tu-green-700 hover:bg-gray-100">
                    Explore More Articles
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Watch Related Videos
                  </Button>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TopicContentModal;
