import React from "react";
import "./Chat.css";
const Chat: React.FC = () => {
  return (
    <div className="chat-container py-4 px-4">


      
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
