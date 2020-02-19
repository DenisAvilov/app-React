import React from 'react';
import d from './../Dialogues.module.css';
import { NavLink } from 'react-router-dom';


const Dialog = (props) =>{
    let path = "/dialogues/" + props.id;
    return(
        <div className={d.dialog }>
        <NavLink to={path} activeClassName={d.active}>{props.name}</NavLink>  
      </div>
    )
}
 


export default Dialog;