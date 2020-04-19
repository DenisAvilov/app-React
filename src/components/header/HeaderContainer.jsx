import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { is_login, login_success, iSoutLogin } from '../../redux/login';
import { compose } from 'redux';




class HeaderContainer extends React.Component{

   componentDidMount(){
    this.props.login_success()

    // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
    //      withCredentials: true } ).then( (response) => {
    //          if(response.data.resultCode === 0){           
    //              this.props.is_login(response.data.data.id, 
    //                 response.data.data.login, response.data.data.email)
    //          }  
    //      })
   }


    render(){
        
        return(
            <Header
             {...this.props}
             login={this.props.login}
             isYou={ this.props.isYou}

             iSoutLogin={ this.props.iSoutLogin}
            />
        )
    }
}

let mapStateToProps = (store) =>{

return{
    login: store.login.login,
    isYou: store.login.isYou
}
   
}

export default compose(
    connect( mapStateToProps, {is_login, login_success, iSoutLogin }  )
)(HeaderContainer)

 
