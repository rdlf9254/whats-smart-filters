import React from 'react';

interface MessageBoxProps {
  user: string;
  date: string;
  message: string;
  color: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ user,date,message,color}) => {
  return (
    <div>
      <h1>{user}</h1>
      <h1>{date}</h1>
      <h1>{message}</h1>
      <h1>{color}</h1>
    </div>
  );
};

export default MessageBox;
