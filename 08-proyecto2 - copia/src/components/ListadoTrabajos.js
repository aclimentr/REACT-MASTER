import React from 'react'
import { Link } from 'react-router-dom'
import  {Trabajos}  from '../data/trabajos' 

const ListadoTrabajos = ({limite}) => {
  return (
    <section className='works'>
      {
        Trabajos.slice(0,limite).map(trabajo => {
          return(
          <article key={trabajo.id} className='work-item'>
            <div className='mask'>
              <img src={"/images/" + trabajo.id + ".png"} alt='imagen'/>
            </div>
            <div className='presentation-div'>
            <span>{trabajo.categorias}</span>
            <h2><Link to={"/proyecto/" + trabajo.id} className='link'>{trabajo.nombre}</Link></h2>
            <h3>{trabajo.tecnologias}</h3>
            </div>
          </article>
          )
        })
        }
        </section>
  )
}

export default ListadoTrabajos
