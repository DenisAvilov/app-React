import React from 'react';
import './App.css';
import Nav from './components/navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import ProfileContainer from './components/profile/ProfileContainer';
import UsersContainer from './components/dialogues/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import TrainerContainer from './components/trainer/TrainerContainer';
import LoginContainer from './components/login/LoginContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { is_initialize } from './redux/app-reducer';
import Preloader from './components/function/preloader/Preloader';



 
class InitializeApp extends React.Component{
   componentDidMount(){

     this.props.is_initialize();

  } 

  render(){    
     if(!this.props.initializeApp) return <Preloader />       
    return (
      <div className='app-wrapper'>       
        <HeaderContainer />
        <Nav />
        <div className="profile">

          {/* <Route exact path='/dialogues' component={Dialogs} />  exact - точное совпадение ===  Route : следит за адресной строкой path */}
          {/* <Route path='/dialogues' component={Dialogs} />  прокинуть данные через component не выйдет | использую render с анонимной функцией */}
        
          <Route path='/dialogues' render={() => 
              <UsersContainer />} 
          />

          <Route path='/profile/:userId?' render={() =>
            <ProfileContainer  />} 
          />

          <Route path='/login' render={() =>
            <LoginContainer />} 
          />
          <Route path='/train' render={() =>
              <TrainerContainer />} 
            />           
  
        </div>
      </div>      
    );}
}

let mapStateToProps = (store) => {
  
  return{
    initializeApp: store.initialize.initializeApp  
  }
}
export default compose(
  withRouter,
  connect( mapStateToProps, {is_initialize})
)(InitializeApp);
