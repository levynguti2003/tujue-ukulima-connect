
import { Message } from "./types";

// Store API key in a constant - in production this should be stored in environment variables or a secure backend
// This is only for development purposes
const GEMINI_API_KEY = "AIzaSyAd3uOAk2Jw9zgyFBODJQejyqDonODNHD8";

// Track API call timestamps to implement rate limiting
let lastApiCallTime = 0;
const MIN_API_CALL_INTERVAL = 1000; // 1 second minimum between API calls

export async function sendMessageToGemini(input: string): Promise<string> {
  // Simple rate limiting
  const now = Date.now();
  const timeElapsed = now - lastApiCallTime;
  
  if (timeElapsed < MIN_API_CALL_INTERVAL) {
    // If API was called too recently, add artificial delay
    await new Promise(resolve => setTimeout(resolve, MIN_API_CALL_INTERVAL - timeElapsed));
  }
  
  try {
    lastApiCallTime = Date.now();
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
      if (response.status === 429) {
        throw new Error("Rate limit exceeded. Please wait a moment before sending another message.");
      }
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the response text from Gemini API
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 
      "I'm having trouble processing your request. Please try again.";
  } catch (error) {
    // Re-throw with more specific message for rate limit errors
    if (error instanceof Error && error.message.includes("429")) {
      throw new Error("You've sent too many messages too quickly. Please wait a moment before sending another message.");
    }
    throw error;
  }
}

export function createMessage(content: string, sender: "user" | "bot"): Message {
  return {
    id: `${sender}-${Date.now()}`,
    content,
    sender,
    timestamp: new Date()
  };
}
