import React from 'react';

import d from './Posts.module.css';
import Post from './post/Post.jsx'
const Posts = (props) => {
   
let postEllement = React.createRef();

console.log(props.newPostText);

let onChange = () =>{   
    var val = postEllement.current.value;
    props.changeState(val);  
}

let addButton = ()=>{        
     props.addPost();
     
}

    const postItem = props.posts.posts.map(content => (<Post id={content.id} massedge={content.massedge} like={content.like} img={content.img} />));

    return (
        <div className={d.posts}>
            <h2>Ваши посты</h2> 
            <div>
                <input type="textarea" ref={postEllement} 
                onChange={onChange}  value={props.newPostText}
                />
                <button onClick={  addButton  }>Отправить</button>
                <button >Удалить</button>
            </div>
            {postItem}
        </div>
    )

}

export default Posts;