import React from "react";

import UploadTxt from "./UploadTxt/UploadTxt";
import MultiSelect from "./MultiSelect/MultiSelect";

// interface SidebarProps {
//   titulo: string;
// }

// Crie campos para filtros, como:
// Usuário: Um dropdown com os usuários identificados.
// Texto na Mensagem: Um campo de texto para busca.
// Intervalo de Datas: Um seletor de datas ou calendário.
// Palavras-chave Excluídas: Uma lista de palavras que eliminam mensagens contendo elas.
// Mensagens por Hora do Dia: Mostrar mensagens apenas de um intervalo de horas.

const Sidebar: React.FC = () => {
  const mockUsers = [
    { label: "Fulano", value: "Fulano" },
    { label: "Cicrano", value: "Cicrano" },
    { label: "steve wonder", value: "steve wonder" },
  ];

  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3">
      <div className="d-flex align-items-center justify-content-center w-100 mb-3 mb-md-0 me-md-auto gap-3 link-body-emphasis text-decoration-none">
        <i className="bi bi-chat-right-text icon txt-grey"></i>
        <span className="fs-5 txt-grey">Whats Smart Filters</span>
      </div>
      <hr></hr>

      <div className="filter-options d-flex flex-column gap-3">
        <UploadTxt></UploadTxt>

        <MultiSelect label="Filtrar por usuários:" options={mockUsers}></MultiSelect>
      </div>
    </div>
  );
};

export default Sidebar;
