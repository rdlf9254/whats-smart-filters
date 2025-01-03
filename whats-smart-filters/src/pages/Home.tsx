import React, { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat/Chat";

import Message from "../types/Message";
import Filter from "../types/filter";

import { ChatContext } from "../contexts/ChatContext";

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [filters, setFilters] = useState<Filter>({
    users: [],
    date: [],
    time: [],
    contain: "",
    notContain: "",
  });

  return (
    <div className="d-flex flex-row h-100">
      <ChatContext.Provider value={{ messages, setMessages }}>
        <Sidebar filters={filters} setFilters={setFilters}></Sidebar>
        <Chat></Chat>
      </ChatContext.Provider>
    </div>
  );
};

export default Home;
