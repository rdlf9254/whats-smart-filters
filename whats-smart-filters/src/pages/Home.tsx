import React, { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat/Chat";

import Message from "../types/Message";
import Filter from "../types/filter";
import Option from "../types/Option";

import { ChatContext } from "../contexts/ChatContext";

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesFiltered, setMessagesFiltered] = useState<Message[]>([]);
  const [filters, setFilters] = useState<Filter>({
    users: [],
    date: ["2025-01-01", "2025-01-01"],
    time: ["00:00", "23:59"],
    contain: "",
    notContain: "",
  });
  const [allUsers, setAllUsers] = useState<Option[]>([]);

  return (
    <div className="d-flex flex-row h-100">
      <ChatContext.Provider
        value={{
          messages,
          setMessages,
          messagesFiltered,
          setMessagesFiltered,
          allUsers,
          setAllUsers,
        }}
      >
        <Sidebar filters={filters} setFilters={setFilters}></Sidebar>
        <Chat></Chat>
      </ChatContext.Provider>
    </div>
  );
};

export default Home;
