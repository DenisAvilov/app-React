import React from 'react';
import d from './Profile.module.css';
import PostsContainer from './myPosts/PostsContainer';
import { connect } from 'react-redux';
import { textarea_change_state, add_nuw_post, watch_state } from '../../redux/profile-reducer';
import Profile from './Profile';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component{

  componentDidMount(){
    let user = this.props.match.params.userId;
  if(!user){
    user = 2;
  }
 
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + user)
    .then( (response) => {    
        this.props.watch_state(response.data) 
     } )
  }

  render(){
  
    return(
   
       < Profile 
         {...this.props}
         items={ this.props.items }
       />
    )
  }


}


let mapStateToProps = (state)=>{ 
 
  return {
    store: state.profile,
    items: state.profile.items
  }
}


export default connect( mapStateToProps, {textarea_change_state, add_nuw_post, watch_state} )( withRouter( ProfileContainer ) )
 
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
   
  


