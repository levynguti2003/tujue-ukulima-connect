
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Message, ChatHistoryState } from "./types";
import { sendMessageToGemini, createMessage } from "./api";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";
import { Alert, AlertDescription } from "@/components/ui/alert";

const STORAGE_KEY = "skyfield-chat-history";
const WELCOME_MESSAGE: Message = {
  id: "welcome",
  content: "Hello! I'm your agricultural assistant. How can I help you with your farming questions today?",
  sender: "bot",
  timestamp: new Date()
};

const AskExpertChat = () => {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const { toast } = useToast();

  // Load chat history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem(STORAGE_KEY);
    if (savedHistory) {
      try {
        const parsedHistory: ChatHistoryState = JSON.parse(savedHistory);
        
        // Convert ISO date strings back to Date objects
        const restoredMessages = parsedHistory.messages.map(msg => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        
        setMessages(restoredMessages);
      } catch (error) {
        console.error("Error parsing saved chat history:", error);
        // If there's an error parsing, we'll use the default welcome message
      }
    }
  }, []);

  // Save chat history to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      const historyState: ChatHistoryState = {
        messages,
        lastUpdated: new Date()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(historyState));
    }
  }, [messages]);

  // Reset rate limit status after a timeout
  useEffect(() => {
    if (isRateLimited) {
      const timer = setTimeout(() => {
        setIsRateLimited(false);
        setError(null);
      }, 5000); // Reset after 5 seconds
      
      return () => clearTimeout(timer);
    }
  }, [isRateLimited]);

  const handleSendMessage = async (input: string) => {
    // If we're rate limited, prevent sending more messages
    if (isRateLimited) {
      toast({
        title: "Please wait",
        description: "You're sending messages too quickly. Please wait a moment.",
        variant: "destructive"
      });
      return;
    }
    
    // Clear any previous errors
    setError(null);
    
    // Add user message
    const userMessage = createMessage(input, "user");
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    try {
      // Get response from Gemini API
      const botResponseText = await sendMessageToGemini(input);
      
      // Add bot message
      const botMessage = createMessage(botResponseText, "bot");
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      
      // Check for rate limiting errors
      let errorMessage = "We couldn't connect to our expert system. Please try again later.";
      if (error instanceof Error && error.message.includes("rate limit") || error instanceof Error && error.message.includes("too many messages")) {
        errorMessage = error.message;
        setIsRateLimited(true);
        setError(errorMessage);
      }
      
      // Display error message
      toast({
        title: "Connection Issue",
        description: errorMessage,
        variant: "destructive"
      });
      
      // Add fallback message
      const fallbackMessage = createMessage(
        "I'm sorry, but I'm having trouble connecting right now. Please wait a moment before asking your next question.",
        "bot"
      );
      
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChatHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([WELCOME_MESSAGE]);
    toast({
      title: "Chat History Cleared",
      description: "Your conversation history has been deleted.",
    });
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
        
        <button 
          onClick={clearChatHistory} 
          className="text-sm bg-tu-green-600 hover:bg-tu-green-800 transition-colors px-2 py-1 rounded"
        >
          Clear Chat
        </button>
      </div>
      
      {/* Rate limiting error alert */}
      {error && (
        <Alert variant="destructive" className="mx-4 mt-2 py-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="ml-2">{error}</AlertDescription>
        </Alert>
      )}
      
      {/* Chat messages */}
      <ChatMessages messages={messages} isTyping={isTyping} />
      
      {/* Input area */}
      <MessageInput onSendMessage={handleSendMessage} disabled={isTyping || isRateLimited} />
    </Card>
  );
};

export default AskExpertChat;
