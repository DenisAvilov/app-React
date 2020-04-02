import React from 'react';
import { connect } from 'react-redux';
import { textarea_change_state, add_nuw_post,  is_watch_state } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter, Redirect, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthMe } from '../hoc/withAuthMe';

class ProfileContainer extends React.Component{

  componentDidMount(){
    let user = this.props.match.params.userId;    
    if(!user){
      user = this.props.authMe.id;
    }
     this.props.is_watch_state(user) 
  }

  render(){    
        return(   
       < Profile 
         {...this.props}
         items={ this.props.items }
         authMe={this.props.authMe}
       />
    )
  }
}

let mapStateToProps = (state)=>{  
 
  return {
    store: state.profile,
    items: state.profile.items,
    authMe: state.login
  }
}

export default compose(
  withRouter,
  withAuthMe,
  connect( mapStateToProps, {textarea_change_state, add_nuw_post, 
    is_watch_state} )
)(ProfileContainer)



 
  


