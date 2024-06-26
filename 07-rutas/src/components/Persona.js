import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Persona = () => {

    // const parametros = useParams();
    //con destructuracion de objetos se puede conseguir solo el parametro
    //nombre:
    // Valores por defecto en parametros opcionales:
    // let {nombre="Alvaro", apellido="Climent"} = useParams();
    //hemos asignado los valores por defecto a nombre y apellido en
    //la destructuración del useParams()
    // console.log(parametros);

    const {nombre, apellido} = useParams();
    const navegar = useNavigate();

    const enviar = (e) => {
      e.preventDefault();
      let nombre = e.target.nombre.value;
      let apellido = e.target.apellido.value;
      let url = `/persona/${nombre}/${apellido}`;

        if(nombre.length <= 0 && apellido.length <= 0){
          navegar("/inicio");
        }else if(nombre === "contacto"){
          navegar("/contacto");
        }else{
          navegar(url);
        }
      
    }
    

  return (
    <div>
    {!nombre ? <h1>No hay ninguna persona que mostrar</h1> : <h1>Pagina de persona: {nombre} {apellido}</h1>}
    {/* {!nombre && <h1>No hay ninguna persona que mostrar</h1>} */}
    {nombre && !apellido && <p>Inserte un apellido para continuar</p>}
    {/* {nombre && <h1>Pagina de persona: {nombre} {apellido}</h1>} */}
      <p>Esta es la página de persona</p>

      <form onSubmit={enviar}>
        <input type="text" name="nombre"/>
        <input type="text" name="apellido"/>
        <input type="submit" name="enviar" value="Enviar"/>
      </form>
    </div>
  )
}

export default Persona
