
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cropVideos, getYoutubeId } from "@/data/cropVideosData";

interface CropVideoListProps {
  selectedCrop: string;
  onBack: () => void;
  onSelectVideo: (id: string, title: string) => void;
}

const CropVideoList = ({ selectedCrop, onBack, onSelectVideo }: CropVideoListProps) => {
  return (
    <ScrollArea className="max-h-[65vh]">
      <div className="p-6">
        <Button
          variant="ghost"
          size="sm"
          className="mb-2 p-0 text-tu-green-700 underline"
          onClick={onBack}
        >
          ← Back to crop list
        </Button>
        <h3 className="mb-4 font-bold text-lg">{selectedCrop} Videos</h3>
        <ul className="space-y-2">
          {cropVideos[selectedCrop].map((vid, idx) => (
            <li key={vid.url} className="flex items-center gap-3">
              <img
                src={`https://img.youtube.com/vi/${getYoutubeId(vid.url)}/hqdefault.jpg`}
                alt={`Video ${idx + 1}`}
                className="w-24 h-16 object-cover rounded shrink-0"
              />
              <Button
                variant="ghost"
                className="text-left flex-1 justify-start hover:text-tu-green-700"
                onClick={() =>
                  onSelectVideo(getYoutubeId(vid.url), vid.title)
                }
              >
                Watch Video {idx + 1}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  );
};

export default CropVideoList;
