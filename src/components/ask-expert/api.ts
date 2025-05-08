
import { Message } from "./types";

// Store API key in a constant - in production this should be stored in environment variables or a secure backend
// This is only for development purposes
const GEMINI_API_KEY = "AIzaSyAd3uOAk2Jw9zgyFBODJQejyqDonODNHD8";

export async function sendMessageToGemini(input: string): Promise<string> {
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
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 
    "I'm having trouble processing your request. Please try again.";
}

export function createMessage(content: string, sender: "user" | "bot"): Message {
  return {
    id: `${sender}-${Date.now()}`,
    content,
    sender,
    timestamp: new Date()
  };
}
