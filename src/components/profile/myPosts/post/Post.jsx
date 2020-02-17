import React from 'react';
import d from './Post.module.css';

import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = (props)=>{
    return(<div className={d.postWrap}>
              <div className={d.postAvatar}>
                    <img src={props.img} alt={props.alt}/>
               </div>
              <div className={d.postMassenge}>
                    { props.massedge}
               </div>
              <span className={d.like}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    {props.like}
              </span>
             <div>id: {props.id}</div>            
          </div>        
    )      
  
} 

export default Post;