import { createContext } from "react";

import Message from "../types/Message";

interface ChatContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<any[]>>;
}

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);
