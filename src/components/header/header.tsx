import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  const openMenuLabel = 'Open menu'
  const closeMenuLabel = 'Close menu'
  const [ariaMenuLabel, setAriaMenuLabel] = useState(openMenuLabel)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
    isMenuOpen
      ? setAriaMenuLabel(closeMenuLabel)
      : setAriaMenuLabel(openMenuLabel)
  }

  const hideMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className='header'>
      <NavLink
        to={'/'}
        className={`logo ({ isActive }) => (isActive ? 'active' : '')`}
        aria-label='Home'
      />
      <input
        type='button'
        className={`menuButton ${isMenuOpen ? 'open' : ''}`}
        aria-label={ariaMenuLabel}
        onClick={toggleMenu}
      />
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <NavLink
            to={'/about'}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={hideMenu}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/cats'}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={hideMenu}
          >
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/dogs'}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={hideMenu}
          >
            Dogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/contact'}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={hideMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
