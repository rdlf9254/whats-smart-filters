import React from "react";
import { formatDate } from "../../utils/dateUtils";
import Message from "../../types/Message";

const MessageBox: React.FC<Message> = ({
  user,
  date,
  time,
  message,
  color,
}) => {
  return (
    <div className="msg d-flex flex-column">
      <div className="msg-header  fs-6">
        <span className="txt-white txt-sm">{user}</span>
        <span className="txt-grey ms-auto pl-1 txt-sm">{formatDate(date,time)}</span>
        {time}
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
