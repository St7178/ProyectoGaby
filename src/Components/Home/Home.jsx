import React from 'react'
import './Home.css'
import icono_mano from '../Assets/hand_icon.png'
import boton_home from '../Assets/arrow.png'
import mascota_home from '../Assets/hero_image.png'
export const Home = () => {
  return (
    <div className='home'>
        <div className="home-left">
            <h2>NUEVOS PRODUCTOS DISPONIBLES!</h2>
            <div>
                <div className="home-hand-icon">
                    <p>NUEVOS</p>
                    <img src={icono_mano} alt="" />
                </div>
                <p>ACCESORIOS</p>
                <p>PARA MASCOTAS</p>
            </div>
            <div className="home-button">
            <a href="/productos"><div>Ultimos productos</div></a>
            <a href="/productos"><img src={boton_home} alt="" /> </a>
            </div>
        </div>

        <div className="home-right">
            <img src={mascota_home} alt="" />
        </div>
    </div>
  )
}
