
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot } from "lucide-react";

const TypingIndicator = () => {
  return (
    <div className="flex mb-4">
      <Avatar className="h-8 w-8 mr-2">
        <AvatarFallback className="bg-tu-green-600">
          <Bot className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
      <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg">
        <div className="flex space-x-1">
          <div className="h-2 w-2 bg-gray-500 rounded-full animate-pulse"></div>
          <div className="h-2 w-2 bg-gray-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="h-2 w-2 bg-gray-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
