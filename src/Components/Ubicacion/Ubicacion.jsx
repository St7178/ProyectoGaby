import React from 'react';

const Ubicacion = () => {
  return (
    <div>
      <h1>Veterinaria Gaby</h1>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7541060991257!2d-75.58211022593805!3d6.29601042576704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442ed14cdea241%3A0xd10964c818a46be0!2sCl.%2097b%20%2376-10%2C%20San%20Martin%20de%20Porras%2C%20Medell%C3%ADn%2C%20Doce%20de%20Octubre%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1728253358523!5m2!1ses-419!2sco" 
        width="1300" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
};

export default Ubicacion;
