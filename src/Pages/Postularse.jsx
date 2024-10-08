import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CSS/Postularse.css';

export const Postularse = () => {
  const { opportunityId } = useParams(); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    coverLetter: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData((prevData) => ({ ...prevData, resume: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('resume', formData.resume);
    data.append('coverLetter', formData.coverLetter);
    data.append('opportunityId', opportunityId);

    fetch('/api/postularse', {
      method: 'POST',
      body: data,
    })
    .then(response => response.text())
    .then(data => {
      alert('Solicitud enviada con éxito.');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al enviar la solicitud.');
    });
  };

  return (
    <div className='postularse'>
      <header className='postularse-header'>
        <h1>Postularse para la Oportunidad {opportunityId}</h1>
        <p>Complete el siguiente formulario para postularse a la oportunidad laboral seleccionada.</p>
      </header>
      
      <form onSubmit={handleSubmit} className='postularse-form'>
        <label htmlFor='name'>
          Nombre:
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor='email'>
          Correo Electrónico:
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor='resume'>
          Currículum:
          <input
            type='file'
            id='resume'
            name='resume'
            accept='.pdf, .doc, .docx'
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor='coverLetter'>
          Carta de Presentación:
          <textarea
            id='coverLetter'
            name='coverLetter'
            value={formData.coverLetter}
            onChange={handleChange}
            rows='6'
            required
          />
        </label>

        <button type='submit' className='submit-button'>Enviar Solicitud</button>
      </form>
    </div>
  );
};
