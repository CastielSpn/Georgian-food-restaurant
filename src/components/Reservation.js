import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки данных на сервер
    console.log('Reservation data:', formData);
    setIsSubmitted(true);
    
    // Сброс формы через 3 секунды
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: '',
        specialRequests: ''
      });
    }, 3000);
  };

  const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'
  ];

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <div className="reservation">
      <div className="container">
        <div className="reservation-header">
          <h1>Бронирование стола</h1>
          <p>Забронируйте столик в нашем ресторане и насладитесь аутентичной грузинской кухней</p>
        </div>

        <div className="reservation-content">
          <div className="reservation-info">
            <h2>Информация о бронировании</h2>
            <div className="info-cards">
              <div className="info-card">
                <h3>🕒 Часы работы</h3>
                <p>Понедельник - Воскресенье<br />11:00 - 23:00</p>
              </div>
              <div className="info-card">
                <h3>📞 Контакты</h3>
                <p>+995 (422) 123-456<br />info@georgiafood.ge</p>
              </div>
              <div className="info-card">
                <h3>📍 Адрес</h3>
                <p>ул. Руставели, 25<br />Батуми, Грузия</p>
              </div>
            </div>

            <div className="restaurant-image">
              <img 
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Интерьер ресторана" 
              />
            </div>
          </div>

          <div className="reservation-form-container">
            {isSubmitted ? (
              <div className="success-message">
                <h2>✅ Бронирование успешно отправлено!</h2>
                <p>Мы свяжемся с вами в ближайшее время для подтверждения бронирования.</p>
                <p>Спасибо за выбор нашего ресторана!</p>
              </div>
            ) : (
              <form className="reservation-form" onSubmit={handleSubmit}>
                <h2>Забронировать стол</h2>
                
                <div className="form-group">
                  <label htmlFor="name">Имя *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Телефон *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Дата *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={getMinDate()}
                      max={getMaxDate()}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">Время *</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Выберите время</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="guests">Количество гостей *</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Выберите количество</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'гость' : num < 5 ? 'гостя' : 'гостей'}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="specialRequests">Особые пожелания</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Укажите особые пожелания (аллергии, предпочтения по столу и т.д.)"
                  />
                </div>

                <button type="submit" className="submit-button">
                  Забронировать стол
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
