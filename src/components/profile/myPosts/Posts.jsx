import React from 'react';

import d from './Posts.module.css';
import Post from './post/Post.jsx'
const Posts = (props) => {

let postEllement = React.createRef();


let addButton = ()=>{
    
     let text = postEllement.current.value;    
     props.addPost(text);
     postEllement.current.value = '';
     
}

    const postItem = props.posts.posts.map(content => (<Post id={content.id} massedge={content.massedge} like={content.like} img={content.img} />));

    return (
        <div className={d.posts}>
            <h2>Ваши посты</h2>
            <div>
                <input type="textarea" ref={postEllement} />
                <button onClick={  addButton  }>Отправить</button>
                <button >Удалить</button>
            </div>
            {postItem}
        </div>
    )

}

export default Posts;