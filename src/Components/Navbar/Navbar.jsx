import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import carrito from '../Assets/cart_icon.png';

export const Navbar = () => {
    const [menu, setMenu] = useState("tienda");

    const handleLogoClick = () => {
        setMenu("tienda");
    };

    const handleLoginClick = () => {
        setMenu("login");
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <Link to='/' onClick={handleLogoClick}>
                    <img src={logo} alt="Veterinaria Gaby" />
                </Link>
                <p>Veterinaria Gaby</p>
            </div>
            <ul className="nav-menu">
                <li className={menu === "tienda" ? "active" : ""} onClick={() => setMenu("tienda")}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Tienda</Link>
                    <hr />
                </li>
                <li className={menu === "cuidados" ? "active" : ""} onClick={() => setMenu("cuidados")}>
                    <Link style={{ textDecoration: 'none' }} to='/cuidadosyconsejos'>Cuidados y consejos</Link>
                    <hr />
                </li>
                <li className={menu === "nosotros" ? "active" : ""} onClick={() => setMenu("nosotros")}>
                    <Link style={{ textDecoration: 'none' }} to='/nosotros'>Nosotros</Link>
                    <hr />
                </li>
                <li className={menu === "ayuda" ? "active" : ""} onClick={() => setMenu("ayuda")}>
                    <Link style={{ textDecoration: 'none' }} to='/ayuda'>Ayuda</Link>
                    <hr />
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'>
                    <button 
                        className={menu === "login" ? 'active' : ''}
                        onClick={handleLoginClick}
                    >
                        Login
                    </button>
                </Link>
                <Link to='/carrito'>
                    <img src={carrito} alt="Cart" />
                </Link>
                <div className="nav-cart-contador">0</div>
            </div>
        </div>
    );
}
