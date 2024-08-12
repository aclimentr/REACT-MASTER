import React, { useEffect, useRef, useState } from 'react'
import Swal from "sweetalert2";

const Ejemplo = () => {

    const [numeroSaludo, setNumeroSaludo] = useState(0);
    const saludosEnCola = useRef(numeroSaludo);

    useEffect(() => {
        saludosEnCola.current = numeroSaludo;
        setTimeout(() => {
        console.log("Mensajes en cola: " + saludosEnCola.current);
        },2000);
    },[numeroSaludo]);

    const enviarSaludo = e => {
        setNumeroSaludo(numeroSaludo + 1);
    }




  return (
    <div>
        <h1>Ejemplo con useRef</h1>

        <h2>Saludos enviados: {numeroSaludo}</h2>
        <button onClick={enviarSaludo}>Enviar Saludo!!</button>

        <hr/>
    </div>

  )
}

export default Ejemplo
