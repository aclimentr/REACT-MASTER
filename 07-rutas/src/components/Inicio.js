import React from 'react'
// import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import hogar from '../images/hogar.png'
import '../App.css';

export const Inicio = () => {
  return (
    <div>
    <img src={hogar} alt="home_icono"/>
       <h1>Pagina de inicio</h1>
        <p>Esta es la pagina de inicio</p>
    </div>
  )
}

// export default Inicio
