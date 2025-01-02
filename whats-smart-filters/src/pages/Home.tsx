import React from "react";

import Sidebar from "components/Sidebar/Sidebar";
import Chat from "components/Chat/Chat";


const Home: React.FC = () => {

  return (
    <div className="d-flex flex-row h-100">
      <Sidebar></Sidebar>
      <Chat></Chat>  
    </div>
  );
};

export default Home;
