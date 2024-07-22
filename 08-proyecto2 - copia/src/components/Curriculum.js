import React from 'react'
import '../styles/cv-styles.css'

const Curriculum = () => {
  return (
    <div className='cv-page'>
        <section className='cv-section'>
            <article className='cv-header'>
              {/* <img src="/images/carnet.png" alt="foto-carnet"/> */}
              <div>
                <h2>Álvaro Climent Román</h2>
                <h2>Fullstack Developer</h2>
                <h4>React expert</h4>
                <strong>
                <a href="https://github.com/aclimentr?tab=repositories">Github</a>
                <a href="https://www.linkedin.com/in/alvaro-climent-rom%C3%A1n-332632170/">Linkedin</a>
                </strong>
              </div>
            </article>
            
            <article className='cv-body'>
                <h3>Formación</h3>
                <ul>
                  <li>Septiembre-Noviembre 2023: Bootcamp Fullstack - Upgrade Hub</li>
                  <li>Septiembre 2018 - Febrero 2023: Grado Universitario Criminología - UFV</li>
                </ul>
                <h3>Experiencia</h3>
                <ul>
                  <li>...........</li>
                  <li>...........</li>
                  <li>...........</li>
                  <li>...........</li>
                </ul>
                <h3>Herramientas</h3>
                <ul>
                  <li>............</li>
                  <li>............</li>
                  <li>............</li>
                  <li>............</li>
                </ul>
                <h3>Sobre mi</h3>
                <ul>
                  <li>...........</li>
                  <li>...........</li>
                  <li>...........</li>
                  <li>...........</li>
                </ul>
            </article>
        </section>
    </div>
  )
}

export default Curriculum
