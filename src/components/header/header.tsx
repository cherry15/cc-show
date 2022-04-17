import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  const openNavLabel = 'Open menu'
  const closeNavLabel = 'Close menu'
  const [ariaNavLabel, setAriaNavLabel] = useState(openNavLabel)

  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true)
    isNavOpen
      ? setAriaNavLabel(openNavLabel)
      : setAriaNavLabel(closeNavLabel)
  }

  const hideNav = () => {
    setIsNavOpen(false)
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
        className={`navButton ${isNavOpen ? 'open' : ''}`}
        aria-label={ariaNavLabel}
        onClick={toggleNav}
      />
      <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
          <NavLink
            to={'/about'}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={hideNav}
          >
            About
          </NavLink>
          <NavLink
            to={'/cats'}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={hideNav}
          >
            Cats
          </NavLink>
          <NavLink
            to={'/dogs'}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={hideNav}
          >
            Dogs
          </NavLink>
          <NavLink
            to={'/contact'}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={hideNav}
          >
            Contact
          </NavLink>
      </nav>
    </header>
  )
}

export default Header
