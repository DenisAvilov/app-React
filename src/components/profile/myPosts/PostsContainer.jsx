import React from 'react';
import { ADD__POST, CHANGE__STATE } from '../../../redux/profile-reducer';
import Posts from './Posts.jsx';

const PostsContainer = (props) => {

    let onChange = (text) => {   
        // let text = postEllement.current.value;
        // props.changeState(text)      
        props.dispatch( CHANGE__STATE(text) )
    }
    let addPost = () => {
        //props.addPost()
        props.dispatch( ADD__POST() )
    }

    return (
       <Posts  placeholder={ onChange } addPost={addPost} posts={props.posts}/>
    )

}

export default PostsContainer;