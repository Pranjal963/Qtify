import React from 'react'

import styling from './NavBar.module.css'
import Button from '../Button/Button';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';


const NavBar = () => {
  return (
    <nav className={styling.navbar}>
        <Logo />
        <Search />
        <Button children="Give Feedback"/>
       
    </nav> 
  )
}

export default NavBar