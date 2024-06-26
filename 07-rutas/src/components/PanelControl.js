import React from 'react'

const PanelControl = () => {
  return (
    <div>
      <h1>Panel de Control</h1>
      <p>Elige una de estas opciones</p>
      <nav>
        <ul>
            <li>
                <a href="/panel/inicio">Inicio</a>
            </li>
            <li>
                <a href="/panel/crear-articulos">Crear Articulos</a>
            </li>
            <li>
                <a href="/panel/gestion-usuarios">Gestion Usuarios</a>
            </li>
            <li>
                <a href="/panel/acerca-de">Acerca de</a>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default PanelControl

