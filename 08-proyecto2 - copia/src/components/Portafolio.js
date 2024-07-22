import React from 'react'
import {Link} from 'react-router-dom'
import ListadoTrabajos from './ListadoTrabajos'

const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
      <ListadoTrabajos/>
    </div>
  )
}

export default Portafolio
