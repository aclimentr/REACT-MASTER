import React from 'react'

const Contacto = () => {
  return (
    <div className='contact-div'>
      <h1>Contacto</h1>
      <form className='contact' action="mailto:alvaronero11@gmail.com">
        <input type='text' placeholder='Name'/>
        <input type='text' placeholder='Second Name'/>
        <input type='text' placeholder='Email'/>
        <textarea placeholder='Write your question here'/>
        <input type='submit' value='ENVIAR' />
      </form>
    </div>
  )
}

export default Contacto
