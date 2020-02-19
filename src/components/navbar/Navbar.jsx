import React from 'react';
import d from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className={d.nav}>
      <NavLink to="/profile" className={d.item} activeClassName={d.active}>Profile</NavLink>
      <NavLink to="/dialogues" className={d.item} activeClassName={d.active}>Dialogues</NavLink>
      <NavLink to="/News" className={d.item} activeClassName={d.active}>News</NavLink>
      <NavLink to="/Music" className={d.item} activeClassName={d.active}>Music</NavLink>
      <NavLink to="/Settings" className={d.item} activeClassName={d.active}>Settings</NavLink>
    </nav>
  )
}

export default Nav;