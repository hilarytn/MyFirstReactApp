import React from 'react';
import Sidebar from './Sidebar';
import Header from '.Header';
import MainContent from './MainContent';
import Footer from './Footer';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default App;
