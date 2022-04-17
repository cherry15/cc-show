import React from 'react'
import Nav from '../nav/nav'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
    </header>
  )
}

export default Header
