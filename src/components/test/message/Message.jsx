import React from 'react';
import d from './Message.module.css';

class Message extends React.Component {    
 
 render(){
    return(                 
        <div className={d.message}>
         
        </div>   

      )
 }
      
}

export default Message;



// const Message = (props) =>{    
//     return(    
                
//                     <div className={d.message}>
//                         {props.message}
//                     </div>
               
         
//     )  
// }