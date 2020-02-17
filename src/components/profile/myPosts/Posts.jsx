import React from 'react';

import d from './Posts.module.css';
import Post from './post/Post.jsx'
const Posts = ()=>{

    const massedgeData = [
        {id: 0, massedge: 'Денис привет это первое сообщение',  like:'21', img:"https://www.w3schools.com/howto/img_avatar.png", alt:"user name" },
        {id: 1, massedge: 'Julia привет это первое сообщение',  like:'22', img:"https://static.knigavuhe.org/poster.jpg",  alt:"user name"},
        {id: 3, massedge: 'Привет',  like:'32', img:"https://img.7dach.ru/image/600/03/69/46/2018/05/15/d5a8ac-nomark.jpg", alt:"user name" },
       
    ];

    const massedgerItem = massedgeData.map( content =>( <Post id={content.id} massedge={content.massedge} like={content.like} img={content.img}/>) );
   
    return(
     
        <div className={d.posts}>
         <h2>Ваши посты</h2>
            <div>
            <input type="textarea"/>
            <button>Отправить</button>
            <button>Удалить</button>
            </div>  

            {massedgerItem}         

        </div> 
    )      
  
}

export default Posts;