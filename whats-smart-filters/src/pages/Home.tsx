import React, { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat/Chat";

import Message from "../types/Message";

import { ChatContext } from "../contexts/ChatContext";

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <div className="d-flex flex-row h-100">
      <ChatContext.Provider value={{ messages, setMessages }}>
        <Sidebar></Sidebar>
        <Chat></Chat>
      </ChatContext.Provider>
    </div>
  );
};

export default Home;
