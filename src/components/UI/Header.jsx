import React from 'react'
import logo from '../../img/logo.png'
import { NavLink } from "react-router-dom";
import './Header.scss';

const Header = () => {
  return (
    <header className='center'>
      <img src={logo} alt='' />
      <div className='nav_links'>
            <NavLink to="/characters">
              Characters
            </NavLink>
            <NavLink to="/episodes" className="App__HeaderNavLink">
              Episodes
            </NavLink>
      </div>
    </header>
  )
}

export default Header
