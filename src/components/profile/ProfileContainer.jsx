import React from 'react';
import { connect } from 'react-redux';
import {  add_nuw_post,  is_watch_state, getUserStatus, upStatus,  } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthMe } from '../hoc/withAuthMe';

class ProfileContainer extends React.Component{

  componentDidMount(){
    let user = this.props.match.params.userId;    
    if(!user){
      user = this.props.authMe.id;
     // user = 2;
    }
     this.props.getUserStatus(user);
     this.props.is_watch_state(user); 
     

  }

  render(){    
        return(   
       < Profile 
         {...this.props}
         items={ this.props.items }
         authMe={this.props.authMe}

         status = {this.props.status}
         upStatus = {this.props.upStatus}
       />
    )
  }
}

let mapStateToProps = (state)=>{  
 
  return {
    store: state.profile,
    items: state.profile.items,
    authMe: state.login,
    status: state.profile.status

  }
}

export default compose(
  withRouter,
  withAuthMe,
  connect( mapStateToProps, { add_nuw_post, 
    is_watch_state, getUserStatus, upStatus} )
)(ProfileContainer)






 
  


