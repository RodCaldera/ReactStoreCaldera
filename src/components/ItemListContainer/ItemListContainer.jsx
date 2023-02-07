import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

function ItemListContainer(props) { 
    return (
        <>
        <div>Hola, {props.greeting}!</div>
        <ItemDetailContainer />
        </>
    )
}

export default ItemListContainer