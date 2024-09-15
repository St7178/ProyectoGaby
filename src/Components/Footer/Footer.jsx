import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import icono_ig from '../Assets/instagram_icon.png'
import icono_fb from '../Assets/pintester_icon.png'
import icono_wpp from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>VETERINARIA GABY</p>
        </div>
        <ul className="links-footer">
            <li>Productos</li>
            <li>Ubicacion</li>
            <li>Nosotros</li>
            <li>Contacto</li>
        </ul>
        <div className="footer-iconos">
            <div className="contenedor-footer-iconos">
                <img src={icono_ig} alt="" />
            </div>
            <div className="contenedor-footer-iconos">
                <img src={icono_fb} alt="" />
            </div>
            <div className="contenedor-footer-iconos">
                <img src={icono_wpp} alt="" />
            </div>
        </div>
        <div className="copyright">
            <hr />
            <p>Copyright © 2024 - Todos los derechos reservados</p>
        </div>
    </div>
  )
}
