
export interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export interface ChatHistoryState {
  messages: Message[];
  lastUpdated: Date;
}
