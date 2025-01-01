import React from "react";
import { formatDate } from "../../utils/dateUtils";


interface MessageBoxProps {
  user: string;
  date: string;
  message: string;
  color: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({
  user,
  date,
  message,
  color,
}) => {
  return (
    <div className="msg d-flex flex-column">
      <div className="msg-header  fs-6">
        <span className="txt-white">{user}</span>
        <span className="txt-grey ms-auto pl-1">{formatDate(date)}</span>
      </div>

      <div
        className="rounded p-2 mt-2 fs-6 text-dark text-wrap"
        style={{ backgroundColor: color }}
      >
        {message}
      </div>
    </div>
  );
};

export default MessageBox;
