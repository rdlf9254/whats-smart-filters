import React, { useState, useContext } from "react";

import "./Sidebar.css";

import { ChatContext } from "../../contexts/ChatContext";

import Filter from "../../types/filter";

import UploadTxt from "../UploadTxt/UploadTxt";
import MultiSelect from "../MultiSelect/MultiSelect";
import TextArea from "../TextArea/TextArea";
import Datepicker from "../Datepicker/Datepicker";
import Timepicker from "../Timepicker/Timepicker";

// type SidebarProps = {
//   filters: Filter;
//   setFilters: React.Dispatch<React.SetStateAction<Filter>>;
// };

const Sidebar: React.FC = () => {
  const context = useContext(ChatContext);

  const today = new Date();

  const [filters, setFilters] = useState<Filter>({
    users: [],
    date: ["2009-02-01", today.toISOString().split("T")[0]],
    time: ["00:00", "23:59"],
    contain: "",
    notContain: "",
  });

  const applyFilters = () => {
    if (!context?.messages) return;

    const aux = context?.messages.filter((msg) => {
      const { users, date, time, contain, notContain } = filters;

      // by user
      if (users.length > 0 && !users.includes(msg.user)) return false;

      // by date
      const messageDate = new Date(msg.date).getTime();
      const [startDate, endDate] = date.map((d) => new Date(d).getTime());
      if (!isWithinRange(messageDate, [startDate, endDate])) return false;

      // by time
      const msgTime = getMinutes(msg.time);
      const [startTime, endTime] = time.map(getMinutes);
      if (!isWithinRange(msgTime, [startTime, endTime])) return false;

      // by contain
      if (contain && !msg.message.includes(contain)) return false;

      // by not contain
      if (notContain && msg.message.includes(notContain)) return false;

      return true;
    });

    context?.setMessagesFiltered(aux);
  };

  const isWithinRange = (v: number, [s, e]: [number, number]) =>
    v >= s && v <= e;

  const getMinutes = (time: string) => {
    const [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
  };

  const handleInputChange = (field: keyof Filter, value: string | string[]) => {
    setFilters((obj) => ({
      ...obj,
      [field]: value,
    }));
    applyFilters();
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
            options={context?.allUsers}
            value={filters.users}
            onChange={(value: string) => handleInputChange("users", value)}
          ></MultiSelect>

          <TextArea
            label="Texto contém:"
            value={filters.contain}
            onChange={(value: string) => handleInputChange("contain", value)}
            placeholder="Digite o texto para filtrar"
          ></TextArea>

          <TextArea
            label="Texto não contém:"
            value={filters.notContain}
            onChange={(value: string) => handleInputChange("notContain", value)}
            placeholder="Digite o texto para filtrar"
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
