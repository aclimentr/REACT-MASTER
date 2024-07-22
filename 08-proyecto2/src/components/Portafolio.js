import React from 'react'
import  {Trabajos}  from '../data/Trabajos' 
import {Link} from 'react-router-dom'

const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>

      {
        Trabajos.map(trabajo => {
          return(
          <article key={trabajo.id}>
            <span>{trabajo.categorias}</span>
            <h2><Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link></h2>
            <h3>{trabajo.tecnologias}</h3>

          </article>
          )
        })
        }
    </div>
  )
}

export default Portafolio
