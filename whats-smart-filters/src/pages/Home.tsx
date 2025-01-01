import React from 'react';
// import Sidebar from '@/components/Sidebar';
import Sidebar from 'components/Sidebar';

const Home: React.FC = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <h1>Bem-vindo à Home Page</h1>
      <p>Essa é uma página simples.</p>
    </div>
  );
};

export default Home;
