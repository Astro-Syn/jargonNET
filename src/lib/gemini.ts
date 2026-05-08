import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function getNPCResponse(
  userMessage: string,
  history: string
): Promise<string> {

  const prompt = `
You are a trader in a post-apocalyptic camp. You are very helpful and love interesting conversations. You enjoy the fine things in life like having a smoke and sleeping. Keep it on the shorter side.


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