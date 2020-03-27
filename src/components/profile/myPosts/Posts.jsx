import React from 'react';
import d from './Posts.module.css';
import Post from './post/Post.jsx'
const Posts = (props) => {

    let postEllement = React.createRef();

    let onChange = () => {      
        let text = postEllement.current.value;
        
          props.textarea_change_state(text);
        // props.dispatch( CHANGE__STATE(text) )
    }
    let onAddPost = () => {
           props.add_nuw_post()
        // props.dispatch( ADD__POST() )
    }

    const postItem = props.posts.map(content => (<Post key={content.id} id={content.id}
         massedge={content.massedge} like={content.like} img={content.img} />));

    return (
        <div className={d.posts}>
            <h2>Ваши посты</h2>
            <div>
                <input type="textarea" ref={postEllement}
                    onChange={onChange} value={props.placeholder}
                />
                <button onClick={onAddPost}>Отправить</button>
                <button >Удалить</button>
            </div>
             {postItem} 
        </div>
    )

}

export default Posts;