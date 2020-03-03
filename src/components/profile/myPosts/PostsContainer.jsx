import React from 'react';
import { ADD__POST, CHANGE__STATE } from '../../../redux/profile-reducer';
import Posts from './Posts.jsx';
import { connect } from 'react-redux';

// const PostsContainer = (props) => {

//     let onChange = (text) => {   
//         // let text = postEllement.current.value;
//         // props.changeState(text)      
//         props.dispatch( CHANGE__STATE(text) )
//     }
//     let addPost = () => {
//         //props.addPost()
//         props.dispatch( ADD__POST() )
//     }

//     return (
//        <Posts  placeholder={ onChange } addPost={addPost} posts={props.posts}/>
//     )

// }



let mapStateToProps = (state)=>{
 
   return {
    posts: state.profile.posts,
    placeholder: state.profile.placeholder
   } 
}

let mapDispatchToProps = (dispatch) => {

    return {
            chengePlaceholder: (text) => {
           
             dispatch(CHANGE__STATE(text) )

             },
        addPost: () => { 
            dispatch( ADD__POST() )
         }
    }

}


const PostsContainer = connect( mapStateToProps, mapDispatchToProps )(Posts)
export default PostsContainer;