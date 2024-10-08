import React from 'react';
import './CSS/Oportunidades.css';

export const Oportunidades = () => {
  const oportunidades = [
    {
      id: 1,
      title: 'Veterinario ',
      location: 'Barrio Olaya Herrera',
      description: 'Buscamos un veterinario con experiencia para unirse a nuestro equipo. El candidato ideal debe tener al menos 5 años de experiencia en el campo, excelentes habilidades de comunicación y pasión por el cuidado de los animales.',
    },
    {
      id: 2,
      title: 'Asistente de Veterinaria',
      location: 'Barrio Olaya Herrera',
      description: 'Estamos en busca de un asistente de veterinaria proactivo y dedicado. El rol incluye asistencia en consultas, manejo de registros y apoyo general al equipo veterinario. Se requiere experiencia previa y habilidades organizativas.',
    },
    {
      id: 3,
      title: 'Especialista en Nutrición Animal',
      location: 'Barrio Olaya Herrera',
      description: 'Se necesita un especialista en nutrición animal para desarrollar planes de alimentación personalizados para nuestras mascotas. El candidato debe tener conocimientos avanzados en nutrición animal y habilidades para trabajar en equipo.',
    },
  ];

  return (
    <div className='oportunidades'>
      <header className='oportunidades-header'>
        <h1>Oportunidades Laborales</h1>
        <p>Únete a nuestro equipo y ayuda a mejorar la vida de las mascotas. Aquí están nuestras ofertas de empleo actuales:</p>
      </header>
      
      <section className='oportunidades-list'>
        {oportunidades.map(op => (
          <div key={op.id} className='oportunidades-item'>
            <h2>{op.title}</h2>
            <p className='location'>{op.location}</p>
            <p className='description'>{op.description}</p>
            <a href={`/postularse/${op.title}`} className='cta-button'>Postularse</a>
          </div>
        ))}
      </section>
    </div>
  );
};
