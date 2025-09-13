import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuData = {
    appetizers: [
      {
        id: 1,
        name: 'Пхали',
        description: 'Овощные закуски с орехами и специями',
        price: '450₽',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 2,
        name: 'Лобиани',
        description: 'Лепешка с фасолью и зеленью',
        price: '380₽',
        image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 3,
        name: 'Аджапсандали',
        description: 'Овощное рагу с баклажанами',
        price: '420₽',
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d0a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      }
    ],
    main: [
      {
        id: 4,
        name: 'Хачапури по-аджарски',
        description: 'Лепешка с сыром и яйцом',
        price: '650₽',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 5,
        name: 'Хинкали',
        description: 'Грузинские пельмени с мясом',
        price: '580₽',
        image: 'https://images.unsplash.com/photo-1696233022180-b42b5c787ad7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        
      },
      {
        id: 6,
        name: 'Чахохбили',
        description: 'Тушеная курица с томатами',
        price: '720₽',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 7,
        name: 'Оджахури',
        description: 'Жареное мясо с картофелем',
        price: '780₽',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      }
    ],
    meat: [
      {
        id: 8,
        name: 'Шашлык из свинины',
        description: 'Мясо на углях с луком',
        price: '850₽',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 9,
        name: 'Мцвади',
        description: 'Шашлык из баранины',
        price: '920₽',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 10,
        name: 'Хашлама',
        description: 'Тушеная баранина с овощами',
        price: '880₽',
        image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      }
    ],
    desserts: [
      {
        id: 11,
        name: 'Чурчхела',
        description: 'Традиционная грузинская сладость',
        price: '320₽',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 12,
        name: 'Пахлава',
        description: 'Слоеный десерт с орехами',
        price: '280₽',
        image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 13,
        name: 'Медовник',
        description: 'Медовый торт',
        price: '350₽',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      }
    ],
    drinks: [
      {
        id: 14,
        name: 'Грузинское вино',
        description: 'Красное сухое вино',
        price: '450₽',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 15,
        name: 'Чай с мятой',
        description: 'Традиционный грузинский чай',
        price: '180₽',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 16,
        name: 'Тархун',
        description: 'Грузинский лимонад',
        price: '220₽',
        image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      }
    ]
  };

  const categories = [
    { key: 'appetizers', name: 'Закуски' },
    { key: 'main', name: 'Основные блюда' },
    { key: 'meat', name: 'Мясные блюда' },
    { key: 'desserts', name: 'Десерты' },
    { key: 'drinks', name: 'Напитки' },
    { key: 'salads', name: 'Салаты' },
  ];

  return (
    <div className="menu">
      <div className="container">
        <div className="menu-header">
          <h1>Наше меню</h1>
          <p>Грузинские блюда, приготовленные с любовью</p>
        </div>

        <div className="menu-categories">
          {categories.map(category => (
            <button
              key={category.key}
              className={`category-button ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu-items">
          {menuData[activeCategory].map(item => (
            <div key={item.id} className="menu-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
