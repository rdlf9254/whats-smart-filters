import { createContext } from "react";

import Message from "../types/Message";
import Option from "../types/Option";

interface ChatContextType {
  messages: Message[];
  allUsers: Option[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setAllUsers: React.Dispatch<React.SetStateAction<Option[]>>;
}

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);
