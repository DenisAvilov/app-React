import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import DialogsContainer from './components/dialogues/DialoguesContainer';
import { Route } from 'react-router-dom';


const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className="profile">

        {/* <Route exact path='/dialogues' component={Dialogs} />  exact - точное совпадение ===  Route : следит за адресной строкой path */}
        {/* <Route path='/dialogues' component={Dialogs} />  прокинуть данные через component не выйдет | использую render с анонимной функцией */}
      
        <Route path='/dialogues' render={() => 
            <DialogsContainer dispatch={props.dispatch} state={props.state} />} 
         />

        <Route path='/profile' render={() =>
           <Profile state={props.state} dispatch={props.dispatch} />} 
        />

      </div>
    </div>

  );
}



export default App;
