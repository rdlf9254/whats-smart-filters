import React, { useState } from "react";
import "./Timepicker.css";

interface TimepickerProps {
  label?: string;
  minTime?: string;
  maxTime?: string;
  value?: string;
  onChange?: (time: string) => void;
  disabled?: boolean;
}

const Timepicker: React.FC<TimepickerProps> = ({
  label,
  minTime,
  maxTime,
  value,
  onChange,
  disabled = false,
}) => {
  const [selectedTime, setSelectedTime] = useState<string>(value || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const time = event.target.value;
    setSelectedTime(time);
    if (onChange) {
      onChange(time);
    }
  };

  return (
    <div className="d-flex flex-column">
      <label htmlFor="timepicker" className="txt-grey">
        {label}
      </label>
      <input
        id="timepicker"
        type="time"
        className="custom-timepicker"
        value={selectedTime}
        onChange={handleChange}
        min={minTime}
        max={maxTime}
        disabled={disabled}
      />
    </div>
  );
};

export default Timepicker;
