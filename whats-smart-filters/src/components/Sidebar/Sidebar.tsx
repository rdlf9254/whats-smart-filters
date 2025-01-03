import React, { useState } from "react";
import "./Sidebar.css";

import UploadTxt from "../UploadTxt/UploadTxt";
import MultiSelect from "../MultiSelect/MultiSelect";
import TextArea from "../TextArea/TextArea";
import Datepicker from "../Datepicker/Datepicker";
import Timepicker from "../Timepicker/Timepicker";

import Filter from "../../types/filter";

type SidebarProps = {
  filters: Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
};

const Sidebar: React.FC<SidebarProps> = ({ filters, setFilters }) => {
  const mockUsers = [
    { label: "Fulano", value: "Fulano" },
    { label: "Cicrano", value: "Cicrano" },
    { label: "steve wonder", value: "steve wonder" },
  ];

  const handleInputChange = (field: keyof Filter, value: string | string[]) => {
    setFilters((obj) => ({
      ...obj,
      [field]: value,
    }));
  };

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
            value={filters.users}
            onChange={(value: string) => handleInputChange("users", value)}
          ></MultiSelect>

          <TextArea
            label="Texto contém:"
            value={filters.contain}
            onChange={(value: string) => handleInputChange("contain", value)}
          ></TextArea>
          <TextArea
            label="Texto não contém:"
            value={filters.notContain}
            onChange={(value: string) => handleInputChange("notContain", value)}
          ></TextArea>

          <div className="d-flex flex-column">
            <Datepicker
              label="Período específico:"
              value={filters.date[0]}
              onChange={(value: string) =>
                handleInputChange("date", [value, filters.date[1]])
              }
            ></Datepicker>
            <Datepicker
              label="até:"
              value={filters.date[1]}
              onChange={(value: string) =>
                handleInputChange("date", [filters.date[0], value])
              }
            ></Datepicker>
          </div>

          <div className="d-flex flex-column">
            <Timepicker
              label="Hora específica do dia:"
              value={filters.time[0]}
              onChange={(value: string) =>
                handleInputChange("time", [value, filters.time[1]])
              }
            ></Timepicker>
            <Timepicker
              label="até:"
              value={filters.time[1]}
              onChange={(value: string) =>
                handleInputChange("time", [filters.time[0], value])
              }
            ></Timepicker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
