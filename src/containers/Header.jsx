import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <Link to ={"/"}>
    <div className='ui fixed menu'>
      <div className='ui container center'>
        <h1>Visinho Shop</h1>
      </div>
    </div>
  </Link>
  )
}

export default Header
