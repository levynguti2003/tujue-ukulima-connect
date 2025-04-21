
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoModal from "@/components/videos/VideoModal";

const animalVideos: { [animal: string]: string[] } = {
  "Cattle": [
    "OwNCbkIHBs4",
    "l0H5sVWt_dA",
    "GMyj6rM00qY",
    "I0QGe3JK134",
    "cskOSWUx6h8",
    "_7m28Q2ucEQ",
  ],
  "Goats": [
    "JnkfnM9hP48",
    "1J0GADKEIF0",
    "MBVF1RZdKjM",
    "jxCSOVNIVo8",
    "rFSqNDDfQbY",
    "wZCUtAT94kQ",
  ],
  "Pigs": [
    "_K5Rn-yw84E",
    "xTeDsPgQhqw",
    "p44kDSnAJFQ",
    "Jgvul_FZd-0",
    "FnMEwsAWMag",
    "57wYGNV18GM",
  ],
  "Turkeys": [
    "WDzb_x9_khE",
    "2Ri45aKnTD8",
    "R54enhPyUAk",
    "S1AN9worJLc",
  ],
  "Horses": [
    "oJzUXaGBW5U",
    "vQlBWOy6WbM",
    "dTsv05g7ezM",
    "q7YpWpPv-uo",
    "pvBa8X-S6ys",
  ],
  "Donkeys": [
    "0vDwf0lbIW8",
    "VQ8pQSiTGv4",
    "vKPj2BjJ3_o",
  ],
  "Quails": [
    "h2ZzrS8Z-vE",
    "qUjYb-SwMwg",
    "YvH_NABkXYE",
    "9NyO06onVn4",
    "566hb5VsEic",
  ],
  "Llamas": [
    "Jc-lkmDVAbQ",
    "UBh4VYrTcvY",
    "8FPXcYvgGcY",
    "ctXTMMObk6k",
    "lrnLAGfqwfU",
  ],
  "Bees": [
    "LHBXmFU3vV0",
    "sJzUn7aZ-K8",
    "QwOhh-RPlwA",
    "kJ1JSHIB52s",
    "jeFxOUZreXI",
    "HDUPcE14TUM",
  ],
  "Ostriches": [
    "5Ifyrj-NUrc",
    "oJ6kXUr9Isk",
    "JVJrfp1QrXM",
    "LaQXVfl8pg8",
    "w_XPBFH87I0",
    "BSjVhXohpMg",
  ],
  "Chickens": [
    "pMbS8h1b5nY",
    "jEv8_3dCzyc",
    "QnHjj95J0Hk",
    "ImPhTA9OS_Y",
    "2Y-Q1up5lhs",
    "qgG3jag-H6M",
  ],
  "Sheep": [
    "oVIdJUuIZGk",
    "p-HHxgO_0a8",
    "U5cOUebj4-w",
    "ZLmXwJLw_-I",
    "XBshPO9MbWw",
    "fs_X3O-5m7U",
    "gY-5e4KqUeU",
  ],
  "Ducks": [
    "bxrDBGOT4kM",
    "e6UYd1zv-Ec",
    "ENGhsCMVJq8",
    "cgwGWW5pk2g",
    "mYmBQ-gv9gE",
  ],
  "Rabbits": [
    "3CNwxQ_BISU",
    "i-rfXraKy30",
    "mu7mlOOYkr0",
    "DPb82nKHhyE",
    "LKuCAD4V27g",
    "id1BVrlllEA",
  ],
  "Camels": [
    "a3mTwCwgcBg",
    "IS3e2nxiW8I",
    "g9Ex7M6oG_s",
    "vkIG6CT2aLs",
    "8MwaFwTod4I",
    "pQhnaKKNV48",
  ],
  "Geese": [
    "vSg9t1lEUII",
    "g-PJTxTGh8w",
    "C2n4UlVDcWg",
    "O1ZWigNlEMs",
    "Q5M42PtSxAw",
    "y_p3Imc_VnI",
  ],
  "Fish": [
    "zzXmX_E7qWM",
    "YGaFNZzjCXI",
    "M7IroF4PfhM",
    "THeHlUb_mSM",
    "Bdv2HI72zgg",
    "0dwLOfyDlmA",
    "ASnKXWG1dBo",
    "TeZXH8e7UoY",
  ],
  "Guinea fowls": [
    "eShbGxO2Y78",
    "01rAa7l9LZ0",
    "5LhQVZc10jw",
    "ISKU-MnYuH0",
    "PVKF2Hs2zAM",
    "klK23Lyl4HI",
  ],
};

const animalList = Object.keys(animalVideos);

interface AnimalVideosModalProps {
  open: boolean;
  onClose: () => void;
}

const AnimalVideosModal: React.FC<AnimalVideosModalProps> = ({ open, onClose }) => {
  const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);
  const [playVideo, setPlayVideo] = useState<string | null>(null);

  return (
    <>
      <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
        <DialogContent className="max-w-2xl p-0 gap-0">
          <div className="flex items-center justify-between px-5 py-4 border-b bg-white sticky top-0 z-10">
            <h2 className="text-xl font-bold text-tu-green-700">
              Animal Production Videos
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          {!selectedAnimal ? (
            <ScrollArea className="max-h-[65vh]">
              <div className="p-6 grid grid-cols-2 gap-3">
                {animalList.map((animal) => (
                  <Button
                    key={animal}
                    variant="outline"
                    className="w-full flex items-center justify-between"
                    onClick={() => setSelectedAnimal(animal)}
                  >
                    <span>{animal}</span>
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <ScrollArea className="max-h-[65vh]">
              <div className="p-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="mb-2 p-0 text-tu-green-700 underline"
                  onClick={() => setSelectedAnimal(null)}
                >
                  ← Back to animal list
                </Button>
                <h3 className="mb-4 font-bold text-lg">
                  {selectedAnimal} Videos
                </h3>
                <ul className="space-y-2">
                  {animalVideos[selectedAnimal].map((id, idx) => (
                    <li key={id} className="flex items-center gap-3">
                      <img
                        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                        alt={`Video ${idx + 1}`}
                        className="w-24 h-16 object-cover rounded shrink-0"
                      />
                      <Button
                        variant="ghost"
                        className="text-left flex-1 justify-start hover:text-tu-green-700"
                        onClick={() => setPlayVideo(id)}
                      >
                        Watch Video {idx + 1}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
      {playVideo && (
        <VideoModal
          isOpen={!!playVideo}
          onClose={() => setPlayVideo(null)}
          videoId={playVideo}
          title="Animal Production Video"
        />
      )}
    </>
  );
};

export default AnimalVideosModal;
