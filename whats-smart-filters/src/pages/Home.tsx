import React from "react";
import Sidebar from "components/Sidebar";

const Home: React.FC = () => {
  return (
    <div className="d-flex flex-row">
      <Sidebar></Sidebar>
      <div>
        <h1>chat aqui</h1>
      </div>
    </div>
  );
};

export default Home;
