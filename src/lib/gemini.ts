import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY as string
);

export async function getNPCResponse(
  userMessage: string,
  history: string
): Promise<string> {
 const model = genAI.getGenerativeModel({  model: "gemini-1.5-pro" });



  const prompt = `
You are a paranoid trader in a post-apocalyptic camp.
You are suspicious, short, and slightly hostile.

Conversation:
${history}

User: ${userMessage}
NPC:
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;

  return response.text();
}