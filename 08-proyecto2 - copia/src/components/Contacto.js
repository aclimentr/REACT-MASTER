import React from 'react'

const Contacto = () => {
  return (
    <div className='contact-div'>
      <h1>Contact with Me!</h1>
      <form className='contact' action="mailto:alvarocliment1999@gmail.com">
        <input type='text' placeholder='Name'/>
        <input type='text' placeholder='Second Name'/>
        <input type='text' placeholder='Email'/>
        <textarea placeholder='How can I help you?'/>
        <input type='submit' value='ENVIAR' />
      </form>
    </div>
  )
}

export default Contacto
