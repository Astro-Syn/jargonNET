import { useState } from "react";
import { getNPCResponse } from "../lib/gemini";
import type { Message } from "../types/index.ts";
import MessageView from "./Message.tsx";
import './Chat.css';


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
      <div className='chat-container flex flex-row bg-yellow-300 gap-3 p-1'>
        

        <div className='messages-container'>

       
        {messages.map((m, i) => (
          <MessageView key={i} message={m} />
        ))}
        {loading && <p>They stare at you silently...</p>}
      </div>
       </div>

      <input
      className='w-3/4 rounded-md mt-5 border-2 border-green-300 bg-gray-950 p-1 text-sm text-blue-200'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Talk to NPC..."
      />

      <button
      className='bg-none text-white font-mono mx-5' 
      onClick={sendMessage}>Send</button>
    </div>
  );
}