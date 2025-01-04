import React, { useContext } from "react";
import "./Chat.css";
import MessageBox from "../MessageBox/MessageBox";
import { ChatContext } from "../../contexts/ChatContext";

const Chat: React.FC = () => {
  const context = useContext(ChatContext);

  const hasFile = context?.messages && context.messages.length > 0;
  const hasMessages =
    context?.messagesFiltered && context.messagesFiltered.length > 0;

  return (
    <div className="chat px-4 py-1">
      {hasFile && hasMessages ? (
        <div className="chat-container pt-4">
          {context.messagesFiltered.map((msg, i) => (
            <MessageBox
              key={i}
              message={msg.message}
              user={msg.user}
              date={msg.date}
              time={msg.time}
              color={msg.color || "#888"}
            />
          ))}
        </div>
      ) : (
        <div className="d-flex txt-grey flex-column justify-content-center align-items-center h-100">
          <i className="bi bi-inbox empty-icon"></i>
          <h2>
            {hasFile
              ? "Nenhum arquivo encontrado!"
              : "Nenhuma mensagem encontrada!"}
          </h2>
          <p className="text-center">
            {hasFile
              ? "Você ainda não fez o upload de nenhum arquivo .txt. Clique no botão ao lado para começar!"
              : "Nenhuma mensagem encontrada com os filtros atuais. Tente outros filtros!"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Chat;
