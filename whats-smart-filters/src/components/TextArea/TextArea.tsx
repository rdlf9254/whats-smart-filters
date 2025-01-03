import React from "react";
import "./TextArea.css";

interface TextAreaProps {
  label?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label }) => {
  return (
    <div className="d-flex flex-column">
      <label className="txt-grey">{label}</label>

      <textarea
        className="form-control textarea-custom"
        aria-label="With textarea"
      ></textarea>
    </div>
  );
};

export default TextArea;
