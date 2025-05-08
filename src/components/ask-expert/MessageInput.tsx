
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled: boolean;
}

const MessageInput = ({ onSendMessage, disabled }: MessageInputProps) => {
  const [input, setInput] = useState("");

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    onSendMessage(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSend} className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
      <div className="flex">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your farming question..."
          className="flex-grow mr-2 resize-none max-h-24"
          disabled={disabled}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend(e);
            }
          }}
        />
        <Button type="submit" className="self-end" disabled={disabled}>
          <Send className="h-4 w-4" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
      <div className="mt-2 text-xs text-gray-500 italic">
        Press Enter to send, Shift+Enter for a new line
      </div>
    </form>
  );
};

export default MessageInput;
