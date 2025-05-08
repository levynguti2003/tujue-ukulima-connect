
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User as UserIcon } from "lucide-react";
import { Message } from "./types";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  // Ensure message.timestamp is a Date object
  const timestamp = message.timestamp instanceof Date 
    ? message.timestamp 
    : new Date(message.timestamp);

  return (
    <div
      className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
        <Avatar className={`h-8 w-8 ${message.sender === 'user' ? 'ml-2' : 'mr-2'} flex-shrink-0`}>
          {message.sender === 'user' ? (
            <AvatarFallback className="bg-tu-blue-500">
              <UserIcon className="h-4 w-4" />
            </AvatarFallback>
          ) : (
            <AvatarFallback className="bg-tu-green-600">
              <Bot className="h-4 w-4" />
            </AvatarFallback>
          )}
        </Avatar>
        <div
          className={`px-4 py-2 rounded-lg ${
            message.sender === 'user'
              ? 'bg-tu-blue-500 text-white'
              : 'bg-white border border-gray-200'
          }`}
        >
          <p className="whitespace-pre-line">{message.content}</p>
          <div
            className={`text-xs mt-1 ${
              message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
            }`}
          >
            {timestamp.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
