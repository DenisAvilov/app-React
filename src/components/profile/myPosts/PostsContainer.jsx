import React from 'react';
import { ADD__POST, CHANGE__STATE } from '../../../redux/profile-reducer';
import Posts from './Posts.jsx';
import { connect } from 'react-redux';

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