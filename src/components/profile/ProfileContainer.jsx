import React from 'react';
import { connect } from 'react-redux';
import {  add_nuw_post,  is_watch_state, getUserStatus, upStatus,  } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthMe } from '../hoc/withAuthMe';
import { getProfile } from '../../redux/selector';

class ProfileContainer extends React.PureComponent{

  componentDidMount(){
    let user = this.props.match.params.userId;    
    if(!user){
          user = this.props.authMe.id;     
    }
     this.props.getUserStatus(user);
     this.props.is_watch_state(user); 
     
     
     
  }

  render(){    
    console.log("Profile render :)")
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
  console.log("Profile mapStateToProps :)")
  
  return {  
    items: state.profile.items ,
    authMe: state.login,
    status: state.profile.status,
    

  }
}

export default compose(
  withRouter,
  withAuthMe,
  connect( mapStateToProps, { add_nuw_post, 
    is_watch_state, getUserStatus, upStatus} )
)(ProfileContainer)






 
  


