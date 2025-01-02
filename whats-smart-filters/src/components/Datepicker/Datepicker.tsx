import React, { useState } from "react";
import './Datepicker.css'

interface DatepickerProps {
  label?: string;
  minDate?: string;
  maxDate?: string;
  value?: string;
  onDateChange?: (date: string) => void;
  disabled?: boolean;
}

const Datepicker: React.FC<DatepickerProps> = ({
  label,
  minDate,
  maxDate,
  value,
  onDateChange,
  disabled = false,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>(value || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    setSelectedDate(date);
    if (onDateChange) {
      onDateChange(date);
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
