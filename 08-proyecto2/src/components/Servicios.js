import React from 'react'

const Servicios = () => {
  return (
    <div className='page'>
      <h1>Servicios</h1>
      <section className='services'>
        <article className='service'>
            <h2>Web Design</h2>
            <p>I can transform your web to make it look better</p>
            <p>CSS Stylesheet, SCSS, JQuery...</p>
        </article>

        <article className='service'>
            <h2>Web Development</h2>
            <p>I make your web from 0 to 100%</p>
            <p>HTML, JavaScript, React, Node, Angular...</p>
        </article>

        <article className='service'>
            <h2>Web Positioning</h2>
            <p>I put your web on the firsts Google searchs</p>
        </article>
      </section>
    </div>
  )
}

export default Servicios
