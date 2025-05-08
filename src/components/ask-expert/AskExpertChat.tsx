
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Message, ChatHistoryState } from "./types";
import { sendMessageToGemini, createMessage } from "./api";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";

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

  const handleSendMessage = async (input: string) => {
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
      
      // Display error message
      toast({
        title: "Connection Issue",
        description: "We couldn't connect to our expert system. Please try again later.",
        variant: "destructive"
      });
      
      // Add fallback message
      const fallbackMessage = createMessage(
        "I'm sorry, but I'm having trouble connecting to our agricultural database right now. Please try asking your question again in a moment, or consider using the expert consultation form for personalized assistance.",
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
      
      {/* Chat messages */}
      <ChatMessages messages={messages} isTyping={isTyping} />
      
      {/* Input area */}
      <MessageInput onSendMessage={handleSendMessage} disabled={isTyping} />
    </Card>
  );
};

export default AskExpertChat;
