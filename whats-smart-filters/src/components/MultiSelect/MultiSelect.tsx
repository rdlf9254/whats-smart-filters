import React, { useState } from "react";
import "./MultiSelect.css";
import Option from "../../types/Options";

interface MultiSelectProps {
  options: Option[];
  label?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, label }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelect = (item: string) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((i) => i !== item)
        : [...prevSelectedItems, item]
    );
  };

  return (
    <div className="dropdown">
      <label className="txt-grey">{label}</label>

      <button
        className="btn btn-custom dropdown-toggle w-100 txt-white"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        disabled={!options}
      >
        Usuários
      </button>
      <ul
        className="dropdown-menu dropdown-menu-custom w-100"
        aria-labelledby="dropdownMenuButton"
      >
        {options.map((option) => (
          <li key={option.value}>
            <a
              className={`dropdown-item dropdown-item-custom d-flex align-items-center`}
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Para não recarregar a página
                handleSelect(option.value);
              }}
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(option.value)}
                onChange={() => handleSelect(option.value)}
                className="me-2"
              />
              {option.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelect;
