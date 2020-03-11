import React from 'react';
import d from './Dialogues.module.css';
import Message from './message/Message';
import Dialog from './dialog/Dialog';
import * as axios from 'axios';

const Dialogues = (props) => {    
  
if(props.state.users.length === 0){ 
  
   axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then( response => {
  
       props.set_users(response.data.items)
   })
  
//    props.set_users( 
//      {
//       users :  [
//          { id: 1, name: 'Denis', follow: false },
//          { id: 2, name: 'Egor', follow: false },
//      ],
//      messages : [
//          { id: 1, message: 'Привет я твой новый взгляд на обычные вещи' },
//          { id: 2, message: 'Ты слышал обо мне, но не доверял себе, что ты справишся' },
//          { id: 3, message: 'Тот кто ищет вынужден блуждать' },
//          { id: 4, message: 'Никита Денисович' },
//         { id: 5, message: 'Никита Никита' },
//     ]
//      }) 

}
    const userName = props.state.users.map(name =>
         (<Dialog key={name.id} id={name.id} name={name.name} 
         follow={name.follow}
         img={name.photos}            
         dialogues={props.state.placeholder}        
         addDialog={props.addDialog}
         chengePlaceholder={props.chengePlaceholder}
         unFollow={props.unFollow}
         followFc={props.follow}
         />));
  
    const userMessage = props.state.messages.map(message => 
       (<Message key={message.id} id={message.id}
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