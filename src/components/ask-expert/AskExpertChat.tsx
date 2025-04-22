
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Send, Bot, User as UserIcon, Key } from "lucide-react";
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
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("perplexity_api_key") || "");
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

  const saveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem("perplexity_api_key", key);
    toast({
      title: "API Key Saved",
      description: "Your API key has been saved for this session",
    });
  };
  
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;

    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Perplexity API key to continue",
        variant: "destructive"
      });
      return;
    }
    
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
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: 'You are an agricultural expert assistant. Provide accurate, practical advice about farming, crops, livestock, and agricultural practices. Be precise and concise in your responses.'
            },
            {
              role: 'user',
              content: input
            }
          ],
          temperature: 0.2,
          top_p: 0.9,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: data.choices[0].message.content,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      toast({
        title: "Expert Response",
        description: "You received a new response to your question",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response from the expert system",
        variant: "destructive"
      });
      console.error('Error:', error);
    } finally {
      setIsTyping(false);
    }
  };
  
  return (
    <Card className="flex flex-col h-[600px] shadow-md">
      {/* Chat header */}
      <div className="bg-tu-green-700 text-white px-4 py-3 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center">
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
        <div className="flex items-center gap-2">
          <Input
            type="password"
            placeholder="Enter API Key"
            value={apiKey}
            onChange={(e) => saveApiKey(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 w-64"
          />
          <Key className="h-5 w-5 text-white/70" />
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
