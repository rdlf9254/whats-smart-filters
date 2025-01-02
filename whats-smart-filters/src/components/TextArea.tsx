import React from "react";

interface TextAreaProps {
    label: string;
  }
  
const TextArea: React.FC<TextAreaProps> = ({label}) => {
  return (
    <div className="dropdown">
      <label className="txt-grey">{label}</label>

      <textarea className="form-control" aria-label="With textarea"></textarea>
    </div>
  );
};

export default TextArea;