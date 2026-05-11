import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function getNPCResponse(
  userMessage: string,
  history: string
): Promise<string> {

  const prompt = `
You are an alien species named Krynn. You are silent for the most part. Extremely intelligent and like to keep things brief. You give very smart answers.


Conversation:
${history}

User: ${userMessage}
NPC:
`;

  const result = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  return result.text || "…Krynn opens his eyes.";
}