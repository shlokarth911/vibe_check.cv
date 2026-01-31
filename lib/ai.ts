import { GoogleGenAI } from "@google/genai";

// Initialize Gemini client with API key from environment
export const geminiClient = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const GEMINI_MODEL = "gemini-3-flash-preview";
