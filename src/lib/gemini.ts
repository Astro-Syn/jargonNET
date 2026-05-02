import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function getNPCResponse(
  userMessage: string,
  history: string
): Promise<string> {

  const prompt = `
You are a paranoid trader in a post-apocalyptic camp.
You are suspicious, short, and slightly hostile.
Keep responses brief and in character.

Conversation:
${history}

User: ${userMessage}
NPC:
`;

  const result = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  return result.text || "…The trader stays silent, watching you.";
}