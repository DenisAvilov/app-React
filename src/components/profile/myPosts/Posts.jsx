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
            <Post/>
        </div> 
    )      
  
}

export default Posts;