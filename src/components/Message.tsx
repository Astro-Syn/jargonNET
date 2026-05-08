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
              ? "bg-teal-950 text-teal-200"
              : "bg-purple-950 text-purple-200"
          }
        `}
      >
      <span className={`flex justify-center ${isUser ? "bg-teal-300 text-teal-950 rounded-sm w-14" : "bg-purple-200 text-purple-950 rounded-sm w-10"}`}>
        <strong>{message.role}:</strong> 
        </span>{message.text}
      </div>
      
    </div>
    </div>
  );
}