import React, { useState } from "react";

import { ChatContext } from "../contexts/ChatContext";

import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat/Chat";

import Option from "../types/Option";
import Message from "../types/Message";


const Home: React.FC = () => {
  const [allUsers, setAllUsers] = useState<Option[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesFiltered, setMessagesFiltered] = useState<Message[]>([]);
  // const [filters, setFilters] = useState<Filter>({
  //   users: [],
  //   date: ["2025-01-01", "2025-01-01"],
  //   time: ["00:00", "23:59"],
  //   contain: "",
  //   notContain: "",
  // });

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
        <Sidebar></Sidebar>
        <Chat></Chat>
      </ChatContext.Provider>
    </div>
  );
};

export default Home;
