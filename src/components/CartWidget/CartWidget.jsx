import React from 'react'
import { useState } from 'react'

function CartWidget() {
    const [cartCount]=useState("1")
    return (
    <div>
        <img src="images/carticon.png" alt="cart" />
        <div>{cartCount}</div>
    </div>
  )
}

export default CartWidget