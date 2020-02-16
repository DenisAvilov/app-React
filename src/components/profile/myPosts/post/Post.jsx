import React from 'react';

import d from './Post.module.css';
const Post = (props)=>{
    return(         
            <div className={d.item}>
             <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>
             { props.massedge } { props.age }
             <span className={d.like}>
               {props.like}
             </span>
            </div>        
    )      
  
} 

export default Post;