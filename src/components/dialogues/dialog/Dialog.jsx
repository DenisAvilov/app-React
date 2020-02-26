import React from 'react';
import d from './../Dialogues.module.css';
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
   
    let path = "/dialogues/" + props.id;    
    let textarea = React.createRef();
    let changeDialogOnline = ()=>{
        let text = textarea.current.value
            props.dispatch({type : 'CHANGESTATE-DIALOGUES', text : text})
       
      }
    let neuDialog =()=>{      
     props.dispatch({type: 'ADD-DIALOGUES'});
    }
 
    return (
        <div className={d.dialog}>
            <NavLink to={path} activeClassName={d.active}>{props.name}</NavLink>
            <div>
                <textarea name="" id="" cols="20" rows="1"
                 ref={textarea} value={props.dialogues} onChange={changeDialogOnline}
               ></textarea>

                <button type="submmit" onClick={neuDialog}> Отправить </button>
            </div>
        </div>
    )
}



export default Dialog;