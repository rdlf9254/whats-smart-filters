import React, { useContext } from "react";
import "./Chat.css";
import MessageBox from "../MessageBox/MessageBox";
import { ChatContext } from "../../contexts/ChatContext";

const Chat: React.FC = () => {
  const context = useContext(ChatContext);

  return (
    <div className="chat-container py-4 px-4">
      {/* with file uploaded: */}
      <div>
        {context?.messages.map((message, i) => (
          <MessageBox
            key={i}
            message={message.message}
            user={message.user}
            date={message.date}
            time={message.time}
            color={message.color || "#888"}
          ></MessageBox>
        ))}
      </div>

      {/* no file uploaded message: */}
      <div className="d-flex txt-grey flex-column justify-content-center align-items-center h-100">
        <i className="bi bi-inbox empty-icon"></i>
        <h2>Nenhum arquivo encontrado</h2>
        <p className="text-center">
          Você ainda não fez o upload de nenhum arquivo .txt. Clique no botão ao
          lado para começar!
        </p>
      </div>
    </div>
  );
};

export default Chat;
