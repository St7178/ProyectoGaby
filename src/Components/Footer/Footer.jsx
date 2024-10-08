import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import icono_ig from '../Assets/instagram_icon.png'
import icono_fb from '../Assets/pintester_icon.png'
import icono_wpp from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>VETERINARIA GABY</p>
        </div>
        <ul className="links-footer">
    <li>
        <Link to="/productos">Productos</Link>
    </li>
    <li>
        <Link to="/ubicacion">Ubicación</Link>
    </li>
    <li>
        <Link to="/nosotros">Nosotros</Link>
    </li>
    <li>
        <Link to="/contacto">Contacto</Link>
    </li>
</ul>
<div className="footer-iconos">
    <div className="contenedor-footer-iconos">
        <a href="https://www.instagram.com/128__st" target="_blank" rel="noopener noreferrer">
            <img src={icono_ig} alt="Instagram" />
        </a>
    </div>
    <div className="contenedor-footer-iconos">
        <a href="https://co.pinterest.com" target="_blank" rel="noopener noreferrer">
            <img src={icono_fb} alt="Pinterest" />
        </a>
    </div>
    <div className="contenedor-footer-iconos">
        <a href="https://wa.me/3195705024" target="_blank" rel="noopener noreferrer">
            <img src={icono_wpp} alt="WhatsApp" />
        </a>
    </div>
</div>

        <div className="copyright">
            <hr />
            <p>Copyright © 2024 - Todos los derechos reservados</p>
        </div>
    </div>
  )
}
