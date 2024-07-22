import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Trabajos } from '../data/trabajos';
import '../styles/proyecto.css';

const Proyecto = () => {

    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() => {
       let proyecto = Trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0]);
    },[]);


  return (
    <div className='pagina'>
      <div className='mask-pry'>
        <img src={"/images/" + proyecto.id + ".png"}/>
      </div>
        <h1>{proyecto.nombre}</h1>
        <h3>{proyecto.tecnologias}</h3>
        <p>{proyecto.descripcion}</p>
        <a href={"https://" + proyecto.url} target="_blank">Ir al  Proyecto</a>
    </div>
  )
}

export default Proyecto
