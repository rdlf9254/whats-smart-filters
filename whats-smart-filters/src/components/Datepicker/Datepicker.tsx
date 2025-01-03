import React, { useState } from "react";
import "./Datepicker.css";

interface DatepickerProps {
  label?: string;
  minDate?: string;
  maxDate?: string;
  value: string;
  onChange?: (date: string) => void;
  disabled?: boolean;
}

const Datepicker: React.FC<DatepickerProps> = ({
  label,
  minDate,
  maxDate,
  value,
  onChange,
  disabled = false,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>(value || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
  };

  return (
    <div className="d-flex flex-column">
      <label htmlFor="datepicker" className="txt-grey">
        {label}
      </label>
      <input
        id="datepicker"
        type="date"
        className="custom-datepicker"
        value={selectedDate}
        onChange={handleChange}
        min={minDate}
        max={maxDate}
        disabled={disabled}
      />
    </div>
  );
};

export default Datepicker;
