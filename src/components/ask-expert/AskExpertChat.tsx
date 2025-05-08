import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
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

// Store API key in a constant - in production this should be stored in environment variables or a secure backend
// This is only for development purposes
const GEMINI_API_KEY = "AIzaSyAd3uOAk2Jw9zgyFBODJQejyqDonODNHD8";

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

  const handleSend = async (e: React.FormEvent) => {
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
    
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=' + GEMINI_API_KEY, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: "You are an agricultural expert assistant at SkyField Kenya. Provide accurate, practical advice about farming, crops, livestock, and agricultural practices in Kenya and East Africa. Be precise, concise, and helpful in your responses. Focus on sustainable farming methods and locally appropriate solutions. Now answer the following question: " + input
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.2,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      
      // Extract the response text from Gemini API
      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
        "I'm having trouble processing your request. Please try again.";
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: botResponse,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      
      // Display error message but also provide a fallback response
      toast({
        title: "Connection Issue",
        description: "We couldn't connect to our expert system. Please try again later.",
        variant: "destructive"
      });
      
      // Add fallback message
      const fallbackMessage: Message = {
        id: `bot-fallback-${Date.now()}`,
        content: "I'm sorry, but I'm having trouble connecting to our agricultural database right now. Please try asking your question again in a moment, or consider using the expert consultation form for personalized assistance.",
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsTyping(false);
    }
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
                <p className="whitespace-pre-line">{message.content}</p>
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
