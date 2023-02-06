import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to={'/checkout'}>
            <span>Checkout</span>
        </Link>
        <Link to={'/products'}>
            <span>Products</span>
        </Link>
        <span className='cartTotal'>0</span>
    </div>
  )
}

export default Navbar