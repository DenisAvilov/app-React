import React from 'react';

import d from './Posts.module.css';
import Post from './post/Post.jsx'
const Posts = ()=>{
    const massedgeData = [
        {id: 0, massedge: 'Денис привет это первое сообщение', age:'35', like:'21'},
        {id: 1, massedge: 'Julia привет это первое сообщение', age:'35', like:'22'}
    ];
    return(
     
        <div className={d.posts}>
         <h2>Ваши посты</h2>
            <div>
            <input type="textarea"/>
            <button>Отправить</button>
            <button>Удалить</button>
            </div>            
            <Post id={massedgeData[0].id} massedge={massedgeData[0].massedge}  age={massedgeData[0].age} like={massedgeData[0].like}/>
            <Post id={massedgeData[1].id} massedge={massedgeData[1].massedge}  age={massedgeData[1].age} like={massedgeData[1].like}/>
           
            {/* <Post massedge="Илья привет это первое сообщение" age="1.6" like="24"/>
            <Post massedge="Илья  сообщение" age="1.6" like="24"/>
            <Post massedge="Илья привет это первое сообщение" age="1.6" like="24"/>  */}
        </div> 
    )      
  
}

export default Posts;