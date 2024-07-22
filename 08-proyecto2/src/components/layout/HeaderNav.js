import React from 'react'
import {NavLink} from 'react-router-dom';

const HeaderNav = () => {
  return (
    <header className='header'>
    <div className='logo'>
        <span>A</span>
        <h3>Alvaro Climent Roman</h3>
    </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : "navlink"}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/portafolio" className={({isActive}) => isActive ? "active" : "navlink"}>Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to="/servicios" className={({isActive}) => isActive ? "active" : "navlink"}>Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum" className={({isActive}) => isActive ? "active" : "navlink"}>Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" className={({isActive}) => isActive ? "active" : "navlink"}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderNav
