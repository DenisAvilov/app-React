import React from 'react';
import { add_nuw_post, textarea_change_state } from '../../../redux/profile-reducer';
import Posts from './Posts.jsx';
import { connect } from 'react-redux';

 
class PostsContainer extends React.Component{


   render(){
      return(
         <Posts 
         posts={this.props.posts}
         placeholder={this.props.placeholder}
         textarea_change_state={this.props.textarea_change_state}
         add_nuw_post={this.props.add_nuw_post}
      
         />
      )
   }
}


let mapStateToProps = (state)=>{
 
   return {
    posts: state.profile.posts,
    placeholder: state.profile.placeholder
   } 
}



export default connect( mapStateToProps, { textarea_change_state, add_nuw_post })(PostsContainer)
