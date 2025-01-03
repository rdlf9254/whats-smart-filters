import React from "react";
import "./TextArea.css";

interface TextAreaProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="d-flex flex-column">
      <label className="txt-grey">{label}</label>

      <textarea
        className="form-control textarea-custom"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="With textarea"
      ></textarea>
    </div>
  );
};

export default TextArea;
