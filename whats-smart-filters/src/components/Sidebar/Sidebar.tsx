import React from "react";
import "./Sidebar.css";

import UploadTxt from "../UploadTxt/UploadTxt";
import MultiSelect from "../MultiSelect/MultiSelect";
import TextArea from "../TextArea/TextArea";
import Datepicker from "../Datepicker/Datepicker";
import Timepicker from "../Timepicker/Timepicker";

// Crie campos para filtros, como:
// Mensagens por Hora do Dia: Mostrar mensagens apenas de um intervalo de horas.

const Sidebar: React.FC = () => {
  const mockUsers = [
    { label: "Fulano", value: "Fulano" },
    { label: "Cicrano", value: "Cicrano" },
    { label: "steve wonder", value: "steve wonder" },
  ];

  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 h-100">
      <div className="d-flex align-items-center justify-content-center w-100 mb-3 mb-md-0 me-md-auto gap-3 link-body-emphasis text-decoration-none">
        <i className="bi bi-chat-right-text icon txt-grey"></i>
        <span className="fs-5 txt-grey">Whats Smart Filters</span>
      </div>
      <hr></hr>

      <div className="filters ">
        <div className="filter-options d-flex flex-column gap-3">
          <UploadTxt></UploadTxt>

          <MultiSelect
            label="Filtrar por usuários:"
            options={mockUsers}
          ></MultiSelect>

          <TextArea label="Texto contém:"></TextArea>
          <TextArea label="Texto não contém:"></TextArea>

          <div className="d-flex flex-column">
            <Datepicker label="Período específico:"></Datepicker>
            <Datepicker label="até:"></Datepicker>
          </div>

          <div className="d-flex flex-column">
            <Timepicker label="Hora específica do dia:"></Timepicker>
            <Timepicker label="até:"></Timepicker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
