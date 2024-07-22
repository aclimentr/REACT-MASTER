import React from 'react'
import { Link } from 'react-router-dom'
import ListadoTrabajos from './ListadoTrabajos'

const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola Mundo! Me llamo <strong>Álvaro Climent</strong>, soy desarrollador de aplicaciones junior viviendo en Madrid,
         ofrezco mis servicios como<strong> Programador</strong> y <strong>Desarrollador Web</strong> ayudandote a construir tus
         <strong> Aplicaciones Web</strong>
      </h1>

      <h2>
        Te ayudaré a crear una interfaz de usuario interactiva y que te posicione
         en el número 1 de búsquedas en Google 
         <Link to='/contacto' style={{margin: "20px"}}>Contact Me!</Link>
      </h2>

      <section className='last-works'>
        <h2 style={{color: "white"}}>Algunos de mis proyectos:</h2>
        <hr/>
        <ListadoTrabajos limite="2"/>
        
      </section>
    </div>
  ) 
}

export default Inicio
