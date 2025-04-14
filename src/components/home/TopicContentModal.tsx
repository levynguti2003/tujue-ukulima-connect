
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

const TopicContentModal = ({ isOpen, onClose, title, content }: TopicContentModalProps) => {
  // Process content for better formatting
  const formattedContent = content
    .replace(/\n/g, '<br/>')
    .replace(/●/g, '• ')
    .replace(/\*\*/g, '<strong>')
    .replace(/\*\*$/g, '</strong>')
    .replace(/✅/g, '✓ ');

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] p-0 gap-0">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
            <h2 className="text-xl font-bold text-tu-green-700">{title}</h2>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose} 
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <ScrollArea className="h-[70vh]">
            <div className="p-6">
              <div 
                className="prose prose-green max-w-none"
                dangerouslySetInnerHTML={{ __html: formattedContent }}
              />
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TopicContentModal;
