import React from 'react'
// import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import contacto from '../images/contacto.png';
import '../App.css';

export const Contacto = () => {
  return (
    <div>
        <img src={contacto} alt="contacto_image"/>
        <h1>Contacto</h1>
        <p>Esta es la pagina de contacto</p>
    </div>
  )
}

// export default Contacto
