
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cropNames } from "@/data/cropVideosData";

interface CropListProps {
  onSelectCrop: (crop: string) => void;
}

const CropList = ({ onSelectCrop }: CropListProps) => {
  return (
    <ScrollArea className="max-h-[65vh]">
      <div className="p-6 grid grid-cols-2 gap-3">
        {cropNames.map((crop) => (
          <Button
            key={crop}
            variant="outline"
            className="w-full flex items-center justify-between"
            onClick={() => onSelectCrop(crop)}
          >
            <span>{crop}</span>
            <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <polygon points="6,4 16,10 6,16"></polygon>
            </svg>
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
};

export default CropList;
