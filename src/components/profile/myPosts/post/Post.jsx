import React from 'react';
import d from './Post.module.css';

import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = (props)=>{
    return(<div className={d.postWrap}>
              <div className={d.postAvatar}>  <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""/></div>
              <div className={d.postMassenge}>  { props.massedge} { props.age }</div>
              <span className={d.like}>
              <FontAwesomeIcon icon={faThumbsUp} />
               {props.like}
              </span>
             <div>{props.id}</div>
              {console.log(props)}
          </div>        
    )      
  
} 

export default Post;