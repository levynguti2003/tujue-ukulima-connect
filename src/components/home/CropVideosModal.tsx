
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import VideoModal from "@/components/videos/VideoModal";
import CropList from "./CropList";
import CropVideoList from "./CropVideoList";

interface CropVideosModalProps {
  open: boolean;
  onClose: () => void;
}

const CropVideosModal = ({ open, onClose }: CropVideosModalProps) => {
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);
  const [playVideo, setPlayVideo] = useState<{ id: string; title: string } | null>(null);

  return (
    <>
      <Dialog open={open} onOpenChange={(val) => { if (!val) onClose(); }}>
        <DialogContent className="max-w-2xl p-0 gap-0">
          <div className="flex items-center justify-between px-5 py-4 border-b bg-white sticky top-0 z-10">
            <h2 className="text-xl font-bold text-tu-green-700">
              Crop Production Videos
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <span className="sr-only">Close</span> ×
            </Button>
          </div>
          
          {!selectedCrop ? (
            <CropList onSelectCrop={setSelectedCrop} />
          ) : (
            <CropVideoList
              selectedCrop={selectedCrop}
              onBack={() => setSelectedCrop(null)}
              onSelectVideo={(id, title) => setPlayVideo({ id, title })}
            />
          )}
        </DialogContent>
      </Dialog>

      {playVideo && (
        <VideoModal
          isOpen={!!playVideo}
          onClose={() => setPlayVideo(null)}
          videoId={playVideo.id}
          title={playVideo.title}
        />
      )}
    </>
  );
};

export default CropVideosModal;
