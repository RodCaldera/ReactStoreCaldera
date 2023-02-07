import React from 'react'
import CartWidget from '../CartWidget/CartWidget.jsx'

function NavBar() {
  return (
    <section style={{backgroundColor:'hotpink'}}>
        <h1> Play!</h1>
        <h3> Fun is the new sexy</h3>
        <CartWidget/>
        <ul>
          <li>Novedades</li>
          <li>Colección</li>
          <li>Oferta</li>
          <li>Nosotros</li>
        </ul>
      </section>
  )
}

export default NavBar