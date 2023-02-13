import React from 'react'
import { Link, Navigate, Route } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget.jsx'
import ItemListContainer from '../ItemListContainer/ItemListContainer.jsx'

function NavBar() {
  return (
    <section style={{backgroundColor:'hotpink'}}>
      <Link to='/'> <h1> Play!</h1> </Link>
        <h3> Fun is the new sexy</h3>
        <CartWidget/>
        <ul> 
        <Link to='/category/novedades'> <li>Novedades</li></Link>
        <Link to='/category/coleccion'>  <li>Colección</li> </Link>
        <Link to='/category/oferta'>  <li>Oferta</li></Link>
        <Link to='/category/nosotros' >  <li>Nosotros</li></Link>
        </ul>
      </section>
  )
}

export default NavBar