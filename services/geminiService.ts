
import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY || process.env.GEMINI_API_KEY;

let ai: GoogleGenAI | null = null;

if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  console.warn("GEMINI_API_KEY environment variable not set. AI features will be disabled.");
}

let chat: Chat | null = null;

const getChatInstance = (): Chat => {
  if (!ai) {
    throw new Error("Gemini API is not configured. Please set GEMINI_API_KEY environment variable.");
  }
  if (!chat) {
    chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: 'You are LawBot, a helpful assistant providing clear and accessible information about local and national laws, civic rights, and responsibilities for a citizen in a general context. You are not a lawyer and this is not legal advice. Keep your answers concise and easy to understand for the average citizen. Format your responses with markdown for better readability.',
      },
    });
  }
  return chat;
};

export const sendMessageToBot = async (message: string): Promise<string> => {
  try {
    const chatInstance = getChatInstance();
    const result = await chatInstance.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
};

export const extractTextFromImage = async (base64ImageData: string, mimeType: string): Promise<string> => {
  try {
    if (!ai) {
      return "Error: Gemini API is not configured. Please set GEMINI_API_KEY environment variable.";
    }
    const imagePart = {
      inlineData: {
        mimeType: mimeType,
        data: base64ImageData,
      },
    };
    const textPart = {
      text: "You are an expert OCR system for Indian police documents (like FIRs). Extract all text. Then, identify and list key information: FIR No., Date of FIR, Police Station, Complainant Name, Accused Name(s), and a concise summary of the incident. Format the key info clearly as key-value pairs.",
    };

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: { parts: [imagePart, textPart] },
    });

    return response.text;
  } catch (error) {
    console.error("Error extracting text from image with Gemini:", error);
    return "Error: The AI service could not process the document. Please check the file and try again.";
  }
};
