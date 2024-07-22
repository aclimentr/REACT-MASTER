import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hello World, my name is <strong>Álvaro Climent</strong>, I'm a junior web developer living in Madrid,
         I'm offering my services as a<strong> Programmer</strong> and <strong>Web Developer </strong> healping building 
        your <strong>Apps!</strong>
      </h1>

      <h2>
        I help you creating your website application, having more views and impressions 
        on the internet. <Link to='/contacto'>Contact Me!</Link>
      </h2>

      <section className='last-works'>
        <h2>Some of my projects:</h2>
        <p>This are some of my works about web developing.</p>
          <div className='works'>

          </div>
      </section>
    </div>
  )
}

export default Inicio
