import React, { useState, useEffect } from 'react';
import './NotificationBanner.css'; 

const messages = [
  "¡Realizamos envíos a toda el área metropolitana! ¿Qué esperas?",
  "Aprovecha nuestras ofertas exclusivas en productos seleccionados.",
  "Nuevo stock disponible: ¡No te lo pierdas!",
  "Compra ahora y recibe un descuento adicional en tu próxima compra.",
];

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (!isVisible) return;

    const intervalId = setInterval(() => {
      setCurrentMessage(prevMessage => {
        const currentIndex = messages.indexOf(prevMessage);
        const nextIndex = (currentIndex + 1) % messages.length;
        return messages[nextIndex];
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="notification-banner">
      <div className="notification-banner-content">
        <p>{currentMessage}</p>
      </div>
      <button onClick={handleClose}>X</button>
    </div>
  );
};

export default NotificationBanner;
