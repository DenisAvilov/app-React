import React from 'react';
import d from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Nav = ()=>{
    return(
      <nav className={d.nav}>
            <NavLink to="/profile" className={d.item} activeClassName={d.active}>Profile</NavLink>
            <NavLink to="/dialogues" className={d.item} activeClassName={d.active}>Messager</NavLink>
            <NavLink className={d.item} to="/News" activeClassName={d.active}>News</NavLink>
            <NavLink className={d.item} to="/Music" activeClassName={d.active}>Music</NavLink>
            <NavLink className={d.item} to="/Settings" activeClassName={d.active}>Settings</NavLink>          
      </nav>
    )
}

export default Nav;