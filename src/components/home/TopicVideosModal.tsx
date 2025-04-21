
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Play } from "lucide-react";
import { useState } from "react";

interface TopicVideosModalProps {
  open: boolean;
  onClose: () => void;
  topic: string;
  videos: { title: string; url: string }[];
}

const extractYouTubeId = (url: string) => {
  const regExp = /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[1] ? match[1] : "";
};

const TopicVideosModal = ({ open, onClose, topic, videos }: TopicVideosModalProps) => {
  const [playingVideo, setPlayingVideo] = useState<{ title: string, url: string } | null>(null);

  return (
    <>
      <Dialog open={open} onOpenChange={open => !open && onClose()}>
        <DialogContent className="max-w-2xl w-full p-0 md:p-2">
          <div className="flex items-center justify-between bg-gray-100 p-4 border-b">
            <h2 className="font-bold text-lg truncate pr-2">
              {topic} Videos
            </h2>
            <button onClick={onClose} aria-label="Close" className="hover:bg-gray-200 rounded p-1">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="max-h-[65vh] overflow-y-auto custom-scroll bg-white p-3">
            <ul className="space-y-4">
              {videos.map((vid, i) => (
                <li key={vid.url} className="flex items-center gap-4 border rounded px-3 py-2 shadow hover:bg-gray-50 transition-colors">
                  <button
                    className="flex items-center px-3 py-1.5 bg-tu-green-600 hover:bg-tu-green-700 rounded text-white text-sm font-semibold transition-colors"
                    onClick={() => setPlayingVideo(vid)}
                  >
                    <Play className="w-4 h-4 mr-1" /> Watch
                  </button>
                  <span className="text-gray-800 flex-1 text-left text-sm truncate">{`Video ${i + 1}: ${vid.title}`}</span>
                  <a 
                    href={vid.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-500 hover:text-blue-700 text-xs underline"
                  >YouTube</a>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
      {playingVideo && (
        <Dialog open={!!playingVideo} onOpenChange={() => setPlayingVideo(null)}>
          <DialogContent className="max-w-3xl w-full !p-0">
            <div className="flex justify-between items-center border-b p-4 bg-gray-50">
              <h3 className="text-base font-semibold truncate">{playingVideo.title}</h3>
              <button onClick={() => setPlayingVideo(null)} aria-label="Close" className="hover:bg-gray-200 rounded p-1">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video w-full max-h-[60vh]">
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeId(playingVideo.url)}?autoplay=1`}
                title={playingVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      )}
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 8px;
          background: #f3f4f6;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};

export default TopicVideosModal;

