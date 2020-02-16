import React from 'react';
import d from './Dialogues.module.css';
import { NavLink, BrowserRouter } from 'react-router-dom';
import Message from './message/Message';

const Dialog = (props) =>{
    let path = "/dialogues/" + props.id;
    return(
        <div className={d.dialog}>
        <NavLink to={path}
        activeClassName={d.active}>{props.name}</NavLink>  
      </div>
    )
}

const Dialogs = (props) =>{    
    return(
    <div className={d.dialogs}>
                <div className={d.dialogsi_items}> 
                    <Dialog name="Denis" id="1"/>
                    <Dialog name="Julia" id="2"/>
                    <Dialog name="Ilya"  id="3"/>
               </div>
                 
                <div className={d.messages}>
                         <Message message="Привет я твой новый взгляд на обычные вещи"/>
                         <Message message="Ты слышал обо мне но не доверял себе и всемремя сопратевлялся и не принмал меня во внмание"/>       
                </div>
           </div>
         
    )
}

export default Dialogs;