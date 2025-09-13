import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Reservation from './components/Reservation';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'menu':
        return <Menu />;
      case 'reservation':
        return <Reservation />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
