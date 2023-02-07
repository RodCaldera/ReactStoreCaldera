import React from 'react'

const catalog=[
    {id:"1", group:"novedades", category:" Sexy Spring", name:"Bulldog Magenta", color:"Magenta", price:"500 MXN", image:"placeholderimage"},
    {id:"2", group:"novedades", category:"Sexy Spring", name:"Sling Magenta", color:"Magenta", price:"500 MXN", image:"placeholderimage"},
    {id:"3", group:"novedades", category:"Sexy Spring", name:"Gladiador Magenta", color:"Magenta", price:"500 MXN", image:"placeholderimage"},
    {id:"4", group:"novedades", category:"Sexy Spring", name:"Bulldog Amarillo", color:"Amarillo", price:"500 MXN", image:"placeholderimage"},
    {id:"5", group:"novedades", category:"Sexy Spring", name:"Sling Amarillo", color:"Amarillo", price:"500 MXN", image:"placeholderimage"},
    {id:"6", group:"novedades", category:"Sexy Spring", name:"Gladiador Amarillo", color:"Amarillo", price:"500 MXN", image:"placeholderimage"},
    {id:"7", group:"coleccion", category:"Sensous Blush", name:"Bulldog Nude", color:"Nude", price:"500 MXN", image:"placeholderimage"},
    {id:"8", group:"coleccion", category:"Sensous Blush", name:"Sling Nude", color:"Nude", price:"500 MXN", image:"placeholderimage"},
    {id:"9", group:"coleccion", category:"Sensous Blush", name:"Gladiador Nude", color:"Nude", price:"500 MXN", image:"placeholderimage"},
    {id:"10", group:"promociones", category:"Bling", name:"Bulldog Oro", color:"Oro", price:"500 MXN", image:"placeholderimage"},
    {id:"11", group:"promociones", category:"Bling", name:"Sling Oro", color:"Oro", price:"500 MXN", image:"placeholderimage"},
    {id:"12", group:"promociones", category:"Bling", name:"Gladiador Oro", color:"Oro", price:"500 MXN", image:"placeholderimage"},
    
]

function ItemDetailContainer(props) {
  return (
   <div>
    {catalog.map(product=> <div key={product.id} className='card'>
                                
                                <div className='card-body'> 
                                    <img src="../public/images/imageplaceholder.png" alt="placeholder" />
                                </div>
                                <div className='card-header'>
                                    {product.name}
                                </div>
                                <div className='card-footer'>
                                    {product.price}
                                </div>
                            </div>
    )}
    </div>)
}


export default ItemDetailContainer
