import React from 'react';
import './CSS/Nosotros.css';
import perfilA from '../Components/Assets/perfilA.jpg'
import perfilB from '../Components/Assets/perfilB.jpg'
import perfilC from '../Components/Assets/perfilC.jpg'
export const Nosotros = () => {
  return (
    <div className='nosotros'>
      <section className='nosotros-intro'>
        <h1>Sobre Nosotros</h1>
        <p>
          En Veterinaria Gaby, somos apasionados por el cuidado y el bienestar de tus mascotas. 
          Nuestra misión es ofrecer productos y servicios de alta calidad que aseguren una vida saludable 
          y feliz para tus compañeros peludos. Con años de experiencia en el sector, nos enorgullece 
          brindar soluciones efectivas y atención personalizada a cada cliente.
        </p>
      </section>
      
      <section className='nosotros-equipo'>
        <h2>Conoce a Nuestro Equipo</h2>
        <div className='nosotros-equipo-list'>
          <div className='nosotros-equipo-item'>
            <img src={perfilA} alt='' />
            <h3>Jenifer Ochoa</h3>
            <p>Desarrolladora Backend.</p>
          </div>
          <div className='nosotros-equipo-item'>
            <img src={perfilB} alt='Nombre del Miembro 2' />
            <h3>Johann Steven Toro</h3>
            <p>Desarrollador Frontend.</p>
          </div>
          <div className='nosotros-equipo-item'>
            <img src={perfilC} alt='Nombre del Miembro 3' />
            <h3>Alex Martinez</h3>
            <p>Desarrollador Backend.</p>
          </div>
        </div>
      </section>
      
      <section className='nosotros-cta'>
        <h2>Únete a Nosotros</h2>
        <p>
          Si compartes nuestra pasión por las mascotas y quieres formar parte de nuestro equipo, ¡nos encantaría saber de ti! 
          Visitanos en nuestro punto fisico y cuentanos de ti.
        </p>
        <p>¡Te esperamos!</p>
      </section>
    </div>
  );
};
