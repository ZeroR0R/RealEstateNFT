import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
        <div className='gpt3__navbar-links_logo'>
          <header className='rooney__logo'>Rooney C</header>
        </div>
      <div className='gpt3__navbar-links'>
          <div className='gpt3__navbar-menu_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#view'>View</a></p>
          <p><a href='#mint'>Mint</a></p>
          </div>
      </div>
      </div>
  )
}

export default Navbar