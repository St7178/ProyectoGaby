import React from 'react';
import './CSS/CuidadosConsejos.css';

export const CuidadosConsejos = ({ category }) => {
  return (
    <div className='cuidados-consejos'>
      <header className='cuidados-consejos-header'>
        <h1>{category}</h1>
      </header>
      <section className='cuidados-consejos-content'>
        <article className='cuidados-consejos-item'>
          <h2>1. Alimentación Balanceada</h2>
          <p>
            Una alimentación balanceada es esencial para la salud de tu mascota. Asegúrate de proporcionar un alimento de calidad que contenga todos los nutrientes necesarios para su bienestar. Consulta a tu veterinario para elegir el mejor tipo de alimento y ajustar las porciones según la edad, tamaño y actividad de tu mascota. Una dieta adecuada no solo previene enfermedades, sino que también contribuye a una vida más larga y saludable.
          </p>
        </article>
        <article className='cuidados-consejos-item'>
          <h2>2. Ejercicio Regular</h2>
          <p>
            El ejercicio regular es fundamental para mantener a tu mascota en forma y saludable. Los paseos diarios, juegos interactivos y actividades físicas no solo ayudan a controlar el peso, sino que también previenen problemas de comportamiento y promueven una buena salud mental. Dedica tiempo cada día para jugar con tu mascota y asegúrate de que tenga suficientes oportunidades para moverse y explorar.
          </p>
        </article>
        <article className='cuidados-consejos-item'>
          <h2>3. Visitas al Veterinario</h2>
          <p>
            Las visitas regulares al veterinario son cruciales para detectar y prevenir problemas de salud antes de que se conviertan en condiciones graves. Las revisiones periódicas, vacunas y desparasitaciones aseguran que tu mascota esté protegida contra enfermedades comunes. No esperes a que aparezcan síntomas para llevar a tu mascota al veterinario; las visitas preventivas son clave para una vida saludable.
          </p>
        </article>
        <article className='cuidados-consejos-item'>
          <h2>4. Higiene y Cuidado Personal</h2>
          <p>
            Mantener una buena higiene es vital para la salud general de tu mascota. Esto incluye cepillar su pelaje para evitar enredos y parásitos, cortar sus uñas para prevenir problemas de movilidad, y limpiar sus dientes para evitar enfermedades dentales. Establecer una rutina de cuidado y mantener a tu mascota limpia no solo mejora su bienestar físico, sino que también fortalece el vínculo entre ustedes.
          </p>
        </article>
        <article className='cuidados-consejos-item'>
          <h2>5. Entorno Seguro y Estimulante</h2>
          <p>
            Proporcionar un entorno seguro y estimulante es crucial para el bienestar emocional de tu mascota. Asegúrate de que tu hogar esté libre de peligros y ofrécele juguetes y enriquecimiento para mantener su mente activa. Un ambiente enriquecido y seguro ayuda a reducir el estrés y promueve un comportamiento positivo. Considera la instalación de rascadores para gatos o áreas de juego para perros, y proporciona un espacio tranquilo donde puedan relajarse.
          </p>
        </article>
      </section>
    </div>
  );
};
