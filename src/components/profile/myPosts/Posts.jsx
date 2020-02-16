import React from 'react';

import d from './Posts.module.css';
import Post from './post/Post.jsx'
const Posts = ()=>{
    return(
     
        <div className={d.posts}>
         <h2>Ваши посты</h2>
            <div>
            <input type="textarea"/>
            <button>Отправить</button>
            <button>Удалить</button>
            </div>            
            <Post massedge="Денис привет это первое сообщение" age="35" like="21"/>
            <Post massedge="Илья привет это первое сообщение" age="1.6" like="24"/>
            <Post massedge="Илья привет это первое сообщение" age="1.6" like="24"/>
            <Post massedge="Илья привет это первое сообщение" age="1.6" like="24"/>
        </div> 
    )      
  
}

export default Posts;