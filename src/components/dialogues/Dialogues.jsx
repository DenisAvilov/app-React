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

    const usersNameData = [
        { id: 0, name: 'Denis'},
        { id: 1, name: 'Julia'},
        { id: 2, name: 'Ilya'}
    ];
    const usersMessageData = [
        {id: 0, message:'Привет я твой новый взгляд на обычные вещи'},
        {id: 1, message:'Ты слышал обо мне, но не доверял себе, что ты справишся'},
        {id: 2, message:'Тот кто ищет вынужден блуждать'}
    ];

     const userName = usersNameData.map( name => ( <Dialog id={name.id} name={name.name}/> ) );
     const userMessage = usersMessageData.map( message => ( <Message id={message.id} message={message.message}/>) );
    
    return(
    <div className={d.dialogs}>
                <div className={d.dialogsi_items}> 
                    {userName}  
                    {/* <Dialog name={usersIdData[0].name} id={usersIdData[0].id}/>
                    <Dialog name={usersIdData[1].name} id={usersIdData[1].id}/>
                    <Dialog name={usersIdData[2].name} id={usersIdData[2].id}/> */}
               </div>
                 
                <div className={d.messages}>
                         {userMessage}
                         {/* <Message id={usersMessageData[0].id} message={usersMessageData[0].message}/>
                         <Message id={usersMessageData[1].id} message={usersMessageData[1].message}/>  */}
                </div>
           </div>
         
    )
}

export default Dialogs;