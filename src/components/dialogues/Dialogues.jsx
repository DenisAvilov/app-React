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

    const usersIdData = [
        { id: 0, name: 'Denis'},
        { id: 1, name: 'Julia'},
        { id: 2, name: 'Ilya'}
    ]
    const usersMessageData = [
        {id: 0, message:'Привет я твой новый взгляд на обычные вещи'},
        {id: 1, message:'Ты слышал обо мне но не доверял себе и всемремя сопратевлялся и не принмал меня во внмание'}
    ]
    return(
    <div className={d.dialogs}>
                <div className={d.dialogsi_items}> 
                    <Dialog name={usersIdData[0].name} id={usersIdData[0].id}/>
                    <Dialog name={usersIdData[1].name} id={usersIdData[1].id}/>
                    <Dialog name={usersIdData[2].name} id={usersIdData[2].id}/>
               </div>
                 
                <div className={d.messages}>
                         <Message id={usersMessageData[0].id} message={usersMessageData[0].message}/>
                         <Message id={usersMessageData[1].id} message={usersMessageData[1].message}/> 
                </div>
           </div>
         
    )
}

export default Dialogs;