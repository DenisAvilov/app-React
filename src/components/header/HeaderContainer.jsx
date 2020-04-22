import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { is_login, iSoutLogin } from '../../redux/login';
import { compose } from 'redux';




class HeaderContainer extends React.Component{



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
    connect( mapStateToProps, {is_login,  iSoutLogin }  )
)(HeaderContainer)

 
