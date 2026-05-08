import type { Message } from "../types";

export default function MessageView({
  message,
}: {
  message: Message;
}) {

  const isUser = message.role === "user";

  return (
    <div className={`flex w-full my-2 ${isUser ? "justify-end" : "justify-start"}`}>

    
    <div className={message.role}>
      <div
        className={`
          max-w-[70%]
          rounded-xl
          p-3
          border-2
          ${
            isUser
              ? "bg-blue-500 border-blue-900 text-white"
              : "bg-purple-500 border-purple-900 text-white"
          }
        `}
      >
      <strong>{message.role}:</strong> {message.text}
      </div>
      
    </div>
    </div>
  );
}