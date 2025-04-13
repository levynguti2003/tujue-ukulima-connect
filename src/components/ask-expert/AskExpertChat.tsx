
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Send, Bot, User as UserIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const AskExpertChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm your agricultural assistant. How can I help you with your farming questions today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };
  
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: input,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "That's a great question! For optimal rice yields, maintaining consistent water levels is crucial, especially during the flowering stage. I recommend keeping water depth at 5-7cm during this period.",
        "Based on your description, your crops might be affected by rice blast fungus. This is common in humid conditions. Consider using resistant varieties and ensure good drainage in your fields.",
        "Drone spraying can significantly reduce chemical usage by 20-30% compared to traditional methods. The precision targeting also minimizes environmental impact and can be more cost-effective for fields larger than 5 acres.",
        "For small-scale farming, I'd recommend starting with soil testing and crop rotation before investing in expensive technology. These practices can dramatically improve your yields at minimal cost.",
        "Climate-smart agriculture techniques like mulching can help retain soil moisture during dry spells. This is especially important as weather patterns become less predictable."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: randomResponse,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      
      toast({
        title: "Expert Response",
        description: "You received a new response to your question",
      });
    }, 1500);
  };
  
  return (
    <Card className="flex flex-col h-[600px] shadow-md">
      {/* Chat header */}
      <div className="bg-tu-green-700 text-white px-4 py-3 rounded-t-lg flex items-center">
        <Avatar className="h-10 w-10 bg-white text-tu-green-700 mr-3">
          <AvatarImage src="/placeholder.svg" alt="Expert Avatar" />
          <AvatarFallback>
            <Bot className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">Agricultural Expert</h3>
          <p className="text-sm text-tu-green-100">Ask me any farming questions</p>
        </div>
      </div>
      
      {/* Chat messages */}
      <div 
        ref={chatContainerRef}
        className="flex-grow overflow-y-auto px-4 py-6 bg-gray-50"
      >
        {messages.map((message) => (
          <div
            key={message.id}
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
                <p>{message.content}</p>
                <div
                  className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
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
        )}
      </div>
      
      {/* Input area */}
      <form onSubmit={handleSend} className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
        <div className="flex">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your farming question..."
            className="flex-grow mr-2 resize-none max-h-24"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend(e);
              }
            }}
          />
          <Button type="submit" className="self-end">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
        <div className="mt-2 text-xs text-gray-500 italic">
          Press Enter to send, Shift+Enter for a new line
        </div>
      </form>
    </Card>
  );
};

export default AskExpertChat;
