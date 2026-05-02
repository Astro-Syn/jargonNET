export type Role = "user" | "npc";

export interface Message {
  role: Role;
  text: string;
}