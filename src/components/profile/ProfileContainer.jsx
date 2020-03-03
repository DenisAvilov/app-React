import React from 'react';
import d from './Profile.module.css';
import PostsContainer from './myPosts/PostsContainer';
import { connect } from 'react-redux';
import { CHANGE__STATE, ADD__POST } from '../../redux/profile-reducer';
import Profile from './Profile';


let mapStateToProps = (state)=>{ 
  return {
    store: state.profile
    
  }
}


const ProfileContainer = connect( mapStateToProps )( Profile )
 
// let onChange = () => {   
//   let text = postEllement.current.value;
//     props.placeholder(text)      
//   // props.dispatch( CHANGE__STATE(text) )
// }
// let onAddPost = () => {
//      props.addPost()
//   // props.dispatch( ADD__POST() )
// }
   

      // <PostsContainer store={props.profile} posts={props.state.profile} newPostText={props.state.profile.inputState} dispatch={props.dispatch} />
   
  


export default ProfileContainer;