import React from 'react'
import d from './Login.module.css'
import { is_login_in } from '../../redux/login'
import WrapContactForm from './Login'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'



class LoginContainer extends React.Component{    
  
  

  submit = (values) => {   
  
  this.props.is_login_in( values.mail, values.password, values.checkbox)      
      console.log(values)
  }    
    
 render(){   
  if (this.props.isYou) return <Redirect to="/profile"> </Redirect>
      return (
           <div className={d.wrap}>
              <h1>Авторизируйтесь</h1>
              <WrapContactForm onSubmit={ this.submit } />
          </div>
      )
 }
}
   
let mapSetToProps = (store) => {
  return{
    isYou: store.login.isYou
  }

} 


export default connect( mapSetToProps , {is_login_in})( LoginContainer); 