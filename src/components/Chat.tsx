import { useState } from "react";
import { getNPCResponse } from "../lib/gemini";
import type { Message } from "../types/index.ts";
import MessageView from "./Message.tsx";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input || loading) return;

    const userMsg: Message = { role: "user", text: input };
    const updated = [...messages, userMsg];

    setMessages(updated);
    setInput("");
    setLoading(true);

    const history = updated
      .map((m) => `${m.role}: ${m.text}`)
      .join("\n");

    const reply = await getNPCResponse(input, history);

    const npcMsg: Message = { role: "npc", text: reply };

    setMessages((prev) => [...prev, npcMsg]);
    setLoading(false);
  };

  return (
    <div>
      <div>
        {messages.map((m, i) => (
          <MessageView key={i} message={m} />
        ))}
        {loading && <p>They stare at you silently...</p>}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Talk to NPC..."
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}