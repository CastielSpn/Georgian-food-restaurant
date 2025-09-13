import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Добро пожаловать в GEORGIA FOOD</h1>
          <p>Погрузитесь в мир аутентичной грузинской кухни</p>
          <p>Традиционные рецепты, передаваемые из поколения в поколение</p>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Грузинский ресторан" 
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>О нашем ресторане</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                GEORGIA FOOD - это место, где традиции грузинской кухни встречаются с современным комфортом. 
                Мы предлагаем аутентичные блюда, приготовленные по старинным рецептам, используя только 
                свежие и качественные ингредиенты.
              </p>
              <p>
                Наша команда поваров - настоящие мастера своего дела, которые знают секреты грузинской кулинарии. 
                Каждое блюдо готовится с любовью и вниманием к деталям.
              </p>
              
            </div>
            <div className="about-image">
              <img 
                src="https://plus.unsplash.com/premium_photo-1670574734662-8f8c3384885d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Интерьер ресторана" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dishes Preview */}
      <section className="popular-dishes">
        <div className="container">
          <h2>Популярные блюда</h2>
          <div className="dishes-grid">
            <div className="dish-card">
              <img 
                src="https://images.unsplash.com/photo-1612950365425-dbf12ef9a1a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Хачапури" 
              />
              <h3>Хачапури</h3>
              <p>Традиционная грузинская лепешка с сыром</p>
            </div>
            <div className="dish-card">
              <img 
                src="https://images.unsplash.com/photo-1696233022180-b42b5c787ad7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Хинкали" 
              />
              <h3>Хинкали</h3>
              <p>Грузинские пельмени с мясом</p>
            </div>
            <div className="dish-card">
              <img 
                src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Шашлык" 
              />
              <h3>Шашлык</h3>
              <p>Мясо на углях по-грузински</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <div className="container">
          <h2>Контакты</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <h3>📍 Адрес</h3>
              <p>ул. Руставели, 25<br />Батуми, Грузия</p>
            </div>
            <div className="contact-item">
              <h3>📞 Телефон</h3>
              <p>+995 (422) 123-456</p>
            </div>
            <div className="contact-item">
              <h3>🕒 Часы работы</h3>
              <p>Пн-Вс: 11:00 - 23:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
