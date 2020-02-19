import React from 'react';
import d from './Dialogues.module.css';
import Message from './message/Message';
import Dialog from './dialog/Dialog';

// import Data from './../../data.js'; 


const Dialogs = (props) =>{       

      const userName = props.user.usersNameData.map( name => ( <Dialog id={name.id} name={name.name}/> ) );
      const userMessage = props.mess.usersMessageData.map( message => ( <Message id={message.id} message={message.message}/>) );
    
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