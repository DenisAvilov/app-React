import React from 'react';
import d from './Message.module.css';
import { NavLink, BrowserRouter } from 'react-router-dom';

const Message = (props) =>{    
    return(    
                
                    <div className={d.message}>
                        {props.message}
                    </div>
               
         
    )  
}

export default Message;