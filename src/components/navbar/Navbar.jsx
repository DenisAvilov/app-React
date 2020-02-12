import React from 'react';
import d from './Navbar.module.css';

const Nav = ()=>{
    return(
      <nav className={d.nav}>
            <a className={d.item} href="#">Profile</a>
            <a className={d.item} href="#">Messager</a>
            <a className={d.item} href="#">News</a>
            <a className={d.item} href="#">Music</a>
            <a className={d.item} href="#">Settings</a>          
      </nav>
    )
}

export default Nav;