import React, { useState, useContext } from "react";

import { ChatContext } from "../../contexts/ChatContext";

import "./UploadTxt.css";

import Message from "../../types/Message";
import { parseMessages } from "../../utils/messageParser";



const UploadTxt: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const context = useContext(ChatContext);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (file.type === "text/plain") {
        setUploadedFile(file);

        // Lê o arquivo e processa as mensagens
        const reader = new FileReader();
        reader.onload = (e) => {
          const fileContent = e.target?.result as string;
          const parsedMessages = parseMessages(fileContent);
          context?.setMessages(parsedMessages);
        };
        reader.readAsText(file);
      } else {
        alert("Only .txt files are allowed!");
        // limpa input:
        event.target.value = "";
      }
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    context?.setMessages([]);
  };

  return (
    <div className="text-center">
      {!uploadedFile ? (
        <div className="border-upload txt-green-1 pointer">
          <label htmlFor="file-upload" className="d-block">
            <i className="bi bi-cloud-arrow-up fs-1 pointer"></i>
            <h6 className="mt-2 pointer">Carregue um arquivo .txt aqui!</h6>
            <input
              id="file-upload"
              type="file"
              accept=".txt"
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
          </label>
        </div>
      ) : (
        <div className="border-uploaded text-white">
          <span>Arquivo:</span>
          <h6 className="text-truncate">{uploadedFile.name}</h6>
          <button className="bg-green-1" onClick={removeFile}>
            Remover
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadTxt;
