import React from 'react';
import './Header.css';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>GEORGIA FOOD</h1>
          <p>Аутентичная грузинская кухня</p>
        </div>
        <nav className="navigation">
          <button 
            className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            Главная
          </button>
          <button 
            className={`nav-button ${currentPage === 'menu' ? 'active' : ''}`}
            onClick={() => setCurrentPage('menu')}
          >
            Меню
          </button>
          <button 
            className={`nav-button ${currentPage === 'reservation' ? 'active' : ''}`}
            onClick={() => setCurrentPage('reservation')}
          >
            Бронирование
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
