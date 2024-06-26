import React from 'react';
import {Routes, Route, Link, NavLink, BrowserRouter, Navigate} from 'react-router-dom';
import {Inicio} from '../components/Inicio';
import {Articulos} from '../components/Articulos';
import {Contacto} from '../components/Contacto';
import {Error} from '../components/Error';
import Persona from '../components/Persona';
import PanelControl from '../components/PanelControl';

const RouterPrincipal = () => {
  return (
    <BrowserRouter>

      <h1>Cabecera</h1>
      <hr/>


      <nav>
        <ul>
          <li>
            <NavLink to="/inicio"

              className= {({isActive}) => isActive ? "activado" : ""}

              // className={({isActive}) => isActive ? "activado" : ""}
            >Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/articulos"
              className={({isActive}) => isActive ? "activado" : ""}
            >Articulos</NavLink>
          </li>
          <li>
            <NavLink to="/contacto"
              className={({isActive}) => isActive ? "activado" : ""}
            >Contacto</NavLink>
          </li>
            
          
        </ul>
      </nav>
      <hr/>

      <section className="contenido-principal">
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/articulos" element={<Articulos/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/persona/:nombre/:apellido" element={<Persona/>}/>
            <Route path="/persona/:nombre" element={<Persona/>}/>
            <Route path="/persona" element={<Persona/>}/>
            <Route path="/redirigir" element={<Navigate to="/persona/alvaro/climent"/>}/>
            <Route path="/panel" element={<PanelControl/>}/>
            
            <Route path="*" element={<Error/>}/>     
        </Routes>
      </section>
      
      <hr/>
      <footer>
        Este es el pie de pagina
        <hr/>
        <a href="https://www.flaticon.es/iconos-gratis/ui" title="ui iconos">Ui iconos creados por designhub - Flaticon</a>

      </footer>

    </BrowserRouter>
  )
}

export default RouterPrincipal
