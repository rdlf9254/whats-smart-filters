import React from "react";
import Sidebar from "components/Sidebar";
import Chat from "components/Chat/Chat";

const Home: React.FC = () => {
  return (
    <div className="d-flex flex-row">
      <Sidebar></Sidebar>
      <Chat></Chat>  
    </div>
  );
};

export default Home;
