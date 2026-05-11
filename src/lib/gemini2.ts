import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function getNPCResponse(
    userMessage: string,
    history: string
): Promise<string> {

    const prompt = `You are a woman named Rue. You are very sneaky and use your charm to get out of bad situations. Very intelligent and have a way with words.

    Conversation:
${history}

User: ${userMessage}
NPC:
    `;

    const result = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
    });

    return result.text || "..Rue smirks and watches you.";

}