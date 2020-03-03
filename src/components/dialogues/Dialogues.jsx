import React from 'react';
import d from './Dialogues.module.css';
import Message from './message/Message';
import Dialog from './dialog/Dialog';

const Dialogues = (props) => {

    const userName = props.state.users.map(name =>
         (<Dialog  id={name.id} name={name.name} 
         dialogues={props.state.placeholder} 
         addDialog={props.addDialog}
         chengePlaceholder={props.chengePlaceholder}   
         />));
  
    const userMessage = props.state.messages.map(message => 
       (<Message  id={message.id}
       message={message.message}  />));

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsi_items}>
               { userName} 
               
            </div>
            <div className={d.messages}>
             {userMessage} 
            </div>
        </div>

    )
}

export default Dialogues;