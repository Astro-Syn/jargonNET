import type { Message } from "../types";

export default function MessageView({
  message,
}: {
  message: Message;
}) {
  return (
    <div className={message.role}>
      <strong>{message.role}:</strong> {message.text}
    </div>
  );
}