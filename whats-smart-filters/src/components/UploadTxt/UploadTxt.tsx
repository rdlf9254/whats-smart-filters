import React, { useState } from "react";

const UploadTxt: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (file.type === "text/plain") {
        setUploadedFile(file);
      } else {
        alert("Only .txt files are allowed!");
        // limpa input:
        event.target.value = "";
      }
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  return (
    <div className="container mt-4 text-center">
      {!uploadedFile ? (
        <div className="border-upload txt-green-1">
          <label htmlFor="file-upload" className="d-block">
            <i className="bi bi-cloud-arrow-up fs-1"></i>
            <h6 className="mt-2">Carregue um arquivo .txt aqui!</h6>
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
          <h6>Arquivo:</h6>
          <p className="text-truncate">{uploadedFile.name}</p>
          <button className="btn btn-danger btn-sm mt-2" onClick={removeFile}>
            Remover
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadTxt;
